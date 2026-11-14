// src/services/envioService.js

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const cotizarEnvio = async (codigoPostal, paquetes) => {
    try {
        const response = await fetch(`${API_URL}/api/cotizar-envio`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ codigoPostal, paquetes })
        });
        
        if (!response.ok) {
            throw new Error('Error al cotizar envío');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en cotizarEnvio:', error);
        throw error;
    }
};

// También puedes agregar una función para obtener sucursales de Andreani
export const obtenerSucursales = async (codigoPostal) => {
    try {
        const response = await fetch(`${API_URL}/api/sucursales?cp=${codigoPostal}`);
        if (!response.ok) throw new Error('Error al obtener sucursales');
        return await response.json();
    } catch (error) {
        console.error('Error en obtenerSucursales:', error);
        throw error;
    }
};