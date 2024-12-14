import React from 'react';
import AsideFAQ from './AsideFAQ';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
// import ImageCatarpularde from 'img/image-catartpularde.jpg'

const FAQ = () => {
        const btnToggle1 = () => {
            const btn1 = document.getElementById('btnChevron1')
            let textHidden1 = document.getElementById('textHidden1')
            btn1.classList.toggle('rotate-90')
            btn1.classList.toggle('duration-400')
            btn1.classList.toggle('text-lg')
            textHidden1.classList.toggle('hidden')

        }
        const btnToggle2 = () => {
            const btn2 = document.getElementById('btnChevron2')
            let textHidden2 = document.getElementById('textHidden2')
            btn2.classList.toggle('rotate-90')
            btn2.classList.toggle('duration-400')
            btn2.classList.toggle('text-lg')
            textHidden2.classList.toggle('hidden')

        }
        const btnToggle3 = () => {
            const btn3 = document.getElementById('btnChevron3')
            let textHidden3 = document.getElementById('textHidden3')
            btn3.classList.toggle('rotate-90')
            btn3.classList.toggle('duration-400')
            btn3.classList.toggle('text-lg')
            textHidden3.classList.toggle('hidden')

        }
        const btnToggle4 = () => {
            const btn4 = document.getElementById('btnChevron4')
            let textHidden4 = document.getElementById('textHidden4')
            btn4.classList.toggle('rotate-90')
            btn4.classList.toggle('duration-400')
            btn4.classList.toggle('text-lg')
            textHidden4.classList.toggle('hidden')

        }

        
    
    return (
        <div className='flex flex-col  my-32'>
            <div className='bg-gradient-to-b from-slate-50 to-slate-100 mb-10 py-6'>
                <h3 className='text-2xl font-bold px-6'>FAQ</h3>
            </div>
            <div className=''>
                {/* <img src={} alt="FAQ" /> */}
            </div>
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
                            <RiQuestionnaireLine className='text-white bg-[#35c6f4] text-5xl p-1 rounded-md' />
                            <h2 className='md:text-2xl text-black text-2xl font-bold md:text-left text-center'>Question fréquement posées</h2>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-4 w-4/5 ml-0 border rounded-lg p-3'>
                                <div className='flex justify-between '>
                                    <p className='font-semibold text-md px-1 text-left'>le titre du question ?</p>
                                    <button onClick={btnToggle1} className='duration-500' id='btnChevron1'>
                                        <HiOutlineChevronDoubleRight className='text-2xl' />
                                    </button>
                                </div>
                                <p className='text-left text-md text-gray-600 font-medium duration-500 hidden' id='textHidden1'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius et delectus nam quibusdam
                                    quae odit placeat, quos doloremque animi unde beatae rem, explicabo molestias provident 
                                    repellendus accusantium odio suscipit laudantium, illo facilis. Expedita, quidem suscipit?
                                </p>
                            </div>
                            <div className='flex flex-col gap-4 w-4/5 ml-0 border rounded-lg p-3'>
                                <div className='flex justify-between '>
                                    <p className='font-semibold text-md px-1 text-left'>le titre du question ?</p>
                                    <button onClick={btnToggle2} className='duration-500' id='btnChevron2'>
                                        <HiOutlineChevronDoubleRight className='text-2xl' />
                                    </button>
                                </div>
                                <p className='text-left text-md text-gray-600 font-medium duration-500 hidden' id='textHidden2'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius et delectus nam quibusdam
                                    quae odit placeat, quos doloremque animi unde beatae rem, explicabo molestias provident 
                                    repellendus accusantium odio suscipit laudantium, illo facilis. Expedita, quidem suscipit?
                                </p>
                            </div>
                            <div className='flex flex-col gap-4 w-4/5 ml-0 border rounded-lg p-3'>
                                <div className='flex justify-between '>
                                    <p className='font-semibold text-md px-1 text-left'>le titre du question ?</p>
                                    <button onClick={btnToggle3} className='duration-500' id='btnChevron3'>
                                        <HiOutlineChevronDoubleRight className='text-2xl' />
                                    </button>
                                </div>
                                <p className='text-left text-md text-gray-600 font-medium duration-500 hidden' id='textHidden3'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius et delectus nam quibusdam
                                    quae odit placeat, quos doloremque animi unde beatae rem, explicabo molestias provident 
                                    repellendus accusantium odio suscipit laudantium, illo facilis. Expedita, quidem suscipit?
                                </p>
                            </div>
                            <div className='flex flex-col gap-4 w-4/5 ml-0 border rounded-lg p-3'>
                                <div className='flex justify-between '>
                                    <p className='font-semibold text-md px-1 text-left'>le titre du question ?</p>
                                    <button onClick={btnToggle4} className='duration-500' id='btnChevron4'>
                                        <HiOutlineChevronDoubleRight className='text-2xl' />
                                    </button>
                                </div>
                                <p className='text-left text-md text-gray-600 font-medium duration-500 hidden' id='textHidden4'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius et delectus nam quibusdam
                                    quae odit placeat, quos doloremque animi unde beatae rem, explicabo molestias provident 
                                    repellendus accusantium odio suscipit laudantium, illo facilis. Expedita, quidem suscipit?
                                </p>
                            </div>
                        </div>
                        </div> 
                </div>    
            </div>
       </div>
    );
}

export default FAQ;

