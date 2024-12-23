import React from 'react';
import {  datasCartHome } from '../../data/data';
// import { BiCabinet, BiMessage } from 'react-icons/bi';
// import { MdCallMerge } from 'react-icons/md';
import CartServiceHome from './CartServiceHome';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

const ServicesHome = () => {
    const dataServicesHome = {...datasCartHome}
    
   
    
    return (
        <div className='md:relative xl:relative flex xl:flex-row flex-col lg:items-start items-center lg:gap-20 md:gap-20 image-contraste-4 w-full md:pb-0 pb-16 mb-20 '>
                    <div className='xl:relative w-full text-lg  text-white justify-center md:pt-16 pt-20'>
                        <div className='xl:absolute flex flex-col  gap-4 z-30 md:pl-16'>
                            <h1 className="md:text-4xl text-3xl font-bold lg:text-left text-center">
                                Nous Vous Offrons Des Services Solides<span className="text-[#fcd019]"> </span>
                            </h1>
                            <p className='lg:text-left text-center'>
                                Notre gamme de services de construction intégrés garantit le plus haut degré de qualité, de sécurité, d'efficacité et d'innovation pour votre projet.
                            </p>
                        </div>    
                        <div className='md:absolute left-5 top-8 z-20 bg-[#fcd019] h-64 w-36 rounded-xl xl:block hidden'></div>
                    </div>
            <Splide 
                hasTrack={ false } 
                options={ 
                  {
                    rewind: true, width : 650, height : 350, gap : '0px', perPage: 2, autoplay: false,
                    breakpoints: { 
                        1024: { 
                        perPage: 2,
                        width : 650,
                        height: 350,
                      },
                      768: { 
                        perPage: 1,
                        width : 450,
                        height: 350,
                      },
                      480: { 
                        gap: 6,
                        perPage: 1,
                        width : 320,
                        height: 350,
                      },
                    }
                } 
                }  
                aria-label="My Services"
                data-aos="fade-left"
                data-aos-duration="1500"
                >
    
                <SplideTrack className='lg:ml-12 md:ml-16 ml-7 mx-auto'>
                    {datasCartHome.map(( data, index ) => ( 
                    <SplideSlide key={index}>
                            <CartServiceHome 
                                {...data}
                            />
                    </SplideSlide>
                    ))}
                </SplideTrack> 
               <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev"><BiSolidLeftArrow className='react_row' /></button>
                    <button className="splide__arrow splide__arrow--next"><BiSolidRightArrow className='react_row' /></button>
                </div>
            </Splide>
        </div>
    );
}

export default ServicesHome;
