import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

function App() {
    const [cartAbierto, setCartAbierto] = useState(false);
    const [checkoutAbierto, setCheckoutAbierto] = useState(false);

    return (
        <CartProvider>
            <Header onAbrirCarrito={() => setCartAbierto(true)} />
            <main>
                <Hero />
                <ProductList />
                <ContactForm />
            </main>
            <Footer />
            
            <CartModal 
                abierto={cartAbierto} 
                onCerrar={() => setCartAbierto(false)} 
                onCheckout={() => {
                    setCartAbierto(false);
                    setCheckoutAbierto(true);
                }} 
            />
            
            <CheckoutModal 
                abierto={checkoutAbierto} 
                onCerrar={() => setCheckoutAbierto(false)} 
            />
        </CartProvider>
    );
}

export default App;