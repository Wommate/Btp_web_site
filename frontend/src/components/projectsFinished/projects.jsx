import React from "react";
import { useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null); // Image sélectionnée
  const [isModalOpen, setIsModalOpen] = useState(false); // État du modal

  const images = [
    "img/projectFinished/IMG-20241130-WA0271.jpg",
    "img/projectFinished/IMG-20241130-WA0160.jpg",
    "img/projectFinished/IMG-20241201-WA0034.jpg",
    "img/projectFinished/IMG-20241130-WA0328.jpg",   
    "img/projectFinished/IMG-20241130-WA0122.jpg",
    "img/projectFinished/IMG-20241130-WA0274.jpg",
    "img/projectFinished/IMG-20241130-WA0277.jpg",
    "img/projectFinished/IMG-20241130-WA0226.jpg",
    
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="mt-20 mb-10">
        <div className="relative w-full h-72 bg-no-repeat bg-cover bg-center"
        style={{
            backgroundImage: 'url("imgconstruction-silhouette.jpg")',
        }}>
            <div className="absolute inset-0 flex items-center md:pl-24 bg-[#fcd019]/30 text-4xl font-bold ">
                <h1 className="z-10 text-left px-5 md:p-0">
                    Voici quelques-uns de nos <br /> projets réalisés
                </h1>
            </div>
            <div className="hidden md:flex absolute bottom-20 left-12 w-0 h-0 border-t-[150px] border-t-transparent border-l-[190px] border-l-[#fcd019] rounded-3xl"></div>
        </div>
        <Splide
            hasTrack={false}
            options={{
            rewind: true,
            width: 1300,
            height: 400,
            gap: "2rem",
            perPage: 4,
            perMove: 4,
            type: 'loop',
            autoplay: false,
            interval: 3000,
            breakpoints: {
                1024: {
                perPage: 3,
                gap: "0.8rem",
                width: 800,
                height: 400,
                },
                768: {
                perPage: 2,
                gap: "0.5rem",
                width: 700,
                height: 400,
                },
                480: {
                perPage: 1.3,
                perPage: 1.3,
                gap: "0.3rem",
                width: 600,
                height: 400,
                },
                320: {
                perPage: 1.2,
                perMove: 1.2,
                gap: "0.2rem",
                width: 600,
                height: 400,
                },
            },
            }}
            className="mx-auto -mt-10"
            aria-label="Mes images préférées"
        >
            <SplideTrack>
            {images.map((image, index) => (
                <SplideSlide key={index}>
                <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    onClick={() => handleImageClick(image)} 
                    style={{ cursor: "pointer", borderRadius: "20px", height: "390px", width: "300px" }}
                />
                </SplideSlide>
            ))}
            </SplideTrack>

            <div className="splide__arrows absolute right-28 md:-top-16 md:-right-4 w-28">
            <button className="splide__arrow splide__arrow--prev projects-prev">
                <BiSolidLeftArrow className="react_row" />
            </button>
            <button className="splide__arrow splide__arrow--next projects-next">
                <BiSolidRightArrow className="react_row" />
            </button>
            </div>
        </Splide>

        {/* Modal */}
        {isModalOpen && (
            <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
            onClick={closeModal} // Clique en dehors pour fermer
            >
            <img
                src={selectedImage}
                alt="Image en grand"
                style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
                }}
            />
            </div>
        )}

    </div>
  );
}

export default Projects;
