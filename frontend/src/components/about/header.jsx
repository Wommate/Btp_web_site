import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  return (   
    <div 
      className="relative h-[400px] bg-no-repeat bg-cover bg-bottom -z-50"
      style={{
        backgroundImage: 'url("img/charpente-metallique.jpg")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="text-white w-full text-center pt-20">
            <h1 className="text-4xl font-bold text-[#fcd019] mb-4" data-aos="fade-right">Construisons Ensemble Votre Avenir</h1>
            <p className="text-xl text-[#35c6f4]" data-aos="fade-left">Plus de 07 ans d'expertise dans le BTP au service de vos projets</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header