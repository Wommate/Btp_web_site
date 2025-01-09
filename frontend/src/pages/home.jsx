import React from "react";
import Hero_section from "../components/hero_section/hero_section";
// import Contact from "../components/contact/Contact";
import Gallery from "../components/gallery/gallery";
import ServicesHome from "../components/services/ServicesHome";
import Dream from "../components/dream/dream";
import WorksManage from "../components/worksManage/worksManage";
import Partners from "../components/partners/partners";
import Projects from "../components/projectsFinished/projects";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>ETEP - Entreprise de Travaux d'Équipement et de Prestations diverses</title>
        <meta name="description" content="ETEP (Entreprise de Travaux d'Équipement et de Prestations diverses) est spécialisée dans les travaux de construction, l'aménagement, et les services techniques. Nous offrons des solutions complètes et innovantes pour répondre aux besoins des entreprises et des particuliers dans le secteur du BTP." />
        <meta name="language" content="fr"/>
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Entreprise de Travaux d'Equipement et de Prestations diverses - ETEP" />
        <meta property="og:description" content="ETEP (Entreprise de Travaux d'Équipement et de Prestations diverses) est spécialisée dans les travaux de construction, l'aménagement, et les services techniques. Nous offrons des solutions complètes et innovantes pour répondre aux besoins des entreprises et des particuliers dans le secteur du BTP." />
        <meta property="site_name" content="ETEP - Entreprise de Travaux d'Équipement et de Prestations diverses" />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <Hero_section />
      <Dream />
      <ServicesHome />
      <WorksManage />
      <Projects />
      {/* <Contact /> */}
      <Gallery />
      <Partners />
    </div>
  );
}

export default Home;
