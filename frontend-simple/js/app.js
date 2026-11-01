// ==================== ICONOS ====================
const ICONS = {
    store: '<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z"/><path d="M5 13v7h14v-7"/><path d="M10 20v-5h4v5"/>',
    home: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
    cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/><path d="M3.3 7L12 12l8.7-5M12 22V12"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    chevron: '<path d="M9 18l6-6-6-6"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 8v8M10 8v8M13 8v8M17 8v8"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/>',
    x: '<path d="M18 6L6 18M6 6l12 12"/>',
    trash: '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6"/>',
    edit: '<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    print: '<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
    cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
    card: '<rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>',
    transfer: '<path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
    chart: '<path d="M18 20V10M12 20V4M6 20v-6"/>',
    tag: '<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><path d="M7 7h.01"/>',
    menu: '<path d="M3 12h18M3 6h18M3 18h18"/>',
    wallet: '<path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
    receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><path d="M16 8H8M16 12H8M12 16H8"/>'
};
const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;
const renderIcons = (root = document) => root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); el.removeAttribute('data-icon'); });

// ==================== HELPERS ====================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const money = n => '$' + (Number(n) || 0).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const capitalizar = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
const fechaCorta = d => new Date(d).toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' }).replace('.', '');
const fechaHora = d => new Date(d).toLocaleString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
const hora = d => new Date(d).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
const hoyISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
const isoAFecha = iso => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };
const esAdmin = () => Api.user()?.rol === 'admin';
const METODOS = { efectivo: 'cash', tarjeta: 'card', transferencia: 'transfer' };
const COLORES_METODO = { efectivo: '#2563eb', tarjeta: '#a78bfa', transferencia: '#93c5fd' };
const ESTADO_BADGE = { activo: 'green', liquidado: 'blue', cancelado: 'gray' };

// ==================== UI ====================
const UI = {
    toast(msg, tipo = 'info') {
        const t = document.createElement('div');
        t.className = `toast ${tipo}`;
        t.textContent = msg;
        $('#toasts').appendChild(t);
        setTimeout(() => t.remove(), 3500);
    },

    modal(html, { wide = false } = {}) {
        const m = $('#modal');
        m.className = 'modal' + (wide ? ' wide' : '');
        m.innerHTML = html;
        renderIcons(m);
        $('#modalBg').classList.add('open');
        setTimeout(() => $('input:not([type=hidden]), select', m)?.focus(), 50);
        return m;
    },

    cerrar() {
        $('#modalBg').classList.remove('open');
        UI._resolver?.(null);
        UI._resolver = null;
    },

    head: titulo => `<div class="modal-head"><h3>${titulo}</h3><button class="icon-btn" onclick="UI.cerrar()">${icon('x')}</button></div>`,

    confirmar(titulo, mensaje, { ok = 'Aceptar', peligro = false } = {}) {
        return new Promise(resolve => {
            UI.modal(`${UI.head(titulo)}<div class="modal-body">${mensaje}</div>
                <div class="modal-foot"><button class="btn" onclick="UI.cerrar()">Cancelar</button>
                <button class="btn ${peligro ? 'btn-danger' : 'btn-primary'}" id="btnOk">${ok}</button></div>`);
            UI._resolver = resolve;
            $('#btnOk').onclick = () => { UI._resolver = null; UI.cerrar(); resolve(true); };
        });
    },

    elegir(titulo, opciones) {
        return new Promise(resolve => {
            UI.modal(`${UI.head(titulo)}<div class="modal-body" style="display:flex;flex-direction:column;gap:10px">
                ${opciones.map((o, i) => `<button class="btn btn-outline" style="justify-content:flex-start;text-align:left" data-i="${i}">
                    ${icon('print')}<span>${esc(o.label)}<br><small class="muted">${esc(o.sub || '')}</small></span></button>`).join('')}
                </div>`);
            UI._resolver = resolve;
            $$('#modal [data-i]').forEach(b => b.onclick = () => { UI._resolver = null; UI.cerrar(); resolve(opciones[b.dataset.i].value); });
        });
    },

    async imprimir(lineas) {
        try {
            const ok = await Printer.imprimir(lineas);
            if (ok && Printer.modo !== 'navegador') UI.toast('Ticket enviado a la impresora', 'success');
        } catch (e) {
            if (e.name === 'NotFoundError') return UI.toast('No se seleccionó ninguna impresora', 'warning');
            UI.toast(e.message, 'error');
        }
    },

    hayCamara: () => !!navigator.mediaDevices?.getUserMedia,

    // Abre la cámara y resuelve con el texto del primer QR leído (null si se cierra)
    async escanear() {
        if (!UI.hayCamara()) { UI.toast('La cámara solo está disponible en la app, en https o en localhost', 'warning'); return null; }
        let stream;
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
        } catch (e) {
            UI.toast(e.name === 'NotAllowedError' ? 'Permiso de cámara denegado' : 'No se pudo abrir la cámara', 'error');
            return null;
        }
        return new Promise(resolve => {
            UI.modal(`${UI.head('Escanear código QR')}<div class="modal-body">
                <div class="scanner"><video id="scanVideo" playsinline muted></video><div class="scanner-frame"></div></div>
                <p class="muted text-center" style="margin-top:12px">Apunta la cámara al QR del producto</p></div>`);
            const video = $('#scanVideo');
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            let activo = true;
            const terminar = valor => {
                if (!activo) return;
                activo = false;
                stream.getTracks().forEach(t => t.stop());
                resolve(valor);
            };
            UI._resolver = terminar;
            video.srcObject = stream;
            video.play().catch(() => {});
            const leer = () => {
                if (!activo) return;
                if (video.readyState >= 2 && video.videoWidth) {
                    const s = Math.min(1, 640 / video.videoWidth);
                    canvas.width = Math.round(video.videoWidth * s);
                    canvas.height = Math.round(video.videoHeight * s);
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const qr = jsQR(ctx.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height, { inversionAttempts: 'dontInvert' });
                    if (qr?.data) { terminar(qr.data); UI._resolver = null; return UI.cerrar(); }
                }
                setTimeout(leer, 150);
            };
            leer();
        });
    },

    btnLoading(btn, on) {
        btn.disabled = on;
        if (on) { btn.dataset.html = btn.innerHTML; btn.innerHTML = 'Procesando...'; } else if (btn.dataset.html) btn.innerHTML = btn.dataset.html;
    },

    empty: (msg, ico = 'box') => `<div class="empty">${icon(ico)}<div>${msg}</div></div>`
};

$('#modalBg').addEventListener('mousedown', e => { if (e.target.id === 'modalBg') UI.cerrar(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('#modalBg').classList.contains('open')) UI.cerrar(); });

// ==================== ESTADO GLOBAL ====================
const Store = {
    config: null,
    async cargarConfig() {
        try {
            this.config = (await Api.get('/config')).config;
            $('#brandName').textContent = this.config.nombreTienda;
            document.title = `${this.config.nombreTienda} - Punto de Venta`;
            localStorage.setItem('pos-nombre-tienda', this.config.nombreTienda);
        } catch (e) { UI.toast(e.message, 'error'); }
    }
};

