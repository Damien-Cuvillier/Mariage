import React, { useEffect, useRef, useState } from 'react';
// import { Church, GlassWater, Utensils, MapPin} from 'lucide-react';

const Programme = () => {
  const balloonRef = useRef(null);
  const pathRef = useRef(null);
  const mobilePathRef = useRef(null);
  const tabletPathRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Positions de référence pour chaque point
  const referencePositions = {
    0: { x: 20, y: 50 },     // Mairie
    1: { x: 80, y: 0 },      // Cérémonie
    2: { x: -85, y: 0 },     // Cocktail
    3: { x: 80, y: 50 },     // Dîner
    4: { x: -50, y: 90 },    // Festivités
    5: { x: -10, y: 50 }     // Brunch
  };

  const calculateMobilePosition = (basePosition, screenWidth, index) => {
    const referenceWidth = 390; // Votre largeur de référence actuelle
    
    // Obtenir les positions de référence pour ce point
    const refPos = referencePositions[index];
    
    // Pour les écrans plus petits que la référence, ajuster proportionnellement
    const scale = screenWidth < referenceWidth ? screenWidth / referenceWidth : 1;
    
    // Calculer les nouvelles positions
    const newX = refPos.x * scale;
    const newY = refPos.y; // Garder la position Y constante
    
    return `translate-x-[${newX}px] translate-y-[${newY}px]`;
  };

  const timelineElements = [
    {
      time: '14h',
      title: 'Mairie, si vous en avez envie',
      location: '8 Pl. de la Mairie, 37260 Thilouze',
      mapLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47fd26bae9f4989b:0x1516dcaa43274098?sa=X&ved=1t:8290&ictx=111',
      icon: process.env.PUBLIC_URL + '/images/kiss.png',
      pointPosition: 'translate-x-[18px] translate-y-[110px]',
      
    },
    {
      time: '16h',
      title: 'Cérémonie laïque',
      location: 'Grange de Fossillon, 37110 Autrèche',
      mapLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e34b524ab8663b:0x234d09a1d15e1399?sa=X&ved=1t:8290&ictx=111',
      icon: process.env.PUBLIC_URL + '/images/rings.png',
      pointPosition: 'translate-x-[282px] translate-y-[92px]',
      
    },
    {
      time: '17h',
      title: 'Cocktail',
      description: 'Vin d\'honneur et animations',
      icon: process.env.PUBLIC_URL + '/images/cheers.png',
      pointPosition: 'translate-x-[-389px] translate-y-[70px]',
      
    },
    {
      time: '19h',
      title: 'Dîner',
      description: 'On va se régaler !',
      icon: process.env.PUBLIC_URL + '/images/food.png',
      pointPosition: 'translate-x-[170px] translate-y-[20px]',
      
    },
    {
      time: '22h ',
      title: 'Festivités',
      description: 'Dansez jusqu\'au bout de la nuit',
      icon: process.env.PUBLIC_URL + '/images/mirror-ball.png',
      pointPosition: 'translate-x-[-260px] translate-y-[135px]',
      
    },
    {
      time: '12h ',
      title: 'Brunch du dimanche',
      description: 'Pour la récup',
      icon: process.env.PUBLIC_URL + '/images/brunch.png',
      pointPosition: 'translate-x-[260px] translate-y-[92px]',
     
    }
  ];

  useEffect(() => {
    const balloon = balloonRef.current;
    const desktopPath = pathRef.current;
    const tabletPath = tabletPathRef.current;
    const mobilePath = mobilePathRef.current;
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    
    if (!balloon || (!desktopPath && !mobilePath && !tabletPath)) return;

    const path = isMobile ? mobilePath : isTablet ? tabletPath : desktopPath;
    const pathLength = path.getTotalLength();
    let progress = 0;

    const animate = () => {
      const currentLength = pathLength * progress;
      const point = path.getPointAtLength(currentLength);
//mobile
      if (isMobile) {
        const screenScale = window.innerWidth / 390;
        const xOffset = -135 * screenScale;
        const yOffset = 100 * screenScale;
        
        let additionalXOffset = 0;
        let additionalYOffset = 0;

        if (progress < 0.2) {
          additionalXOffset = 10 * screenScale;
          additionalYOffset = -40;
        } else if (progress < 0.4) {
          additionalXOffset = 20 * screenScale;
          additionalYOffset = -50 * screenScale;
        } else if (progress < 0.6) {
          additionalXOffset = 15 * screenScale;
          additionalYOffset = -80 * screenScale;
        } else if (progress < 0.8) {
          additionalXOffset = 10 * screenScale;
          additionalYOffset = -150 * screenScale;
        } else {
          const finalPhaseProgress = (progress - 0.8) / 0.2;
          additionalXOffset = (45 * (1 - finalPhaseProgress) + 45 * finalPhaseProgress) * screenScale;
          additionalYOffset = (-150 * (1 - finalPhaseProgress) + -200 * finalPhaseProgress) * screenScale;
        }

        balloon.style.transform = `translate(${
          point.x + xOffset + additionalXOffset
        }px, ${
          point.y + yOffset + additionalYOffset
        }px) translate(-50%, -50%) scale(${0.7 * screenScale})`;
//tablette
      } else if (isTablet) {
        const screenScale = window.innerWidth / 768;
        const xOffset = -100 * screenScale;
        const yOffset = 50 * screenScale;
        
        let additionalXOffset = 0;
        let additionalYOffset = 0;

        if (progress < 0.2) {
          additionalXOffset = 0 * screenScale;
          additionalYOffset = 40 * screenScale;
        } else if (progress < 0.4) {
          additionalXOffset = 0 * screenScale;
          additionalYOffset = 20 * screenScale;
        } else if (progress < 0.6) {
          additionalXOffset = 30 * screenScale;
          additionalYOffset = -10 * screenScale;
        } else if (progress < 0.8) {
          additionalXOffset = 10 * screenScale;
          additionalYOffset = -40 * screenScale;
        } else {
          const finalPhaseProgress = (progress - 0.8) / 0.2;
          additionalXOffset = (-10 * (1 - finalPhaseProgress) + -20 * finalPhaseProgress) * screenScale;
          additionalYOffset = (-100 * (1 - finalPhaseProgress) + -130 * finalPhaseProgress) * screenScale;
        }

        balloon.style.transform = `translate(${
          point.x + xOffset + additionalXOffset
        }px, ${
          point.y + yOffset + additionalYOffset
        }px) translate(-50%, -50%) scale(${0.85 * screenScale})`;
  //desktop
      } else {
        const xOffset = -80;
        const yOffset = -10;
        
        let additionalXOffset = 0;
        let additionalYOffset = 0;

        if (progress < 0.2) {
          additionalXOffset = -10;
          additionalYOffset = 0;
        } else if (progress < 0.4) {
          additionalXOffset = 0;
          additionalYOffset = -80;
        } else if (progress < 0.6) {
          additionalXOffset = 0;
          additionalYOffset = -180;
        } else if (progress < 0.8) {
          additionalXOffset = 50;
          additionalYOffset = -350;
        } else {
          const finalPhaseProgress = (progress - 0.8) / 0.2;
          additionalXOffset = 50 * (1 - finalPhaseProgress) + 150 * finalPhaseProgress;
          additionalYOffset = -350 * (1 - finalPhaseProgress) + -450 * finalPhaseProgress;
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
//#E80564 232,5,100

  useEffect(() => {
    const handleResize = () => {
      // Force un re-rendu quand la fenêtre est redimensionnée
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto px-6 py-8 relative min-w-[320px]">
      {/* Background image avec pointer-events-none */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none -z-30 opacity-100 "
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/test4.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      
      <h2 className="text-2xl font-bold mb-16 text-center">Programme de la journée</h2>
      
      {/* SVG Desktop */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 h-full w-6/12 -z-10 hidden lg:block">
        <svg className="h-full w-full" viewBox="0 0 800 1800" preserveAspectRatio="xMidYMid meet">
          <path
            ref={pathRef}
            d="M410 100C391 375 843 384 752 191 679 38 148 525 838 474 589 832-139 227-164 723-84 1284 527 414 714 896 345 987 277 1470 511 1367 706 1212 29 1092 27 1307 515 1386 376 1747 869 1513"
            stroke="#0a0a0a"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* SVG Tablette */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 h-full w-8/12 -z-10 hidden sm:block lg:hidden">
        <svg 
          className="h-full w-full" 
          viewBox="0 0 600 1500" 
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={tabletPathRef}
            d="M313 51C350 200 656 162 555 73 419-13 200 300 491 255 400 500 2 302 53 585 159 922 311 443 369 780 363 929 480 1284 564 1077 607 833 242 1306 165 1112 85 1339 254 1446 499 1345"
            stroke="#0a0a0a"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* SVG Mobile */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 h-full w-full max-w-[400px] min-w-[320px] -z-10 sm:hidden">
        <svg 
          className="h-full w-full" 
          viewBox="0 0 400 1200" 
          preserveAspectRatio="xMidYMid meet"
          style={{
            transform: `scale(${Math.min(windowWidth / 382, 1.2)})`,
            transformOrigin: 'center center'
          }}
        >
          <path
            ref={mobilePathRef}
            d="M225 110C256 170 438 134 371 52 298-19 254 114 324 259 267 354 102 171 90 400 81 626 446 320 326 588 321.6667 669.6667 256 957 372 851 459 726 230 898 185 842 121 860 45 1019 256 985"
            stroke="#0a0a0a"
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
            {/* Point avec position calculée - visible uniquement en desktop */}
            <div className={`absolute left-1/2 
              ${windowWidth < 768 
                ? calculateMobilePosition(element.mobilePointPosition, windowWidth, index)
                : element.pointPosition
              } 
              hidden lg:block md:w-4 md:h-4 w-2 h-2 bg-black border-2 border-gray-300 rounded-full`} 
            />
            
            {/* Carte encore plus compacte sur mobile */}
            <div className={`relative md:w-1/4 w-[140px] shadow-lg md:p-6 p-3 hover:shadow-xl transition-shadow rounded-3xl
              ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} 
              before:content-[''] before:absolute before:-inset-2 before:rounded-3xl before:shadow-lg before:-z-10
              ${
                index === 0 ? 'md:left-1/4 left-[10%] bg-orange-200 before:bg-orange-600' :
                index === 1 ? 'md:mr-20 mr-4 bg-yellow-100 before:bg-yellow-400' :
                index === 2 ? 'ml-12 bg-green-100 before:bg-green-800' :
                index === 3 ? 'md:mr-60 mr-12 bg-pink-200 before:bg-pink-600' :
                index === 4 ? 'md:ml-24 ml-6 mt-12 bg-fuchsia-200 before:bg-fuchsia-800' :
                'md:mr-20 mr-4 bg-blue-200 before:bg-blue-700'
              }`}
            >
              {/* Icône encore plus petite sur mobile */}
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 md:w-16 md:h-16 w-10 h-10 rounded-full shadow-lg flex items-center justify-center border border-gray-200 overflow-hidden
                ${
                  index === 0 ? 'bg-orange-600' :
                  index === 1 ? 'bg-yellow-400' :
                  index === 2 ? 'bg-green-800' :
                  index === 3 ? 'bg-pink-600' :
                  index === 4 ? 'bg-fuchsia-800' :
                  'bg-blue-700'
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