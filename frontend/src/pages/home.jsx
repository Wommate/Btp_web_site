import React from "react";
import Hero_section from "../components/hero_section/hero_section";
import Contact from "../components/contact/Contact";
import Gallery from "../components/gallery/gallery";
import Dream from "../components/dream/dream";
import WorksManage from "../components/worksManage/worksManage";

function Home() {
  return (
    <div>
      <Hero_section />
      <Dream />
      <Gallery />
      <WorksManage />
      <Contact />
    </div>
  );
}

export default Home;
