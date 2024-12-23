import React from 'react';
import { BiBuildings } from 'react-icons/bi';
// import { TbBuildings } from 'react-icons/tb';

const CartServiceHome = ({id,  title, description}) => {
    return (
        <div className='relative my-14 w-[260px] rounded-xl inset-0 bg-black/60 flex flex-col box_shadow' key={id}>
            <BiBuildings className='text-[#fcd019] m-4 text-5xl bg-white rounded-xl p-1' />
            <div className='flex flex-col gap-3 px-4 py-5 justify-center text-white rounded-xl h-full'>
                <h2 className='font-bold text-lg text-left'>{title}</h2>
                <p className='text-sm text-left'>
                    {description}   
                </p>
            </div>
            <div className="absolute -top-2 -right-2 w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-[#fcd019]/60 rounded-3xl"></div>
        </div>
    );
}

export default CartServiceHome;
