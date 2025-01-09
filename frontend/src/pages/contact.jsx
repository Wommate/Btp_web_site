import React from 'react'
import ContactContent from "../components/contact/Contact";
import { Helmet } from 'react-helmet';

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contactez-nous - ETEP | Demande de Devis et Informations</title>
        <meta name="description" content="Contactez ETEP (Entreprise de Travaux d'Équipement et de Prestations diverses) pour vos besoins en travaux de construction, aménagement, et services techniques. Notre équipe est à votre écoute pour répondre à toutes vos questions via le formulaire ou avec nos coordonnées et demandes de devis." />
        <meta name="language" content="fr"/>
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Entreprise de Travaux d'Equipement et de Prestations diverses - ETEP" />
        <meta property="og:description" content="Contactez ETEP (Entreprise de Travaux d'Équipement et de Prestations diverses) pour vos besoins en travaux de construction, aménagement, et services techniques. Notre équipe est à votre écoute pour répondre à toutes vos questions via le formulaire ou avec nos coordonnées et demandes de devis." />
        <meta property="site_name" content="ETEP - Entreprise de Travaux d'Équipement et de Prestations diverses" />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
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