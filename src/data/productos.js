export const productos = [
    // Laptops
    { 
        id: 1, 
        nombre: "Laptop ASUS ROG Zephyrus G14", 
        categoria: "Laptops", 
        precio: 1899900,
        precioAnterior: 2199900,
        oferta: true,
        cuotas: 12,
        envioGratis: true,
        stock: 5,
        peso: 1.7,
        dimensiones: { alto: 2, ancho: 31, largo: 22 },
        imagen: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=300&fit=crop", 
        descripcion: "Ryzen 9, RTX 4060, 16GB RAM, 1TB SSD" 
    },
    { 
        id: 2, 
        nombre: "MacBook Air M3", 
        categoria: "Laptops", 
        precio: 2299900,
        precioAnterior: 2599900,
        oferta: true,
        cuotas: 12,
        envioGratis: true,
        stock: 3,
        peso: 1.24,
        dimensiones: { alto: 1.1, ancho: 30, largo: 21 },
        imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop", 
        descripcion: "Chip M3, 8GB RAM, 256GB SSD, 13.6 pulgadas" 
    },
    { 
        id: 3, 
        nombre: "Laptop HP Pavilion 15", 
        categoria: "Laptops", 
        precio: 1499900,
        precioAnterior: 1699900,
        oferta: true,
        cuotas: 12,
        envioGratis: true,
        stock: 8,
        peso: 1.75,
        dimensiones: { alto: 2, ancho: 36, largo: 24 },
        imagen: "https://mx-media.hptiendaenlinea.com/catalog/product/3/0/308Z3LA-1_T1679638785.png", 
        descripcion: "Intel i5, 16GB RAM, 512GB SSD, 15.6 pulgadas" 
    },
    // Monitores
    { 
        id: 4, 
        nombre: "Monitor Samsung Odyssey G5", 
        categoria: "Monitores", 
        precio: 749900,
        precioAnterior: 899900,
        oferta: true,
        cuotas: 6,
        envioGratis: true,
        stock: 10,
        peso: 4.5,
        dimensiones: { alto: 40, ancho: 61, largo: 15 },
        imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop", 
        descripcion: "27 pulgadas 144Hz QHD, 1ms, FreeSync" 
    },
    { 
        id: 5, 
        nombre: "Monitor LG UltraGear 27GP850", 
        categoria: "Monitores", 
        precio: 849900,
        precioAnterior: 999900,
        oferta: true,
        cuotas: 6,
        envioGratis: true,
        stock: 6,
        peso: 5.2,
        dimensiones: { alto: 45, ancho: 62, largo: 20 },
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTM9e3F8QUsz5ZJVU5kwdh__v1c2M-F35aWr_TRWr0AwgH4wDy9nBGPdc&s=100", 
        descripcion: "27 pulgadas Nano IPS, 165Hz, HDR10" 
    },
    // Teclados
    { 
        id: 6, 
        nombre: "Teclado Mecánico Logitech G Pro", 
        categoria: "Teclados", 
        precio: 299900,
        precioAnterior: 349900,
        oferta: true,
        cuotas: 3,
        envioGratis: true,
        stock: 15,
        peso: 0.9,
        dimensiones: { alto: 4, ancho: 36, largo: 15 },
        imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop", 
        descripcion: "Switches GX Blue, RGB, TKL" 
    },
    { 
        id: 7, 
        nombre: "Teclado Redragon Kumara K552", 
        categoria: "Teclados", 
        precio: 149900,
        precioAnterior: 189900,
        oferta: true,
        cuotas: 3,
        envioGratis: true,
        stock: 20,
        peso: 0.85,
        dimensiones: { alto: 4, ancho: 35, largo: 12 },
        imagen: "https://gorilagames.com/img/Public/1019-producto-redragon-kumara-white-8194.jpg", 
        descripcion: "Switches Outemu Blue, RGB, 60%" 
    },
    // Ratones
    { 
        id: 8, 
        nombre: "Mouse Logitech G502 Hero", 
        categoria: "Ratones", 
        precio: 189900,
        precioAnterior: 229900,
        oferta: true,
        cuotas: 3,
        envioGratis: true,
        stock: 12,
        peso: 0.12,
        dimensiones: { alto: 4, ancho: 7, largo: 13 },
        imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop", 
        descripcion: "25K DPI, 11 botones, RGB" 
    },
    { 
        id: 9, 
        nombre: "Mouse Razer DeathAdder V3", 
        categoria: "Ratones", 
        precio: 169900,
        precioAnterior: 199900,
        oferta: true,
        cuotas: 3,
        envioGratis: true,
        stock: 10,
        peso: 0.059,
        dimensiones: { alto: 4, ancho: 7, largo: 13 },
        imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=300&fit=crop", 
        descripcion: "30K DPI, 59g, 8K Hz" 
    },
    // Auriculares
    { 
        id: 10, 
        nombre: "Auriculares HyperX Cloud II", 
        categoria: "Auriculares", 
        precio: 209900,
        precioAnterior: 249900,
        oferta: true,
        cuotas: 6,
        envioGratis: true,
        stock: 8,
        peso: 0.32,
        dimensiones: { alto: 20, ancho: 20, largo: 10 },
        imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop", 
        descripcion: "7.1 Surround, USB, Memory Foam" 
    },
    { 
        id: 11, 
        nombre: "Auriculares Sony WH-1000XM5", 
        categoria: "Auriculares", 
        precio: 849900,
        precioAnterior: 999900,
        oferta: true,
        cuotas: 12,
        envioGratis: true,
        stock: 4,
        peso: 0.25,
        dimensiones: { alto: 25, ancho: 20, largo: 8 },
        imagen: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop", 
        descripcion: "ANC, 30h batería, LDAC" 
    },
    // SSDs
    { 
        id: 12, 
        nombre: "SSD Samsung 990 PRO 1TB", 
        categoria: "Almacenamiento", 
        precio: 279900,
        precioAnterior: 329900,
        oferta: true,
        cuotas: 6,
        envioGratis: true,
        stock: 7,
        peso: 0.009,
        dimensiones: { alto: 1, ancho: 8, largo: 2 },
        imagen: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop", 
        descripcion: "NVMe M.2, 7450 MB/s lectura" 
    },
    { 
        id: 13, 
        nombre: "SSD WD Black SN850X 2TB", 
        categoria: "Almacenamiento", 
        precio: 429900,
        precioAnterior: 499900,
        oferta: true,
        cuotas: 6,
        envioGratis: true,
        stock: 5,
        peso: 0.009,
        dimensiones: { alto: 1, ancho: 8, largo: 2 },
        imagen: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop", 
        descripcion: "NVMe M.2, 7300 MB/s lectura" 
    },
    // Memorias RAM
    { 
        id: 14, 
        nombre: "RAM Corsair Vengeance 32GB DDR5", 
        categoria: "Memorias", 
        precio: 359900,
        precioAnterior: 419900,
        oferta: true,
        cuotas: 6,
        envioGratis: true,
        stock: 9,
        peso: 0.15,
        dimensiones: { alto: 1, ancho: 15, largo: 5 },
        imagen: "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Memory/vengeance-rgb-ddr5-config/white/2up/Vengeance-RGB-DDR5-2UP-64GB-WHITE_01.webp", 
        descripcion: "6000MHz, RGB, CL30" 
    },
    { 
        id: 15, 
        nombre: "RAM Kingston Fury Beast 16GB DDR4", 
        categoria: "Memorias", 
        precio: 189900,
        precioAnterior: 229900,
        oferta: true,
        cuotas: 3,
        envioGratis: true,
        stock: 11,
        peso: 0.1,
        dimensiones: { alto: 1, ancho: 13, largo: 4 },
        imagen: "https://statics.qloud.com.ar/clan-co-10-2020/179_28-07-2022-01-07-18-3.jpg", 
        descripcion: "3200MHz, RGB, CL16" 
    }
];

