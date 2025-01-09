import React from 'react'
import FaqContent from '../components/faq/FAQ'
import { Helmet } from 'react-helmet';

function Faq() {
  return (
    
    <div>
      <Helmet>
        <title>FAQ - ETEP | Réponses à Vos Questions</title>
        <meta name="description" content="Trouvez des réponses aux questions les plus fréquentes sur ETEP (Entreprise de Travaux d'Équipement et de Prestations diverses). Découvrez des informations sur nos services et nos processus" />
        <meta name="language" content="fr"/>
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Entreprise de Travaux d'Equipement et de Prestations diverses - ETEP" />
        <meta property="og:description" content="Trouvez des réponses aux questions les plus fréquentes sur ETEP (Entreprise de Travaux d'Équipement et de Prestations diverses). Découvrez des informations sur nos services et nos processus" />
        <meta property="site_name" content="ETEP - Entreprise de Travaux d'Équipement et de Prestations diverses" />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <FaqContent />
    </div>
  )
}

export default Faq;