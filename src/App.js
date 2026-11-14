import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartModal from './components/CartModal';

// Páginas
import Home from './pages/Home';
import Categoria from './pages/Categoria';
import Checkout from './pages/CheckOut';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

function App() {
    const [cartAbierto, setCartAbierto] = useState(false);

    return (
        <CartProvider>
            <Router>
                {/* Header siempre visible */}
                <Header onAbrirCarrito={() => setCartAbierto(true)} />
                
                {/* El carrito flotante (se abre desde cualquier página) */}
                {cartAbierto && (
                    <CartModal 
                        abierto={cartAbierto} 
                        onCerrar={() => setCartAbierto(false)} 
                    />
                )}

                {/* Rutas de la aplicación */}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/categoria/:categoria" element={<Categoria />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </main>

                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;