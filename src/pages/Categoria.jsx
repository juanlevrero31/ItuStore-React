import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { productos } from '../data/productos'; // Asegurate de exportar tus productos

const formatearPrecio = (precio) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(precio);

const Categoria = () => {
    const { categoria } = useParams(); // Toma el nombre de la URL
    const { agregarAlCarrito } = useCart();

    // Filtramos los productos según la URL
    const productosFiltrados = productos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());

    return (
        <div className="container py-5">
            <div className="d-flex align-items-center mb-4">
                <Link to="/" className="btn btn-outline-secondary me-3">
                    <i className="bi bi-arrow-left"></i> Volver
                </Link>
                <h2 className="fw-bold m-0 text-capitalize">{categoria}</h2>
            </div>
            
            <div className="row g-4">
                {productosFiltrados.length === 0 ? (
                    <p>No hay productos en esta categoría.</p>
                ) : (
                    productosFiltrados.map(prod => (
                        <div key={prod.id} className="col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 shadow-sm">
                                <img src={prod.imagen} className="card-img-top" alt={prod.nombre} style={{ height: '200px', objectFit: 'contain', padding: '10px', backgroundColor: '#f8f9fa' }} />
                                <div className="card-body d-flex flex-column">
                                    <span className="badge bg-secondary mb-2 align-self-start">{prod.categoria}</span>
                                    <h5 className="card-title" style={{ fontSize: '1.1rem' }}>{prod.nombre}</h5>
                                    <div className="mt-2 mb-3">
                                        <span className="precio text-primary fw-bold fs-4">{formatearPrecio(prod.precio)}</span>
                                    </div>
                                    <button className="btn btn-primary w-100 mt-auto" onClick={() => agregarAlCarrito(prod)}>
                                        <i className="bi bi-cart-plus me-2"></i>Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Categoria;