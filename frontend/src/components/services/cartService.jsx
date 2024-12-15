import React from 'react';

const CartService = ({id, title, photo, description}) => {
    return (
        <div className='flex md:flex-row flex-col gap-6 w-full p-8 px-10' key={id}>
            <img src={photo} className='w-[450px] h-[500px] rounded-xl' alt={title} />
            <div className='flex flex-col gap-3 md:h-[400px] p-3 bg-slate-300/30 rounded-xl my-12'>
                <h1 className='text-4xl bg-transparent my-4 font-bold text-center text-[#fcd019]'>{title}</h1>
                <p className='text-center text-xl text-gray-500 px-4 font-medium'>{description}</p>
            </div>
        </div>
    );
}

export default CartService;
