import React from 'react';

const Color = () => {
  const colors = [
    {
      name: 'Bleu Clair',
      hex: '#E6F3FF',
      rgb: 'rgb(230, 243, 255)',
      
    },
    {
      name: 'Bleu',
      hex: '#93C6FF',
      rgb: 'rgb(147, 198, 255)',
      
    },
    {
      name: 'Blanc',
      hex: '#FFFFFF',
      rgb: 'rgb(255, 255, 255)',
      
    }
    // Ajoutez d'autres couleurs selon votre thème
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-serif text-center mb-16">Code Couleur du Mariage</h2>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-gray-600 mb-12">
          Pour créer une harmonie visuelle lors de notre célébration, 
          voici les couleurs suggérées pour vos tenues.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {colors.map((color, index) => (
            <div 
              key={index}
              className="flex flex-col items-center"
            >
              {/* Cercle de couleur avec effet de hover */}
              <div 
                className="w-32 h-32 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 relative group"
                style={{ 
                  backgroundColor: color.hex,
                  border: color.name === 'Blanc' ? '2px solid #E5E7EB' : 'none'
                }}
              >
                {/* Info bulle au hover */}
                <div className="opacity-0 group-hover:opacity-100 absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-md shadow-lg transition-opacity duration-300 whitespace-nowrap">
                  <p className="text-sm">
                    HEX: {color.hex}<br />
                    RGB: {color.rgb}
                  </p>
                </div>
              </div>

              {/* Nom de la couleur */}
              <h3 className="text-lg font-semibold mb-2">
                {color.name}
              </h3>

            
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="italic">
            Ces couleurs sont données à titre indicatif pour vous guider dans vos choix vestimentaires.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Color;