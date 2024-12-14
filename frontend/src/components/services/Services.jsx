import React from 'react';
// import Img1 from 'img/Img_1.jpg'
import { datasCart,dataServices } from '../../data/data';
import Cart from './cart';
import CartService from './cartService';

const Services = () => {
    console.log(dataServices);

    return (
        <div className='flex flex-col'>
            <div className='bg-gradient-to-b from-slate-50 to-slate-100 mb-10 py-6'>
                <h3 className='text-2xl font-bold px-6'>Services</h3>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-center text-xl text-gray-400 font-medium'>Ce que nous vous proposons</p>
                <h1 className='text-4xl font-bold text-center'>Nos services <span className='text-[#fcd019]'>parfaites</span></h1>
                <p className='mx-auto my-4 border-2 w-16 border-[#fcd019]'></p> 
            </div>
            <div className='my-32 grid md:grid-cols-4 grid-cols-1 gap-10 md:px-4 px-20 w-full '>
                {datasCart.map((data) => (
                    <Cart
                        {...data}
                    />
                ))}
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
