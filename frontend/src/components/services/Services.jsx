import React from 'react';
import { datasCart } from '../../data/data';
import Cart from './cart';
import { MdOutlineMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Services = () => {
    // console.log(dataServices);
    return (
        <div className='flex flex-col'>
            <div className='w-full' data-aos="fade-down" data-aos-duration="1500">
                <div className='bg-black/70 w-full h-[500px]'></div>
                <img src="img/scene-construction.jpg" className='h-[500px] absolute top-0 -z-10 w-full object-cover' alt="FAQ" />
                <h3 className='relative -top-44 text-center text-white w-full text-4xl font-bold px-6' data-aos="zoom-in" data-aos-duration="1800">Services</h3>
            </div>
            <div className='flex flex-col gap-3 my-10'>
                <p className='text-center text-xl text-gray-400 font-medium' data-aos="fade-up" data-aos-duration="1500">Ce que nous vous proposons</p>
                <h1 className='text-4xl font-bold text-center' data-aos="fade-up" data-aos-duration="1500">Nos services <span className='text-[#fcd019]'>parfaites</span></h1>
                <p className='mx-auto my-4 border-2 w-16 border-[#fcd019]' data-aos="fade-up" data-aos-duration="1500"></p> 
            </div>
            <div className='flex flex-col relative md:h-[900px] w-full'>
                <div className='top-0 z-10 py-10 grid md:grid-cols-4 grid-cols-1 gap-6 px-6 w-full'>
                    {datasCart.map((data) => (
                        <Cart 
                            {...data}
                        />
                    ))}
                </div>
                <div className='lg:absolute lg:top-[72%] flex md:flex-row flex-col gap-3 bg-black/70 w-full md:mb-0 md:-mt-[190px] -mt-[130px] px-4 md:pb-12 pb-12 pt-40 bg_section_contact_service' data-aos="fade-up" data-aos-duration="1500">
                    <div className='flex md:flex-row flex-col gap-4 px-10' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                        <MdOutlineMessage className='md:text-7xl text-8xl bg-[#fcd019] mx-auto text-black md:p-2 p-3 my-3 rounded-xl' />
                        <div className='flex flex-col md:gap-2 gap-4 text-white'>
                            <h1 className='md:text-4xl text-3xl md:text-left text-center font-bold'>Besoin de prendre contact ? </h1>
                            <p className='text-base font-semibold md:text-left text-center'>Nous sommes à votre disposition. Pour vous accompagner de la conception jusqu'à la réalistion de votre projet </p>
                        </div>
                    </div>
                    <Link to="/contact" className='md:text-2xl text-xl h-12 hover:text-[#fcd019] md:w-1/3 duration-500 font-bold flex flex-row my-5 bg-white hover:bg-black md:px-16 px-10 md:pt-1 pt-2' data-aos="zoom-in" data-aos-duration="1500">
                        <span>Contactez nous</span>
                        <IoIosArrowRoundForward className='md:my-0.5 mx-3 text-4xl' /> 
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default Services;
