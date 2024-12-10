import React from 'react';
import { BsInstagram, BsTelephoneFill } from 'react-icons/bs';
import { FaFacebook, FaTiktok } from 'react-icons/fa6';
import { GiPositionMarker } from 'react-icons/gi';
import { GoTriangleRight } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-around gap-3 p-4 pt-10 bg-[#282c34] text-white'>
                <div className='w-1/4 flex flex-col gap-2'>
                    <h1 className='text-yellow-300 font-bold text-4xl text-left mb-3'>ETEP</h1>
                    <p className='text-left text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione voluptates veritatis, molestiae magnam porro qui 
                        consequatur enim officiis dignissimos culpa aliquid sint temporibus, 
                        exercitationem neque placeat quia eligendi, minus omnis!
                    </p>
                    <div className='flex gap-6 my-10'>
                        <a className='text-xl bg-yellow-300 hover:bg-transparent hover:text-yellow-300 duration-500 text-black p-1.5 rounded-full' href="#"><FaFacebook /></a>
                        <a className='text-xl bg-yellow-300 hover:bg-transparent hover:text-yellow-300 duration-500 text-black p-1.5 rounded-full' href="#"><BsInstagram /></a>
                        <a className='text-xl bg-yellow-300 hover:bg-transparent hover:text-yellow-300 duration-500 text-black p-1.5 rounded-full' href="#"><FaTiktok /></a>
                    </div>
                </div>
                <div className='w-1/4 flex flex-col gap-3 text-left'>
                    <h3 className='text-xl font-bold text-yellow-300 mb-4'>Quick link</h3>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex gap-2'>
                            <GoTriangleRight className='my-[5px] text-yellow-300' />
                            <a href="#" className='hover:text-yellow-300 duration-500 text-base'>Home</a>
                        </li>
                        <li className='flex gap-2'>
                            <GoTriangleRight className='my-[5px] text-yellow-300' />
                            <a href="#" className='hover:text-yellow-300 duration-500 text-base'>Services</a>
                        </li>
                        <li className='flex gap-2'>
                            <GoTriangleRight className='my-[5px] text-yellow-300' />
                            <a href="#" className='hover:text-yellow-300 duration-500 text-base'>Contact</a>
                        </li>
                        <li className='flex gap-2'>
                            <GoTriangleRight className='my-[5px] text-yellow-300' />
                            <a href="#" className='hover:text-yellow-300 duration-500 text-base'>About Us</a>
                        </li>
                       
                    </ul>
                </div>
                <div className='w-1/4 flex flex-col gap-4 text-left'>
                    <h3 className='text-xl font-bold text-yellow-300 mb-4'>Contact</h3>
                    <div className='flex gap-2'>
                        <BsTelephoneFill className='text-3xl text-black bg-yellow-300 p-1.5 rounded-full duration-500' />
                        <p className='text-base'>+221 78 235 45 70</p>
                    </div>
                    <div className='flex gap-2'>
                        <GiPositionMarker className='text-3xl text-black bg-yellow-300 p-1.5 rounded-full duration-500' />
                        <p className='text-base'>Dakar, Senegal</p>
                    </div>
                    <div className='flex gap-2'>
                        <MdEmail className='text-3xl text-black bg-yellow-300 p-1.5 rounded-full duration-500' />
                        <p className='text-base'>etep02@gmail.com</p>
                    </div>
                    
                </div>
            </div>
            <div className='bg-black text-white text-base flex py-6 justify-center gap-2'>
                    <p>© Copyright <strong>ETEP</strong>. Tous droits réservé Designed by</p>
                    <a className='font-bold text-yellow-300' href="#">Wommate Technology</a>
            </div>
        </div>
    );
}

export default Footer;
