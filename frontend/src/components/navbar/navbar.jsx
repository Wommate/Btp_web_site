import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Navbar_sup from '../navbar_sup/navbar_sup'
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='fixed top-0 right-0 left-0 z-50'>
        <Navbar_sup />
        <div className='w-full lg:w-11/12 lg:mx-auto mt-0 lg:-mt-3 p-2 border-2 border-[#fcd019] lg:rounded-xl bg-white z-50 flex justify-between'>
            
            <div className='w-full lg:hidden flex items-center justify-between'>
                <div className='lg:hidden flex justify-center items-end'>
                    <img src="img/ETEP (1).png" alt="Logo" className='w-20 ' />
                </div>
                <div className='flex '>
                <select name="langue" id="langue" className='mr-5 bg-inherit '>
                    <option value="français" name="français">Français</option>
                    <option value="français" name="english">English</option>
                </select>
                <button className="lg:hidden text-2xl" onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </button>
                </div>
            </div>
            
            <ul className={`absolute top-14 left-0 pl-5 py-5 w-full bg-white lg:py-0 lg:top-0 lg:bg-inherit border-x-2 border-b-2 border-[#fcd019] lg:border-none lg:relative lg:w-7/12 lg:flex lg:justify-around lg:items-center ${isOpen ? "block" : "hidden"} `}>

                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><Link to="/">Acceuil</Link></li>
                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><Link to="/about">À propos</Link></li>
                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><Link to="/services">Services</Link></li>
                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><Link to="/blog">Blog</Link></li>
                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><Link to="/faq">FAQ</Link></li>
                <li className='hover:bg-[#35c6f4] lg:hover:bg-inherit lg:hover:text-[#fcd019] text-lg font-medium'><Link to="/contact">Contact</Link></li>
            </ul>
            <div className='w-full hidden lg:w-auto lg:flex lg:items-center justify-between'>
                <div className=''>
                <select name="langue" id="langue" className='mr-5 bg-inherit'>
                    <option value="français" name="français">Français</option>
                    <option value="français" name="english">English</option>
                </select>
                </div>
                <button className='px-5 py-2 rounded-xl text-sm text-black font-medium bg-[#fcd019] hidden lg:block'>Request Quote</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar