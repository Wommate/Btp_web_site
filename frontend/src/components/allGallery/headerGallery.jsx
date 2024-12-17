import React from 'react'

function HeaderGallery() {
  return (
    <div 
      className="relative h-[700px] bg-no-repeat bg-contain bg-center -z-50"
      style={{
        backgroundImage: 'url("img/etep/backgroundETEP.png")',
        // backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Découvrez nos réalisations en construction et travaux publics</h1>
            <p className="text-xl">Un aperçu de notre expertise au service de vos projets</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderGallery