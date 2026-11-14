import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- IMPORTANTE
import { useCart } from '../context/CartContext';
import { bancos, metodosPago } from '../data/bancos';
import { metodosEnvio } from '../data/productos';

const formatearPrecio = (precio) => {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(precio);
};

const Checkout = ({ onCerrar }) => {
    const navigate = useNavigate();
    const { carrito, calcularTotal, vaciarCarrito } = useCart();
    const [paso, setPaso] = useState(1);
    
    // Estados del form
    const [datos, setDatos] = useState({ nombre: '', apellido: '', dni: '', email: '' });
    const [metodoEnvio, setMetodoEnvio] = useState('retiro');
    const [costoEnvio, setCostoEnvio] = useState(0);
    
    // Estados de pago
    const [metodoPago, setMetodoPago] = useState('credito');
    const [banco, setBanco] = useState('provincia');
    const [cuotas, setCuotas] = useState(1);
    
    const [nroPedido, setNroPedido] = useState('');
    const [procesando, setProcesando] = useState(false);

    const totalProductos = calcularTotal();
    const totalFinal = totalProductos + costoEnvio;
    
    const maxCuotasBanco = bancos.find(b => b.id === banco)?.cuotasMax || 1;
    const metodoPagoObj = metodosPago.find(m => m.id === metodoPago);
    const bancoObj = bancos.find(b => b.id === banco);

    const handleMetodoEnvio = (id) => {
        setMetodoEnvio(id);
        const envio = metodosEnvio.find(e => e.id === id);
        setCostoEnvio(envio.costo);
    };

    const finalizarCompra = () => {
        setProcesando(true);
        setTimeout(() => {
            setNroPedido('ITU-' + Math.floor(10000000 + Math.random() * 90000000));
            vaciarCarrito();
            setPaso(3); 
            setProcesando(false);
        }, 1000);
    };

    // En lugar de un modal, es un contenedor a pantalla completa
    return (
        <div className="bg-light min-vh-100 py-5">
            <div className="container" style={{ maxWidth: '800px' }}>
                
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold m-0">
                        {paso === 1 && 'Datos y Envío'}
                        {paso === 2 && 'Método de Pago'}
                        {paso === 3 && 'Compra Exitosa'}
                    </h2>
                    <button className="btn btn-outline-secondary" onClick={onCerrar}>
                        <i className="bi bi-x-lg me-2"></i>Cancelar
                    </button>
                </div>

                <div className="card shadow-sm border-0">
                    <div className="card-body p-4">
                        
                        {/* PASO 1: DATOS Y ENVÍO */}
                        {paso === 1 && (
                            <div>
                                <h6 className="fw-bold mb-3">Datos del Comprador</h6>
                                <div className="row g-3 mb-4">
                                    <div className="col-6"><input type="text" className="form-control" placeholder="Nombre" value={datos.nombre} onChange={e => setDatos({...datos, nombre: e.target.value})} /></div>
                                    <div className="col-6"><input type="text" className="form-control" placeholder="Apellido" value={datos.apellido} onChange={e => setDatos({...datos, apellido: e.target.value})} /></div>
                                    <div className="col-6"><input type="number" className="form-control" placeholder="DNI" value={datos.dni} onChange={e => setDatos({...datos, dni: e.target.value})} /></div>
                                    <div className="col-6"><input type="email" className="form-control" placeholder="Email" value={datos.email} onChange={e => setDatos({...datos, email: e.target.value})} /></div>
                                </div>

                                <h6 className="fw-bold mb-3">Método de Envío</h6>
                                <div className="row g-2 mb-4">
                                    {metodosEnvio.map(envio => (
                                        <div className="col-md-4" key={envio.id}>
                                            <div className={`card p-3 text-center h-100 ${metodoEnvio === envio.id ? 'border-primary border-2 bg-light' : 'border-secondary'}`} onClick={() => handleMetodoEnvio(envio.id)} style={{ cursor: 'pointer' }}>
                                                <div className="fs-3">{envio.icon}</div>
                                                <div className="fw-bold" style={{fontSize: '0.9rem'}}>{envio.nombre}</div>
                                                <small className="text-muted">{envio.costo === 0 ? 'Gratis' : formatearPrecio(envio.costo)}</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="btn btn-primary w-100 py-2" onClick={() => setPaso(2)}>Continuar al Pago</button>
                            </div>
                        )}

                        {/* PASO 2: MÉTODOS DE PAGO Y BANCOS */}
                        {paso === 2 && (
                            <div>
                                <h6 className="fw-bold mb-3">Método de pago</h6>
                                <div className="row g-2 mb-4">
                                    {metodosPago.map(metodo => (
                                        <div className="col-6 col-md-3" key={metodo.id}>
                                            <div className={`card p-2 text-center h-100 ${metodoPago === metodo.id ? 'border-primary border-2 bg-light' : 'border-secondary'}`} onClick={() => setMetodoPago(metodo.id)} style={{ cursor: 'pointer' }}>
                                                <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    {metodo.logo ? <img src={metodo.logo} alt={metodo.nombre} style={{ maxHeight: '40px', maxWidth: '100%' }} /> : <span style={{ fontSize: '2rem' }}>{metodo.icon}</span>}
                                                </div>
                                                <small className="fw-bold mt-2" style={{ fontSize: '0.75rem' }}>{metodo.nombre}</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {metodoPagoObj?.requiereBanco && (
                                    <>
                                        <h6 className="fw-bold mb-3">Seleccioná tu Banco</h6>
                                        <div className="row g-2 mb-4">
                                            {bancos.map(b => (
                                                <div className="col-6 col-md-4" key={b.id}>
                                                    <div className={`card p-2 text-center h-100 ${banco === b.id ? 'border-primary border-2 bg-light' : 'border-secondary'}`} onClick={() => { setBanco(b.id); setCuotas(1); }} style={{ cursor: 'pointer' }}>
                                                        <div style={{ height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
                                                            <img src={b.imagen} alt={b.nombre} style={{ maxHeight: '30px', maxWidth: '100%' }} />
                                                        </div>
                                                        <div className="fw-bold" style={{fontSize: '0.8rem'}}>{b.nombre}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {metodoPago === 'credito' && (
                                    <>
                                        <h6 className="fw-bold mb-3">Cuotas</h6>
                                        <select className="form-select mb-4" value={cuotas} onChange={e => setCuotas(parseInt(e.target.value))}>
                                            {Array.from({ length: maxCuotasBanco }, (_, i) => i + 1).map(c => (
                                                <option key={c} value={c}>{c} cuotas de {formatearPrecio(totalFinal / c)}</option>
                                            ))}
                                        </select>
                                    </>
                                )}

                                <div className="bg-light p-3 rounded mb-4 d-flex justify-content-between fw-bold fs-5">
                                    <span>Total Final:</span><span>{formatearPrecio(totalFinal)}</span>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-outline-secondary px-4" onClick={() => setPaso(1)}>Volver</button>
                                    <button className="btn btn-success px-4" onClick={finalizarCompra} disabled={procesando}>
                                        {procesando ? <><span className="spinner-border spinner-border-sm me-2"></span>Procesando...</> : 'Confirmar Pago'}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* PASO 3: ÉXITO */}
                        {paso === 3 && (
                            <div className="text-center py-5">
                                <div className="display-1 text-success mb-3"><i className="bi bi-check-circle-fill"></i></div>
                                <h3 className="fw-bold text-success mb-3">¡Tu compra fue realizada con éxito!</h3>
                                <div className="bg-light p-4 rounded d-inline-block mb-4 border">
                                    <h5 className="mb-0">Nro de Pedido: <strong className="text-primary">{nroPedido}</strong></h5>
                                </div>
                                <p>Te enviamos los detalles a <strong>{datos.email}</strong></p>
                                <p className="small text-muted mb-4">
                                    Pagaste con {metodoPagoObj?.nombre} {bancoObj ? `- ${bancoObj.nombre}` : ''} 
                                    {metodoPago === 'credito' ? ` en ${cuotas} cuotas.` : '.'}
                                </p>
                                <button className="btn btn-primary px-5 py-2" onClick={onCerrar}>Volver a la Tienda</button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;