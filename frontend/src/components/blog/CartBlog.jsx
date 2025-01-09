import React from 'react';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const CartBlog = ({id, title, photo, long_description}) => {
    function article(e){
        var dataArticle = e.currentTarget.parentNode
        console.log(dataArticle);
        
    }

    return (
        <div className='flex flex-col mx-auto w-[90%]' key={id}>
            <div className='flex md:flex-row flex-col gap-8 w-full'>
                <div className='relative'>
                    <img 
                    src={photo}
                    className='md:w-[300px] w-full object-cover h-[400px] rounded-xl'
                    alt={title} />
                    <div className="absolute -top-2 -left-2 w-0 h-0 border-r-[150px] border-r-transparent border-t-[150px] border-t-[#fcd019]/60 rounded-3xl"></div>
                </div>
                <div className='flex flex-col gap-6 md:w-1/2 w-full'>
                        {/* Le titre du blog */}
                        <h1 className='text-3xl font-bold'>{title}</h1>
                        {/* La date de publication */}
                        {/* <p className='font-semibold bg-[#fcd019]/40 text-[#35c6f4] w-1/5 p-1 rounded-xl text-center text-sm'>1 Juin 2023</p> */}
                    {/* Contenu de la publication */}
                    <p className='text-lg font-semibold text-black/70'>
                        {long_description}
                    </p>
                    <Link className='bg-[#35c6f4]/10 text-[#35c6f4] hover:text-white duration-500 hover:bg-[#35c6f4] w-1/3 font-semibold rounded-xl p-2 pb-2.5 flex justify-center gap-2' to="/articleBlog">
                        <button onClick={article} className='flex'>
                            <span> En savoir plus </span> 
                            <LiaLongArrowAltRightSolid className='mt-1 text-xl' /> 
                        </button>
                    </Link> 
                </div>
            </div>

            <div className='border border-b-black/40 my-14'></div>
        </div>
    );
}

export default CartBlog;
