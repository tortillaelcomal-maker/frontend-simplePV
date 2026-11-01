// Configuración de la aplicación

// URL pública del backend en Render (ej. 'https://mi-backend.onrender.com'). Vacío = modo local.
const BACKEND_PUBLICO = 'https://backend-simplepv.onrender.com';

const CONFIG = {
    // true cuando corre dentro de la app móvil (Capacitor/Cordova)
    ES_APP: !!(window.Capacitor?.isNativePlatform?.() || window.cordova),

    // Dirección del servidor (ej. http://192.168.1.50:5001). En la app móvil se configura desde el login.
    get SERVIDOR() {
        const guardado = localStorage.getItem('pos-servidor');
        if (guardado) return guardado;
        if (!this.ES_APP && location.protocol.startsWith('http') && location.port === '5001') return location.origin;
        if (BACKEND_PUBLICO) return BACKEND_PUBLICO.trim().replace(/\/+$/, '').replace(/\/api$/, '');
        return 'http://localhost:5001';
    },
    set SERVIDOR(valor) {
        let v = String(valor || '').trim().replace(/\/+$/, '').replace(/\/api$/, '');
        if (v && !/^https?:\/\//i.test(v)) v = 'http://' + v;
        if (v && !/:\d+$/.test(v) && !/^https:/i.test(v)) v += ':5001';
        v ? localStorage.setItem('pos-servidor', v) : localStorage.removeItem('pos-servidor');
    },

    // URL base de la API del backend
    get API_BASE_URL() { return `${this.SERVIDOR}/api`; },

    APP_NAME: 'Mi Tienda',
    VERSION: '2.0.0'
};

// Hacer la configuración disponible globalmente
window.CONFIG = CONFIG;
