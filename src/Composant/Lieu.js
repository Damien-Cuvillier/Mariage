// mariage/src/Composant/Lieu.js
import React from 'react';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './Arrow';

const Lieu = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />, // Ajoutez la flèche gauche
        nextArrow: <NextArrow />, // Ajoutez la flèche droite
        autoplay: true, // Activez le défilement automatique
        autoplaySpeed: 3000, // Durée entre chaque défilement (en millisecondes)
        pauseOnHover: true, // Mettre en pause le défilement lors du survol
    };

    const images = [
        { src: '/images/Salle.webp', alt: 'Grange de Fossillon' },
        { src: '/images/Salle1.webp', alt: 'Grange de Fossillon' },
        { src: '/images/Salle5.webp', alt: 'Grange de Fossillon' },
        { src: '/images/Salle9.webp', alt: 'Grange de Fossillon' },
        { src: '/images/Salle10.webp', alt: 'Grange de Fossillon' },
        { src: '/images/Salle7.webp', alt: 'Grange de Fossillon' },
        { src: '/images/Salle4.webp', alt: 'Grange de Fossillon' },
        { src: '/images/Salle2.webp', alt: 'Grange de Fossillon' },
        { src: '/images/Salle3.webp', alt: 'Grange de Fossillon' },
        { src: '/images/Salle6.webp', alt: 'Grange de Fossillon' },
        { src: '/images/Salle11.webp', alt: 'Grange de Fossillon' },

        // Ajoutez d'autres images ici
    ];

    return (
        <div className="container mx-auto px-6 py-4">
            <h2 className="text-2xl font-serif mb-4 text-center">Ouuuuuh la belle salle</h2>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center">
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-[768px] object-contain rounded-lg" // Ajustez la hauteur ici
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Lieu;