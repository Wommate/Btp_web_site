import React from "react";

function Presentation() {
  return (
    <div>
      <div class="mb-20 bg-gray-50 md:flex md:items-center">
        <div className="presentation md:w-1/2 p-10">
          <h2 className="text-4xl font-bold mb-5">Présentation</h2>
          <p>
            Depuis mars 2017, ETEP SUARL est une société unipersonnelle à participation publique majoritaire créé en 2017, dont le siége social est au coeur de la région de Kaolack au Sénégal.
            ETEP SUARL est chargée de la mise en oeurvre de tous les travaux de construction, de réhabilitation et d'entretien de routes, de ponts et autres ouvrages d'art.
          </p>
          <p>
            Nous explorons sans cesse toutes les possibilités de notre métier pour offrir à nos clients de nouvelles perspectives.
          </p>
        </div>
        <div className="md:w-1/2 opacity-20 ">
            <img src="img/engineer-work.jpg" alt="construction-silhouette" />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
