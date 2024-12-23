import React from "react";
import Header from "../components/about/header";
import Presentation from "../components/about/presentation";
import Vision from "../components/about/vision";
import Team from "../components/about/team/team";
import Partners from "../components/partners/partners";

function About() {
  return (
    <div>
      <Header />
      <Presentation />
      <Vision />
      <Team />
 
      <Partners />
    </div>
  );
}

export default About;
