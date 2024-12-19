import React from 'react';
import { BsInstagram, BsTelephoneFill } from 'react-icons/bs';
import { FaFacebook, FaTiktok } from 'react-icons/fa6';
import { GiPositionMarker } from 'react-icons/gi';
import { GoTriangleRight } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex md:flex-row flex-col md:justify-around justify-center md:mx-auto gap-3 p-4 pt-10 bg-[#282c34] text-white'>
                <div className='md:w-1/4 w-3/4 md:mx-0 mx-auto flex flex-col gap-2'>
                    <h1 className='text-[#fcd019] font-bold text-4xl text-left mb-3'>ETEP</h1>
                    <p className='text-left text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione voluptates veritatis, molestiae magnam porro qui 
                        consequatur enim officiis dignissimos culpa aliquid sint temporibus, 
                        exercitationem neque placeat quia eligendi, minus omnis!
                    </p>
                    {/* <div className='flex gap-6 my-10'>
                        <a className='text-xl bg-[#fcd019] hover:bg-[transparent] hover:text-[#fcd019] duration-500 text-black p-1.5 rounded-full' href="#"><FaFacebook /></a>
                        <a className='text-xl bg-[#fcd019] hover:bg-transparent hover:text-[#fcd019] duration-500 text-black p-1.5 rounded-full' href="#"><BsInstagram /></a>
                        <a className='text-xl bg-[#fcd019] hover:bg-transparent hover:text-[#fcd019] duration-500 text-black p-1.5 rounded-full' href="#"><FaTiktok /></a>
                    </div> */}
                </div>
                <div className='md:w-1/4 w-3/4 md:mx-0 mx-auto flex flex-col gap-3 text-left'>
                    <h3 className='text-xl font-bold text-[#fcd019] mb-4'>Quick link</h3>
                    <ul className='flex flex-col md:justify-start justify-center gap-4'>
                        <li className='flex gap-2'>
                            <GoTriangleRight className='my-[5px] text-[#fcd019]' />
                            <Link className= "hover:text-[#fcd019] duration-500 text-base" to="/">Acceuil</Link>
                        </li>
                        <li className='flex gap-2'>
                            <GoTriangleRight className='my-[5px] text-[#fcd019]' />
                            <Link className= "hover:text-[#fcd019] duration-500 text-base" to="/about">À propos</Link>
                        </li>
                        <li className='flex gap-2'>
                            <GoTriangleRight className='my-[5px] text-[#fcd019]' />
                            <Link className= "hover:text-[#fcd019] duration-500 text-base" to="/services">Services</Link>
                        </li>
                        <li className='flex gap-2'>
                            <GoTriangleRight className='my-[5px] text-[#fcd019]' />
                            <Link className= "hover:text-[#fcd019] duration-500 text-base" to="/blog">Blog</Link>
                        </li>
                        <li className='flex gap-2'>
                            <GoTriangleRight className='my-[5px] text-[#fcd019]' />
                            <Link className= "hover:text-[#fcd019] duration-500 text-base" to="/contact">Contact</Link>
                        </li>
                       
                    </ul>
                </div>
                <div className='md:w-1/4 w-3/4 flex flex-col gap-4 md:mx-0 mx-auto text-left'>
                    <h3 className='text-xl  font-bold text-[#fcd019] mb-4'>Contact</h3>
                    <div className='flex gap-2'>
                        <BsTelephoneFill className='text-3xl text-black bg-[#fcd019] p-1.5 rounded-full duration-500' />
                        <p className='text-base'>33 945 22 57 / +221 77 638 31 06</p>
                        {/* <p className='text-base'>+221 77 638 31 06</p> */}
                        {/* <p className='text-base'>77 544 19 48</p> */}
                    </div>
                    <div className='flex gap-2'>
                        <GiPositionMarker className='text-3xl text-black bg-[#fcd019] p-1.5 rounded-full duration-500' />
                        <a href='https://maps.app.goo.gl/pJuE5xG7GgoVAhFF9' target='_blank' className='hover:text-[#fcd019] duration-500'>Quartier Ngane - lot 40 Kaolack</a>
                    </div>
                    <div className='flex gap-2'>
                        <MdEmail className='text-3xl text-black bg-[#fcd019] p-1.5 rounded-full duration-500' />
                        <a href="mailto:etepbaraseck@gmail.com" className='hover:text-[#fcd019] duration-500'>etepbaraseck@gmail.com</a>
                        {/* <a href="mailto:contact@etepbaraseck.com" className='hover:text-[#fcd019] duration-500'>contact@etepbaraseck.com</a> */}
                    </div>
                    
                </div>
            </div>
            <div className='bg-black text-white md:text-base text-sm flex py-6 px-4 justify-center'>
                <p className='text-center'>© Copyright <strong>ETEP</strong>. Tous droits réservé Designed by <a className='font-bold text-[#fcd019]' target='_blank' href="https://www.wommate.tech/">Wommate Technology</a></p>
            </div>
        </div>
    );
}

export default Footer;