// ==================== VISTAS ====================
const Views = {
    // ---------------------- DASHBOARD ----------------------
    async dashboard() {
        const fecha = Views._fechaDash || hoyISO();
        const periodo = Views._periodoDash || 'semana';
        main(`
            <div class="page-header">
                <div><h1>Dashboard</h1><p>Resumen general de tu negocio</p></div>
                <label class="date-chip">${icon('calendar')}<input type="date" id="dashFecha" value="${fecha}"></label>
            </div>
            <div class="grid grid-3" style="margin-bottom:18px">
                ${stat('cart', 'bg-green', 'Ventas del día', 'sDia')}
                ${stat('calendar', 'bg-blue', 'Ventas de la semana', 'sSemana')}
                ${stat('chart', 'bg-purple', 'Ventas del mes', 'sMes')}
            </div>
            <div class="grid grid-main">
                <div class="card">
                    <div class="card-title">Ventas por periodo
                        <select class="input" id="dashPeriodo" style="width:auto">
                            <option value="semana">Esta semana</option><option value="mes">Este mes</option><option value="anio">Este año</option>
                        </select>
                    </div>
                    <div id="chart"></div>
                </div>
                <div class="card">
                    <div class="card-title">Accesos rápidos</div>
                    <div class="quick">
                        <a href="#ventas" class="bg-green">${icon('cart')}Nueva Venta</a>
                        <a href="#apartados" class="bg-blue">${icon('tag')}Ver Apartados</a>
                        <a href="#productos" class="bg-purple">${icon('box')}Productos</a>
                        <a href="#reportes" class="bg-gray">${icon('chart')}Reportes</a>
                    </div>
                    <div id="dashAlertas" style="margin-top:16px;display:flex;flex-direction:column;gap:8px"></div>
                </div>
            </div>`);
        $('#dashPeriodo').value = periodo;
        $('#dashFecha').onchange = e => { Views._fechaDash = e.target.value || hoyISO(); Views.dashboard(); };
        $('#dashPeriodo').onchange = e => { Views._periodoDash = e.target.value; Views.dashboard(); };

        try {
            const d = await Api.get(`/reportes/dashboard?fecha=${fecha}&periodo=${periodo}`);
            $('#sDia').textContent = money(d.ventasDia);
            $('#sSemana').textContent = money(d.ventasSemana);
            $('#sMes').textContent = money(d.ventasMes);
            $('#chart').innerHTML = barChart(d.grafica.etiquetas, d.grafica.valores);
            $('#dashAlertas').innerHTML = `
                <a href="#apartados" class="badge ${d.apartadosActivos ? 'blue' : 'gray'}" style="text-decoration:none;padding:8px 12px;text-transform:none">${d.apartadosActivos} apartado(s) activo(s)</a>
                <a href="#productos" class="badge ${d.bajoStock ? 'red' : 'green'}" style="text-decoration:none;padding:8px 12px;text-transform:none">${d.bajoStock ? `${d.bajoStock} producto(s) con poca existencia` : 'Existencias en orden'}</a>`;
        } catch (e) { UI.toast(e.message, 'error'); }
    },

    // ---------------------- NUEVA VENTA ----------------------
    venta: { carrito: [], productos: [], modo: 'venta', descuento: 0 },

    async ventas() {
        const V = Views.venta;
        const modoApartado = location.hash.includes('apartado');
        if (V.modo !== (modoApartado ? 'apartado' : 'venta')) { V.carrito = []; V.descuento = 0; }
        V.modo = modoApartado ? 'apartado' : 'venta';

        main(`
            <div class="page-header">
                <div><h1>${modoApartado ? 'Nuevo Apartado' : 'Nueva Venta'}</h1><p>${modoApartado ? 'Selecciona los productos que el cliente va a apartar' : 'Registra una venta de productos'}</p></div>
                <div class="header-actions">
                    ${modoApartado ? '' : `<a class="btn btn-outline" href="#ventas/apartado">${icon('tag')}Apartar productos</a>`}
                    <button class="btn btn-outline" id="btnCancelar">${icon('x')}Cancelar</button>
                </div>
            </div>
            <div class="grid grid-venta">
                <div class="card">
                    <div class="toolbar">
                        <div class="search">${icon('search')}<input class="input" id="buscar" placeholder="Buscar producto por nombre o código... (Enter para agregar)" autocomplete="off">${UI.hayCamara() ? `<button class="scan-btn" id="btnScan" type="button" title="Escanear QR con la cámara">${icon('qr')}</button>` : icon('scan', 'scan')}</div>
                    </div>
                    <div class="products-grid" id="gridProductos"></div>
                </div>
                <div class="card ticket">
                    <div class="card-title" style="justify-content:flex-start">${icon(modoApartado ? 'tag' : 'cart')}${modoApartado ? 'Apartado' : 'Ticket de Venta'}</div>
                    <div class="ticket-items" id="ticketItems"></div>
                    <div class="totals" id="totales"></div>
                    <button class="btn ${modoApartado ? 'btn-primary' : 'btn-success'} btn-lg" id="btnCobrar" style="margin-top:14px">${icon(modoApartado ? 'tag' : 'cart')}${modoApartado ? 'Crear Apartado' : 'Cobrar Venta'}</button>
                </div>
            </div>`);

        $('#btnCancelar').onclick = async () => {
            if (V.carrito.length && !await UI.confirmar('Cancelar', '¿Vaciar el ticket actual?', { ok: 'Vaciar', peligro: true })) return;
            V.carrito = []; V.descuento = 0;
            location.hash = modoApartado ? '#apartados' : '#dashboard';
        };
        const buscar = $('#buscar');
        buscar.oninput = () => Views.renderProductosVenta();
        buscar.onkeydown = e => {
            if (e.key !== 'Enter') return;
            const q = buscar.value.trim().toUpperCase();
            if (!q) return;
            const lista = Views.filtrarProductosVenta();
            const p = V.productos.find(x => x.codigo === q) || (lista.length === 1 ? lista[0] : null);
            if (p) { Views.agregar(p._id); buscar.value = ''; Views.renderProductosVenta(); }
            else UI.toast('Producto no encontrado', 'warning');
        };
        $('#btnScan')?.addEventListener('click', async () => {
            const codigo = (await UI.escanear())?.trim().toUpperCase();
            if (!codigo) return;
            const p = V.productos.find(x => x.codigo === codigo);
            if (!p) return UI.toast(`Producto no encontrado (${codigo})`, 'warning');
            Views.agregar(p._id);
            UI.toast(`${p.nombre} agregado`, 'success');
        });
        $('#btnCobrar').onclick = () => modoApartado ? Views.modalApartar() : Views.modalCobrar();
        buscar.focus();

        try {
            V.productos = (await Api.get('/productos')).productos;
            V.carrito = V.carrito.filter(i => V.productos.some(p => p._id === i.producto._id));
            Views.renderProductosVenta();
            Views.renderTicket();
        } catch (e) { UI.toast(e.message, 'error'); }
    },

    filtrarProductosVenta() {
        const q = ($('#buscar')?.value || '').trim().toLowerCase();
        return Views.venta.productos.filter(p => !q || p.nombre.toLowerCase().includes(q) || p.codigo.toLowerCase().includes(q) || (p.categoria || '').toLowerCase().includes(q));
    },

    renderProductosVenta() {
        const lista = Views.filtrarProductosVenta();
        const grid = $('#gridProductos');
        if (!grid) return;
        if (!Views.venta.productos.length) {
            grid.innerHTML = `<div style="grid-column:1/-1">${UI.empty(`Aún no tienes productos. ${esAdmin() ? '<a href="#productos">Agrega tus productos aquí</a>' : 'Pide al administrador que los agregue.'}`)}</div>`;
            return;
        }
        grid.innerHTML = lista.length ? lista.map(p => `
            <button class="product-card ${p.existencia <= 0 ? 'agotado' : ''}" data-id="${p._id}" title="${esc(p.nombre)}">
                <span class="stock badge ${p.existencia <= 0 ? 'red' : p.existencia <= p.stockMinimo ? 'yellow' : 'gray'}">${p.existencia}</span>
                <div class="img">${p.imagen ? `<img src="${esc(p.imagen)}" alt="">` : icon('image')}</div>
                <div class="nm">${esc(p.nombre)}</div>
                <div class="cd">Cód: ${esc(p.codigo)}</div>
                <div class="pr">${money(p.precio)}</div>
            </button>`).join('') : `<div style="grid-column:1/-1">${UI.empty('Sin resultados', 'search')}</div>`;
        $$('.product-card', grid).forEach(b => b.onclick = () => Views.agregar(b.dataset.id));
    },

    agregar(id) {
        const V = Views.venta;
        const p = V.productos.find(x => x._id === id);
        if (!p) return;
        const item = V.carrito.find(i => i.producto._id === id);
        const actual = item ? item.cantidad : 0;
        if (actual + 1 > p.existencia) return UI.toast(`Sin existencia suficiente de ${p.nombre} (${p.existencia})`, 'warning');
        if (item) item.cantidad++; else V.carrito.push({ producto: p, cantidad: 1 });
        Views.renderTicket();
    },

    setCantidad(id, cant) {
        const V = Views.venta;
        const item = V.carrito.find(i => i.producto._id === id);
        if (!item) return;
        cant = Math.floor(Number(cant) || 0);
        if (cant > item.producto.existencia) { UI.toast(`Solo hay ${item.producto.existencia} en existencia`, 'warning'); cant = item.producto.existencia; }
        if (cant <= 0) V.carrito = V.carrito.filter(i => i !== item); else item.cantidad = cant;
        Views.renderTicket();
    },

    totalesVenta() {
        const V = Views.venta;
        const subtotal = V.carrito.reduce((s, i) => s + i.producto.precio * i.cantidad, 0);
        const descuento = V.modo === 'venta' ? Math.min(V.descuento || 0, subtotal) : 0;
        return { subtotal, descuento, total: Math.round((subtotal - descuento) * 100) / 100 };
    },

    renderTicket() {
        const V = Views.venta;
        if (!$('#ticketItems')) return;
        $('#ticketItems').innerHTML = V.carrito.length ? V.carrito.map(i => `
            <div class="ticket-item">
                <div><div class="nm">${esc(i.producto.nombre)}</div><div class="pu">${money(i.producto.precio)} c/u</div></div>
                <div class="qty"><button data-menos="${i.producto._id}">−</button><input value="${i.cantidad}" data-cant="${i.producto._id}" inputmode="numeric"><button data-mas="${i.producto._id}">+</button></div>
                <div class="bold" style="min-width:74px;text-align:right">${money(i.producto.precio * i.cantidad)}</div>
                <button class="trash" data-quitar="${i.producto._id}" title="Quitar">${icon('trash')}</button>
            </div>`).join('') : UI.empty('Agrega productos al ticket', 'cart');

        const t = Views.totalesVenta();
        $('#totales').innerHTML = `
            <div class="ln"><span>Subtotal</span><span>${money(t.subtotal)}</span></div>
            ${V.modo === 'venta' ? `<div class="ln desc"><span>Descuento ($)</span><input class="input" id="descuento" type="number" min="0" step="0.01" value="${V.descuento || ''}" placeholder="0.00"></div>` : ''}
            <div class="ln total"><span>Total</span><span>${money(t.total)}</span></div>`;
        $('#btnCobrar').disabled = !V.carrito.length;

        $$('[data-mas]').forEach(b => b.onclick = () => Views.agregar(b.dataset.mas));
        $$('[data-menos]').forEach(b => b.onclick = () => Views.setCantidad(b.dataset.menos, V.carrito.find(i => i.producto._id === b.dataset.menos).cantidad - 1));
        $$('[data-quitar]').forEach(b => b.onclick = () => Views.setCantidad(b.dataset.quitar, 0));
        $$('[data-cant]').forEach(inp => inp.onchange = () => Views.setCantidad(inp.dataset.cant, inp.value));
        const d = $('#descuento');
        if (d) d.onchange = () => { V.descuento = Math.max(0, parseFloat(d.value) || 0); Views.renderTicket(); };
    },

    selectorMetodo(id, actual = 'efectivo') {
        return `<div class="pay-methods" id="${id}">${Object.keys(METODOS).map(m =>
            `<button type="button" data-metodo="${m}" class="${m === actual ? 'active' : ''}">${icon(METODOS[m])}${m}</button>`).join('')}</div>`;
    },

    bindMetodo(id, onChange) {
        $$(`#${id} button`).forEach(b => b.onclick = () => {
            $$(`#${id} button`).forEach(x => x.classList.toggle('active', x === b));
            onChange?.(b.dataset.metodo);
        });
        return () => $(`#${id} .active`).dataset.metodo;
    },

    modalCobrar() {
        const V = Views.venta;
        const { total } = Views.totalesVenta();
        const rapidos = [...new Set([total, ...[50, 100, 200, 500, 1000].filter(x => x > total).slice(0, 3)].map(x => Math.ceil(x)))];
        UI.modal(`${UI.head('Cobrar Venta')}
            <div class="modal-body">
                <div class="muted text-center">Total a cobrar</div>
                <div class="big-total">${money(total)}</div>
                ${Views.selectorMetodo('metodoPago')}
                <div id="efectivoBox">
                    <div class="field"><label>Paga con</label><input class="input" id="pagoCon" type="number" min="0" step="0.01" value="${total}" style="font-size:20px;font-weight:700"></div>
                    <div class="row" style="margin-bottom:14px">${rapidos.map(r => `<button class="btn btn-sm" data-rapido="${r}">${money(r)}</button>`).join('')}</div>
                    <div class="cambio-box" id="cambioBox"><span>Cambio</span><span id="cambio">$0.00</span></div>
                </div>
            </div>
            <div class="modal-foot"><button class="btn" onclick="UI.cerrar()">Cancelar</button>
                <button class="btn btn-success" id="btnConfirmar">${icon('check')}Confirmar venta</button></div>`);
        const pago = $('#pagoCon');
        const calc = () => {
            const c = (parseFloat(pago.value) || 0) - total;
            $('#cambio').textContent = money(Math.max(c, 0));
            $('#cambioBox').classList.toggle('neg', c < 0);
            $('#cambioBox span').textContent = c < 0 ? `Faltan ${money(-c)}` : 'Cambio';
        };
        pago.oninput = calc;
        pago.select();
        calc();
        $$('[data-rapido]').forEach(b => b.onclick = () => { pago.value = b.dataset.rapido; calc(); });
        const metodo = Views.bindMetodo('metodoPago', m => { $('#efectivoBox').style.display = m === 'efectivo' ? '' : 'none'; });
        pago.onkeydown = e => { if (e.key === 'Enter') $('#btnConfirmar').click(); };

        $('#btnConfirmar').onclick = async (e) => {
            const btn = e.currentTarget;
            const m = metodo();
            if (m === 'efectivo' && (parseFloat(pago.value) || 0) < total) return UI.toast('El pago es menor al total', 'warning');
            UI.btnLoading(btn, true);
            try {
                const { venta } = await Api.post('/ventas', {
                    items: V.carrito.map(i => ({ producto: i.producto._id, cantidad: i.cantidad })),
                    descuento: V.descuento || 0, metodoPago: m, pagoCon: m === 'efectivo' ? parseFloat(pago.value) : 0
                });
                V.carrito = []; V.descuento = 0;
                Views.ventaExitosa(venta);
                Views.ventas();
            } catch (err) { UI.toast(err.message, 'error'); UI.btnLoading(btn, false); }
        };
    },

    ventaExitosa(venta) {
        UI.modal(`${UI.head('Venta registrada')}
            <div class="modal-body text-center">
                <div class="stat-icon bg-green" style="margin:0 auto 12px">${icon('check')}</div>
                <div class="bold" style="font-size:18px">${esc(venta.folio)}</div>
                <div class="big-total">${money(venta.total)}</div>
                ${venta.metodoPago === 'efectivo' ? `<div class="cambio-box"><span>Cambio</span><span>${money(venta.cambio)}</span></div>` : `<div class="muted">Pago con ${venta.metodoPago}</div>`}
            </div>
            <div class="modal-foot"><button class="btn" id="btnImp">${icon('print')}Imprimir ticket</button>
                <button class="btn btn-primary" onclick="UI.cerrar()">Nueva venta</button></div>`);
        const imprimir = () => UI.imprimir(Printer.ticketVenta(venta, Store.config));
        $('#btnImp').onclick = imprimir;
        if (Printer.autoImprimir) imprimir();
    },

    modalApartar() {
        const V = Views.venta;
        const { total } = Views.totalesVenta();
        UI.modal(`${UI.head('Crear Apartado')}
            <form class="modal-body" id="formApartado">
                <div class="muted text-center">Total del apartado</div>
                <div class="big-total">${money(total)}</div>
                <div class="field"><label>Nombre del cliente *</label><input class="input" name="nombre" required></div>
                <div class="row">
                    <div class="field"><label>Teléfono</label><input class="input" name="telefono" type="tel"></div>
                    <div class="field"><label>Fecha límite</label><input class="input" name="fechaLimite" type="date"></div>
                </div>
                <div class="field"><label>Anticipo</label><input class="input" name="anticipo" type="number" min="0" max="${total}" step="0.01" value="0"></div>
                ${Views.selectorMetodo('metodoAnticipo')}
            </form>
            <div class="modal-foot"><button class="btn" onclick="UI.cerrar()">Cancelar</button>
                <button class="btn btn-primary" id="btnCrearAp">${icon('check')}Crear apartado</button></div>`);
        const metodo = Views.bindMetodo('metodoAnticipo');
        $('#btnCrearAp').onclick = async (e) => {
            const f = $('#formApartado');
            if (!f.reportValidity()) return;
            const btn = e.currentTarget;
            UI.btnLoading(btn, true);
            try {
                const { apartado } = await Api.post('/apartados', {
                    cliente: { nombre: f.nombre.value, telefono: f.telefono.value },
                    fechaLimite: f.fechaLimite.value || undefined,
                    anticipo: parseFloat(f.anticipo.value) || 0,
                    metodoPago: metodo(),
                    items: V.carrito.map(i => ({ producto: i.producto._id, cantidad: i.cantidad }))
                });
                V.carrito = [];
                UI.cerrar();
                UI.toast(`Apartado ${apartado.folio} creado`, 'success');
                if (Printer.autoImprimir) UI.imprimir(Printer.ticketApartado(apartado, Store.config));
                Views._apartadoSel = apartado._id;
                location.hash = '#apartados';
            } catch (err) { UI.toast(err.message, 'error'); UI.btnLoading(btn, false); }
        };
    },

    // ---------------------- APARTADOS ----------------------
    async apartados() {
        main(`
            <div class="page-header">
                <div><h1>Apartados</h1><p>Gestiona los productos apartados por tus clientes</p></div>
                <a class="btn btn-primary" href="#ventas/apartado">${icon('plus')}Nuevo Apartado</a>
            </div>
            <div class="card" style="margin-bottom:18px">
                <div class="toolbar">
                    <div class="search">${icon('search')}<input class="input" id="buscarAp" placeholder="Buscar por nombre, teléfono o folio..."></div>
                    <select class="input" id="estadoAp" style="width:auto">
                        <option value="todos">Todos</option><option value="activo">Activos</option><option value="liquidado">Liquidados</option><option value="cancelado">Cancelados</option>
                    </select>
                </div>
                <div class="table-wrap"><table>
                    <thead><tr><th>Folio</th><th>Cliente</th><th>Teléfono</th><th>Fecha</th><th class="text-right">Total</th><th class="text-right">Abonos</th><th class="text-right">Pendiente</th><th>Estado</th><th></th></tr></thead>
                    <tbody id="tablaAp"></tbody>
                </table></div>
            </div>
            <div class="card" id="detalleAp" style="display:none"></div>`);
        $('#estadoAp').value = Views._estadoAp || 'todos';
        let timer;
        $('#buscarAp').oninput = () => { clearTimeout(timer); timer = setTimeout(Views.cargarApartados, 250); };
        $('#estadoAp').onchange = e => { Views._estadoAp = e.target.value; Views.cargarApartados(); };
        await Views.cargarApartados();
        if (Views._apartadoSel) Views.verApartado(Views._apartadoSel);
    },

    async cargarApartados() {
        try {
            const q = encodeURIComponent($('#buscarAp').value.trim());
            const { apartados } = await Api.get(`/apartados?estado=${$('#estadoAp').value}&q=${q}`);
            $('#tablaAp').innerHTML = apartados.length ? apartados.map(a => `
                <tr class="clickable ${a._id === Views._apartadoSel ? 'selected' : ''}" data-id="${a._id}">
                    <td class="bold">${esc(a.folio)}</td><td>${esc(a.cliente.nombre)}</td><td>${esc(a.cliente.telefono)}</td>
                    <td>${fechaCorta(a.fecha)}</td><td class="text-right">${money(a.total)}</td><td class="text-right">${money(a.abonado)}</td>
                    <td class="text-right bold">${money(a.pendiente)}</td>
                    <td><span class="badge ${ESTADO_BADGE[a.estado]}">${a.estado}</span></td>
                    <td><button class="icon-btn view" title="Ver detalle">${icon('eye')}</button></td>
                </tr>`).join('') : `<tr><td colspan="9">${UI.empty('No hay apartados', 'tag')}</td></tr>`;
            $$('#tablaAp tr[data-id]').forEach(tr => tr.onclick = () => Views.verApartado(tr.dataset.id));
        } catch (e) { UI.toast(e.message, 'error'); }
    },

    async verApartado(id) {
        Views._apartadoSel = id;
        $$('#tablaAp tr').forEach(tr => tr.classList.toggle('selected', tr.dataset.id === id));
        let a;
        try { a = (await Api.get(`/apartados/${id}`)).apartado; } catch (e) { Views._apartadoSel = null; return UI.toast(e.message, 'error'); }
        const pct = a.total ? Math.round(a.abonado / a.total * 100) : 0;
        const activo = a.estado === 'activo';
        const box = $('#detalleAp');
        box.style.display = '';
        box.innerHTML = `
            <div class="card-title">Detalle del Apartado: ${esc(a.folio)}</div>
            <div class="detail-grid">
                <div class="detail-list">
                    <div>${icon('user')}<span class="muted">Cliente:</span> <b>${esc(a.cliente.nombre)}</b></div>
                    <div>${icon('phone')}<span class="muted">Teléfono:</span> ${esc(a.cliente.telefono || '—')}</div>
                    <div>${icon('calendar')}<span class="muted">Fecha:</span> ${fechaCorta(a.fecha)}</div>
                    ${a.fechaLimite ? `<div>${icon('calendar')}<span class="muted">Fecha límite:</span> ${fechaCorta(a.fechaLimite)}</div>` : ''}
                    <div>${icon('tag')}<span class="muted">Estado:</span> <span class="badge ${ESTADO_BADGE[a.estado]}">${a.estado}</span></div>
                    <div style="flex-direction:column;align-items:stretch;margin-top:8px">
                        <div class="bold">Historial de abonos</div>
                        ${a.abonos.length ? a.abonos.map(ab => `<div style="justify-content:space-between;border-bottom:1px dashed var(--border);padding:6px 0">
                            <span>${fechaHora(ab.fecha)} · ${capitalizar(ab.metodoPago)}</span><b>${money(ab.monto)}</b></div>`).join('') : '<span class="muted">Sin abonos</span>'}
                    </div>
                </div>
                <div>
                    <div class="bold" style="margin-bottom:8px">Productos</div>
                    <table><thead><tr><th>Producto</th><th class="text-center">Cant.</th><th class="text-right">Precio</th><th class="text-right">Total</th></tr></thead>
                    <tbody>${a.items.map(i => `<tr><td>${esc(i.nombre)}</td><td class="text-center">${i.cantidad}</td><td class="text-right">${money(i.precio)}</td><td class="text-right">${money(i.subtotal)}</td></tr>`).join('')}</tbody></table>
                    <div style="margin-top:14px" class="bold">Abonado: ${money(a.abonado)} de ${money(a.total)} (${pct}%) · Pendiente: <span style="color:var(--red)">${money(a.pendiente)}</span></div>
                    <div class="progress"><div style="width:${pct}%"></div></div>
                </div>
            </div>
            <div class="detail-actions">
                <button class="btn btn-success" id="apAbono" ${activo ? '' : 'disabled'}>${icon('wallet')}Registrar Abono</button>
                <button class="btn btn-primary" id="apLiquidar" ${activo ? '' : 'disabled'}>${icon('check')}Liquidar</button>
                <button class="btn" id="apImprimir">${icon('print')}Imprimir</button>
                <button class="btn btn-outline" id="apCancelar" style="color:var(--red)" ${activo ? '' : 'disabled'}>${icon('x')}Cancelar apartado</button>
            </div>`;
        $('#apImprimir').onclick = () => UI.imprimir(Printer.ticketApartado(a, Store.config));
        $('#apAbono').onclick = () => Views.modalAbono(a, false);
        $('#apLiquidar').onclick = () => Views.modalAbono(a, true);
        $('#apCancelar').onclick = async () => {
            if (!await UI.confirmar('Cancelar apartado', `¿Cancelar el apartado <b>${esc(a.folio)}</b>? Los productos regresarán al inventario.${a.abonado ? `<br><br>Recuerda devolver al cliente <b>${money(a.abonado)}</b> si corresponde.` : ''}`, { ok: 'Cancelar apartado', peligro: true })) return;
            try {
                await Api.post(`/apartados/${a._id}/cancelar`);
                UI.toast('Apartado cancelado', 'success');
                Views.cargarApartados(); Views.verApartado(a._id);
            } catch (e) { UI.toast(e.message, 'error'); }
        };
        box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    },

    modalAbono(a, liquidar) {
        UI.modal(`${UI.head(liquidar ? `Liquidar ${esc(a.folio)}` : `Registrar abono - ${esc(a.folio)}`)}
            <div class="modal-body">
                <div class="muted text-center">${liquidar ? 'Monto para liquidar' : 'Saldo pendiente'}</div>
                <div class="big-total">${money(a.pendiente)}</div>
                ${liquidar ? '' : `<div class="field"><label>Monto del abono</label><input class="input" id="montoAbono" type="number" min="0.01" max="${a.pendiente}" step="0.01" style="font-size:20px;font-weight:700"></div>`}
                ${Views.selectorMetodo('metodoAbono')}
            </div>
            <div class="modal-foot"><button class="btn" onclick="UI.cerrar()">Cancelar</button>
                <button class="btn btn-success" id="btnAbonar">${icon('check')}${liquidar ? 'Liquidar' : 'Registrar abono'}</button></div>`);
        const metodo = Views.bindMetodo('metodoAbono');
        $('#btnAbonar').onclick = async (e) => {
            const monto = liquidar ? a.pendiente : parseFloat($('#montoAbono').value);
            if (!(monto > 0)) return UI.toast('Ingresa un monto válido', 'warning');
            const btn = e.currentTarget;
            UI.btnLoading(btn, true);
            try {
                const r = await Api.post(`/apartados/${a._id}/abono`, { monto, liquidar, metodoPago: metodo() });
                UI.cerrar();
                UI.toast(r.message, 'success');
                if (Printer.autoImprimir) UI.imprimir(Printer.ticketApartado(r.apartado, Store.config, r.abono));
                Views.cargarApartados(); Views.verApartado(a._id);
            } catch (err) { UI.toast(err.message, 'error'); UI.btnLoading(btn, false); }
        };
    },

    // ---------------------- PRODUCTOS ----------------------
    async productos() {
        main(`
            <div class="page-header">
                <div><h1>Productos</h1><p>Controla tu inventario y existencia</p></div>
                ${esAdmin() ? `<button class="btn btn-primary" id="btnNuevoProd">${icon('plus')}Nuevo Producto</button>` : ''}
            </div>
            <div class="card">
                <div class="toolbar">
                    <div class="search">${icon('search')}<input class="input" id="buscarProd" placeholder="Buscar por nombre, código o categoría..."></div>
                    <select class="input" id="filtroProd" style="width:auto">
                        <option value="">Todos</option><option value="disponible">Con existencia</option><option value="bajo">Poca existencia</option><option value="agotado">Agotados</option>
                    </select>
                </div>
                <div class="table-wrap"><table>
                    <thead><tr><th>Código</th><th>Nombre del producto</th><th>Categoría</th><th class="text-center">Existencia</th><th class="text-right">Precio</th>${esAdmin() ? '<th class="text-center">Acciones</th>' : ''}</tr></thead>
                    <tbody id="tablaProd"></tbody>
                </table></div>
            </div>`);
        $('#btnNuevoProd')?.addEventListener('click', () => Views.modalProducto());
        let timer;
        $('#buscarProd').oninput = () => { clearTimeout(timer); timer = setTimeout(Views.cargarProductos, 250); };
        $('#filtroProd').onchange = Views.cargarProductos;
        Views.cargarProductos();
    },

    async cargarProductos() {
        try {
            const q = encodeURIComponent($('#buscarProd').value.trim());
            const { productos } = await Api.get(`/productos?q=${q}&filtro=${$('#filtroProd').value}`);
            Views._productos = productos;
            $('#tablaProd').innerHTML = productos.length ? productos.map(p => `
                <tr>
                    <td class="bold">${esc(p.codigo)}</td>
                    <td><div class="prod-cell">${p.imagen ? `<img class="thumb" src="${esc(p.imagen)}" alt="">` : `<div class="thumb">${icon('image')}</div>`}${esc(p.nombre)}</div></td>
                    <td class="muted">${esc(p.categoria || '—')}</td>
                    <td class="text-center"><span class="badge ${p.existencia <= p.stockMinimo ? 'red' : p.existencia <= p.stockMinimo * 2 ? 'yellow' : 'green'}">${p.existencia}</span></td>
                    <td class="text-right">${money(p.precio)}</td>
                    ${esAdmin() ? `<td><div class="actions">
                        <button class="icon-btn" data-qr="${p._id}" title="Imprimir etiqueta QR">${icon('qr')}</button>
                        <button class="icon-btn edit" data-edit="${p._id}" title="Editar">${icon('edit')}</button>
                        <button class="icon-btn del" data-del="${p._id}" title="Eliminar">${icon('trash')}</button></div></td>` : ''}
                </tr>`).join('') : `<tr><td colspan="6">${UI.empty(esAdmin() ? 'No hay productos. Usa “Nuevo Producto” para agregar los tuyos.' : 'No hay productos')}</td></tr>`;
            $$('[data-edit]').forEach(b => b.onclick = () => Views.modalProducto(productos.find(p => p._id === b.dataset.edit)));
            $$('[data-qr]').forEach(b => b.onclick = () => Views.modalEtiqueta(productos.find(p => p._id === b.dataset.qr)));
            $$('[data-del]').forEach(b => b.onclick = async () => {
                const p = productos.find(x => x._id === b.dataset.del);
                if (!await UI.confirmar('Eliminar producto', `¿Eliminar <b>${esc(p.nombre)}</b>? El historial de ventas se conserva.`, { ok: 'Eliminar', peligro: true })) return;
                try { await Api.del(`/productos/${p._id}`); UI.toast('Producto eliminado', 'success'); Views.cargarProductos(); } catch (e) { UI.toast(e.message, 'error'); }
            });
        } catch (e) { UI.toast(e.message, 'error'); }
    },

    modalEtiqueta(p) {
        UI.modal(`${UI.head('Etiqueta QR')}
            <div class="modal-body">
                <div class="ticket-preview">${esc(Printer.aTexto(Printer.etiquetaProducto(p, Store.config)))}</div>
                <div class="field" style="margin-top:16px"><label>Número de etiquetas</label><input class="input" id="etqCopias" type="number" min="1" max="100" step="1" value="1"></div>
                <p class="muted">El QR contiene el código <b>${esc(p.codigo)}</b>. Escanéalo en Ventas para agregar el producto.</p>
            </div>
            <div class="modal-foot"><button class="btn" onclick="UI.cerrar()">Cancelar</button>
                <button class="btn btn-primary" id="btnEtq">${icon('print')}Imprimir</button></div>`);
        $('#btnEtq').onclick = () => {
            const copias = Math.min(100, Math.max(1, parseInt($('#etqCopias').value, 10) || 1));
            UI.cerrar();
            UI.imprimir(Printer.etiquetaProducto(p, Store.config, copias));
        };
    },

    async modalProducto(p) {
        const nuevo = !p;
        if (nuevo) {
            p = { codigo: '', nombre: '', categoria: '', precio: '', costo: '', existencia: 0, stockMinimo: 5, imagen: '' };
            try { p.codigo = (await Api.get('/productos/siguiente-codigo')).codigo; } catch { /* el usuario puede escribirlo */ }
        }
        let imagen = p.imagen;
        const categorias = [...new Set((Views._productos || []).map(x => x.categoria).filter(Boolean))];
        UI.modal(`${UI.head(nuevo ? 'Nuevo Producto' : 'Editar Producto')}
            <form class="modal-body" id="formProd">
                <div class="row">
                    <div class="field"><label>Código *</label><input class="input" name="codigo" value="${esc(p.codigo)}" required placeholder="Ej. P-001 o código de barras"></div>
                    <div class="field"><label>Categoría</label><input class="input" name="categoria" value="${esc(p.categoria)}" list="listaCat"><datalist id="listaCat">${categorias.map(c => `<option value="${esc(c)}">`).join('')}</datalist></div>
                </div>
                <div class="field"><label>Nombre del producto *</label><input class="input" name="nombre" value="${esc(p.nombre)}" required></div>
                <div class="row">
                    <div class="field"><label>Precio de venta *</label><input class="input" name="precio" type="number" min="0" step="0.01" value="${p.precio}" required></div>
                    <div class="field"><label>Costo</label><input class="input" name="costo" type="number" min="0" step="0.01" value="${p.costo || ''}"></div>
                </div>
                <div class="row">
                    <div class="field"><label>Existencia</label><input class="input" name="existencia" type="number" step="1" value="${p.existencia}"></div>
                    <div class="field"><label>Existencia mínima (alerta)</label><input class="input" name="stockMinimo" type="number" min="0" step="1" value="${p.stockMinimo}"></div>
                </div>
                <div class="field"><label>Imagen</label>
                    <div class="img-drop" id="imgDrop">${imagen ? `<img src="${esc(imagen)}">` : `<div>${icon('image')}<br>Clic para subir una imagen</div>`}</div>
                    <input type="file" id="imgFile" accept="image/*" hidden>
                    <button type="button" class="btn btn-sm" id="quitarImg" style="margin-top:6px;${imagen ? '' : 'display:none'}">Quitar imagen</button>
                </div>
            </form>
            <div class="modal-foot"><button class="btn" onclick="UI.cerrar()">Cancelar</button>
                <button class="btn btn-primary" id="btnGuardarProd">${icon('check')}Guardar</button></div>`);
        const pintarImg = () => {
            $('#imgDrop').innerHTML = imagen ? `<img src="${esc(imagen)}">` : `<div>${icon('image')}<br>Clic para subir una imagen</div>`;
            $('#quitarImg').style.display = imagen ? '' : 'none';
        };
        $('#imgDrop').onclick = () => $('#imgFile').click();
        $('#quitarImg').onclick = () => { imagen = ''; pintarImg(); };
        $('#imgFile').onchange = async e => {
            const file = e.target.files[0];
            if (!file) return;
            try { imagen = await reducirImagen(file, 400); pintarImg(); } catch { UI.toast('No se pudo leer la imagen', 'error'); }
        };
        $('#btnGuardarProd').onclick = async (e) => {
            const f = $('#formProd');
            if (!f.reportValidity()) return;
            const body = {
                codigo: f.codigo.value.trim(), nombre: f.nombre.value.trim(), categoria: f.categoria.value.trim(),
                precio: parseFloat(f.precio.value) || 0, costo: parseFloat(f.costo.value) || 0,
                existencia: parseInt(f.existencia.value, 10) || 0, stockMinimo: parseInt(f.stockMinimo.value, 10) || 0, imagen
            };
            const btn = e.currentTarget;
            UI.btnLoading(btn, true);
            try {
                nuevo ? await Api.post('/productos', body) : await Api.put(`/productos/${p._id}`, body);
                UI.cerrar();
                UI.toast(nuevo ? 'Producto creado' : 'Producto actualizado', 'success');
                Views.cargarProductos();
            } catch (err) { UI.toast(err.message, 'error'); UI.btnLoading(btn, false); }
        };
    },

    // ---------------------- REPORTES ----------------------
    async reportes() {
        const periodo = Views._periodoRep || 'dia';
        const fecha = Views._fechaRep || hoyISO();
        main(`
            <div class="page-header">
                <div><h1>Reportes de Ventas</h1><p>Consulta tus ventas por periodo</p></div>
            </div>
            <div class="toolbar" style="justify-content:space-between">
                <div class="tabs" id="tabsRep">
                    <button data-p="dia">Por día</button><button data-p="semana">Por semana</button><button data-p="mes">Por mes</button>
                </div>
                <label class="date-chip">${icon('calendar')}<input type="date" id="repFecha" value="${fecha}"></label>
            </div>
            <div class="grid grid-3" style="margin-bottom:18px">
                ${stat('cart', 'bg-green', 'Ventas', 'rTotal')}
                ${stat('receipt', 'bg-blue', 'No. de ventas', 'rNum')}
                ${stat('tag', 'bg-purple', 'Ticket promedio', 'rProm')}
            </div>
            <div class="grid grid-main">
                <div class="card">
                    <div class="card-title" id="repTitulo">Detalle de ventas</div>
                    <div class="table-wrap" style="max-height:460px;overflow-y:auto"><table>
                        <thead><tr><th>Folio</th><th>${periodo === 'dia' ? 'Hora' : 'Fecha'}</th><th>Método</th><th>Atendió</th><th class="text-right">Total</th><th></th></tr></thead>
                        <tbody id="tablaRep"></tbody>
                    </table></div>
                </div>
                <div class="grid" style="align-content:start">
                    <div class="card">
                        <div class="card-title">Ventas por método</div>
                        <div id="donut"></div>
                    </div>
                    <div class="card">
                        <div class="card-title">Más vendidos</div>
                        <div id="topProd"></div>
                    </div>
                    <div class="row">
                        <button class="btn btn-outline" id="btnCorte">${icon('print')}Imprimir corte</button>
                        <button class="btn btn-outline" id="btnPDF">${icon('download')}Exportar (PDF)</button>
                    </div>
                </div>
            </div>`);
        $$('#tabsRep button').forEach(b => {
            b.classList.toggle('active', b.dataset.p === periodo);
            b.onclick = () => { Views._periodoRep = b.dataset.p; Views.reportes(); };
        });
        $('#repFecha').onchange = e => { Views._fechaRep = e.target.value || hoyISO(); Views.reportes(); };

        let rep;
        try { rep = await Api.get(`/reportes/ventas?periodo=${periodo}&fecha=${fecha}`); } catch (e) { return UI.toast(e.message, 'error'); }
        const titulo = tituloPeriodo(periodo, rep);
        $('#rTotal').textContent = money(rep.total);
        $('#rNum').textContent = rep.numVentas;
        $('#rProm').textContent = money(rep.ticketPromedio);
        $('#repTitulo').textContent = `Detalle de ventas (${titulo})`;
        $('#tablaRep').innerHTML = rep.ventas.length ? rep.ventas.map(v => `
            <tr>
                <td class="bold">${esc(v.folio)}${v.origen === 'apartado' ? ` <span class="badge blue" title="Apartado liquidado">${esc(v.apartado)}</span>` : ''}</td>
                <td>${periodo === 'dia' ? hora(v.fecha) : fechaHora(v.fecha)}</td>
                <td>${capitalizar(v.metodoPago)}</td><td class="muted">${esc(v.usuario)}</td>
                <td class="text-right bold">${money(v.total)}</td>
                <td><div class="actions"><button class="icon-btn view" data-ver="${v._id}" title="Ver ticket">${icon('eye')}</button></div></td>
            </tr>`).join('') : `<tr><td colspan="6">${UI.empty('Sin ventas en este periodo', 'receipt')}</td></tr>`;
        $$('[data-ver]').forEach(b => b.onclick = () => Views.verVenta(rep.ventas.find(v => v._id === b.dataset.ver)));
        $('#donut').innerHTML = donut(rep.porMetodo);
        $('#topProd').innerHTML = rep.topProductos.length ? `<table><tbody>${rep.topProductos.slice(0, 5).map(p => `
            <tr><td>${esc(p.nombre)}</td><td class="text-center muted">${p.cantidad}</td><td class="text-right">${money(p.total)}</td></tr>`).join('')}</tbody></table>` : '<div class="muted">Sin datos</div>';
        $('#btnCorte').onclick = () => UI.imprimir(Printer.ticketCorte(rep, Store.config, `CORTE ${titulo.toUpperCase()}`));
        $('#btnPDF').onclick = () => exportarPDF(rep, titulo);
    },

    verVenta(v) {
        const lineas = Printer.ticketVenta(v, Store.config);
        UI.modal(`${UI.head(`Venta ${esc(v.folio)}`)}
            <div class="modal-body"><div class="ticket-preview">${esc(Printer.aTexto(lineas))}</div></div>
            <div class="modal-foot"><button class="btn" onclick="UI.cerrar()">Cerrar</button>
                <button class="btn btn-primary" id="btnReimp">${icon('print')}Reimprimir</button></div>`);
        $('#btnReimp').onclick = () => UI.imprimir(lineas);
    },

    // ---------------------- USUARIOS ----------------------
    async usuarios() {
        if (!esAdmin()) return (location.hash = '#dashboard');
        main(`
            <div class="page-header">
                <div><h1>Usuarios</h1><p>Administra quién puede usar el punto de venta</p></div>
                <button class="btn btn-primary" id="btnNuevoUser">${icon('plus')}Nuevo Usuario</button>
            </div>
            <div class="card"><div class="table-wrap"><table>
                <thead><tr><th>Nombre</th><th>Usuario</th><th>Rol</th><th>Estado</th><th class="text-center">Acciones</th></tr></thead>
                <tbody id="tablaUsers"></tbody>
            </table></div></div>`);
        $('#btnNuevoUser').onclick = () => Views.modalUsuario();
        try {
            const { usuarios } = await Api.get('/usuarios');
            const yo = Api.user().id;
            $('#tablaUsers').innerHTML = usuarios.map(u => `
                <tr>
                    <td><div class="prod-cell"><div class="avatar" style="width:32px;height:32px;font-size:13px">${esc(iniciales(u.nombre))}</div><b>${esc(u.nombre)}</b></div></td>
                    <td>${esc(u.usuario)}</td>
                    <td><span class="badge ${u.rol === 'admin' ? 'purple' : 'blue'}" style="${u.rol === 'admin' ? 'background:var(--purple-soft);color:var(--purple)' : ''}">${u.rol === 'admin' ? 'Administrador' : 'Cajero'}</span></td>
                    <td><span class="badge ${u.activo ? 'green' : 'gray'}">${u.activo ? 'Activo' : 'Inactivo'}</span></td>
                    <td><div class="actions">
                        ${u.activo ? '' : `<button class="btn btn-success btn-sm" data-activar="${u._id}">${icon('check')}Activar</button>`}
                        <button class="icon-btn edit" data-edit="${u._id}">${icon('edit')}</button>
                        ${u._id === yo ? '' : `<button class="icon-btn del" data-del="${u._id}">${icon('trash')}</button>`}
                    </div></td>
                </tr>`).join('');
            $$('[data-edit]').forEach(b => b.onclick = () => Views.modalUsuario(usuarios.find(u => u._id === b.dataset.edit)));
            $$('[data-activar]').forEach(b => b.onclick = async () => {
                try { await Api.put(`/usuarios/${b.dataset.activar}`, { activo: true }); UI.toast('Usuario activado', 'success'); Views.usuarios(); }
                catch (e) { UI.toast(e.message, 'error'); }
            });
            $$('[data-del]').forEach(b => b.onclick = async () => {
                const u = usuarios.find(x => x._id === b.dataset.del);
                if (!await UI.confirmar('Eliminar usuario', `¿Eliminar a <b>${esc(u.nombre)}</b>?`, { ok: 'Eliminar', peligro: true })) return;
                try { await Api.del(`/usuarios/${u._id}`); UI.toast('Usuario eliminado', 'success'); Views.usuarios(); } catch (e) { UI.toast(e.message, 'error'); }
            });
        } catch (e) { UI.toast(e.message, 'error'); }
    },

    modalUsuario(u) {
        const nuevo = !u;
        u = u || { nombre: '', usuario: '', rol: 'cajero', activo: true };
        UI.modal(`${UI.head(nuevo ? 'Nuevo Usuario' : 'Editar Usuario')}
            <form class="modal-body" id="formUser">
                <div class="field"><label>Nombre completo *</label><input class="input" name="nombre" value="${esc(u.nombre)}" required></div>
                <div class="field"><label>Usuario (para iniciar sesión) *</label><input class="input" name="usuario" value="${esc(u.usuario)}" required autocomplete="off"></div>
                <div class="field"><label>Contraseña ${nuevo ? '*' : '(dejar vacío para no cambiar)'}</label><input class="input" name="password" type="password" ${nuevo ? 'required' : ''} minlength="4" autocomplete="new-password"></div>
                <div class="row">
                    <div class="field"><label>Rol</label><select class="input" name="rol"><option value="cajero">Cajero</option><option value="admin">Administrador</option></select></div>
                    <div class="field"><label>Estado</label><select class="input" name="activo"><option value="true">Activo</option><option value="false">Inactivo</option></select></div>
                </div>
            </form>
            <div class="modal-foot"><button class="btn" onclick="UI.cerrar()">Cancelar</button>
                <button class="btn btn-primary" id="btnGuardarUser">${icon('check')}Guardar</button></div>`);
        const f = $('#formUser');
        f.rol.value = u.rol;
        f.activo.value = String(u.activo);
        $('#btnGuardarUser').onclick = async () => {
            if (!f.reportValidity()) return;
            const body = { nombre: f.nombre.value.trim(), usuario: f.usuario.value.trim(), rol: f.rol.value, activo: f.activo.value === 'true' };
            if (f.password.value) body.password = f.password.value;
            try {
                nuevo ? await Api.post('/usuarios', body) : await Api.put(`/usuarios/${u._id}`, body);
                UI.cerrar();
                UI.toast('Usuario guardado', 'success');
                Views.usuarios();
            } catch (e) { UI.toast(e.message, 'error'); }
        };
    },

    cambiarPassword() {
        $('#userMenu').classList.remove('open');
        UI.modal(`${UI.head('Cambiar contraseña')}
            <form class="modal-body" id="formPass">
                <div class="field"><label>Contraseña actual</label><input class="input" name="actual" type="password" required></div>
                <div class="field"><label>Nueva contraseña</label><input class="input" name="nueva" type="password" minlength="4" required></div>
            </form>
            <div class="modal-foot"><button class="btn" onclick="UI.cerrar()">Cancelar</button><button class="btn btn-primary" id="btnPass">Guardar</button></div>`);
        $('#btnPass').onclick = async () => {
            const f = $('#formPass');
            if (!f.reportValidity()) return;
            try { await Api.put('/auth/password', { actual: f.actual.value, nueva: f.nueva.value }); UI.cerrar(); UI.toast('Contraseña actualizada', 'success'); }
            catch (e) { UI.toast(e.message, 'error'); }
        };
    },

    // ---------------------- CONFIGURACIÓN ----------------------
    async configuracion() {
        await Store.cargarConfig();
        const c = Store.config || {};
        const admin = esAdmin();
        main(`
            <div class="page-header"><div><h1>Configuración</h1><p>Datos de tu negocio e impresora de tickets</p></div></div>
            <div class="grid grid-2" style="align-items:start">
                <form class="card" id="formConfig">
                    <div class="card-title">Datos del negocio</div>
                    <fieldset style="border:0" ${admin ? '' : 'disabled'}>
                        <div class="field"><label>Nombre de la tienda</label><input class="input" name="nombreTienda" value="${esc(c.nombreTienda)}" required></div>
                        <div class="field"><label>Dirección</label><input class="input" name="direccion" value="${esc(c.direccion)}"></div>
                        <div class="row">
                            <div class="field"><label>Teléfono</label><input class="input" name="telefono" value="${esc(c.telefono)}"></div>
                            <div class="field"><label>RFC</label><input class="input" name="rfc" value="${esc(c.rfc)}"></div>
                        </div>
                        <div class="field"><label>Mensaje al pie del ticket</label><input class="input" name="mensajeTicket" value="${esc(c.mensajeTicket)}"></div>
                        ${admin ? `<button class="btn btn-primary" type="submit">${icon('check')}Guardar</button>` : '<div class="muted">Solo el administrador puede modificar estos datos.</div>'}
                    </fieldset>
                </form>
                <div class="grid" style="align-content:start">
                ${CONFIG.ES_APP ? `<div class="card">
                    <div class="card-title">Servidor</div>
                    <div class="field"><label>Dirección del servidor (IP de la PC)</label>
                        <input class="input" id="cfgServidor" value="${esc(CONFIG.SERVIDOR)}" placeholder="192.168.1.50:5001" autocapitalize="off"></div>
                    <button class="btn btn-outline" id="cfgGuardarServidor">${icon('check')}Guardar y volver a iniciar sesión</button>
                </div>` : ''}
                <div class="card">
                    <div class="card-title">Impresora de tickets</div>
                    ${CONFIG.ES_APP ? '' : `<div class="field"><label>Tipo de conexión</label>
                        <select class="input" id="prMode">
                            <option value="auto">Automático</option>
                            <option value="bluetooth">Bluetooth (app móvil)</option>
                            <option value="serial">USB / Serial / Bluetooth COM (Chrome o Edge)</option>
                            <option value="navegador">Impresora de Windows (diálogo del navegador)</option>
                        </select>
                    </div>`}
                    <div class="row">
                        <div class="field"><label>Ancho del papel</label>
                            <select class="input" id="prWidth"><option value="32">58 mm (32 columnas)</option><option value="48">80 mm (48 columnas)</option></select></div>
                        ${CONFIG.ES_APP ? '' : `<div class="field"><label>Velocidad (baudios, serial)</label>
                            <select class="input" id="prBaud">${[9600, 19200, 38400, 57600, 115200].map(b => `<option>${b}</option>`).join('')}</select></div>`}
                    </div>
                    <label style="display:flex;gap:8px;align-items:center;margin-bottom:14px"><input type="checkbox" id="prAuto"> Imprimir ticket automáticamente al cobrar / abonar</label>
                    <div class="muted" id="prEstado" style="margin-bottom:14px"></div>
                    <div class="row" style="flex-wrap:wrap">
                        ${CONFIG.ES_APP
                            ? `<button class="btn btn-outline" id="prBuscarBT">${icon('print')}Buscar impresora Bluetooth</button>`
                            : `<button class="btn btn-outline" id="prConectar">${icon('print')}Elegir impresora USB/Serial</button>`}
                        <button class="btn btn-primary" id="prPrueba">${icon('print')}Imprimir prueba</button>
                        <button class="btn" id="prDesc">Desconectar</button>
                    </div>
                    <div class="field" style="margin-top:16px"><label>Vista previa</label><div class="ticket-preview" id="prPreview"></div></div>
                </div>
                </div>
            </div>`);
        $('#formConfig').onsubmit = async e => {
            e.preventDefault();
            const f = e.target;
            try {
                await Api.put('/config', { nombreTienda: f.nombreTienda.value, direccion: f.direccion.value, telefono: f.telefono.value, rfc: f.rfc.value, mensajeTicket: f.mensajeTicket.value });
                await Store.cargarConfig();
                UI.toast('Configuración guardada', 'success');
                preview();
            } catch (err) { UI.toast(err.message, 'error'); }
        };
        const preview = () => { $('#prPreview').textContent = Printer.aTexto(Printer.ticketPrueba(Store.config)); };
        const estado = async () => {
            const partes = [];
            partes.push(Printer.hayBluetooth() ? `Bluetooth: ${Printer.printerConnected ? `conectado a ${Printer.printerName}` : 'sin conectar (se pedirá al imprimir)'}` : 'Bluetooth: solo en la app móvil');
            if (!CONFIG.ES_APP) partes.push(Printer.haySerial()
                ? `USB/Serial: ${(await navigator.serial.getPorts()).length ? 'impresora autorizada' : 'sin impresora elegida'}`
                : 'USB/Serial: no soportado por este navegador');
            $('#prEstado').textContent = partes.join(' · ');
        };
        $('#prWidth').value = String(Printer.ancho);
        $('#prAuto').checked = Printer.autoImprimir;
        $('#prWidth').onchange = e => { Printer.ancho = e.target.value; preview(); };
        $('#prAuto').onchange = e => { Printer.autoImprimir = e.target.checked; };
        if (CONFIG.ES_APP) {
            $('#prBuscarBT').onclick = async () => {
                try {
                    const ok = await Printer.elegirBluetooth();
                    if (ok) UI.toast(`✅ Conectado a ${Printer.printerName}`, 'success');
                } catch (e) { UI.toast(e.message, 'error'); }
                estado();
            };
            $('#cfgGuardarServidor').onclick = () => {
                CONFIG.SERVIDOR = $('#cfgServidor').value;
                UI.toast(`Servidor: ${CONFIG.SERVIDOR}`, 'success');
                setTimeout(() => Api.cerrarSesion(), 800);
            };
        } else {
            $('#prMode').value = Printer.modo;
            $('#prBaud').value = localStorage.getItem('pos-printer-baud') || '9600';
            $('#prMode').onchange = e => { Printer.modo = e.target.value; };
            $('#prBaud').onchange = e => localStorage.setItem('pos-printer-baud', e.target.value);
            $('#prConectar').onclick = async () => {
                try { await Printer.conectarSerial(); UI.toast('Impresora autorizada', 'success'); estado(); }
                catch (e) { UI.toast(e.name === 'NotFoundError' ? 'No se eligió impresora' : e.message, 'warning'); }
            };
        }
        $('#prPrueba').onclick = () => UI.imprimir(Printer.ticketPrueba(Store.config));
        $('#prDesc').onclick = () => { Printer.desconectar(); UI.toast('Impresora desconectada', 'success'); setTimeout(estado, 300); };
        preview();
        estado();
    }
};

