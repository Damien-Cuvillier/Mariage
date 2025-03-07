import React, { useEffect, useState, useMemo } from 'react';

function Banner() {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const eventDate = useMemo(() => new Date('2025-09-13T14:00:00'), []);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = eventDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [eventDate]);

    return (
        <div className="w-full p-4 md:p-8 text-center mt-8 md:mt-8">
            {/* Titre responsive */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 md:mb-8 font-bold">Léa & Damien</h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-6 md:mb-8 font-bold">13 Septembre 2025</h2>
            {/* Compte à rebours responsive */}
            <div className="grid grid-cols-2 md:flex md:justify-center items-center gap-4 md:gap-8 mb-6 md:mb-8 max-w-xs md:max-w-none mx-auto">
                <div className="flex flex-col items-center p-2 md:p-4 bg-white/50 rounded-lg shadow-sm">
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{countdown.days}</span>
                    <span className="text-sm md:text-lg text-gray-600">jours</span>
                </div>
                <div className="flex flex-col items-center p-2 md:p-4 bg-white/50 rounded-lg shadow-sm">
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{countdown.hours}</span>
                    <span className="text-sm md:text-lg text-gray-600">heures</span>
                </div>
                <div className="flex flex-col items-center p-2 md:p-4 bg-white/50 rounded-lg shadow-sm">
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{countdown.minutes}</span>
                    <span className="text-sm md:text-lg text-gray-600">minutes</span>
                </div>
                <div className="flex flex-col items-center p-2 md:p-4 bg-white/50 rounded-lg shadow-sm">
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{countdown.seconds}</span>
                    <span className="text-sm md:text-lg text-gray-600">secondes</span>
                </div>
            </div>

            {/* Images responsives */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                {[
                    { src: 'leadamien20.webp', alt: 'cérémonie laique' },
                    { src: 'leadamien10.webp', alt: 'alliances'},
                    { src: 'leadamien18.webp', alt: 'remerciements'}
                ].map((image, index) => (
                    <div key={index} className="relative w-full md:w-[300px] lg:w-[500px] group">
                        <img 
                            src={`${process.env.PUBLIC_URL}/images/${image.src}`}
                            alt={image.alt}
                            className="w-full h-[400px] md:h-[450px] lg:h-[600px] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 rounded-lg"></div>
                        <span className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl lg:text-6xl font-bold pt-12">
                            {image.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banner;