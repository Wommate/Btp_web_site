import React from 'react';
import { MdOutlineMessage } from 'react-icons/md';
// import ImgFaq from '../../../public/img/img-faq.jpg';

const AsideFAQ = () => {
    return (
        <div className='flex flex-col p-3 md:w-1/3'>
            <aside className='bg-[#282c34] rounded-lg p-2'>
                <div className='px-5 w-full flex flex-col gap-10'>
                    <div className='flex flex-col gap-3 p-6 rounded-2xl w-full'>
                        {/* <img src={ImgFaq} className='rounded-lg contrast-125' alt="ETEP" /> */}
                        {/* <MdOutlineMessage className='font-bold md:text-5xl text-5xl my-1 bg-[#fcd019] text-white rounded-lg p-3' /> */}
                        <div>
                            <p className='md:text-xl text-base text-left font-semibold text-[#fcd019]'></p>
                            <p className='md:text-xl text-base text-white text-left font-bold'></p>
                        </div>
                    </div>
                    <div className='flex gap-3'>    
                        <MdOutlineMessage className='text-white bg-[#35c6f4] text-4xl p-1 rounded-md' />
                        <h3 className='md:text-2xl text-white text-3xl font-bold md:text-left text-center'>
                            Demandez-nous
                        </h3>
                    </div> 
                </div>
                <div className='p-6 md:rounded-r-xl md:rounded-bl-none rounded-b-xl'>
                    <form action="#" method="post" className='flex flex-col gap-5 justify-center'>
                        <div className="flex flex-row gap-3">
                            <div className='flex flex-col gap-1 w-1/2'>
                                <input className='border rounded-lg p-2 placeholder:text-lg placeholder:px-2' type="text" name="name" id="name" placeholder='Nom' />
                            </div>
                            <div className='flex flex-col gap-1 w-1/2'>
                                <input className='border rounded-lg p-2 placeholder:text-lg placeholder:px-2' type="email" name="email" id="email" placeholder='Email' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <input className='border rounded-lg p-2 placeholder:text-lg placeholder:px-2' type="text" name="subject" id="subject" placeholder='Objet' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <input className='border rounded-lg p-2 placeholder:text-lg placeholder:px-2' type="tel" name="phone" id="phone" placeholder='Tel' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <textarea name="content" id="content" rows="10" className='border rounded-lg p-1 h-44 placeholder:text-lg placeholder:px-2' placeholder='Ecrivez votre message'></textarea>
                        </div>
                        <input type="submit" value="Demander" className='p-3 rounded-lg bg-[#fcd019] text-black text-sm mt-3 font-bold md:w-1/3 w-1/2' />
                    </form>
                </div>
            </aside>
            
        </div>
    );
}

export default AsideFAQ;
