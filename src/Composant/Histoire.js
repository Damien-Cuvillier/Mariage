import React from 'react';

const Histoire = () => {
  return (
    <div className="container mx-auto px-6 py-16">
     <div 
        className="fixed inset-0 w-full h-full pointer-events-none -z-30 opacity-80"
        style={{
          backgroundImage: "url('/images/flowers.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      <h2 className="text-3xl font-bold text-center mb-16">Notre Histoire</h2>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Premier paragraphe avec image */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Le destin a parfois des chemins surprenants. Nous avons partagé les mêmes couloirs de collège 
              sans jamais vraiment nous croiser, ni même nous en souvenir. C'est au lycée que nos chemins 
              se sont rapprochés, partageant la même classe de terminale. À l'époque, nous échangions de 
              simples "bonjour" polis, évoluant dans des cercles d'amis différents, reliés uniquement 
              par un ami commun.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-row">
            <img 
              src="/images/Reu.jpg" 
              alt="Nos années lycée" 
              className="rounded-lg shadow-lg w-40 h-64 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Deuxième paragraphe avec image */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Nos routes se sont ensuite séparées pour les études supérieures - elle vers Rennes, 
              moi restant à Tours. Mais parfois, les plus belles histoires naissent des situations 
              les plus inattendues. C'est le nez cassé de notre ami commun qui a finalement créé 
              cette étincelle. De fil en aiguille, les discussions sont devenues plus longues, 
              plus profondes, et notre histoire a commencé à s'écrire.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/images/Nous2.jpg" 
              alt="Nos retrouvailles" 
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Troisième paragraphe avec image */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Aujourd'hui, nous avons construit notre nid à Thilouze, partagé avec Mango, notre 
              fidèle compagnon à quatre pattes, et Sora, notre petit chat espiègle. Et c'est au 
              cœur de la nature, sur un rocher au milieu d'une rivière, que j'ai choisi de lui 
              demander sa main. Sa réponse positive nous mène aujourd'hui à cette nouvelle page 
              de notre histoire.
            </p>
          </div>
          <div className="md:w-1/2 space-y-4">
            <img 
              src="/images/Nous.jpg" 
              alt="Notre famille" 
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="flex gap-4">
              <img 
                src="/images/Mango.jpg" 
                alt="Mango" 
                className="rounded-lg shadow-lg w-1/2 h-32 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/images/Sora.jpg" 
                alt="Sora" 
                className="rounded-lg shadow-lg w-1/2 h-32 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Histoire;