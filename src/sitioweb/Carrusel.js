import React from 'react'

const Carrusel = () => {
    return (    
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://i.ibb.co/GPc4mxK/galeria1.jpg" className="d-block w-100" alt="galeria1" border="0" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Laboratorio de Software</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/vdfm2Rr/galeria2.jpg" className="d-block w-100" alt="galeria2" border="0" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Promociones y ofertas</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/LJPQrVH/galeria3.jpg" className="d-block w-100" alt="galeria3" border="0" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Servicios múltiples</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
}

export default Carrusel
