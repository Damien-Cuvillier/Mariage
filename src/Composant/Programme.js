import React from 'react';
import { Church, GlassWater, Utensils, MapPin } from 'lucide-react';

const Programme = () => {
  const timelineElements = [
    {
      time: '14h',
      title: 'Mairie, si vous en avez envie',
      location: '8 Pl. de la Mairie, 37260 Thilouze',
      mapLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47fd26bae9f4989b:0x1516dcaa43274098?sa=X&ved=1t:8290&ictx=111',
      icon: <Church className="w-6 h-6" />,
      pointPosition: 'translate-x-[-87px] translate-y-[100px]' // point à gauche
    },
    {
      time: '16h',
      title: 'Cérémonie laïque',
      location: 'Grange de Fossillon, 37110 Autrèche',
      mapLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e34b524ab8663b:0x234d09a1d15e1399?sa=X&ved=1t:8290&ictx=111',
      icon: <MapPin className="w-6 h-6" />,
      pointPosition: 'translate-x-[69px] translate-y-[120px]' // point à droite
    },
    {
      time: '17h',
      title: 'Cocktail',
      description: 'Vin d\'honneur et animations',
      icon: <GlassWater className="w-6 h-6" />,
      pointPosition: 'translate-x-[-87px] translate-y-[90px]' // point à gauche
    },
    {
      time: '19h',
      title: 'Dîner',
      description: 'Repas et festivités',
      icon: <Utensils className="w-6 h-6" />,
      pointPosition: 'translate-x-[69px] translate-y-[100px]' // point à droite
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8 relative">
      <h2 className="text-2xl font-serif mb-16 text-center">Programme de la journée</h2>
      
      {/* SVG pour la ligne courbée */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 h-full w-40 -z-10">
        <svg className="h-full w-full" preserveAspectRatio="none">
          <path
            d={`
              M 0,100 
              C 0,350 160,350 160,500
              C 160,650 0,640 0,768
              C 0,900 160,900 160,1062
              
             
            `}
            stroke="#d6d6d6"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="space-y-24">
        {timelineElements.map((element, index) => (
          <div 
            key={index} 
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
          >
            {/* Point sur la ligne */}
            <div className={`absolute left-1/2 ${element.pointPosition} w-4 h-4 bg-gray-300 border-2 border-gray-300 rounded-full`} />
            
            {/* Carte de contenu */}
            <div className={`w-5/12 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow relative
              ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
            >
              {/* Icône */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200">
                {element.icon}
              </div>

              {/* Contenu */}
              <div className="mt-8">
                <div className="text-xl font-bold text-gray-800 mb-2">
                  {element.time}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {element.title}
                </h3>
                {element.location && (
                  <div className="text-gray-600 mb-2">
                    {element.location}
                    <br />
                    <a
                      href={element.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 mt-1"
                    >
                      Clique ici pour ouvrir Google maps
                    </a>
                  </div>
                )}
                {element.description && (
                  <p className="text-gray-600">{element.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programme;