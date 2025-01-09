import React from 'react'
import ServiceContent from '../components/services/Services';
import { Helmet } from 'react-helmet';

function Services() {
  return (
    <div>
      <Helmet>
        <title>Services - ETEP | Les Services que nous vous proposons</title>
        <meta name="description" content="Découvrez les services proposés par ETEP : travaux de construction, aménagement, équipements techniques, et prestations diverses. Nous offrons des solutions sur mesure pour répondre aux besoins des entreprises et des particuliers dans le secteur du BTP" />
        <meta name="language" content="fr"/>
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Entreprise de Travaux d'Equipement et de Prestations diverses - ETEP - SERVICES" />
        <meta property="og:description" content="Découvrez les services proposés par ETEP : travaux de construction, aménagement, équipements techniques, et prestations diverses. Nous offrons des solutions sur mesure pour répondre aux besoins des entreprises et des particuliers dans le secteur du BTP" />
        <meta property="site_name" content="ETEP - Entreprise de Travaux d'Équipement et de Prestations diverses" />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <ServiceContent />
    </div>
  )
}

export default Services