// ==================== COMPONENTES ====================
function main(html) {
    const m = $('#main');
    m.innerHTML = `<button class="btn btn-outline menu-toggle" style="margin-bottom:12px" onclick="document.getElementById('sidebar').classList.toggle('open')">${icon('menu')}Menú</button>` + html;
    renderIcons(m);
}

function stat(ico, cls, label, id) {
    return `<div class="card stat"><div class="stat-icon ${cls}">${icon(ico)}</div>
        <div><div class="stat-label">${label}</div><div class="stat-value" id="${id}">—</div></div></div>`;
}

function barChart(etiquetas, valores) {
    const max = Math.max(...valores, 0);
    const paso = escalaBonita(max / 5);
    const tope = paso * 5 || 1;
    const ejes = Array.from({ length: 6 }, (_, i) => money(tope - paso * i).replace('.00', ''));
    const pocas = etiquetas.length > 12;
    return `<div class="bar-chart">
        <div class="axis">${ejes.map(e => `<span>${e}</span>`).join('')}</div>
        <div class="gridlines">${ejes.map(() => '<div></div>').join('')}</div>
        ${valores.map((v, i) => `<div class="bar-col"><div class="bar" style="height:calc(${v / tope * 100}% - ${v / tope * 24}px)" data-value="${etiquetas[i]}: ${money(v)}"></div>
            <div class="lbl">${pocas && i % 3 !== 0 ? '&nbsp;' : etiquetas[i]}</div></div>`).join('')}
    </div>`;
}

function escalaBonita(x) {
    if (x <= 0) return 200;
    const e = Math.pow(10, Math.floor(Math.log10(x)));
    const f = x / e;
    return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * e;
}

function donut(porMetodo) {
    const total = Object.values(porMetodo).reduce((a, b) => a + b, 0);
    if (!total) return '<div class="muted">Sin ventas</div>';
    let acc = 0;
    const partes = Object.entries(porMetodo).map(([m, v]) => {
        const ini = acc / total * 360; acc += v;
        return `${COLORES_METODO[m]} ${ini}deg ${acc / total * 360}deg`;
    });
    return `<div class="donut-wrap"><div class="donut" style="background:conic-gradient(${partes.join(',')})"></div>
        <div class="legend">${Object.entries(porMetodo).map(([m, v]) => `<div><span class="dot" style="background:${COLORES_METODO[m]}"></span>${capitalizar(m)}<span class="pct">${Math.round(v / total * 100)}%</span></div>`).join('')}</div></div>`;
}

function tituloPeriodo(periodo, rep) {
    const ini = new Date(rep.inicio), fin = new Date(rep.fin);
    if (periodo === 'dia') return fechaCorta(ini);
    if (periodo === 'mes') return capitalizar(ini.toLocaleDateString('es-MX', { month: 'long', year: 'numeric' }));
    return `${fechaCorta(ini)} - ${fechaCorta(fin)}`;
}

