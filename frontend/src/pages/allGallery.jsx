import React from 'react'
import PhotoGallery from '../components/allGallery/PhotoGallery'
import HeaderGallery from '../components/allGallery/headerGallery'
import { Helmet } from 'react-helmet'

function AllGallery() {
  return (
    <div>
      <Helmet>
        <title>Galerie - ETEP | Nos Réalisations en Travaux et Aménagement</title>
        <meta name="description" content="Explorez la galerie de réalisations d'ETEP. Découvrez nos projets en construction, aménagement et équipements techniques, reflétant notre savoir-faire et notre expertise dans le secteur du BTP." />
        <meta name="language" content="fr"/>
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Entreprise de Travaux d'Equipement et de Prestations diverses - ETEP" />
        <meta property="og:description" content="Explorez la galerie de réalisations d'ETEP. Découvrez nos projets en construction, aménagement et équipements techniques, reflétant notre savoir-faire et notre expertise dans le secteur du BTP." />
        <meta property="site_name" content="ETEP - Entreprise de Travaux d'Équipement et de Prestations diverses" />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <HeaderGallery />
      <div className=' pb-14'>
      <PhotoGallery />
      </div>
    </div>
  )
}

export default AllGallery