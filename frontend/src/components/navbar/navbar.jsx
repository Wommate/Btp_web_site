import React from 'react'
import './navbar.css'
import Navbar_sup from '../navbar_sup/navbar_sup'
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='fixed top-0 right-0 left-0'>
        <Navbar_sup />
        <div className='w-full lg:w-11/12 lg:mx-auto mt-0 lg:-mt-3 p-2 border-2 border-[#fcd019] lg:rounded-xl bg-white z-50 flex justify-between'>
            
            <div className='w-full lg:hidden flex items-center justify-between'>
                <div className='lg:hidden flex justify-center items-end'>
                    <img src="img/ETEP.png" alt="Logo" className='w-20 ' />
                    <p className='font-bold text-3xl text-[#35c6f4]'>ETEP</p>
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
            
            <ul className={`lg:w-7/12 lg:flex lg:justify-around lg:items-center ${isOpen ? "block" : "hidden"} `}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
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