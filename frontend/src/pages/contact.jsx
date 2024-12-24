import React from 'react'
import ContactContent from "../components/contact/Contact";

function Contact() {
  return (
    <div>
      <div className=' w-full' data-aos="fade-down" data-aos-duration="1500">
          <div className='bg-black/70 w-full h-[500px]'></div>
          <img src="img/img_contact.jpg" className='h-[500px] absolute top-0 -z-10 w-full object-cover' alt="FAQ" />
          <h3 className='relative -top-44 text-center text-white w-full text-4xl font-bold px-6' data-aos="zoom-in" data-aos-duration="1800">Contact</h3>
      </div>
      <ContactContent />
    </div>
  )
}

export default Contact