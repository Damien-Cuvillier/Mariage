// mariage/src/Composant/Description.js
import React from 'react';

const Description = () => {
    return (
        <div className="container mx-auto px-6 py-8 text-center">
            <h2 className="text-2xl font-serif mb-4">Bienvenue à notre mariage !</h2>
            <h3 className="text-2xl font-serif mb-4">Le week-end du 13 Septembre 2025 </h3>
            <p className="text-gray-700 mb-4">
                Nous sommes ravis de vous accueillir pour célébrer notre union. 
                Voici le programme de la journée, où vous trouverez tous les détails 
                concernant les événements prévus. 
            </p>
            <p className="text-gray-700">
                N'hésitez pas à nous contacter si vous avez des questions. 
                Nous avons hâte de partager ce moment spécial avec vous !
            </p>
        </div>
    );
};

export default Description;

