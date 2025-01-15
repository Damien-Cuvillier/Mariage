// mariage/src/Composant/Lieu.js
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
        prevArrow: <PrevArrow />, // Ajoutez la flèche gauche
        nextArrow: <NextArrow />, // Ajoutez la flèche droite
        autoplay: true, // Activez le défilement automatique
        autoplaySpeed: 3000, // Durée entre chaque défilement (en millisecondes)
        pauseOnHover: true, // Mettre en pause le défilement lors du survol
    };

    const images = [
        { src: process.env.PUBLIC_URL + '/images/Salle1.webp', alt: 'Grange de Fossillon' },
        { src: process.env.PUBLIC_URL + '/images/Salle.webp', alt: 'Grange de Fossillon' },
        { src: process.env.PUBLIC_URL + '/images/H.webp', alt: 'Grange de Fossillon' },
        { src: process.env.PUBLIC_URL + '/images/H6.webp', alt: 'Grange de Fossillon' },
      
        // Ajoutez d'autres images ici
    ];

    return (
        <div className="container mx-auto px-6 py-4">
        <div 
        className="fixed inset-0 w-full h-full pointer-events-none -z-30 opacity-80"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/Story.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
            <h2 className="text-2xl font-bold mb-4 text-center">Hébergements</h2>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center">
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-[400px] object-contain rounded-lg" // Ajustez la hauteur ici
                        />
                    </div>
                ))}
            </Slider>
            <p className='mt-8 text-center '>Nous avons à disposition un total de 31 couchages répartis en 2 gîtes de 10 et 15 convives, ainsi que 2 roulottes tout-confort, totalement fonctionnelles et isolées.</p>
            <p className='mt-2 text-center '>Les hébergements seront réservés en premier pour les personnnes habitant loin d'Autrèche, qui ne peuvent pas rentrer chez eux le soir même. Merci de votre compréhension</p>
            <p className='mt-2 text-center '>Nous avons aussi la possibilité de dormir en tente si jamais il n'y a plus de place, nous avons le droit jusqu'à 5 tentes</p>
        </div>
    );
};

export default Hebergement;