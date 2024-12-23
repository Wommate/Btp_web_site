import React from 'react'
import './navbar.css'
import Navbar_sup from '../navbar_sup/navbar_sup'
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
      AOS.init({
        duration: 1000, // Durée de l'animation
        once: true, // Animation jouée une seule fois
      });
    }, []);

  return (
    <div className='absolute top-0 w-full z-50' data-aos="fade-down">
        <Navbar_sup />
        <div className='w-full lg:w-11/12 lg:mx-auto mt-0 lg:-mt-3 p-2 border-2 border-[#fcd019] lg:rounded-xl bg-white z-50 flex justify-between'>
            
            <div className='w-full lg:hidden flex items-center justify-between'>
                <div className='lg:hidden flex justify-center items-end'>
                    <img src="img/ETEP (1).png" alt="Logo" className='w-20 ' />
                </div>
                <div className='flex '>
                <button className="lg:hidden text-2xl" onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </button>
                </div>
            </div>
            
            <ul className={`absolute top-14 left-0 pl-5 py-5 w-full bg-white lg:py-0 lg:top-0 lg:bg-inherit border-x-2 border-b-2 border-[#fcd019] lg:border-none lg:relative lg:w-7/12 lg:flex lg:justify-around lg:items-center ${isOpen ? "block" : "hidden"} `}>
                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><NavLink to="/" className={({ isActive }) => isActive ? "text-[#fcd019]" : ""}>Acceuil</NavLink></li>
                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#fcd019]" : ""}>À propos</NavLink></li>
                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><NavLink to="/services" className={({ isActive }) => isActive ? "text-[#fcd019]" : ""}>Services</NavLink></li>
                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#fcd019]" : ""}>Blog</NavLink></li>
                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><NavLink to="/faq" className={({ isActive }) => isActive ? "text-[#fcd019]" : ""}>FAQ</NavLink></li>
                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#fcd019]" : ""}>Contact</NavLink></li>
            </ul>
            <div className='w-full hidden lg:w-auto lg:flex lg:items-center justify-between'>
                <div className='px-5 py-2 rounded-lg text-sm hover:bg-[#f2c200] text-black font-medium bg-[#fcd019] hidden lg:block shadow shadow-black/50'><NavLink to="/contact">Contactez-Nous</NavLink></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar