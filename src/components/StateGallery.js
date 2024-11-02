// src/components/StateGallery.js

import React from 'react';
import GalleryImage from './GalleryImage';



const StateGallery = ({ stateName, images }) => (
  <div className="my-6">
    <h2 className="text-2xl font-bold text-center mb-4">{stateName}</h2>
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {images.map((img, index) => (
        <GalleryImage key={index} img={img} />
      ))}
    </div>
  </div>
);

export default StateGallery;
