import React from "react";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { TbContract } from "react-icons/tb";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CardWorksManage() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée de l'animation
          once: false, // Animation jouée une seule fois
        });
      }, []);

  return (
    <div className="flex flex-col gap-4 md:w-11/12">
        <div
        className="relative h-28 bg-no-repeat bg-cover bg-center -z-50 rounded-3xl"
        style={{
            backgroundImage: 'url("img/etep/IMG-20241130-WA0283.jpg")',
        }}
        data-aos="zoom-out-up"
        data-aos-duration="2000"
        >
            <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center rounded-3xl">
                <div className="flex justify-start items-center gap-3 text-[#fcd019] max-w-2xl">
                    <LiaCalendarWeekSolid className="w-10 h-10 p-1 bg-white rounded-lg" />
                    <p className="font-medium flex flex-col items-center text-white">
                        Planification <br /> du projet
                    </p>
                </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-0 h-0 border-t-[150px] border-t-transparent border-r-[150px] border-r-[#fcd019]/60 rounded-3xl"></div>
        </div>
        <div
        className="relative h-28 bg-no-repeat bg-cover bg-center -z-50 rounded-3xl"
        style={{
            backgroundImage: 'url("img/etep/IMG-20241130-WA0354.jpg")',
        }}
        data-aos="zoom-out-up"
        data-aos-duration="2500"
        >
            <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center rounded-3xl">
                <div className="flex justify-start items-center gap-3 text-[#fcd019] max-w-2xl">
                    <TbContract className="w-10 h-10 p-1 bg-white rounded-lg" />
                    <p className="font-medium flex flex-col items-center text-white">
                        Contrat <br /> général
                    </p>
                </div>
            </div>
            <div className="absolute -bottom-3 -left-3 w-0 h-0 border-t-[150px] border-t-transparent border-l-[150px] border-l-[#fcd019]/60 rounded-3xl"></div>
        </div>
        <div
        className="relative h-28 bg-no-repeat bg-cover bg-center -z-50 rounded-3xl"
        style={{
            backgroundImage: 'url("img/etep/IMG-20241130-WA0234.jpg")',
        }}
        data-aos="zoom-out-up"
        data-aos-duration="3000"
        >
            <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center rounded-3xl">
                <div className="flex justify-start items-center gap-3 text-[#fcd019] max-w-2xl">
                    <LiaHourglassStartSolid className="w-10 h-10 p-1 bg-white rounded-lg" />
                    <p className="font-medium flex flex-col items-center text-white">
                        Lancement <br /> du projet
                    </p>
                </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-0 h-0 border-t-[150px] border-t-transparent border-r-[150px] border-r-[#fcd019]/60 rounded-3xl"></div>
        </div>
    </div>
  );
}

export default CardWorksManage;
