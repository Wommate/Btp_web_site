import React from 'react'
import BlogContent from '../components/blog/Blog'
import { Helmet } from 'react-helmet'

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog - ETEP | Actualités et Conseils en Travaux et Aménagement</title>
        <meta name="description" content="Explorez le blog d'ETEP pour découvrir des actualités, conseils pratiques et tendances sur les travaux de construction, l'aménagement et les équipements techniques." />
        <meta name="language" content="fr"/>
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Entreprise de Travaux d'Equipement et de Prestations diverses - ETEP" />
        <meta property="og:description" content="Explorez le blog d'ETEP pour découvrir des actualités, conseils pratiques et tendances sur les travaux de construction, l'aménagement et les équipements techniques." />
        <meta property="site_name" content="ETEP - Entreprise de Travaux d'Équipement et de Prestations diverses" />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <BlogContent />
    </div>
  )
}

export default Blog