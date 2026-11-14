# 🛒 ItuStore - Tienda de Computación (React)

¡Bienvenido a ItuStore! Una tienda de e-commerce moderna y funcional, especializada en la venta de componentes de computación, laptops, periféricos y más.

Este proyecto fue desarrollado con **React** para ofrecer una experiencia de usuario fluida, rápida y profesional.

## 🚀 Características Principales

*   **Catálogo de Productos:** Visualización de productos en tarjetas interactivas con imágenes, descripciones y precios actualizados al mercado argentino.
*   **Filtros por Categorías:** Navegación dinámica por secciones (Portátiles, Monitores, Ratones, Memorias, Almacenamiento, Auriculares) mediante rutas URL (`/categoria/:categoria`).
*   **Carrito de Compras:** Sistema de carrito persistente (utilizando `localStorage`) que permite agregar, eliminar y modificar cantidades de productos.
*   **Checkout por Pasos:** Flujo de compra completo que incluye:
    1.  Formulario de datos del comprador (Nombre, Apellido, DNI, Email).
    2.  Selección de método de envío (Retiro en tienda, Envío a domicilio, Sucursal).
    3.  Selección de método de pago (Tarjetas, Mercado Pago) y elección de bancos con sus respectivas cuotas sin interés.
*   **Confirmación de Compra:** Generación de un número de pedido único y resumen de la transacción.
*   **Diseño Responsive:** Interfaz adaptable a dispositivos móviles y de escritorio, utilizando **Bootstrap 5** y CSS personalizado.

## 🛠️ Tecnologías Utilizadas

*   **React.js** (Create React App) - Biblioteca principal para la interfaz de usuario.
*   **React Router DOM** - Para el manejo de múltiples vistas y navegación.
*   **Context API** - Para el manejo del estado global del carrito de compras.
*   **Bootstrap 5 & Bootstrap Icons** - Para el diseño, grillas y componentes visuales.
*   **LocalStorage** - Para guardar los productos del carrito incluso al recargar la página.

## 💻 Instalación y Uso Local

Si querés clonar este proyecto y correrlo en tu computadora, seguí estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/juanlevrero31/ItuStore-React.git
