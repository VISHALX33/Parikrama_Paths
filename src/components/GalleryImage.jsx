// src/components/GalleryImage.js

import React from 'react';

const GalleryImage = ({ img }) => (
  <div className="relative group">
    <img
      src={img.src}
      alt={img.alt}
      className="w-full h-48 object-cover rounded cursor-pointer transition-transform transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="text-white font-bold text-lg">View</span>
    </div>
  </div>
);

export default GalleryImage;
