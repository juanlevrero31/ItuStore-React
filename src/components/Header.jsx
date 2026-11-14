import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = ({ onAbrirCarrito }) => {
    const { totalProductos } = useCart();
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">
                        <i className="bi bi-pc-display-horizontal me-2"></i>ItuStore
                    </Link>
                    
                    <button className="navbar-toggler" type="button" onClick={() => setMenuAbierto(!menuAbierto)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            {/* Enlaces a las secciones */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/categoria/Laptops">Portátiles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categoria/Monitores">Monitores</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categoria/Ratones">Ratones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categoria/Memorias">Memorias</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categoria/Almacenamiento">Almacenamiento</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categoria/Auriculares">Auriculares</Link>
                            </li>
                            
                            {/* Botón del carrito */}
                            <li className="nav-item position-relative ms-lg-3">
                                <button className="btn btn-outline-light position-relative" onClick={onAbrirCarrito}>
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