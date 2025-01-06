import React from 'react';
import AsideFAQ from './AsideFAQ';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { datasFAQ } from '../../data/data';

const FAQ = () => {
    
    return (
        <div className='flex flex-col'>
            <div className='w-full' data-aos="fade-down" data-aos-duration="1500">
                <div className='bg-black/70 w-full h-[500px]'></div>
                <img src="img/construction-silhouette.jpg" className='h-[500px] absolute top-0 -z-10 w-full object-cover' alt="FAQ" />
                <h3 className='relative -top-44 text-center text-white w-full text-4xl font-bold px-6' data-aos="zoom-in" data-aos-duration="1800">Question fréquement posées</h3>
            </div>
            <div className='flex md:flex-row flex-col-reverse gap-4 my-16'>
                <AsideFAQ />
                <div className='md:w-2/3 w-full' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                    <div className='md:px-3 px-7 flex flex-col gap-4 py-4'>
                        <p className='text-left text-lg text-gray-600 font-medium'>Questions fréquemment posées</p>
                        <h1 className='md:text-4xl text-[28px] font-bold text-left'>Avez vous des <span className='text-[#35c6f4]'>questions ?</span></h1>
                        <p className='text-left border-2 w-20 border-[#35c6f4]'></p>
                        <p className='text-left md:text-md text-base text-gray-600 font-medium'>
                            Veuillez lire les questions ci-dessous et si vous ne trouvez pas votre
                            réponse, veuillez nous <br /> envoyer votre question, nous vous répondrons dans
                            les plus brefs délais.
                        </p>
                        <div className='flex gap-5'>
                            <RiQuestionnaireLine className='text-white bg-[#35c6f4] md:text-5xl text-3xl p-1 rounded-md' />
                            <h2 className='md:text-2xl text-black text-xl font-bold md:text-left'>Question fréquement posées</h2>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {datasFAQ.map((data) => (
                                
                                <div className='flex flex-col gap-4 md:w-4/5 w-full ml-0 border rounded-lg p-3' key={data.id}>
                                <div className='flex justify-between '>
                                    <p className='font-semibold text-md px-1 text-left'>{data.question}</p>
                                    <button onClick={data.btnToggle} className='duration-500' id={`btnChevron${data.id}`}>
                                        <HiOutlineChevronDoubleRight className='text-2xl' />
                                    </button>
                                </div>
                                <div className='text-left text-md text-gray-600 font-medium duration-500 hidden' id={`textHidden${data.id}`}></div>
                            </div>
                            ))}   
                        </div>
                    </div> 
                </div>    
            </div>
       </div>
    );
}

export default FAQ;

