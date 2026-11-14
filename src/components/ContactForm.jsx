import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Header = ({ onAbrirCarrito }) => {
    const { totalProductos } = useCart();
    const [menuAbierto, setMenuAbierto] = useState(false); // Estado para el menú móvil

    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">
                        <i className="bi bi-pc-display-horizontal me-2"></i>ItuStore
                    </a>
                    
                    {/* Botón de menú móvil controlado por React */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={() => setMenuAbierto(!menuAbierto)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menú controlado por React */}
                    <div className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            <li className="nav-item">
                                <a className="nav-link active" href="#productos">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                            <li className="nav-item position-relative">
                                <button
                                    className="btn btn-outline-light position-relative"
                                    onClick={onAbrirCarrito}
                                >
                                    <i className="bi bi-cart3 fs-5"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {totalProductos}
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;