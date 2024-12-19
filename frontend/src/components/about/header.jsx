import React from 'react'

function Header() {
  return (   
    <div 
      className="relative h-[600px] bg-no-repeat bg-cover bg-center -z-50"
      style={{
        backgroundImage: 'url("img/Batiment.jpg")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Construisons Ensemble Votre Avenir</h1>
            <p className="text-xl">Plus de 07 ans d'expertise dans le BTP au service de vos projets</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header