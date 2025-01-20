import React from 'react';

const Histoire = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-8">
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none -z-30 opacity-100"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/test4.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16">Notre Histoire</h2>

      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-16">
        {/* Premier paragraphe avec image */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="w-full md:w-1/2">
            <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-6 md:mb-0">
              Le destin a parfois des chemins surprenants. Nous avons partagé les mêmes couloirs de collège 
              sans jamais vraiment nous croiser, ni même nous en souvenir. C'est au lycée que nos chemins 
              se sont rapprochés, partageant la même classe de terminale. À l'époque, nous échangions de 
              simples "bonjour" polis, évoluant dans des cercles d'amis différents, reliés uniquement 
              par un ami commun.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={`${process.env.PUBLIC_URL}/images/Reu.webp`}   
              alt="Nos années lycée" 
              className="rounded-lg shadow-lg w-32 sm:w-40 h-48 sm:h-64 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Deuxième paragraphe avec image */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8">
          <div className="w-full md:w-1/2">
            <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-6 md:mb-0">
              Nos routes se sont ensuite séparées pour les études supérieures - elle vers Rennes, 
              moi restant à Tours. Mais parfois, les plus belles histoires naissent des situations 
              les plus inattendues. C'est le nez cassé de notre ami commun qui a finalement créé 
              cette étincelle. De fil en aiguille, les discussions sont devenues plus longues, 
              plus profondes, et notre histoire a commencé à s'écrire.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src={`${process.env.PUBLIC_URL}/images/Nous2.webp`}   
              alt="Nos retrouvailles" 
              className="rounded-lg shadow-lg w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Troisième paragraphe avec image */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="w-full md:w-1/2">
            <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-6 md:mb-0">
              Aujourd'hui, nous avons construit notre nid à Thilouze, partagé avec Mango, notre 
              fidèle compagnon à quatre pattes, et Sora, notre petit chat espiègle. Et c'est au 
              cœur de la nature, sur un rocher au milieu d'une rivière, que j'ai choisi de lui 
              demander sa main. Sa réponse positive nous mène aujourd'hui à cette nouvelle page 
              de notre histoire.
            </p>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <img 
              src={`${process.env.PUBLIC_URL}/images/Nous.webp`}  
              alt="Notre famille" 
              className="rounded-lg shadow-lg w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="flex gap-4">
              <img 
                src={`${process.env.PUBLIC_URL}/images/Mango.webp`}  
                alt="Mango" 
                className="rounded-lg shadow-lg w-1/2 h-24 sm:h-32 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={`${process.env.PUBLIC_URL}/images/Sora.webp`}   
                alt="Sora" 
                className="rounded-lg shadow-lg w-1/2 h-24 sm:h-32 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Histoire;