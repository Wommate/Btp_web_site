import React from 'react'

function HeaderGallery() {
  return (
    <div 
      className="relative h-[400px] bg-no-repeat bg-cover bg-center -z-50"
      style={{
        backgroundImage: 'url("img/etep/backgroundETEP.png")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="text-white w-full text-center pt-20">
            <h1 className="text-4xl font-bold text-[#fcd019] mb-4" data-aos="fade-right">Découvrez nos réalisations en construction et travaux publics</h1>
            <p className="text-xl text-[#35c6f4]" data-aos="fade-left">Un aperçu de notre expertise au service de vos projets</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderGallery