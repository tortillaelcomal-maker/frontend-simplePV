// Cliente HTTP para el backend
const Api = {
    token: () => localStorage.getItem('pos-token'),
    user: () => JSON.parse(localStorage.getItem('pos-user') || 'null'),

    guardarSesion(token, user) {
        localStorage.setItem('pos-token', token);
        localStorage.setItem('pos-user', JSON.stringify(user));
    },

    cerrarSesion() {
        localStorage.removeItem('pos-token');
        localStorage.removeItem('pos-user');
        location.href = 'login.html';
    },

    async request(method, path, body) {
        let res;
        try {
            res = await fetch(CONFIG.API_BASE_URL + path, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...(this.token() ? { Authorization: `Bearer ${this.token()}` } : {})
                },
                body: body ? JSON.stringify(body) : undefined
            });
        } catch {
            throw new Error(`No se pudo conectar con el servidor (${CONFIG.SERVIDOR}). ¿Está encendido y en la misma red?`);
        }
        const data = await res.json().catch(() => ({}));
        if (res.status === 401 && !path.startsWith('/auth/login')) {
            this.cerrarSesion();
            throw new Error(data.message || 'Sesión expirada');
        }
        if (!res.ok || data.success === false) throw new Error(data.message || `Error ${res.status}`);
        return data;
    },

    // Campo "Servidor" en login/registro: visible en la app móvil (o en web con ?servidor)
    prepararCampoServidor() {
        const campo = document.getElementById('campoServidor');
        if (!campo || !(CONFIG.ES_APP || location.search.includes('servidor'))) return;
        campo.style.display = '';
        const input = document.getElementById('servidor');
        input.value = localStorage.getItem('pos-servidor') || '';
        input.onchange = () => { CONFIG.SERVIDOR = input.value; input.value = localStorage.getItem('pos-servidor') || ''; };
        document.getElementById('probarServidor').onclick = async () => {
            CONFIG.SERVIDOR = input.value;
            input.value = localStorage.getItem('pos-servidor') || '';
            const estado = document.getElementById('estadoServidor');
            estado.textContent = 'Probando...';
            estado.style.color = '';
            try {
                const r = await fetch(`${CONFIG.API_BASE_URL}/health`);
                if (!r.ok) throw new Error();
                estado.textContent = '✓ Conectado al servidor';
                estado.style.color = 'var(--green)';
            } catch {
                estado.textContent = '✗ No responde. Revisa la IP, que la PC tenga el servidor encendido y estén en la misma red Wi-Fi.';
                estado.style.color = 'var(--red)';
            }
        };
    },

    get(path) { return this.request('GET', path); },
    post(path, body) { return this.request('POST', path, body || {}); },
    put(path, body) { return this.request('PUT', path, body || {}); },
    del(path) { return this.request('DELETE', path); }
};
