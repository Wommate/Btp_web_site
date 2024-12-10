import React from 'react'
import './hero_section.css'

function hero_section() {
  return (
    <div className="back">
       <div className='w-full h-full bg-black/40 flex justify-center items-center'>
            <div className='w-1/2 h-full pl-10 flex flex-col justify-center items-center gap-10'>
                <h1 className='flex flex-col text-[#fcd019] font-bold text-6xl'>ETEP <span className='text-[#35c6f4] text-left font-bold text-3xl'>Entreprise de Travaux d'Equipement et de Prestations Diverses</span></h1>
                <div className='flex flex-col items-start gap-4'>
                    <p className='text-white text-xl'>Chargée de la mise en oeuvre de tous les travaux de construction, de réhabilitation et d'entretien de routes, de ponts et d'autres ouvrages d'art.</p>
                    <a href="#" className='px-6 py-3 rounded-lg bg-[#fcd019] text-white font-semibold'>Learn more</a>
                </div>
            </div>
            <div className='w-1/2 pt-40'>
                <img src="img/man.png" alt="men" className='w-11/12'/>
            </div>
       </div>
    </div>
  )
}

export default hero_section