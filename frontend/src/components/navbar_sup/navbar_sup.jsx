import React from 'react'
import './navbar_sup.css'
import { LuContact } from "react-icons/lu";
import { TbMail } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";

function navbar_sup() {
  return (
    <div>
      <div className='w-full h-20 z-50 hidden lg:flex flex-row justify-between rounded-b-xl'>
        <div className='w-3/12 bg-black -z-10 flex justify-center items-end py-6 rounded-bl-xl'>
            <img src="img/ETEP.png" alt="Logo" className='w-20 ' />
            <p className='font-bold text-3xl text-[#35c6f4]'>ETEP</p>
        </div>
        <ul className='w-9/12 bg-black/50 -z-10 text-[#fcd019] font-medium flex justify-around items-end py-7 rounded-br-xl'>
            <li className='flex items-center gap-2'>
              <LuContact className='text-3xl' />
              <div className='flex flex-col text-sm'>
                Telephone <span className='text-white font-normal text-xs'>(+221) 00 000 00 00</span>
              </div>
            </li>
            <li className='flex items-center gap-2'>
              <TbMail className='text-3xl' />
              <div className='flex flex-col text-sm'>
                Email <span className='text-white font-normal text-xs'>email@gmail.com</span>
              </div>
            </li>
            <li className='flex items-center gap-2'>
              <GrMapLocation className='text-3xl' />
              <div className='flex flex-col text-sm'>
                Adresse <span className='text-white font-normal text-xs'>localisation</span>
              </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default navbar_sup