import React from 'react'
import { useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
function Gallery() {
  // return (
  //   <div className='my-10'>
  //     <h2 className='text-3xl font-bold text-center mb-5'>Gallery</h2>
  //     <Splide  options={ {rewind: true, width : 900, height : 200, gap : '1rem', perPage: 4, autoplay: true, interval: 30000,} } className="mx-auto" aria-label="Mes images préférées"> 
  //       <SplideSlide> 
  //         <img src="img/etep/IMG-20241130-WA0114.jpg" alt="Image 1"/> 
  //       </SplideSlide> 
  //       <SplideSlide> 
  //         <img src="img/etep/IMG-20241130-WA0182.jpg" alt="Image 2"/> 
  //       </SplideSlide> 
  //       <SplideSlide> 
  //         <img src="img/etep/IMG-20241130-WA0234.jpg" alt="Image 3"/> 
  //       </SplideSlide> 
  //       <SplideSlide> 
  //         <img src="img/etep/IMG-20241130-WA0270.jpg" alt="Image 4"/> 
  //       </SplideSlide> 
  //       <SplideSlide> 
  //         <img src="img/etep/IMG-20241130-WA0319.jpg" alt="Image 5"/> 
  //       </SplideSlide> 
  //       <SplideSlide> 
  //         <img src="img/etep/IMG-20241130-WA0318.jpg" alt="Image 6"/> 
  //       </SplideSlide> 
  //       <SplideSlide> 
  //         <img src="img/etep/IMG-20241130-WA0317.jpg" alt="Image 7"/> 
  //       </SplideSlide> 
  //       <SplideSlide> 
  //         <img src="img/etep/IMG-20241130-WA0284.jpg" alt="Image 8"/> 
  //       </SplideSlide> 
  //       <SplideSlide> 
  //         <img src="img/etep/IMG-20241130-WA0273.jpg" alt="Image 9"/> 
  //       </SplideSlide> 
  //       <SplideSlide> 
  //         <img src="img/etep/IMG-20241130-WA0262.jpg" alt="Image 10"/> 
  //       </SplideSlide> 
  //     </Splide>
  //   </div>
  // )

  // État pour le modal
  const [selectedImage, setSelectedImage] = useState(null); // Image sélectionnée
  const [isModalOpen, setIsModalOpen] = useState(false); // État du modal

  const images = [
    'img/etep/IMG-20241130-WA0114.jpg', 
    'img/etep/IMG-20241130-WA0182.jpg', 
    'img/etep/IMG-20241130-WA0234.jpg',
    'img/etep/IMG-20241130-WA0270.jpg',
    'img/etep/IMG-20241130-WA0319.jpg',
    'img/etep/IMG-20241130-WA0318.jpg',
    'img/etep/IMG-20241130-WA0317.jpg',
    'img/etep/IMG-20241130-WA0284.jpg',
    'img/etep/IMG-20241130-WA0273.jpg',
    'img/etep/IMG-20241130-WA0262.jpg'
  ]; // Liste des images

  // Fonction pour ouvrir le modal
  const handleImageClick = (image) => {
    setSelectedImage(image); // Définit l'image sélectionnée
    setIsModalOpen(true);    // Ouvre le modal
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className='my-10'>
      <h1 className='text-4xl font-bold text-center mb-5'>Gallery</h1>
      <Splide 
        hasTrack={ false } 
        options={ 
          {
            rewind: true, width : 900, height : 150, gap : '1rem', perPage: 4, autoplay: true, interval: 30000, 
            breakpoints: {
              1024: { 
                perPage: 3,
                gap: '0.8rem',
                width : 800,
                height: 150,
              },
              768: { 
                perPage: 2,
                gap: '0.5rem',
                width : 700,
                height: 150,
              },
              480: { 
                perPage: 1,
                gap: '0.3rem',
                width : 600,
                height: 150,
              },
            },
          } 
        } 
        className="mx-auto" aria-label="Mes images préférées"
      >
        <SplideTrack>
          {images.map((image, index) => (
              <SplideSlide key={index}>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  onClick={() => handleImageClick(image)} // Clique pour ouvrir l'image
                  style={{ cursor: 'pointer' }} // Indique que c'est cliquable
                />
              </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev"><BiSolidLeftArrow className='react_row' /></button>
          <button className="splide__arrow splide__arrow--next"><BiSolidRightArrow className='react_row' /></button>
        </div>
      </Splide>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeModal} // Clique en dehors pour fermer
        >
          <img
            src={selectedImage}
            alt="Image en grand"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '10px',
            }}
          />
        </div>
      )}

        <Link to="/allGallery" className='w-4/12 sm:2/12 mx-auto flex justify-center items-end mt-3 text-[#fcd019] hover:text-[#35c6f4]'>
          <p>Voir plus</p>
          <MdOutlineKeyboardDoubleArrowRight className='text-xl'/>
        </Link>
    </div>
  );
}

export default Gallery