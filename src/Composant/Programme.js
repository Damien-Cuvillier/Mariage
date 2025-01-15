import React, { useEffect, useRef } from 'react';
// import { Church, GlassWater, Utensils, MapPin} from 'lucide-react';

const Programme = () => {
  const balloonRef = useRef(null);
  const pathRef = useRef(null);

  const timelineElements = [
    {
      time: '14h',
      title: 'Mairie, si vous en avez envie',
      location: '8 Pl. de la Mairie, 37260 Thilouze',
      mapLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47fd26bae9f4989b:0x1516dcaa43274098?sa=X&ved=1t:8290&ictx=111',
      icon: process.env.PUBLIC_URL + '/images/kiss.png',
      pointPosition: 'translate-x-[8px] translate-y-[110px]'
    },
    {
      time: '16h',
      title: 'Cérémonie laïque',
      location: 'Grange de Fossillon, 37110 Autrèche',
      mapLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e34b524ab8663b:0x234d09a1d15e1399?sa=X&ved=1t:8290&ictx=111',
      icon: process.env.PUBLIC_URL + '/images/rings.png',
      pointPosition: 'translate-x-[280px] translate-y-[108px]'
    },
    {
      time: '17h',
      title: 'Cocktail',
      description: 'Vin d\'honneur et animations',
      icon: process.env.PUBLIC_URL + '/images/cheers.png',
      pointPosition: 'translate-x-[-389px] translate-y-[90px]'
    },
    {
      time: '19h',
      title: 'Dîner',
      description: 'On va se régaler !',
      icon: process.env.PUBLIC_URL + '/images/food.png',
      pointPosition: 'translate-x-[170px] translate-y-[0px]'
    },
    {
      time: '22h ',
      title: 'Festivités',
      description: 'Dansez jusqu\'au bout de la nuit',
      icon: process.env.PUBLIC_URL + '/images/mirror-ball.png',
      pointPosition: 'translate-x-[-268px] translate-y-[135px]'
    },
    {
      time: '12h ',
      title: 'Brunch du dimanche',
      description: 'Pour la récup',
      icon: process.env.PUBLIC_URL + '/images/brunch.png',
      pointPosition: 'translate-x-[330px] translate-y-[105px]'
    }
  ];

  useEffect(() => {
    const balloon = balloonRef.current;
    const path = pathRef.current;
    
    if (!balloon || !path) return;
  
    const pathLength = path.getTotalLength();
    let progress = 0;
  
    // Offsets de base
    const xOffset = -80;
    const yOffset = -10;
  
    const animate = () => {
      const currentLength = pathLength * progress;
      const point = path.getPointAtLength(currentLength);
  
      let additionalXOffset = 0;
      let additionalYOffset = 0;
  
      // Définition plus précise des phases du parcours
      if (progress < 0.2) {
        // Phase 1: Mairie
        additionalXOffset = 10;
        additionalYOffset = 0;
      } else if (progress < 0.4) {
        // Phase 2: Cérémonie
        additionalXOffset = -20;
        additionalYOffset = -30;
      } else if (progress < 0.6) {
        // Phase 3: Cocktail
        additionalXOffset = 70;
        additionalYOffset = -50;
      } else if (progress < 0.8) {
        // Phase 4: Dîner et après
        additionalXOffset = 50;
        additionalYOffset = -200;
      } else {
        // Phase finale avec transition progressive
        const finalPhaseProgress = (progress - 0.8) / 0.2; // Normalise entre 0 et 1 pour la phase finale
        additionalXOffset = 50 * (1 - finalPhaseProgress) + (50) * finalPhaseProgress;
        additionalYOffset = -100 * (1 - finalPhaseProgress) + (-300) * finalPhaseProgress;
      }
  
      // Application de la position avec transition douce uniquement pour les phases non finales
      const smoothTransition = progress < 0.8 
        ? (offset) => offset * Math.sin(progress * Math.PI)
        : (offset) => offset;
      
      balloon.style.transform = `translate(${
        point.x + xOffset + smoothTransition(additionalXOffset)
      }px, ${
        point.y + yOffset + smoothTransition(additionalYOffset)
      }px) translate(-50%, -50%)`;
  
      // Gestion de l'opacité
      if (progress > 0.95) {
        balloon.style.opacity = `${(1 - progress) * 20}`;
      } else if (progress < 0.05) {
        balloon.style.opacity = `${progress * 20}`;
      } else {
        balloon.style.opacity = '1';
      }
  
      progress += 0.0003;
  
      if (progress >= 1) {
        progress = 0;
      }
  
      requestAnimationFrame(animate);
    };
  
    requestAnimationFrame(animate);
  
    return () => {
      balloon.style.transform = `translate(-50%, -50%)`;
      balloon.style.opacity = '1';
    };
}, []);

  return (
    <div className="container mx-auto px-6 py-8 relative">
      {/* Background image avec pointer-events-none */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none -z-30 opacity-80"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/Color2.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      
      <h2 className="text-2xl font-bold mb-16 text-center">Programme de la journée</h2>
      
      {/* SVG pour la ligne courbée avec le chemin de référence */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 h-full w-6/12 -z-10">
        <svg className="h-full w-full" viewBox="0 0 800 1800" preserveAspectRatio="xMidYMid meet">
          <path
            ref={pathRef}
            d="M410 100C391 375 771 437 759 259 674 93 148 525 767 476 589 832-27 306-130 701-50 1320 527 414 666 859 345 987 271 1402 490 1326 693 1162 29 1092 68 1295 515 1386 376 1747 865 1543"
            stroke="#d6d6d6"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
{/* Montgolfière */}
<div
  ref={balloonRef}
  className="absolute w-24 h-24 transition-all duration-1000 ease-out top-1 left-1/4"
  style={{ 
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
    transformOrigin: 'center center',
    transform: 'translate(-50%, -50%)'
  }}
>
  <img 
    src={`${process.env.PUBLIC_URL}/images/voyage.png`} 
    alt="montgolfière"
    className="w-full h-full"
  />
</div>

      <div className="space-y-4">
        {timelineElements.map((element, index) => (
          <div 
            key={index} 
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
          >
            {/* Point sur la ligne */}
            <div className={`absolute left-1/2 ${element.pointPosition} w-4 h-4 bg-gray-300 border-2 border-gray-300 rounded-full`} />
            
            {/* Carte de contenu avec couleurs de fond différentes */}
            <div className={`relative w-3/12 shadow-lg p-6 hover:shadow-xl transition-shadow rounded-3xl
              ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} 
              before:content-[''] before:absolute before:-inset-2 before:rounded-3xl before:shadow-lg before:-z-10
              ${
                index === 0 ? 'left-1/4 bg-pink-100 before:bg-pink-300' :
                index === 1 ? 'mr-16 bg-purple-100 before:bg-purple-300' :
                index === 2 ? 'bg-orange-100 before:bg-orange-300' :
                index === 3 ? 'mr-60 bg-yellow-100 before:bg-yellow-300' :
                index === 4 ? 'ml-24 mt-12 bg-green-100 before:bg-green-300' :
                'bg-blue-100 before:bg-blue-300'
              }`}
            >
              {/* Icône avec couleurs de fond différentes */}
              <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full shadow-lg flex items-center justify-center border border-gray-200 overflow-hidden
                ${
                  index === 0 ? 'bg-pink-300' :
                  index === 1 ? 'bg-purple-300' :
                  index === 2 ? 'bg-orange-300' :
                  index === 3 ? 'bg-yellow-300' :
                  index === 4 ? 'bg-green-300' :
                  'bg-blue-300'
                }`}
              >
                <img 
                  src={element.icon}
                  alt={element.title}
                  className="w-10 h-10 object-contain"
                />
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