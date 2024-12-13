import React from 'react';
import AsideFAQ from './AsideFAQ';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

const Faq = () => {

    const btnToggle = () => {
        // for(let i=0;i<10;i++){
            const btn = document.getElementById('btnChevron'+{i})
            let textHidden = document.getElementById('textHidden'+{i})

        // }


        btn.classList.toggle('rotate-90')
        btn.classList.toggle('duration-400')
        btn.classList.toggle('text-lg')

        textHidden.classList.toggle('hidden')
        
    }
    
    return (
        <div className='flex gap-4'>
            <AsideFAQ />
            <div className='w-2/3'>
                <div className='px-3 flex flex-col gap-4 py-4'>
                    <p className='text-left text-lg text-gray-600 font-medium'>Questions fréquemment posées</p>
                    <h1 className='text-4xl font-bold text-left'>Avez vous des <span className='text-[#35c6f4]'>questions ?</span></h1>
                    <p className='text-left border-2 w-20 border-[#35c6f4]'></p>
                    <p className='text-left text-md text-gray-600 font-medium'>
                        Veuillez lire les questions ci-dessous et si vous ne trouvez pas votre
                        réponse, veuillez nous <br /> envoyer votre question, nous vous répondrons dans
                        les plus brefs délais.
                    </p>
                    <div className='flex gap-5'>
                        <RiQuestionnaireLine className='text-white bg-[#35c6f4] text-5xl p-2 rounded-md' />
                        <h2 className='md:text-2xl text-black text-3xl font-bold md:text-left text-center'>Question fréquement posées</h2>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-4 w-4/5 ml-0 border rounded-lg p-3'>
                            <div className='flex justify-between '>
                                <p className='font-semibold text-md px-1 text-left'>le titre du question ?</p>
                                <button onClick={btnToggle} className='duration-500' id='btnChevron'>
                                    <HiOutlineChevronDoubleRight className='text-2xl' />
                                </button>
                            </div>
                            <p className='text-left text-md text-gray-600 font-medium duration-500 hidden' id='textHidden'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius et delectus nam quibusdam
                                quae odit placeat, quos doloremque animi unde beatae rem, explicabo molestias provident 
                                repellendus accusantium odio suscipit laudantium, illo facilis. Expedita, quidem suscipit?
                            </p>
                        </div>
                        <div className='flex flex-col gap-4 w-4/5 ml-0 border rounded-lg p-3'>
                            <div className='flex justify-between '>
                                <p className='font-semibold text-md px-1 text-left'>le titre du question ?</p>
                                <button onClick={btnToggle} className='duration-500' id='btnChevron'>
                                    <HiOutlineChevronDoubleRight className='text-2xl' />
                                </button>
                            </div>
                            <p className='text-left text-md text-gray-600 font-medium duration-500 hidden' id='textHidden'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius et delectus nam quibusdam
                                quae odit placeat, quos doloremque animi unde beatae rem, explicabo molestias provident 
                                repellendus accusantium odio suscipit laudantium, illo facilis. Expedita, quidem suscipit?
                            </p>
                        </div>
                        <div className='flex flex-col gap-4 w-4/5 ml-0 border rounded-lg p-3'>
                            <div className='flex justify-between '>
                                <p className='font-semibold text-md px-1 text-left'>le titre du question ?</p>
                                <button onClick={btnToggle} className='duration-500' id='btnChevron'>
                                    <HiOutlineChevronDoubleRight className='text-2xl' />
                                </button>
                            </div>
                            <p className='text-left text-md text-gray-600 font-medium duration-500 hidden' id='textHidden'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius et delectus nam quibusdam
                                quae odit placeat, quos doloremque animi unde beatae rem, explicabo molestias provident 
                                repellendus accusantium odio suscipit laudantium, illo facilis. Expedita, quidem suscipit?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
