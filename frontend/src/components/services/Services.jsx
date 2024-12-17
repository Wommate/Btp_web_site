import React from 'react';
// import Img1 from 'img/Img_1.jpg'
import { datasCart,dataServices } from '../../data/data';
import Cart from './cart';
import CartService from './cartService';
import { MdOutlineMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Services = () => {
    // console.log(dataServices);

    return (
        <div className='flex flex-col'>
            <div className=' w-full'>
                <div className='bg-black/70 w-full h-[500px]'></div>
                <img src="img/scene-construction.jpg" className='h-[500px] absolute top-0 -z-10 w-full object-cover' alt="FAQ" />
                <h3 className='relative -top-44 text-center text-white w-full text-4xl font-bold px-6'>Services</h3>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-center text-xl text-gray-400 font-medium'>Ce que nous vous proposons</p>
                <h1 className='text-4xl font-bold text-center'>Nos services <span className='text-[#fcd019]'>parfaites</span></h1>
                <p className='mx-auto my-4 border-2 w-16 border-[#fcd019]'></p> 
            </div>
            <div className='flex flex-col relative md:h-[900px] w-full'>
                <div className='top-0 z-10 py-10 grid md:grid-cols-4 grid-cols-1 gap-10 md:px-4 px-20 w-full'>
                    {datasCart.map((data) => (
                        <Cart 
                            {...data}
                        />
                    ))}
                </div>
                <div className='md:absolute md:bottom-32 flex md:flex-row flex-col gap-3 md:justify-between justify-center bg-black/70 w-full md:mb-0 -mt-[130px] px-4 md:pb-16 pb-12 pt-36  bg_section_contact_service'>
                    <div className='flex md:flex-row flex-col gap-4 px-10'>
                        <MdOutlineMessage className='md:text-7xl text-8xl bg-[#fcd019] mx-auto text-black md:p-2 p-3 my-3 rounded-xl' />
                        <div className='flex flex-col md:gap-2 gap-4 text-white'>
                            <h1 className='md:text-4xl text-3xl md:text-left text-center font-bold'>Besoin de prendre contact ? </h1>
                            <p className='text-base font-semibold md:text-left text-center'>Nous sommes à votre disposition. Pour vous accompagner de la conception jusqu'à la réalistion de votre projet </p>
                        </div>
                    </div>
                    <Link to="/contact" className='md:text-2xl text-xl hover:text-[#fcd019] duration-500 font-bold md:w-1/3 flex my-5 h-12 bg-white hover:bg-black px-16 mx-auto md:pt-1 pt-2'>Contactez nous <IoIosArrowRoundForward className='md:my-0.5  mx-3 text-4xl' /> </Link>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                {dataServices.map((dataService) => (
                   <CartService
                        {...dataService} 
                   />
                ))}
            </div>
        </div>
    );
}

export default Services;
