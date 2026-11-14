import React from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartModal = ({ abierto, onCerrar }) => {
    const { carrito, eliminarDelCarrito, vaciarCarrito, calcularTotal } = useCart();
    const navigate = useNavigate();

    // Si el modal está cerrado, no renderizamos NADA.
    if (!abierto) return null;

    const formatearPrecio = (precio) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(precio);
    const total = calcularTotal();

    const irAlCheckout = () => {
        onCerrar(); 
        navigate('/checkout'); 
    };

    return createPortal(
        <>
            {/* Fondo oscuro */}
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 9998 }} onClick={onCerrar}></div>
            
            {/* Contenedor del Modal */}
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, pointerEvents: 'none' }}>
                <div className="bg-white shadow-lg" style={{ width: '100%', maxWidth: '600px', maxHeight: '90vh', display: 'flex', flexDirection: 'column', pointerEvents: 'auto', borderRadius: '12px', overflow: 'hidden' }}>
                    
                    {/* Header del Carrito */}
                    <div className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
                        <h5 className="m-0"><i className="bi bi-cart3 me-2"></i>Tu Carrito</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onCerrar}></button>
                    </div>
                    
                    {/* Body del Carrito (Lista de productos) */}
                    <div className="p-4" style={{ overflowY: 'auto' }}>
                        {carrito.length === 0 ? (
                            <p className="text-center text-muted my-4">Tu carrito está vacío</p>
                        ) : (
                            <ul className="list-group list-group-flush">
                                {carrito.map((item, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <div>
                                            <strong>{item.nombre}</strong>
                                            <span className="badge bg-secondary ms-2">x{item.cantidad}</span>
                                        </div>
                                        <div>
                                            <span className="me-3">{formatearPrecio(item.precio * item.cantidad)}</span>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => eliminarDelCarrito(index)}>
                                                <i className="bi bi-trash3"></i>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        
                        {carrito.length > 0 && (
                            <div className="mt-3 p-3 bg-light rounded">
                                <div className="d-flex justify-content-between fw-bold fs-5">
                                    <span>Total:</span>
                                    <span>{formatearPrecio(total)}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Footer del Carrito (Botones) */}
                    <div className="p-3 bg-light d-flex justify-content-between border-top">
                        <button type="button" className="btn btn-danger" onClick={vaciarCarrito} disabled={carrito.length === 0}>
                            Vaciar
                        </button>
                        <div>
                            <button type="button" className="btn btn-secondary me-2" onClick={onCerrar}>Cerrar</button>
                            <button type="button" className="btn btn-success" onClick={irAlCheckout} disabled={carrito.length === 0}>
                                Finalizar Compra <i className="bi bi-arrow-right ms-2"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>,
        document.body
    );
};

export default CartModal;