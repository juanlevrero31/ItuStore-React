import React from 'react';
import { useCart } from '../context/CartContext';

const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(precio);
};

const ProductCard = ({ producto }) => {
    const { agregarAlCarrito } = useCart();

    // Calcular porcentaje de oferta si tiene precio anterior
    const porcentajeOferta = producto.precioAnterior 
        ? Math.round(((producto.precioAnterior - producto.precio) / producto.precioAnterior) * 100) 
        : 0;

    return (
        <div className="card h-100 shadow-sm border-0" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            {/* Contenedor de la imagen y los badges */}
            <div className="position-relative">
                <img 
                     src={producto.imagen} 
                     className="card-img-top" 
                     alt={producto.nombre} 
                     loading="lazy"
                     style={{ height: '200px', objectFit: 'contain', padding: '15px', backgroundColor: '#f8f9fa' }} 
                />
                
                {/* Badges de Oferta y Envío Gratis */}
                <div className="position-absolute top-0 start-0 p-2 d-flex flex-column gap-1">
                    {porcentajeOferta > 0 && (
                        <span className="badge bg-danger">🔥 -{porcentajeOferta}%</span>
                    )}
                    {producto.envioGratis && (
                        <span className="badge bg-success">🚚 Envío gratis</span>
                    )}
                </div>
            </div>

            {/* Contenido de la tarjeta */}
            <div className="card-body d-flex flex-column">
                <span className="badge bg-secondary mb-2 align-self-start" style={{ fontSize: '0.7rem' }}>
                    {producto.categoria}
                </span>
                
                <h5 className="card-title fw-bold" style={{ fontSize: '1.05rem', minHeight: '2.5rem' }}>
                    {producto.nombre}
                </h5>
                
                <p className="card-text text-muted small flex-grow-1">
                    {producto.descripcion}
                </p>

                {/* Precios */}
                <div className="mt-2 mb-3">
                    {producto.precioAnterior && (
                        <span className="text-decoration-line-through text-muted small d-block">
                            {formatearPrecio(producto.precioAnterior)}
                        </span>
                    )}
                    <span className="precio text-primary fw-bold fs-4">
                        {formatearPrecio(producto.precio)}
                    </span>
                </div>

                {/* Botón de Agregar */}
                <button 
                    className="btn btn-primary w-100 mt-auto" 
                    onClick={() => agregarAlCarrito(producto.id)}
                >
                    <i className="bi bi-cart-plus me-2"></i>Agregar
                </button>

                {/* Información de Cuotas */}
                {producto.cuotas && (
                    <small className="text-muted mt-2 text-center d-block">
                        {producto.cuotas}x {formatearPrecio(producto.precio / producto.cuotas)} sin interés
                    </small>
                )}
            </div>
        </div>
    );
};

export default ProductCard;