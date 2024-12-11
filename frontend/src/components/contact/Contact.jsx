import React from 'react';
import { GiPositionMarker } from 'react-icons/gi';
import { LuMessageSquareText } from 'react-icons/lu';
import { PiPhoneCall } from 'react-icons/pi';

const Contact = () => {
    return (
        <div className='flex md:flex-row flex-col p-12 w-full'>
            <div className='bg-[#fcd019] md:pt-24 md:rounded-bl-xl md:rounded-tl-xl md:rounded-tr-none rounded-t-xl md:py-3 py-20 md:px-5 px-4 md:pl-20 md:w-1/2 w-full flex flex-col md:gap-10 gap-16'>
                <h1 className='md:text-5xl text-black text-3xl font-bold md:text-left text-center'>
                    Contactez-nous 
                </h1>
                <div className='flex gap-3'>
                    <PiPhoneCall className='font-bold md:text-7xl text-5xl bg-[#35c6f4] text-white rounded-full p-1' />
                    <div>
                        <p className='md:text-xl text-base text-left font-semibold text-[#35c6f4]'>Appeler maintenant au</p>
                        <p className='md:text-2xl text-base text-black text-left font-bold'>+221 78 235 45 70</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <LuMessageSquareText className='font-bold md:text-7xl text-5xl bg-[#35c6f4] text-white rounded-full p-1' />
                    <div>
                        <p className='md:text-xl text-base text-left font-semibold text-[#35c6f4]'>Notre courriel</p>
                        <p className='md:text-2xl text-black text-base text-left font-bold'>etep02@gmail.com</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <GiPositionMarker className='font-bold md:text-7xl text-5xl bg-[#35c6f4] text-white rounded-full p-1' />
                    <div>
                        <p className='text-xl text-left font-semibold text-[#35c6f4]'>Notre adresse</p>
                        <p className='md:text-2xl text-base text-black text-left font-bold'>Dakar, Senegal</p>
                    </div>
                </div> 
            </div>
            <div className='md:w-1/2 border-2 p-6 border-[#fcd019] md:rounded-r-xl md:rounded-bl-none rounded-b-xl'>
                <form action="#" method="post" className='flex flex-col gap-1 justify-center'>
                    <div className="flex flex-row gap-3">
                        <div className='flex flex-col gap-1 w-1/2'>
                            <label className='md:text-xl text-gray-600 opacity-60 text-left font-semibold' htmlFor="name">Name</label>
                            <input className='border rounded-lg p-1' type="text" name="name" id="name" />
                        </div>
                        <div className='flex flex-col gap-1 w-1/2'>
                            <label className='md:text-xl text-gray-600 opacity-60 text-left font-semibold' htmlFor="email">Email</label>
                            <input className='border rounded-lg p-1' type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='md:text-xl text-gray-600 opacity-60 text-left font-semibold' htmlFor="subject">Subject</label>
                        <input className='border rounded-lg p-1' type="text" name="subject" id="subject" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='md:text-xl text-gray-600 opacity-60 text-left font-semibold' htmlFor="phone">Phone</label>
                        <input className='border rounded-lg p-1' type="tel" name="phone" id="phone" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='md:text-xl text-gray-600 opacity-60 text-left font-semibold' htmlFor="content">Content</label>
                        <textarea name="content" id="content" rows="10" className='border rounded-lg p-1 h-44'></textarea>
                    </div>
                    <input type="submit" value="Soumettre" className='p-3 rounded-lg bg-[#35c6f4] text-black text-lg mt-3 font-bold md:w-1/4 w-1/2 mx-auto' />
                </form>
            </div>
        </div>
    );
}

export default Contact;