const iniciales = n => String(n || '?').split(/\s+/).map(p => p[0]).slice(0, 2).join('').toUpperCase();

function reducirImagen(file, max) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            const img = new Image();
            img.onerror = reject;
            img.onload = () => {
                const escala = Math.min(1, max / Math.max(img.width, img.height));
                const canvas = document.createElement('canvas');
                canvas.width = Math.round(img.width * escala);
                canvas.height = Math.round(img.height * escala);
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.82));
            };
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    });
}

function exportarPDF(rep, titulo) {
    if (!window.jspdf) return UI.toast('No se pudo cargar la librería PDF (requiere internet la primera vez)', 'error');
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const nombre = Store.config?.nombreTienda || 'Mi Tienda';
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(18);
    doc.setTextColor(37, 99, 235);
    doc.text(nombre, 14, 20);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Reporte de ventas: ${titulo}`, 14, 29);
    doc.setFontSize(10);
    doc.text(`Total: ${money(rep.total)}    No. de ventas: ${rep.numVentas}    Ticket promedio: ${money(rep.ticketPromedio)}`, 14, 37);
    doc.text(`Efectivo: ${money(rep.porMetodo.efectivo)}    Tarjeta: ${money(rep.porMetodo.tarjeta)}    Transferencia: ${money(rep.porMetodo.transferencia)}`, 14, 43);
    doc.text(`Generado: ${fechaHora(new Date())} por ${Api.user()?.nombre || ''}`, 14, 49);
    doc.autoTable({
        head: [['Folio', 'Fecha', 'Método', 'Atendió', 'Productos', 'Total']],
        body: rep.ventas.map(v => [v.folio, fechaHora(v.fecha), capitalizar(v.metodoPago), v.usuario || '',
            v.items.map(i => `${i.cantidad} ${i.nombre}`).join(', '), money(v.total)]),
        foot: [['', '', '', '', 'TOTAL', money(rep.total)]],
        startY: 55,
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [37, 99, 235], textColor: 255, fontStyle: 'bold' },
        footStyles: { fillColor: [241, 245, 249], textColor: 0, fontStyle: 'bold' },
        alternateRowStyles: { fillColor: [248, 250, 252] },
        columnStyles: { 5: { halign: 'right' } },
        didDrawPage: d => {
            doc.setFontSize(8);
            doc.setTextColor(128, 128, 128);
            doc.text(`${nombre} - Punto de Venta`, d.settings.margin.left, doc.internal.pageSize.height - 10);
        }
    });
    const archivo = `Reporte_Ventas_${titulo.replace(/[^\w]+/g, '_')}.pdf`;
    if (CONFIG.ES_APP && window.resolveLocalFileSystemURL && window.cordova?.file) return guardarArchivoApp(archivo, doc.output('blob'));
    doc.save(archivo);
    UI.toast('PDF exportado correctamente', 'success');
}

// En la app móvil la descarga del navegador no funciona: se guarda con cordova-plugin-file
function guardarArchivoApp(nombre, blob) {
    const dir = cordova.file.externalDataDirectory || cordova.file.dataDirectory;
    const error = e => UI.toast('No se pudo guardar el PDF: ' + (e?.code ?? e), 'error');
    resolveLocalFileSystemURL(dir, carpeta => {
        carpeta.getFile(nombre, { create: true, exclusive: false }, fileEntry => {
            fileEntry.createWriter(writer => {
                writer.onwriteend = () => UI.toast(`PDF guardado en: ${fileEntry.nativeURL.replace('file://', '')}`, 'success');
                writer.onerror = error;
                writer.write(blob);
            }, error);
        }, error);
    }, error);
}

// ==================== ROUTER / INICIO ====================
function router() {
    const ruta = (location.hash.slice(1) || 'dashboard').split('/')[0];
    const vista = ruta in Views && typeof Views[ruta] === 'function' && !['venta'].includes(ruta) ? ruta : 'dashboard';
    $$('#nav a').forEach(a => a.classList.toggle('active', a.dataset.route === vista));
    $('#sidebar').classList.remove('open');
    if ($('#modalBg').classList.contains('open')) UI.cerrar();
    if (vista === 'ventas') Views._apartadoSel = null;
    Views[vista]();
}

(async function init() {
    const user = Api.user();
    if (!Api.token() || !user) return (location.href = 'login.html');
    renderIcons();
    $('#userName').textContent = user.nombre;
    $('#userRole').textContent = user.rol === 'admin' ? 'Administrador' : 'Cajero';
    $('#userAvatar').textContent = iniciales(user.nombre);
    if (!esAdmin()) $$('[data-admin]').forEach(el => el.remove());
    $('#userBox').onclick = e => { if (!e.target.closest('.user-menu')) $('#userMenu').classList.toggle('open'); };
    document.addEventListener('click', e => { if (!e.target.closest('#userBox')) $('#userMenu').classList.remove('open'); });
    window.addEventListener('hashchange', router);
    await Store.cargarConfig();
    router();
})();
