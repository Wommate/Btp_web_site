import React, { useState } from 'react';

const images = [
  {
    id: 1,
    url: 'img/etep/IMG-20241130-WA0114.jpg',
    title: '',
    description: ''
  },
  {
    id: 2,
    url: 'img/etep/IMG-20241130-WA0116.jpg',
    title: '',
    description: ''
  },
  {
    id: 3,
    url: 'img/etep/IMG-20241130-WA0182.jpg',
    title: '',
    description: ''
  },
  {
    id: 4,
    url: 'img/etep/IMG-20241130-WA0262.jpg',
    title: '',
    description: ''
  },
  {
    id: 5,
    url: 'img/etep/IMG-20241130-WA0262.jpg',
    title: '',
    description: ''
  },
  {
    id: 6,
    url: 'img/etep/IMG-20241130-WA0283.jpg',
    title: '',
    description: ''
  },
  {
    id: 7,
    url: 'img/etep/IMG-20241130-WA0139.jpg',
    title: '',
    description: ''
  },
  {
    id: 8,
    url: 'img/etep/IMG-20241130-WA0319.jpg',
    title: '',
    description: ''
  },
  {
    id: 9,
    url: 'img/etep/IMG-20241130-WA0317.jpg',
    title: '',
    description: ''
  },
  {
    id: 10,
    url: 'img/etep/IMG-20241130-WA0318.jpg',
    title: '',
    description: ''
  }
];

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 ">
      {/* <h1 className="text-3xl font-bold text-center mb-8">Galerie Photo</h1> */}
      
      <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {images.map((image) => (
          <div 
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => openModal(image)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-xl font-semibold">{image.title}</h3>
                <p className="mt-2">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="max-w-4xl w-full mx-4">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
              <p className="mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;