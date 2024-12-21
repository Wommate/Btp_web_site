import React from 'react';
import { GiPositionMarker } from 'react-icons/gi';
import { LuMessageSquareText } from 'react-icons/lu';
import { PiPhoneCall } from 'react-icons/pi';

const Contact = () => {
    return (
        <div className='flex md:flex-row flex-col gap-8 p-12 md:px-28 px-8 my-20 w-full'>
            <div className='md:rounded-bl-xl md:rounded-tl-xl md:rounded-tr-none rounded-t-xl md:py-3 py-4 md:w-1/2 w-full flex flex-col gap-10'>
                <h1 className='md:text-5xl text-black text-4xl font-bold md:text-left text-center'>
                    Contactez-nous 
                </h1>
                <div className='flex flex-col w-full'>
                    <div className='w-full mx-auto '>
                        <div className='md:h-32 h-28 background-contact-1 flex gap-3 shadow p-6 rounded-2xl'>
                            <PiPhoneCall className='font-bold md:text-5xl text-5xl md:my-3 my-2 bg-[#fcd019] text-white rounded-xl p-2' />
                            <div className='md:my-0 my-2'>
                                <p className='lg:text-base text-xs text-left font-bold text-[#fcd019]'>Appeler maintenant au</p>
                                <p className='lg:text-base text-xs text-white text-left font-bold ml-2'>33 945 22 57</p>
                                <p className='lg:text-base text-xs text-white text-left font-bold'>(+221)77 638 31 06/ 77 544 19 48</p>
                                {/* <p className='lg:text-base text-sm text-white text-left font-bold'>+221 </p> */}
                            </div>
                        </div>
                        <div className='w-14 h-14 bg-[#fcd019] rounded-b-xl z-20 mx-auto -mt-1'></div>
                    </div>

                    <div className='w-full mx-auto md:justify-start justify-center'>
                        <div className='md:h-32 h-28 background-contact-2 flex gap-3 shadow p-6 rounded-2xl'>
                            <LuMessageSquareText className='font-bold md:text-5xl md:my-4 my-1 text-5xl bg-[#fcd019] text-white rounded-xl p-2' />
                            <div>
                                <p className='lg:text-base text-sm text-left font-bold text-[#fcd019]'>Nos courriels</p>
                                <p className='lg:text-base text-white text-xs text-left font-bold'>etepbaraseck@gmail.com</p>
                                <p className='lg:text-base text-white text-xs text-left font-bold'>contact@etepbaraseck.com</p>
                            </div>
                        </div>
                        <div className='w-14 h-14 bg-[#fcd019] rounded-b-xl z-20 mx-auto -mt-1'></div>
                    </div>
                    <div className='w-full mx-auto '>
                        <div className='md:h-32 h-28 background-contact-3 flex gap-3 shadow p-6 rounded-2xl'>
                            <GiPositionMarker className='font-bold md:text-5xl text-5xl md:my-4 my-1 bg-[#fcd019] text-white rounded-xl p-2' />
                            <div className='md:my-4 my-3'>
                                <p className='lg:text-base text-xs text-left font-bold text-[#fcd019]'>Notre adresse</p>
                                <p className='lg:text-base text-xs text-white text-left font-bold'>Quartier Ngane - lot 40 Kaolack</p>
                            </div>
                        </div>
                    </div> 
                </div>
                
            </div>
            <div className='md:w-1/2 w-full py-6 mt-20 md:rounded-r-xl md:rounded-bl-none rounded-b-xl'>
                <h2 className='font-bold md:text-4xl text-2xl text-black mb-8 border-b-2 border-[#fcd019] pb-2'>Ou via le formulaire</h2>
                <form action="#" method="post" className='flex flex-col gap-5 justify-center'>
                    <div className="flex flex-row gap-3 w-full">
                        <input className='border rounded-xl p-1 px-2 placeholder:text-lg placeholder:px-2 w-1/2' type="text" name="name" id="name" placeholder='Nom' />
                        <input className='border rounded-xl p-1 px-2 placeholder:text-lg placeholder:px-2 w-1/2' type="email" name="email" id="email" placeholder='Email' />
                    </div> 
                        <input className='border rounded-xl p-1 px-2 placeholder:text-lg placeholder:px-2' type="text" name="subject" id="subject" placeholder='Objet' />
                        <input className='border rounded-xl p-1 px-2 placeholder:text-lg placeholder:px-2' type="tel" name="phone" id="phone" placeholder='Tel' />
                        <textarea name="content" id="content" rows="10" className='border rounded-lg p-1 px-2 h-44 placeholder:text-lg placeholder:px-2' placeholder='Ecrivez votre message'></textarea>
                    <input type="submit" value="Soumettre" className='p-3 rounded-xl bg-[#fcd019] text-black lg:text-lg text-sm mt-3 font-bold w-1/3 mx-auto hover:shadow-md hover:shadow-[#35c6f4] duration-500' />
                </form>
            </div>
        </div>
    );
}

export default Contact;
