// src/components/Gallery.js

import React from 'react';
import GalleryImage from './GalleryImage';
import imagesData from './data/imagesData';


const Gallery = () => {
  // Flatten all images into a single array
  const allImages = Object.values(imagesData).flat();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center my-8">Main Gallery</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allImages.map((img, index) => (
          <GalleryImage key={index} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
