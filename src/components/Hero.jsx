import React from 'react';

const Hero = () => (
    <section className="hero-section text-white py-5">
        <div className="container py-4">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <span className="badge bg-danger mb-3" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>
                        <i className="bi bi-fire me-1"></i> Hasta 12 cuotas sin interés
                    </span>
                    <h1 className="display-3 fw-bold mb-3">
                        Tecnología de <br /><span style={{ color: '#0d6efd' }}>vanguardia</span>
                    </h1>
                    <p className="lead mb-4" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                        Los mejores componentes y periféricos para tu setup.
                        Calidad y rendimiento garantizados con <strong>envío gratis</strong> en toda Argentina.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                        <a href="#productos" className="btn btn-primary btn-lg">
                            <i className="bi bi-grid me-2"></i> Ver productos
                        </a>
                        <a href="#contacto" className="btn btn-outline-light btn-lg">
                            <i className="bi bi-chat-dots me-2"></i> Contactanos
                        </a>
                    </div>
                    <div className="mt-4 pt-3 d-flex gap-4 flex-wrap border-top border-light border-opacity-25">
                        <div><span className="fw-bold fs-4">15+</span><span className="d-block small">Productos</span></div>
                        <div><span className="fw-bold fs-4">10</span><span className="d-block small">Bancos</span></div>
                        <div><span className="fw-bold fs-4">12</span><span className="d-block small">Cuotas sin interés</span></div>
                        <div><span className="fw-bold fs-4">🚚</span><span className="d-block small">Envío gratis</span></div>
                    </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block text-end">
                    <div className="position-relative" style={{ display: 'inline-block' }}>
                        <i className="bi bi-pc-display-horizontal display-1 opacity-25"></i>
                        <div className="position-absolute top-50 start-50 translate-middle" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(13,110,253,0.1) 0%, transparent 70%)', borderRadius: '50%', zIndex: -1 }}></div>
                        <div className="position-absolute bg-success rounded-circle p-3" style={{ width: 60, height: 60, top: -25, right: -25, animation: 'float 3s ease-in-out infinite' }}>
                            <span className="text-white fw-bold" style={{ fontSize: '0.7rem' }}>-20% OFF</span>
                        </div>
                        <div className="position-absolute bg-warning rounded-circle p-2" style={{ width: 50, height: 50, bottom: -10, left: -10, animation: 'float 3s ease-in-out infinite 1s' }}>
                            <span className="text-dark fw-bold" style={{ fontSize: '0.6rem' }}>12x s/i</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;