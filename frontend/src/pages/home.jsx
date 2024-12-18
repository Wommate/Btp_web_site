import React from "react";
import Hero_section from "../components/hero_section/hero_section";
import Contact from "../components/contact/Contact";
import Gallery from "../components/gallery/gallery";
import Dream from "../components/dream/dream";
import WorksManage from "../components/worksManage/worksManage";
import Partners from "../components/partners/partners";
import Projects from "../components/projectsFinished/projects";

function Home() {
  return (
    <div>
      <Hero_section />
      <Dream />
      <WorksManage />
      <Projects />
      <Contact />
      <Gallery />
      <Partners />
    </div>
  );
}

export default Home;
