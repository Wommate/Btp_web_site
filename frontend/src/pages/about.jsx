import React from "react";
import Header from "../components/about/header";
import Presentation from "../components/about/presentation";
import Vision from "../components/about/vision";
import Team from "../components/about/team/team";
import Partners from "../components/partners/partners";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div>
      <Helmet>
        <title>À Propos - ETEP | Expertise et Engagement dans le BTP</title>
        <meta name="description" content="À propos de ETEP (Entreprise de Travaux d'Équipement et de Prestations diverses) : découvrez notre expertise, nos valeurs, et notre engagement dans le secteur du BTP. Nous construisons des solutions sur mesure pour vos projets." />
        <meta name="language" content="fr"/>
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Entreprise de Travaux d'Equipement et de Prestations diverses - ETEP" />
        <meta property="og:description" content="À propos de ETEP (Entreprise de Travaux d'Équipement et de Prestations diverses) : découvrez notre expertise, nos valeurs, et notre engagement dans le secteur du BTP. Nous construisons des solutions sur mesure pour vos projets." />
        <meta property="site_name" content="ETEP - Entreprise de Travaux d'Équipement et de Prestations diverses" />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <Header />
      <Presentation />
      <Vision />
      <Team />
 
      <Partners />
    </div>
  );
}

export default About;
