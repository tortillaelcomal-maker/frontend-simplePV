// ==================== IMPRESIÓN DE TICKETS (ESC/POS) ====================
// Modos:
//  - bluetooth: app móvil (Cordova/Capacitor) con cordova-plugin-bluetooth-serial (igual que la app Comal)
//  - serial:    impresora USB o Bluetooth emparejada (puerto COM) desde Chrome/Edge en PC (Web Serial API)
//  - navegador: diálogo de impresión del navegador (cualquier impresora instalada en Windows)
//  - auto:      bluetooth si está disponible, si no serial si ya hay puerto autorizado, si no navegador

const ESC = '\x1B';
const GS = '\x1D';

const Printer = {
    // Estado de la conexión Bluetooth (app móvil)
    printerConnected: false,
    printerAddress: null,
    printerName: null,
    serialPort: null,

    get modo() { return localStorage.getItem('pos-printer-mode') || 'auto'; },
    set modo(v) { localStorage.setItem('pos-printer-mode', v); },
    get ancho() { return parseInt(localStorage.getItem('pos-printer-width') || '32', 10); },
    set ancho(v) { localStorage.setItem('pos-printer-width', String(v)); },
    get autoImprimir() { return localStorage.getItem('pos-printer-auto') !== 'false'; },
    set autoImprimir(v) { localStorage.setItem('pos-printer-auto', v ? 'true' : 'false'); },

    hayBluetooth: () => typeof bluetoothSerial !== 'undefined',
    haySerial: () => 'serial' in navigator,

    // ---------- Construcción del ticket ----------
    // Un ticket es una lista de líneas: { t: texto, a: 'c'|'l'|'r', b: negrita, g: grande }
    limpiar(txt) {
        // Las térmicas usan CP437 por defecto: quitamos acentos para evitar caracteres raros
        return String(txt ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\x20-\x7E\n]/g, '');
    },

    columnas(izq, der, ancho = this.ancho) {
        izq = this.limpiar(izq); der = this.limpiar(der);
        const espacio = ancho - der.length - 1;
        if (izq.length > espacio) izq = izq.slice(0, espacio);
        return izq + ' '.repeat(Math.max(1, ancho - izq.length - der.length)) + der;
    },

    linea(ch = '-') { return { t: ch.repeat(this.ancho) }; },

    encabezado(config, titulo) {
        const l = [{ t: config?.nombreTienda || 'Mi Tienda', a: 'c', b: true, g: true }];
        if (config?.direccion) l.push({ t: config.direccion, a: 'c' });
        if (config?.telefono) l.push({ t: `Tel: ${config.telefono}`, a: 'c' });
        if (config?.rfc) l.push({ t: `RFC: ${config.rfc}`, a: 'c' });
        l.push(this.linea('='));
        if (titulo) l.push({ t: titulo, a: 'c', b: true });
        return l;
    },

    items(items) {
        const l = [];
        items.forEach(i => {
            l.push({ t: this.limpiar(i.nombre).slice(0, this.ancho) });
            l.push({ t: this.columnas(`  ${i.cantidad} x ${money(i.precio)}`, money(i.subtotal)) });
        });
        return l;
    },

    pie(config) {
        return [this.linea('='), { t: config?.mensajeTicket || 'Gracias por su compra', a: 'c' }, { t: '' }];
    },

    ticketVenta(venta, config) {
        const l = this.encabezado(config, venta.origen === 'apartado' ? `VENTA (Apartado ${venta.apartado})` : 'TICKET DE VENTA');
        l.push({ t: `Folio: ${venta.folio}` });
        l.push({ t: `Fecha: ${fechaHora(venta.fecha)}` });
        l.push({ t: `Atendio: ${venta.usuario || ''}` });
        l.push(this.linea());
        l.push(...this.items(venta.items));
        l.push(this.linea());
        l.push({ t: this.columnas('Subtotal', money(venta.subtotal)) });
        if (venta.descuento > 0) l.push({ t: this.columnas('Descuento', '-' + money(venta.descuento)) });
        l.push({ t: this.columnas('TOTAL', money(venta.total)), b: true, g: true });
        l.push({ t: this.columnas('Pago', capitalizar(venta.metodoPago)) });
        if (venta.metodoPago === 'efectivo') {
            l.push({ t: this.columnas('Efectivo', money(venta.pagoCon)) });
            l.push({ t: this.columnas('Cambio', money(venta.cambio)) });
        }
        l.push(...this.pie(config));
        return l;
    },

    ticketApartado(ap, config, abonoReciente) {
        const l = this.encabezado(config, abonoReciente ? 'COMPROBANTE DE ABONO' : 'APARTADO');
        l.push({ t: `Folio: ${ap.folio}` });
        l.push({ t: `Fecha: ${fechaHora(ap.fecha)}` });
        l.push({ t: `Cliente: ${ap.cliente.nombre}` });
        if (ap.cliente.telefono) l.push({ t: `Tel: ${ap.cliente.telefono}` });
        if (ap.fechaLimite) l.push({ t: `Fecha limite: ${fechaCorta(ap.fechaLimite)}` });
        l.push(this.linea());
        l.push(...this.items(ap.items));
        l.push(this.linea());
        l.push({ t: this.columnas('TOTAL', money(ap.total)), b: true });
        if (ap.abonos?.length) {
            l.push({ t: 'Abonos:' });
            ap.abonos.forEach(a => l.push({ t: this.columnas(`  ${fechaCorta(a.fecha)} ${capitalizar(a.metodoPago)}`, money(a.monto)) }));
        }
        if (abonoReciente) l.push({ t: this.columnas('Abono de hoy', money(abonoReciente)), b: true });
        l.push({ t: this.columnas('Abonado', money(ap.abonado)) });
        l.push({ t: this.columnas('PENDIENTE', money(ap.pendiente)), b: true, g: true });
        l.push({ t: `Estado: ${ap.estado.toUpperCase()}`, a: 'c', b: true });
        l.push(...this.pie(config));
        return l;
    },

    ticketCorte(rep, config, titulo) {
        const l = this.encabezado(config, titulo);
        l.push({ t: `Impreso: ${fechaHora(new Date())}` });
        l.push(this.linea());
        l.push({ t: this.columnas('No. de ventas', String(rep.numVentas)) });
        l.push({ t: this.columnas('Ticket promedio', money(rep.ticketPromedio)) });
        l.push(this.linea());
        Object.entries(rep.porMetodo).forEach(([m, v]) => l.push({ t: this.columnas(capitalizar(m), money(v)) }));
        l.push(this.linea());
        l.push({ t: this.columnas('TOTAL', money(rep.total)), b: true, g: true });
        if (rep.topProductos?.length) {
            l.push(this.linea());
            l.push({ t: 'Productos vendidos:', b: true });
            rep.topProductos.forEach(p => l.push({ t: this.columnas(`${p.cantidad} ${p.nombre}`, money(p.total)) }));
        }
        l.push({ t: '' });
        return l;
    },

    ticketPrueba(config) {
        return [...this.encabezado(config, 'PRUEBA DE IMPRESION'), { t: 'PRUEBA 123' }, { t: 'Hola Mundo' },
            { t: this.columnas('Ancho', `${this.ancho} columnas`) }, ...this.pie(config)];
    },

    // ---------- Conversión ----------
    aTexto(lineas) {
        return lineas.map(({ t, a }) => {
            const s = this.limpiar(t);
            if (a === 'c') return ' '.repeat(Math.max(0, Math.floor((this.ancho - s.length) / 2))) + s;
            if (a === 'r') return s.padStart(this.ancho);
            return s;
        }).join('\n');
    },

    aEscPos(lineas) {
        let c = ESC + '@';                                     // Inicializar
        lineas.forEach(({ t, a, b, g }) => {
            c += ESC + 'a' + String.fromCharCode(a === 'c' ? 1 : a === 'r' ? 2 : 0);
            if (b) c += ESC + 'E' + '\x01';                    // Negrita
            if (g) c += GS + '!' + '\x01';                     // Doble alto
            c += this.limpiar(t) + '\n';
            if (g) c += GS + '!' + '\x00';
            if (b) c += ESC + 'E' + '\x00';
        });
        c += ESC + 'a' + '\x00';
        c += '\n\n\n';
        c += GS + 'V' + String.fromCharCode(65) + '\x00';      // Cortar
        return c;
    },

    // ---------- Envío ----------
    async imprimir(lineas) {
        let modo = CONFIG.ES_APP ? 'bluetooth' : this.modo;
        if (modo === 'auto') {
            if (this.hayBluetooth()) modo = 'bluetooth';
            else if (this.haySerial() && (this.serialPort || (await navigator.serial.getPorts()).length)) modo = 'serial';
            else modo = 'navegador';
        }
        if (modo === 'bluetooth') return this.imprimirBluetooth(this.aEscPos(lineas));
        if (modo === 'serial') return this.imprimirSerial(this.aEscPos(lineas));
        return this.imprimirNavegador(this.aTexto(lineas));
    },

    imprimirNavegador(texto) {
        const area = document.getElementById('printArea');
        area.textContent = texto;
        window.print();
        return true;
    },

    // ----- Web Serial (USB / COM) -----
    async conectarSerial() {
        if (!this.haySerial()) throw new Error('Este navegador no soporta impresoras USB/Serial. Usa Chrome o Edge.');
        this.serialPort = await navigator.serial.requestPort();
        return this.serialPort;
    },

    async imprimirSerial(comandos) {
        if (!this.haySerial()) throw new Error('Este navegador no soporta impresoras USB/Serial. Usa Chrome o Edge.');
        let port = this.serialPort || (await navigator.serial.getPorts())[0];
        if (!port) port = await this.conectarSerial();
        this.serialPort = port;
        if (!port.writable) await port.open({ baudRate: parseInt(localStorage.getItem('pos-printer-baud') || '9600', 10) });
        const bytes = Uint8Array.from(comandos, ch => ch.charCodeAt(0) & 0xFF);
        const writer = port.writable.getWriter();
        try {
            await writer.write(bytes);
        } finally {
            writer.releaseLock();
        }
        return true;
    },

    // ----- Bluetooth (app móvil, misma lógica que la app Comal) -----
    async solicitarPermisosBluetooth() {
        if (typeof cordova === 'undefined' || !cordova.plugins || !cordova.plugins.permissions) return true;
        const permissions = cordova.plugins.permissions;
        return new Promise((resolve) => {
            permissions.checkPermission(permissions.BLUETOOTH_CONNECT, (status) => {
                if (status.hasPermission) return resolve(true);
                permissions.requestPermissions(
                    [permissions.BLUETOOTH_CONNECT, permissions.BLUETOOTH_SCAN, permissions.ACCESS_FINE_LOCATION],
                    (s) => resolve(!!s.hasPermission),
                    () => resolve(false)
                );
            }, () => resolve(false));
        });
    },

    buscarImpresoras() {
        return new Promise((resolve, reject) => bluetoothSerial.list(resolve, reject));
    },

    conectarBluetooth(address, name) {
        return new Promise((resolve, reject) => {
            bluetoothSerial.connect(address, () => {
                this.printerConnected = true;
                this.printerAddress = address;
                this.printerName = name;
                resolve();
            }, (error) => {
                this.printerConnected = false;
                this.printerAddress = null;
                this.printerName = null;
                reject(new Error('Error al conectar: ' + error));
            });
        });
    },

    // Lista impresoras emparejadas, deja elegir una y se conecta (igual que la app Comal)
    async elegirBluetooth() {
        if (!this.hayBluetooth()) throw new Error('Bluetooth Serial no disponible. Ejecuta: npx cap sync');
        if (!await this.solicitarPermisosBluetooth()) throw new Error('Se necesitan permisos de Bluetooth para imprimir');
        const devices = await this.buscarImpresoras().catch(e => { throw new Error('Error al buscar impresoras: ' + e); });
        if (!devices || devices.length === 0) {
            alert('Para usar la impresora Bluetooth:\n\n1. Enciende tu impresora\n2. Ve a Configuración > Bluetooth en tu dispositivo\n3. Empareja la impresora (código: 0000 o 1234)\n4. Vuelve a intentar imprimir');
            throw new Error('No se encontraron impresoras. Empareja tu impresora primero.');
        }
        const elegido = await UI.elegir('Selecciona tu impresora', devices.map(d => ({
            label: d.name || 'Impresora', sub: d.address || d.id, value: d
        })));
        if (!elegido) return false;
        UI.toast(`Conectando a ${elegido.name || 'Impresora'}...`);
        await this.conectarBluetooth(elegido.address || elegido.id, elegido.name || 'Impresora');
        localStorage.setItem('pos-printer-bt', JSON.stringify({ address: this.printerAddress, name: this.printerName }));
        await new Promise(r => setTimeout(r, 500));
        return true;
    },

    // Reconecta a la última impresora usada sin volver a preguntar
    async reconectarBluetooth() {
        const ultima = JSON.parse(localStorage.getItem('pos-printer-bt') || 'null');
        if (!ultima) return false;
        try {
            await this.conectarBluetooth(ultima.address, ultima.name);
            await new Promise(r => setTimeout(r, 500));
            return true;
        } catch {
            return false;
        }
    },

    async imprimirBluetooth(comandos) {
        if (!this.hayBluetooth()) throw new Error('Bluetooth Serial no disponible. Ejecuta: npx cap sync');
        if (!await this.solicitarPermisosBluetooth()) throw new Error('Se necesitan permisos de Bluetooth para imprimir');

        if (!this.printerConnected || !this.printerAddress) {
            const listo = await this.reconectarBluetooth() || await this.elegirBluetooth();
            if (!listo) return false;
        }

        return new Promise((resolve, reject) => {
            bluetoothSerial.write(comandos, () => resolve(true), (error) => {
                this.printerConnected = false;
                reject(new Error('Error al imprimir: ' + error));
            });
        });
    },

    desconectar() {
        localStorage.removeItem('pos-printer-bt');
        if (this.hayBluetooth() && this.printerConnected) {
            bluetoothSerial.disconnect(() => {
                this.printerConnected = false;
                this.printerAddress = null;
                this.printerName = null;
            });
        }
        if (this.serialPort?.writable) this.serialPort.close().catch(() => {});
    }
};
