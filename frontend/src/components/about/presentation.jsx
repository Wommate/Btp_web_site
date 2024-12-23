import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Presentation() {
  return (
    <div>
      <div className="mb-20 bg-gray-100 md:flex md:items-center">
        <div className="presentation md:w-1/2 p-10">
          <h2 className="text-4xl font-bold mb-5" data-aos="zoom-out-up">Présentation</h2>
          <p data-aos="zoom-in-down">
            Depuis mars 2017, ETEP SUARL est une société unipersonnelle à participation publique majoritaire créé en 2017, dont le siége social est au coeur de la région de Kaolack au Sénégal.
            ETEP SUARL est chargée de la mise en oeurvre de tous les travaux de construction, de réhabilitation et d'entretien de routes, de ponts et autres ouvrages d'art.
          </p>
          <p data-aos="zoom-in-left">
            Nous explorons sans cesse toutes les possibilités de notre métier pour offrir à nos clients de nouvelles perspectives.
          </p>
        </div>
        <div className="md:w-1/2 opacity-20 ">
            <img src="img/engineer-work.jpg" alt="construction-silhouette" 
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"/>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
