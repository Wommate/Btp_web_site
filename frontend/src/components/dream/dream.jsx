import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import Card from "../cards/cardDream";

function Dream() {
  return (
    <div className="bg-gray-100 flex flex-col items-center md:flex-row h-full px-5 pt-5 pb-10 md:pb-20 md:pt-14 md:px-14 gap-10 md:gap-3">
        <div className="md:w-1/2 h-full flex flex-col gap-6 text-lg">
            <h1 className="text-4xl font-bold">
                Nous Construisons Tout<br></br> Selon Vos <span className="text-[#fcd019]">Rêves</span>
            </h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
                doloremque non provident at enim quasi corrupti eius, laboriosam
                deleniti cum?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores
                deleniti voluptates excepturi. Quam vero corporis quis temporibus,
                earum unde excepturi et non laborum, reiciendis, quibusdam provident
                eligendi alias voluptate dolores? Pariatur, cumque numquam. Dolorum
                delectus at minima exercitationem, dicta quas quia dolor alias velit
                repellat adipisci placeat libero obcaecati.
            </p>
            <div className="flex flex-col gap-1">
                <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#fcd019] text-xl" />100% de satisfaction garantie</p>
                <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#fcd019] text-xl" />Processus de test précis</p>
                <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#fcd019] text-xl" />+07 ans d'expérience</p>
                <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#fcd019] text-xl" />Matériaux de construction robustes</p>
                <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#fcd019] text-xl" />Matériaux de construction respectueux de l'environnement</p>
            </div>
            <Link to="/about" className="sm:w-1/3 md:w-2/3 lg:w-1/2 py-3 rounded-lg bg-[#fcd019] text-white text-center font-semibold shadow-md shadow-black/30 hover:bg-[#e4b808]">Découvrez nous</Link>
        </div>
        <div className="w-full md:w-1/2">
            <Card />
        </div>
    </div>
  );
}

export default Dream;
