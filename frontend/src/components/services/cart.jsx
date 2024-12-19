import React from 'react';

const Cart = ({id, title, photo, description}) => {
    return (
        <div className='relative md:w-full rounded-xl inset-0 bg-white bg-opacity box_shadow' key={id}>
            <div className='flex flex-col gap-3 px-1 py-5 justify-center rounded-xl h-full'>
                <img src= {photo} className='w-[220px] h-[220px] mx-auto mt-2 rounded-xl object-cover shadow-md ' alt={title} />
                <h2 className='font-bold text-black text-2xl text-center'>{title}</h2>
                <p className='text-lg text-black md:px-2 px-10 text-center'>
                    {description}   
                </p>
            </div>
            <div class="absolute -top-2 -right-2 w-0 h-0 border-l-[150px] border-l-transparent border-t-[150px] border-t-[#fcd019]/60 rounded-3xl"></div>
        </div>
    );
}

export default Cart;
