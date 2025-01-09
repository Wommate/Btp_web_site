import React from 'react'
import ArticleBlogContent from '../components/blog/ArticleBlog'
import { Helmet } from 'react-helmet';

function ArticleBlog() {
  return (
    <div>
        <Helmet>
            <title>Entreprise de Travaux d'Equipement et de Prestations diverses - ETEP</title>
            <meta name="description" content="ETEP (Entreprise de Travaux d'Équipement et de Prestations diverses) est spécialisée dans les travaux de construction, l'aménagement, et les services techniques. Nous offrons des solutions complètes et innovantes pour répondre aux besoins des entreprises et des particuliers dans le secteur du BTP." />
            <meta name="language" content="fr"/>
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Entreprise de Travaux d'Equipement et de Prestations diverses - ETEP" />
            <meta property="og:description" content="ETEP (Entreprise de Travaux d'Équipement et de Prestations diverses) est spécialisée dans les travaux de construction, l'aménagement, et les services techniques. Nous offrons des solutions complètes et innovantes pour répondre aux besoins des entreprises et des particuliers dans le secteur du BTP." />
            <meta property="site_name" content="ETEP - Entreprise de Travaux d'Équipement et de Prestations diverses" />
            <meta name='twitter:card' content='summary_large_image' />
        </Helmet>
        <ArticleBlogContent />
    </div>
  )
}

export default ArticleBlog;