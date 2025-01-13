import React from 'react';

function Programme() {
    return (
        <div className="container mx-auto px-6 py-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif mb-8 text-center">Programme de la journée</h2>
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="text-xl font-bold w-24">14h30</div>
                        <div className="flex-1">
                            <h3 className="font-semibold">Cérémonie Laïque</h3>
                            <p className="text-gray-600">Lieu de la cérémonie</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-xl font-bold w-24">16h00</div>
                        <div className="flex-1">
                            <h3 className="font-semibold">Cocktail</h3>
                            <p className="text-gray-600">Vin d'honneur et animations</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-xl font-bold w-24">19h00</div>
                        <div className="flex-1">
                            <h3 className="font-semibold">Dîner</h3>
                            <p className="text-gray-600">Repas et festivités</p>
                        </div>
                    </div>
                    {/* Ajoutez d'autres horaires selon votre programme */}
                </div>
            </div>
        </div>
    );
}

export default Programme;