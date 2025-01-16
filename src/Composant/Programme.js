import React, { useEffect, useRef, useState } from 'react';
// import { Church, GlassWater, Utensils, MapPin} from 'lucide-react';

const calculateMobilePosition = (basePosition, screenWidth) => {
  // Largeur de référence (votre écran de développement)
  const referenceWidth = 390;
  
  // Facteur d'échelle
  const scale = screenWidth / referenceWidth;
  
  // Extraire les valeurs x et y de la chaîne de position
  const [x, y] = basePosition
    .match(/translate-x-\[(.*?)\].*?translate-y-\[(.*?)\]/)
    .slice(1)
    .map(val => parseFloat(val));
  
  // Ajuster les positions proportionnellement
  const newX = x * scale;
  const newY = y * scale;
  
  return `translate-x-[${newX}px] translate-y-[${newY}px]`;
};

const Programme = () => {
  const balloonRef = useRef(null);
  const pathRef = useRef(null);
  const mobilePathRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const timelineElements = [
    {
      time: '14h',
      title: 'Mairie, si vous en avez envie',
      location: '8 Pl. de la Mairie, 37260 Thilouze',
      mapLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47fd26bae9f4989b:0x1516dcaa43274098?sa=X&ved=1t:8290&ictx=111',
      icon: process.env.PUBLIC_URL + '/images/kiss.png',
      pointPosition: 'translate-x-[8px] translate-y-[110px]',
      mobilePointPosition: 'translate-x-[20px] translate-y-[80px]'
    },
    {
      time: '16h',
      title: 'Cérémonie laïque',
      location: 'Grange de Fossillon, 37110 Autrèche',
      mapLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e34b524ab8663b:0x234d09a1d15e1399?sa=X&ved=1t:8290&ictx=111',
      icon: process.env.PUBLIC_URL + '/images/rings.png',
      pointPosition: 'translate-x-[255px] translate-y-[102px]',
      mobilePointPosition: 'translate-x-[80px] translate-y-[0px]'
    },
    {
      time: '17h',
      title: 'Cocktail',
      description: 'Vin d\'honneur et animations',
      icon: process.env.PUBLIC_URL + '/images/cheers.png',
      pointPosition: 'translate-x-[-389px] translate-y-[90px]',
      mobilePointPosition: 'translate-x-[-85px] translate-y-[0px]'
    },
    {
      time: '19h',
      title: 'Dîner',
      description: 'On va se régaler !',
      icon: process.env.PUBLIC_URL + '/images/food.png',
      pointPosition: 'translate-x-[170px] translate-y-[0px]',
      mobilePointPosition: 'translate-x-[80px] translate-y-[50px]'
    },
    {
      time: '22h ',
      title: 'Festivités',
      description: 'Dansez jusqu\'au bout de la nuit',
      icon: process.env.PUBLIC_URL + '/images/mirror-ball.png',
      pointPosition: 'translate-x-[-250px] translate-y-[135px]',
      mobilePointPosition: 'translate-x-[-50px] translate-y-[90px]'
    },
    {
      time: '12h ',
      title: 'Brunch du dimanche',
      description: 'Pour la récup',
      icon: process.env.PUBLIC_URL + '/images/brunch.png',
      pointPosition: 'translate-x-[260px] translate-y-[119px]',
      mobilePointPosition: 'translate-x-[-10px] translate-y-[84px]'
    }
  ];

  useEffect(() => {
    const balloon = balloonRef.current;
    const desktopPath = pathRef.current;
    const mobilePath = mobilePathRef.current;
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    
    if (!balloon || (!desktopPath && !mobilePath)) return;

    const path = isMobile ? mobilePath : desktopPath;
    const pathLength = path.getTotalLength();
    let progress = 0;

    const animate = () => {
      const currentLength = pathLength * progress;
      const point = path.getPointAtLength(currentLength);

      if (isMobile) {
        const screenScale = window.innerWidth / 382;
        const xOffset = -135 * screenScale;
        const yOffset = 100 * screenScale;
        
        let additionalXOffset = 0;
        let additionalYOffset = 0;

        if (progress < 0.2) {
          additionalXOffset = 5 * screenScale;
          additionalYOffset = 0;
        } else if (progress < 0.4) {
          additionalXOffset = 50 * screenScale;
          additionalYOffset = -15 * screenScale;
        } else if (progress < 0.6) {
          additionalXOffset = 15 * screenScale;
          additionalYOffset = -80 * screenScale;
        } else if (progress < 0.8) {
          additionalXOffset = 10 * screenScale;
          additionalYOffset = -160 * screenScale;
        } else {
          const finalPhaseProgress = (progress - 0.8) / 0.2;
          additionalXOffset = (45 * (1 - finalPhaseProgress) + 45 * finalPhaseProgress) * screenScale;
          additionalYOffset = (-240 * (1 - finalPhaseProgress) + -240 * finalPhaseProgress) * screenScale;
        }

        balloon.style.transform = `translate(${
          point.x + xOffset + additionalXOffset
        }px, ${
          point.y + yOffset + additionalYOffset
        }px) translate(-50%, -50%) scale(${0.7 * screenScale})`;

      } else if (isTablet) {
        // Animation tablette (peut être similaire au desktop avec des ajustements)
        const xOffset = -80;
        const yOffset = -10;
        
        let additionalXOffset = 0;
        let additionalYOffset = 0;

        if (progress < 0.2) {
          additionalXOffset = 10;
          additionalYOffset = 0;
        } else if (progress < 0.4) {
          additionalXOffset = -20;
          additionalYOffset = -30;
        } else if (progress < 0.6) {
          additionalXOffset = 70;
          additionalYOffset = -50;
        } else if (progress < 0.8) {
          additionalXOffset = 50;
          additionalYOffset = -200;
        } else {
          const finalPhaseProgress = (progress - 0.8) / 0.2;
          additionalXOffset = 50 * (1 - finalPhaseProgress) + 50 * finalPhaseProgress;
          additionalYOffset = -100 * (1 - finalPhaseProgress) + -300 * finalPhaseProgress;
        }

        balloon.style.transform = `translate(${
          point.x + xOffset + additionalXOffset
        }px, ${
          point.y + yOffset + additionalYOffset
        }px) translate(-50%, -50%)`;
      } else {
        // Animation desktop
        const xOffset = -80;
        const yOffset = -10;
        
        let additionalXOffset = 0;
        let additionalYOffset = 0;

        if (progress < 0.2) {
          additionalXOffset = 10;
          additionalYOffset = 0;
        } else if (progress < 0.4) {
          additionalXOffset = -20;
          additionalYOffset = -30;
        } else if (progress < 0.6) {
          additionalXOffset = 70;
          additionalYOffset = -50;
        } else if (progress < 0.8) {
          additionalXOffset = 50;
          additionalYOffset = -200;
        } else {
          const finalPhaseProgress = (progress - 0.8) / 0.2;
          additionalXOffset = 50 * (1 - finalPhaseProgress) + 50 * finalPhaseProgress;
          additionalYOffset = -100 * (1 - finalPhaseProgress) + -300 * finalPhaseProgress;
        }

        balloon.style.transform = `translate(${
          point.x + xOffset + additionalXOffset
        }px, ${
          point.y + yOffset + additionalYOffset
        }px) translate(-50%, -50%)`;
      }

      if (progress > 0.95) {
        balloon.style.opacity = `${(1 - progress) * 20}`;
      } else if (progress < 0.05) {
        balloon.style.opacity = `${progress * 20}`;
      } else {
        balloon.style.opacity = '1';
      }

      progress += 0.0003;
      if (progress >= 1) progress = 0;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      balloon.style.transform = `translate(-50%, -50%)`;
      balloon.style.opacity = '1';
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Force un re-rendu quand la fenêtre est redimensionnée
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto px-6 py-8 relative">
      {/* Background image avec pointer-events-none */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none -z-30 opacity-80"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/Cadre.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      
      <h2 className="text-2xl font-bold mb-16 text-center">Programme de la journée</h2>
      
      {/* SVG Desktop et Tablette */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 h-full w-6/12 -z-10 hidden sm:block">
        <svg className="h-full w-full" viewBox="0 0 800 1800" preserveAspectRatio="xMidYMid meet">
          <path
            ref={pathRef}
            d="M410 100C391 375 771 437 759 259 674 93 148 525 767 476 589 832-27 306-130 701-50 1320 527 414 666 859 345 987 271 1402 490 1326 693 1162 29 1092 68 1295 515 1386 376 1747 865 1543"
            stroke="#a9a9a9"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* SVG Mobile */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 h-full w-full max-w-[400px] -z-10 sm:hidden">
        <svg 
          className="h-full w-full" 
          viewBox="0 0 400 1200" 
          preserveAspectRatio="xMidYMid meet"
          style={{
            transform: 'scale(0.9)', // Ajustement global de l'échelle
            transformOrigin: 'center center'
          }}
        >
          <path
            ref={mobilePathRef}
            d="M220 63C256 170 438 134 371 52 298-19 254 114 321 202 267 354 102 171 90 400 81 626 446 320 326 588 321.6667 669.6667 256 957 372 851 459 726 230 898 185 842-12 1098 124 1126 333 1051"
            stroke="#a9a9a9"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Montgolfière plus petite sur mobile */}
      <div ref={balloonRef} className="absolute md:w-24 md:h-24 w-16 h-16 transition-all duration-1000 ease-out top-1 left-1/4"
        style={{ 
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          transformOrigin: 'center center',
          transform: 'translate(-50%, -50%)'
        }}>
        <img src={`${process.env.PUBLIC_URL}/images/voyage.png`} alt="montgolfière" className="w-full h-full" />
      </div>

      <div className="space-y-4">
        {timelineElements.map((element, index) => (
          <div 
            key={index} 
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
          >
            {/* Point avec position conditionnelle */}
            <div className={`absolute left-1/2 
              ${windowWidth < 640 
                ? calculateMobilePosition(element.mobilePointPosition, windowWidth)
                : element.pointPosition
              } 
              md:w-4 md:h-4 w-2 h-2 bg-gray-400 border-2 border-gray-300 rounded-full`} 
            />
            
            {/* Carte encore plus compacte sur mobile */}
            <div className={`relative md:w-1/4 w-[140px] shadow-lg md:p-6 p-3 hover:shadow-xl transition-shadow rounded-3xl
              ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} 
              before:content-[''] before:absolute before:-inset-2 before:rounded-3xl before:shadow-lg before:-z-10
              ${
                index === 0 ? 'md:left-1/4 left-[10%] bg-pink-100 before:bg-pink-300' :
                index === 1 ? 'md:mr-16 mr-4 bg-purple-100 before:bg-purple-300' :
                index === 2 ? 'bg-orange-100 before:bg-orange-300' :
                index === 3 ? 'md:mr-60 mr-12 bg-yellow-100 before:bg-yellow-300' :
                index === 4 ? 'md:ml-24 ml-6 mt-12 bg-green-100 before:bg-green-300' :
                'md:mr-20 mr-4 bg-blue-100 before:bg-blue-300'
              }`}
            >
              {/* Icône encore plus petite sur mobile */}
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 md:w-16 md:h-16 w-10 h-10 rounded-full shadow-lg flex items-center justify-center border border-gray-200 overflow-hidden
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
                  className="md:w-10 md:h-10 w-6 h-6 object-contain"
                />
              </div>

              {/* Contenu avec texte encore plus petit sur mobile */}
              <div className="mt-2">
                <div className="md:text-xl text-sm font-bold text-gray-800 mb-1">
                  {element.time}
                </div>
                <h3 className="md:text-lg text-xs font-semibold mb-1">
                  {element.title}
                </h3>
                {element.location && (
                  <div className="text-gray-600 mb-1 md:text-base text-[12px]">
                    {element.location}
                    <br />
                    <a
                      href={element.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 mt-1"
                    >
                      Maps
                    </a>
                  </div>
                )}
                {element.description && (
                  <p className="text-gray-600 md:text-base text-[12px]">{element.description}</p>
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