export const bancos = [
    { id: 'provincia', nombre: 'Banco Provincia', icon: '🏛️', cuotasMax: 12, interes: 0, imagen: "https://cdn-cf.smartfense.com/file/2024/07/UHD-1024x683.jpeg" },
    { id: 'galicia', nombre: 'Banco Galicia', icon: '🏦', cuotasMax: 12, interes: 0, imagen: 'https://media.minutouno.com/p/25039099f8d75fa5a98d57454735522e/adjuntos/150/imagenes/026/621/0026621910/1200x675/smart/galicia-logo-400x250-px.png' },
    { id: 'santander', nombre: 'Banco Santander', icon: '💳', cuotasMax: 12, interes: 0, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLJnd0jcO2tvjTL5CNSQ9YJkPZ1XnCCVyD1ZfaOpLbETbVYDfqOg0HHGd&s=100' },
    { id: 'nacion', nombre: 'Banco Nación', icon: '🇦🇷', cuotasMax: 12, interes: 0, imagen: "https://abappra.org.ar/backend/views/images/entidades/home/articulo178.jpg" },
    { id: 'bbva', nombre: 'BBVA Francés', icon: '🔵', cuotasMax: 12, interes: 0, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSJBQmecqoyTIcFVlW2vHpjicoa9sIYG5IXS_MgBTtYohmS8ZEW4S_Oo&s=100" },
    { id: 'supervielle', nombre: 'Banco Supervielle', icon: '🟣', cuotasMax: 9, interes: 0, imagen: "https://content-us-7.content-cms.com/8ba19f21-9a97-4525-8886-f54d823a5cea/dxresources/3041/30416e4e-99b8-41c3-8c03-b34ae6e225d1.jpg?resize=250px%3A175px&crop=250%3A175%3B0%2C0" },
    { id: 'ciudad', nombre: 'Banco Ciudad', icon: '🌆', cuotasMax: 9, interes: 0, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaNFxs0_fx2ebpKoYr5MRqAqHIZ5jMwc13C4cmbzXmTugPNjHgGMl1KSp&s=100" },
    { id: 'patagonia', nombre: 'Banco Patagonia', icon: '⛰️', cuotasMax: 6, interes: 0, imagen: "https://www.uncuyo.edu.ar/prensa/cache/captura7_732_1296.png" },
    { id: 'macro', nombre: 'Banco Macro', icon: '🏛️', cuotasMax: 12, interes: 0, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4RxzSrBeDTOrthoScyJ1Xez7BeVwGjDVBBD2ZbLXSYjNcrXOVwWMg93dG&s=100" },
    { id: 'hipotecario', nombre: 'Banco Hipotecario', icon: '🏠', cuotasMax: 6, interes: 0, imagen: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Logo_Banco_Hipotecario.svg/330px-Logo_Banco_Hipotecario.svg.png?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" }
];

export const metodosPago = [
    { id: 'debito', nombre: 'Tarjeta de Débito', icon: '💳', requiereBanco: true, logo: null },
    { id: 'credito', nombre: 'Tarjeta de Crédito', icon: '💳', requiereBanco: true, logo: null },
    { id: 'mercadopago', nombre: 'Mercado Pago', icon: null, requiereBanco: false, logo: "https://static.vecteezy.com/system/resources/previews/067/065/678/non_2x/mercadopago-logo-square-rounded-mercadopago-logo-free-download-mercadopago-logo-free-png.png" },
    { id: 'transferencia', nombre: 'Transferencia Bancaria', icon: '🏦', requiereBanco: false, logo: null }
];

export const metodosEnvio = [
    { id: 'retiro', nombre: 'Retiro en Tienda', icon: '🏪', costo: 0, descripcion: 'Av. Siempre Viva 742, CABA' },
    { id: 'domicilio', nombre: 'Envío a Domicilio', icon: '🚚', costo: null, descripcion: 'Calculado según código postal' },
    { id: 'sucursal', nombre: 'Envío a Sucursal Andreani', icon: '🏤', costo: null, descripcion: 'Retirás en la sucursal más cercana' }
];