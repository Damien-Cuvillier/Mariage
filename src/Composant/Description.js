// mariage/src/Composant/Description.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link
const Description = () => {
    return (
        <div className="container mx-auto px-6 py-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Bienvenue à notre mariage !</h2>
            <h3 className="text-2xl font-bold mb-4">Le week-end du 13 Septembre 2025 </h3>
            <p className="text-gray-700 mb-4">
                Nous sommes ravis de vous accueillir pour célébrer notre union. 
                Voici le programme de la journée, où vous trouverez tous les détails 
                concernant les événements prévus. 
            </p>
            <p className="text-gray-700 pb-4">
                N'hésitez pas à nous contacter si vous avez des questions. 
                Nous avons hâte de partager ce moment spécial avec vous !
            </p>
            <span className='font-bold text-xl font-bold'>Merci de répondre sur l'onglet RSVP</span>
            <div className="text-center mt-8">
                <Link to="/rsvp">
                    <button className="bg-gray-200 text-black py-2 px-4 shadow-xl rounded-lg hover:bg-gray-400 border-transition duration-200">
                        Confirmez votre venue
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Description;

