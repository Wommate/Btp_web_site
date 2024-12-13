import React from 'react';
import { GiPositionMarker } from 'react-icons/gi';
import { LuMessageSquareText } from 'react-icons/lu';
import { PiPhoneCall } from 'react-icons/pi';

const Contact = () => {
    return (
        <div className='flex md:flex-row flex-col p-12 w-full'>
            <div className='md:rounded-bl-xl md:rounded-tl-xl md:rounded-tr-none rounded-t-xl md:py-3 py-20 md:px-5 px-4 md:pl-20 md:w-1/2 w-full flex flex-col md:gap-10 gap-10'>
                <h1 className='md:text-5xl text-black text-3xl font-bold md:text-left text-center'>
                    Contactez-nous 
                </h1>
                <div className='flex flex-col'>
                    <div className='md:w-3/4 w-full'>
                        <div className='background-contact-1 flex gap-3 shadow p-6 rounded-2xl'>
                            <PiPhoneCall className='font-bold md:text-5xl text-5xl my-1 bg-[#fcd019] text-white rounded-xl p-3' />
                            <div>
                                <p className='md:text-xl text-base text-left font-semibold text-[#fcd019]'>Appeler maintenant au</p>
                                <p className='md:text-xl text-base text-white text-left font-bold'>+221 78 235 45 70</p>
                            </div>
                        </div>
                        <div className='w-14 h-14 bg-[#fcd019] rounded-b-3xl z-20 mx-auto -mt-1'></div>
                    </div>

                    <div className='md:w-3/4 w-full'>
                        <div className='background-contact-2 flex gap-3 shadow p-6 rounded-2xl'>
                            <LuMessageSquareText className='font-bold md:text-5xl my-2 text-5xl bg-[#fcd019] text-white rounded-xl p-3' />
                            <div>
                                <p className='md:text-xl text-base text-left font-semibold text-[#fcd019]'>Notre courriel</p>
                                <p className='md:text-xl text-white text-base text-left font-bold'>etep02@gmail.com</p>
                            </div>
                        </div>
                        <div className='w-14 h-14 bg-[#fcd019] rounded-b-3xl z-20 mx-auto -mt-1'></div>
                    </div>
                    <div className='background-contact-3 flex gap-3 shadow p-6 rounded-2xl w-3/4'>
                        <GiPositionMarker className='font-bold md:text-5xl text-5xl my-2 bg-[#fcd019] text-white rounded-xl p-3' />
                        <div>
                            <p className='text-xl text-left font-semibold text-[#fcd019]'>Notre adresse</p>
                            <p className='md:text-xl text-base text-white text-left font-bold'>Dakar, Senegal</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div className='md:w-1/2 p-6 mt-20 md:rounded-r-xl md:rounded-bl-none rounded-b-xl'>
                <form action="#" method="post" className='flex flex-col gap-5 justify-center'>
                    <div className="flex flex-row gap-3">
                        <div className='flex flex-col gap-1 w-1/2'>
                            <input className='border rounded-lg p-1 placeholder:text-lg placeholder:px-2' type="text" name="name" id="name" placeholder='Nom' />
                        </div>
                        <div className='flex flex-col gap-1 w-1/2'>
                            <input className='border rounded-lg p-1 placeholder:text-lg placeholder:px-2' type="email" name="email" id="email" placeholder='Email' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <input className='border rounded-lg p-1 placeholder:text-lg placeholder:px-2' type="text" name="subject" id="subject" placeholder='Objet' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <input className='border rounded-lg p-1 placeholder:text-lg placeholder:px-2' type="tel" name="phone" id="phone" placeholder='Tel' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <textarea name="content" id="content" rows="10" className='border rounded-lg p-1 h-44 placeholder:text-lg placeholder:px-2' placeholder='Ecrivez votre message'></textarea>
                    </div>
                    <input type="submit" value="Soumettre" className='p-3 rounded-lg bg-[#fcd019] text-black text-lg mt-3 font-bold md:w-1/4 w-1/2 mx-auto hover:shadow-md hover:shadow-[#35c6f4]' />
                </form>
            </div>
        </div>
    );
}

export default Contact;
