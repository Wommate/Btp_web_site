import React from 'react'
import { GrUserWorker } from "react-icons/gr";
import { TbCircleDashedCheck } from "react-icons/tb";

function Card() {
  return (
    <div className='flex gap-5'>
        <div className='w-1/2 flex flex-col gap-7'>
          <div 
            className="w-full relative h-96 bg-no-repeat bg-cover bg-center -z-50 rounded-3xl"
            style={{
              backgroundImage: 'url("img/etep/IMG-20241130-WA0116.jpg")',
            }}
          >
            <div class="absolute -bottom-3 -right-3 w-0 h-0 border-t-[150px] border-t-transparent border-r-[150px] border-r-[#fcd019]/60 rounded-3xl"></div>
          </div>

          <div 
            className="relative h-32 bg-no-repeat bg-cover bg-center -z-50 rounded-3xl"
            style={{
              backgroundImage: 'url("img/etep/IMG-20241130-WA0230.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center rounded-3xl">           
                <div className="flex flex-col justify-center md:flex-row md:justify-start items-center gap-2 text-[#fcd019] max-w-2xl">
                  <GrUserWorker className='w-10 h-10 p-1 bg-white rounded-lg'/>
                  <p className="font-bold flex flex-col items-center">
                    Des clients<br></br> 
                    <span className='font-normal text-white'>Satisfaits</span>
                  </p>
                </div>
            </div>
          </div>
        </div>

        <div className='w-1/2 flex flex-col gap-7'>
            <div 
              className="relative h-32 bg-no-repeat bg-cover bg-center -z-50 rounded-3xl"
              style={{
                backgroundImage: 'url("img/etep/IMG-20241130-WA0234.jpg")',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center rounded-3xl">           
                  <div className="flex flex-col justify-center md:flex-row md:justify-start items-center gap-2 text-[#fcd019] max-w-2xl">
                    <TbCircleDashedCheck className='w-10 h-10 p-1 bg-white rounded-lg'/>
                    <p className="font-bold flex flex-col items-center">
                      +07 Ans<br></br> 
                      <span className='font-normal text-white'>d'expérience</span>
                    </p>
                  </div>
              </div>
            </div>
          <div 
            className="w-full relative h-96 bg-no-repeat bg-cover bg-center -z-50 rounded-3xl"
            style={{
              backgroundImage: 'url("img/etep/IMG-20241130-WA0257.jpg")',
            }}
          >
            <div class="absolute -bottom-3 -right-3 w-0 h-0 border-t-[150px] border-t-transparent border-r-[150px] border-r-[#fcd019]/60 rounded-3xl"></div>
          </div>
        </div>
    </div>
  )
}

export default Card