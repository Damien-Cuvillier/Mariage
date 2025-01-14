import React, { useEffect, useRef } from 'react';
import { Church, GlassWater, Utensils, MapPin} from 'lucide-react';
import Color from './Color';
const Programme = () => {
  const balloonRef = useRef(null);
  const pathRef = useRef(null);

  const timelineElements = [
    {
      time: '14h',
      title: 'Mairie, si vous en avez envie',
      location: '8 Pl. de la Mairie, 37260 Thilouze',
      mapLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47fd26bae9f4989b:0x1516dcaa43274098?sa=X&ved=1t:8290&ictx=111',
      icon: <Church className="w-6 h-6" />,
      pointPosition: 'translate-x-[-365px] translate-y-[100px]'
    },
    {
      time: '16h',
      title: 'Cérémonie laïque',
      location: 'Grange de Fossillon, 37110 Autrèche',
      mapLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e34b524ab8663b:0x234d09a1d15e1399?sa=X&ved=1t:8290&ictx=111',
      icon: <MapPin className="w-6 h-6" />,
      pointPosition: 'translate-x-[320px] translate-y-[103px]'
    },
    {
      time: '17h',
      title: 'Cocktail',
      description: 'Vin d\'honneur et animations',
      icon: <GlassWater className="w-6 h-6" />,
      pointPosition: 'translate-x-[-360px] translate-y-[90px]'
    },
    {
      time: '19h',
      title: 'Dîner',
      description: 'On va se régaler !',
      icon: <Utensils className="w-6 h-6" />,
      pointPosition: 'translate-x-[311px] translate-y-[80px]'
    },
    {
      time: '22h ',
      title: 'Festivités',
      description: 'Dansez jusqu\'au bout de la nuit',
      icon: <Utensils className="w-6 h-6" />,
      pointPosition: 'translate-x-[-358px] translate-y-[110px]'
    },
    {
      time: '12h ',
      title: 'Brunch du dimanche',
      description: 'Pour la récup',
      icon: <Utensils className="w-6 h-6" />,
      pointPosition: 'translate-x-[310px] translate-y-[106px]'
    }
  ];

  useEffect(() => {
    const balloon = balloonRef.current;
    const path = pathRef.current;
    
    if (!balloon || !path) return;

    const pathLength = path.getTotalLength();
    const numberOfPoints = timelineElements.length;
    const segmentLength = pathLength / (numberOfPoints - 1);
    let currentPoint = 0;
    let progress = 0;

    const animate = () => {
      const startLength = currentPoint * segmentLength;
      const endLength = (currentPoint + 1) * segmentLength;
      const currentLength = startLength + (endLength - startLength) * progress;

      const point = path.getPointAtLength(currentLength);
      
      let yOffset = 0;
      if (currentPoint >= 3) {
        yOffset = -20;
      }

      // Gérer l'opacité près de la fin de l'animation
      if (currentPoint === numberOfPoints - 2 && progress > 0.8) {
        balloon.style.opacity = `${(1 - progress) * 5}`; // Fade out progressif
      } else if (currentPoint === 0 && progress < 0.2) {
        balloon.style.opacity = `${progress * 5}`; // Fade in progressif
      } else {
        balloon.style.opacity = '1';
      }

      balloon.style.transform = `translate(${point.x}px, ${point.y + yOffset}px) translate(-50%, -50%)`;

      progress += 0.0012;

      if (progress >= 1) {
        progress = 0;
        currentPoint++;
        
        if (currentPoint >= numberOfPoints - 1) {
          currentPoint = 0;
        }
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      balloon.style.transform = `translate(0px, 0px) translate(-50%, -50%)`;
      balloon.style.opacity = '1';
    };
  }, [timelineElements.length]);

  return (
    
    <div className="container mx-auto px-6 py-8 relative">
    
      <h2 className="text-2xl font-serif mb-16 text-center">Programme de la journée</h2>
      
      {/* SVG pour la ligne courbée avec le chemin de référence */}
<div className="absolute left-1/2 top-24 -translate-x-1/2 h-full w-6/12 -z-10">
  <svg className="h-full w-full" viewBox="0 0 800 1800" preserveAspectRatio="xMidYMid meet">
    <path
      ref={pathRef}
      d="M25 100C25 331 552 439 430 212 303 30 148 525 741 448 474 709 29 437 29 807 47 1057 452 724 739 1031 582 1217 306 1341 490 1326 733 1236 38 1026 36 1348 257 1221 376 1747 748 1618"
      stroke="#d6d6d6"
      strokeWidth="2"
      fill="none"
    />
  </svg>
</div>

{/* Montgolfière */}
<div
  ref={balloonRef}
  className="absolute w-12 h-12 transition-all duration-1000 ease-out top-24 left-1/4"
  style={{ 
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
    transformOrigin: 'center center'
  }}
>
  <img 
    src="/images/voyage.png" 
    alt="montgolfière"
    className="w-full h-full"
  />
</div>

      <div className="space-y-24">
        {timelineElements.map((element, index) => (
          <div 
            key={index} 
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
          >
            {/* Point sur la ligne */}
            <div className={`absolute left-1/2 ${element.pointPosition} w-4 h-4 bg-gray-300 border-2 border-gray-300 rounded-full`} />
            
            {/* Carte de contenu avec image de fond */}
            <div 
              className={`relative w-3/12 p-6 hover:shadow-xl transition-shadow rounded-3xl 
                ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              style={{
                backgroundImage: "url('/images/Bagues.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
               
              }}
            >
              {/* Overlay pour assurer la lisibilité du texte */}
              <div className="absolute inset-0 bg-white/20"></div>

              {/* Icône */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 z-20">
                {element.icon}
              </div>

              {/* Contenu */}
              <div className="mt-8 relative z-10">
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