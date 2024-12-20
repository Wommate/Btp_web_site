import React from 'react'
import './hero_section.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      once: true, // Animation jouée une seule fois
    });
  }, []);

  return (
    <div className="back">
       <div className='w-full h-full bg-black/30 flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-1/2 h-full lg:pl-10 mt-28 lg:mt-0 flex flex-col justify-center items-center gap-3 lg:gap-10'>
                <h1 className='flex flex-col text-[#fcd019] font-bold text-center text-4xl lg:text-left lg:text-6xl'>ETEP <span className='text-[#35c6f4] lg:text-left font-bold text-2xl text-center lg:text-3xl'>Entreprise de Travaux d'Equipement et de Prestations Diverses</span></h1>
                <div className='flex flex-col items-center lg:items-start gap-4'>
                    <p className='text-white text-center lg:text-left lg:text-xl'>Chargée de la mise en oeuvre de tous les travaux de construction, de réhabilitation et d'entretien de routes, de ponts et d'autres ouvrages d'art.</p>
                    <Link to="/about" className="px-6 py-3 rounded-lg bg-[#fcd019] text-white font-semibold">À propos</Link>
                </div>
            </div>
            <div className='w-1/2 mr-20 lg:mr-0 lg:pt-40 xl:pt-40 hidden md:block ' data-aos="fade-left">
                <img src="img/man1.png" alt="men" className='w-11/12'/>
            </div>
       </div>
    </div>
  )
}

export default HeroSection