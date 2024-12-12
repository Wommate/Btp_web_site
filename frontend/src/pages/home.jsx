import React from "react";
import Hero_section from "../components/hero_section/hero_section";
import Contact from "../components/contact/Contact";

import Gallery from "../components/gallery/gallery";

function Home() {
  return (
    <div>
      <Hero_section />
      <Gallery />
      <Contact />
      
    </div>
  );
}

export default Home;
