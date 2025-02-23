import React from 'react';
import { Link } from 'react-router-dom';

const Description = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
            {/* Titres responsifs */}
            <h2 className="text-xl sm:text-2xl text-white md:text-3xl font-bold mb-3 sm:mb-4">
                Bienvenue à notre mariage !
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-4 sm:mb-6">
                Le week-end du 13 Septembre 2025
            </h3>

            {/* Conteneur pour le texte avec largeur maximale */}
            <div className="max-w-2xl mx-auto">
                {/* Paragraphes responsifs */}
                <p className="text-sm sm:text-base text-black mb-3 sm:mb-4 leading-relaxed">
                    Nous sommes ravis de vous accueillir pour célébrer notre union. 
                    Voici le programme de la journée, où vous trouverez tous les détails 
                    concernant les événements prévus. 
                </p>
                <p className="text-sm sm:text-base text-black pb-4 leading-relaxed">
                    N'hésitez pas à nous contacter si vous avez des questions. 
                    Nous avons hâte de partager ce moment spécial avec vous !
                </p>

                {/* Message RSVP avec animation */}
                <div className="transform hover:scale-105 transition-transform duration-300">
                    <span className="block text-lg sm:text-xl text-white font-bold mb-6 sm:mb-8 text-black">
                        Merci de répondre sur l'onglet RSVP
                    </span>
                </div>

                {/* Bouton responsif avec effets */}
                <div className="text-center mt-4 sm:mt-6">
                    <Link to="/rsvp">
                        <button className="
                            w-full sm:w-auto
                            bg-gray-200 text-black 
                            py-3 px-6 sm:py-2 sm:px-4 
                            rounded-lg
                            shadow-lg hover:shadow-xl
                            hover:bg-gray-300
                            transform hover:-translate-y-1
                            transition-all duration-300
                            text-sm sm:text-base
                            font-medium
                            focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
                        ">
                            Confirmez votre venue
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Description;