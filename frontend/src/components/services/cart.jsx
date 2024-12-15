import React from 'react';

const Cart = ({id, title, photo, description}) => {
    return (
        <div className='flex flex-col gap-3 bg-[#fcd019] p-2 py-4 rounded-xl hover:shadow-lg hover:shadow-[#35c6f4] hover:-translate-y-4 duration-500' key={id}>
            <img src= {photo} className='w-[220px] h-[210px] mx-auto rounded-xl object-cover shadow-md shadow-[#35c6f4]' alt="Lycée" />
            <h2 className='font-bold text-2xl text-center'>{title}</h2>
            <p className='text-lg'>
                {description}   
            </p>
        </div>
    );
}

export default Cart;
