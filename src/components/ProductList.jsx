import React from 'react';
import { productos } from '../data/productos';
import ProductCard from './ProductCard'; // <-- Importamos la nueva tarjeta

const ProductList = () => {
    return (
        <section id="productos" className="py-5">
            <div className="container">
                <h2 className="text-center fw-bold mb-2">Nuestros Productos</h2>
                <p className="text-center text-muted mb-5">Lo último en tecnología para tu computadora</p>
                
                <div className="row g-4">
                    {productos.map(producto => (
                        <div key={producto.id} className="col-sm-6 col-md-4 col-lg-3">
                            {/* Acá usamos nuestro componente y le pasamos el producto por props */}
                            <ProductCard producto={producto} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;