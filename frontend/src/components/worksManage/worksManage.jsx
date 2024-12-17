import React from "react";
import CardWorksManage from "../cards/cardWorksManage";

function WorksManage() {
  return (
    <div className="flex flex-col items-center md:flex-row mt-12 h-full px-5 md:px-14 gap-10 md:gap-5">
      <div className="md:w-1/2 h-full flex flex-col gap-6 text-lg">
        <h1 className="text-4xl font-bold">
          Découvrez comment nous gérons<br></br> nos{" "}
          <span className="text-[#fcd019]">travaux</span>
        </h1>
        <p>
          Chaque projet exige des solutions uniques et centrées sur le client,
          fondées sur la solide base de connaissances que nous avons développée
          grâce à notre portefeuille diversifié. Le résultat : une large gamme
          de services polyvalents, exécutés selon un processus rigoureux et
          éprouvé.
        </p>
        <CardWorksManage />
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div 
            className="w-[450px] relative h-[500px] md:h-[550px] mt-10 md:mt-36 bg-no-repeat bg-cover bg-center -z-50 rounded-3xl"
            style={{
              backgroundImage: 'url("img/etep/IMG-20241130-WA0139.jpg")',
            }}
        >
            <div class="absolute -bottom-3 -left-3 w-0 h-0 border-t-[150px] border-t-transparent border-l-[150px] border-l-[#fcd019]/60 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
}

export default WorksManage;
