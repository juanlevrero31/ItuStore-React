import React, { createContext, useContext, useState, useEffect } from 'react';
import { productos } from '../data/productos';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [metodoEnvio, setMetodoEnvio] = useState('retiro');
    const [costoEnvio, setCostoEnvio] = useState(0);

    useEffect(() => {
        const guardado = localStorage.getItem('itustore_carrito');
        if (guardado) setCarrito(JSON.parse(guardado));
    }, []);

    useEffect(() => {
        localStorage.setItem('itustore_carrito', JSON.stringify(carrito));
    }, [carrito]);

    const agregarAlCarrito = (productoId) => {
        const producto = productos.find(p => p.id === productoId);
        if (!producto) return;

        setCarrito(prev => {
            const existe = prev.find(item => item.id === productoId);
            if (existe) {
                if (existe.cantidad >= producto.stock) {
                    alert(`⚠️ Solo hay ${producto.stock} unidades disponibles`);
                    return prev;
                }
                return prev.map(item =>
                    item.id === productoId ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            }
            return [...prev, { ...producto, cantidad: 1 }];
        });
    };

    const eliminarDelCarrito = (index) => {
        setCarrito(prev => prev.filter((_, i) => i !== index));
    };

    const vaciarCarrito = () => {
        if (carrito.length === 0) return;
        if (window.confirm('¿Seguro que quieres vaciar el carrito?')) {
            setCarrito([]);
        }
    };

    const calcularTotal = () => {
        return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    };

    const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            eliminarDelCarrito,
            vaciarCarrito,
            calcularTotal,
            totalProductos,
            metodoEnvio,
            setMetodoEnvio,
            costoEnvio,
            setCostoEnvio
        }}>
            {children}
        </CartContext.Provider>
    );
};