import React from 'react';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from './Arrow';

const Hebergement = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false, // Cache les flèches sur mobile
                    dots: true
                }
            }
        ]
    };

    const images = [
        { src: process.env.PUBLIC_URL + '/images/Salle1.webp', alt: 'Grange de Fossillon' },
        { src: process.env.PUBLIC_URL + '/images/Salle.webp', alt: 'Grange de Fossillon' },
        { src: process.env.PUBLIC_URL + '/images/H.webp', alt: 'Grange de Fossillon' },
        { src: process.env.PUBLIC_URL + '/images/H6.webp', alt: 'Grange de Fossillon' },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
            <div 
                className="fixed inset-0 w-full h-full pointer-events-none -z-30 opacity-80"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Cadre2.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                aria-hidden="true"
            />
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-8 text-center">
                Hébergements
            </h2>

            {/* Conteneur du slider avec ratio d'aspect */}
            <div className="w-full aspect-video max-h-[400px] mb-6 sm:mb-8">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="relative h-full">
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-contain rounded-xl" 
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Conteneur pour le texte avec largeur maximale */}
            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
                <p className='text-sm sm:text-base text-center'>
                    Nous avons à disposition un total de <strong>31 couchages</strong> répartis en 2 gîtes de <strong>10 et 15 convives</strong>, ainsi que 2 roulottes tout-confort, totalement fonctionnelles et isolées.
                </p>
                
                <p className='text-sm sm:text-base text-center'>
                    Les hébergements seront réservés en premier pour les personnnes habitant loin d'Autrèche, qui ne peuvent pas rentrer chez eux le soir même. Merci de votre compréhension
                </p>
                
                <p className='text-sm sm:text-base text-center'>
                    Nous avons aussi la possibilité de dormir en tente si jamais il n'y a plus de place, nous avons le droit jusqu'à <strong>5 tentes</strong>
                </p>
            </div>
        </div>
    );
};

export default Hebergement;