// src/data/bancos.js

export const bancos = [
    { 
        id: 'provincia', 
        nombre: 'Banco Provincia', 
        icon: '🏛️', 
        cuotasMax: 12, 
        interes: 0,
        imagen: "https://cdn-cf.smartfense.com/file/2024/07/UHD-1024x683.jpeg"
    },
    { 
        id: 'galicia', 
        nombre: 'Banco Galicia', 
        icon: '🏦', 
        cuotasMax: 12, 
        interes: 0,
        imagen: 'https://media.minutouno.com/p/25039099f8d75fa5a98d57454735522e/adjuntos/150/imagenes/026/621/0026621910/1200x675/smart/galicia-logo-400x250-px.png'
    },
    { 
        id: 'santander', 
        nombre: 'Banco Santander', 
        icon: '💳', 
        cuotasMax: 12, 
        interes: 0,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLJnd0jcO2tvjTL5CNSQ9YJkPZ1XnCCVyD1ZfaOpLbETbVYDfqOg0HHGd&s=100'
    },
    { 
        id: 'nacion', 
        nombre: 'Banco Nación', 
        icon: '🇦🇷', 
        cuotasMax: 12, 
        interes: 0,
        imagen: "https://abappra.org.ar/backend/views/images/entidades/home/articulo178.jpg"
    },
    { 
        id: 'bbva', 
        nombre: 'BBVA Francés', 
        icon: '🔵', 
        cuotasMax: 12, 
        interes: 0,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSJBQmecqoyTIcFVlW2vHpjicoa9sIYG5IXS_MgBTtYohmS8ZEW4S_Oo&s=100"
    },
    { 
        id: 'supervielle', 
        nombre: 'Banco Supervielle', 
        icon: '🟣', 
        cuotasMax: 9, 
        interes: 0,
        imagen: "https://content-us-7.content-cms.com/8ba19f21-9a97-4525-8886-f54d823a5cea/dxresources/3041/30416e4e-99b8-41c3-8c03-b34ae6e225d1.jpg?resize=250px%3A175px&crop=250%3A175%3B0%2C0"
    },
    { 
        id: 'ciudad', 
        nombre: 'Banco Ciudad', 
        icon: '🌆', 
        cuotasMax: 9, 
        interes: 0,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaNFxs0_fx2ebpKoYr5MRqAqHIZ5jMwc13C4cmbzXmTugPNjHgGMl1KSp&s=100"
    },
    { 
        id: 'patagonia', 
        nombre: 'Banco Patagonia', 
        icon: '⛰️', 
        cuotasMax: 6, 
        interes: 0,
        imagen: "https://www.uncuyo.edu.ar/prensa/cache/captura7_732_1296.png"
    },
    { 
        id: 'macro', 
        nombre: 'Banco Macro', 
        icon: '🏛️', 
        cuotasMax: 12, 
        interes: 0,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RxzSrBeDTOrthoScyJ1Xez7BeVwGjDVBBD2ZbLXSYjNcrXOVwWMg93dG&s=100"
    },
    { 
        id: 'hipotecario', 
        nombre: 'Banco Hipotecario', 
        icon: '🏠', 
        cuotasMax: 6, 
        interes: 0,
        imagen: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Logo_Banco_Hipotecario.svg/330px-Logo_Banco_Hipotecario.svg.png?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    }
];

export const metodosPago = [
    { 
        id: 'debito', 
        nombre: 'Tarjeta de Débito', 
        icon: '💳', 
        requiereBanco: true,
        logo: null
    },
    { 
        id: 'credito', 
        nombre: 'Tarjeta de Crédito', 
        icon: '💳', 
        requiereBanco: true,
        logo: null
    },
    { 
        id: 'mercadopago', 
        nombre: 'Mercado Pago', 
        icon: null,
        requiereBanco: false,
        logo: "https://static.vecteezy.com/system/resources/previews/067/065/678/non_2x/mercadopago-logo-square-rounded-mercadopago-logo-free-download-mercadopago-logo-free-png.png"
    },
    { 
        id: 'transferencia', 
        nombre: 'Transferencia Bancaria', 
        icon: '🏦', 
        requiereBanco: false,
        logo: null
    }
];