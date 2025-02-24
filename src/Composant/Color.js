import React from 'react';

const Color = () => {
  const colors = [
    {
      name: 'Orange',
      hex: '#fb4c0d',
      darkHex:'#fb4c0d',
      rgb: 'rgb(251, 76, 13)',
    },
    {
      name: 'Jaune',
      hex: '#FFD700',
      darkHex:'#FFD700',
      rgb: 'rgb(255, 215, 0)',
    },
    
    {
      name: 'Vert',
      hex: '#006C2E',
      darkHex:'#006C2E',
      rgb: 'rgb(0, 108, 46)',
    },
    {
      name: 'Fushia',
      hex: '#E80564',
      darkHex:'#E80564',
      rgb: 'rgb(232, 5, 100)',
    },
   
   
    {
      name: 'Violet',
      hex: '#6A026E',
      darkHex:'#6A026E',
      rgb: 'rgb(106, 2, 110)',
    },
   
    {
      name: 'Bleu',
      hex: '#361FDB',
      darkHex:'#361FDB',
      rgb: 'rgb(54, 31, 219)',
    },
  
  ];
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl text-white font-bold text-center mb-8 sm:mb-16">
        Code Couleur du Mariage
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-black mb-8 sm:mb-12 px-4">
          Vive la couleur ! <br></br>On vous attend flashy et étincellant !
        </p>

        {/* Grille de couleurs responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 px-4">
          {colors.map((color, index) => (
            <div 
              key={index}
              className="flex flex-col items-center relative"
            >
              {/* Cercle de couleur avec effet de hover */}
              <div 
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full shadow-lg hover:shadow-xl 
                         transition-all duration-300 mb-3 sm:mb-4 relative group cursor-pointer
                         hover:scale-110 "
                style={{ 
                  backgroundColor: isDarkMode ? color.darkHex : color.hex,
                  border: color.name === 'Blanc' ? '2px solid #E5E7EB' : 'none'
                }}
              >
              
              </div>

              {/* Nom de la couleur */}
              <h3 className="text-base sm:text-lg text-white font-semibold mb-1 sm:mb-2">
                {color.name}
              </h3>

        
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-14 text-center text-black px-4">
          <p className="italic text-sm sm:text-base">
            Ces couleurs sont données à titre indicatif pour vous guider dans vos choix vestimentaires.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Color;