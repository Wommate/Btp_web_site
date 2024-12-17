import React from 'react';
import Cart from './cart';
import { datasCart } from '../../data/data';
import { BiCabinet, BiMessage } from 'react-icons/bi';
import { MdCallMerge } from 'react-icons/md';
import CartService from './cartService';


const ServicesHome = () => {
    const dataServicesHome = {...datasCart}
    const iconServices = [
        <BiMessage className='text-red-500' />,
        <BiCabinet className='text-red-500' />,
         <MdCallMerge className='text-red-500' />,
    ]
   
    
    dataServicesHome[2].photo =   <BiMessage className='text-red-500' />
    // console.log(dataServicesHome[2].photo);
    
    return (
        <div>
            <div className='my-20 grid md:grid-cols-4 grid-cols-1 gap-10 md:px-4 px-20 w-full image-contraste-4'>
                {/* {datasCart.map((data) => (
                    <Cart 
                        {...data}
                    />
                ))} */}
                <CartService>
                    {/* <p className='text-white'>Mon paragraphe</p> */}
                </CartService>
            </div>
        </div>
    );
}

export default ServicesHome;
