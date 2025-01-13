import React from 'react';

function Banner() {
    return (
        <div className="w-full p-8 text-center">
            <h1 className="text-4xl mb-8 font-serif">Léa & Damien</h1>
            <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="relative">
                    <img 
                        src="/images/photo1.jpg" 
                        alt="cérémonie laique" 
                        className="w-[300px] h-[200px] object-cover rounded-lg"
                    />
                    <span className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">13</span>
                </div>
                <div className="relative">
                    <img 
                        src="/images/photo2.jpg" 
                        alt="alliances" 
                        className="w-[300px] h-[200px] object-cover rounded-lg"
                    />
                    <span className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">09</span>
                </div>
                <div className="relative">
                    <img 
                        src="/images/photo3.jpg" 
                        alt="remerciements" 
                        className="w-[300px] h-[200px] object-cover rounded-lg"
                    />
                    <span className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">25</span>
                </div>
            </div>
        </div>
    );
}

export default Banner;
