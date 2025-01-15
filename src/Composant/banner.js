import React, { useEffect, useState } from 'react';

function Banner() {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Date de l'événement
    const eventDate = new Date('2025-09-13T00:00:00'); // Remplacez par la date de votre événement

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = eventDate - now;

            // Calcul des jours, heures, minutes et secondes restantes
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Mettre à jour l'état du compte à rebours
            setCountdown({ days, hours, minutes, seconds });

            // Si le compte à rebours est terminé, arrêtez l'intervalle
            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        // Nettoyage de l'intervalle lors du démontage du composant
        return () => clearInterval(interval);
    }, [eventDate]);

    return (
        <div className="w-full p-8 text-center">
            <h1 className="text-4xl mb-8 font-bold">Léa & Damien</h1>
            {/* Compte à rebours */}
            <div className="flex justify-center items-center gap-8 mb-8">
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-gray-800">{countdown.days}</span>
                    <span className="text-lg text-gray-600">jours</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-gray-800">{countdown.hours}</span>
                    <span className="text-lg text-gray-600">heures</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-gray-800">{countdown.minutes}</span>
                    <span className="text-lg text-gray-600">minutes</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-gray-800">{countdown.seconds}</span>
                    <span className="text-lg text-gray-600">secondes</span>
                </div>
            </div>
            <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="relative">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/Photo1.jpg`}  
                        alt="cérémonie laique" 
                        className="w-[500px] h-[400px] object-cover rounded-lg"
                    />
                    <span className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold pt-12">13</span>
                </div>
                <div className="relative">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/Photo2.jpg`}  
                        alt="alliances" 
                        className="w-[500px] h-[400px] object-cover rounded-lg"
                    />
                    <span className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold pt-12">09</span>
                </div>
                <div className="relative">
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/Photo3.jpg`}  
                        alt="remerciements" 
                        className="w-[500px] h-[400px] object-cover rounded-lg"
                    />
                    <span className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold pt-12">2025</span>
                </div>
            </div>
        </div>
    );
}

export default Banner;