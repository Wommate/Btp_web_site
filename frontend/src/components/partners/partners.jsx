import React from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

function Partners() {
  const images = [
    'img/partnersLogo/ToubaCaKanam.png', 
    'img/partnersLogo/Logo_TotalEnergies.png', 
    'img/partnersLogo/ubi_pharm.png',
    'img/partnersLogo/logo-PAISD.png',
    'img/partnersLogo/LOGO-PROBASE.png',
    'img/partnersLogo/Logo-Salins.png',
    'img/partnersLogo/LOGO-SONAC.avif',
    'img/partnersLogo/pasa-loumakaf.png'
  ];

  return (
    <div className=''>
      {/* <h1 className='text-4xl font-bold text-center mb-5'>Gallery</h1> */}
      <Splide 
        hasTrack={ false } 
        options={ 
          {
            rewind: false, pagination: false, width : 1500, height : 90, gap : '1rem', perPage: 8, perMove: 1, autoplay: true, interval: 2000, type: 'loop', speed:3000, extensions: { AutoScroll },
            autoScroll: {
                speed: 5, // Vitesse du défilement (ajustez selon vos besoins)
                pauseOnHover: true,
              },
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
        <SplideTrack className="bg-gray-50">
          {images.map((image, index) => (
                <SplideSlide key={index} className="flex justify-center items-center gap-1">
                    <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-16"
                    />
                </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows hidden">
          <button className="splide__arrow splide__arrow--prev"><BiSolidLeftArrow className='react_row' /></button>
          <button className="splide__arrow splide__arrow--next"><BiSolidRightArrow className='react_row' /></button>
        </div>
      </Splide>

    </div>
  );
}

export default Partners