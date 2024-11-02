// import React, { useState } from 'react';

// const Gallery = () => {
//   const images = [
//     'https://media.timeout.com/images/106181719/image.jpg', // Image 1: Paris
//     'https://media.timeout.com/images/106181720/image.jpg', // Image 2: New York
//     'https://media.timeout.com/images/106181721/image.jpg', // Image 3: Tokyo
//     'https://media.timeout.com/images/106181722/image.jpg', // Image 4: Singapore
//     'https://media.timeout.com/images/106181723/image.jpg', // Image 5: London
//     'https://media.timeout.com/images/106181724/image.jpg', // Image 6: Dubai
//     'https://media.timeout.com/images/106181725/image.jpg', // Image 7: Goa
//     'https://media.timeout.com/images/106181726/image.jpg', // Image 8: Jaipur
//     'https://media.timeout.com/images/106181727/image.jpg', // Image 9: Kerala
//     'https://media.timeout.com/images/106181728/image.jpg', // Image 10: Varanasi
//     'https://media.timeout.com/images/106181729/image.jpg', // Image 11: Himachal Pradesh
//     'https://media.timeout.com/images/106181730/image.jpg', // Image 12: Rajasthan
//     // Add more images as needed
//   ];

//   const [selectedImage, setSelectedImage] = useState(null);

//   const openLightbox = (img) => {
//     setSelectedImage(img);
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center my-8">Photo Gallery</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {images.map((img, idx) => (
//           <div key={idx} className="relative group">
//             <img
//               src={img}
//               alt={`Gallery ${idx}`}
//               className="w-full h-48 object-cover rounded cursor-pointer transition-transform transform group-hover:scale-105"
//               onClick={() => openLightbox(img)}
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 transition-opacity">
//               <span className="text-white font-bold text-lg">View</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Lightbox for viewing larger images */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="relative">
//             <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
//             <button
//               className="absolute top-4 right-4 text-white text-2xl"
//               onClick={closeLightbox}
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;


import React, { useState } from 'react';
import GalleryImage from '../components/GalleryImage'; // Import a separate GalleryImage component

const images = [
  'https://media.timeout.com/images/106181719/image.jpg', // Image 1: Paris
  'https://media.timeout.com/images/106181720/image.jpg', // Image 2: New York
  'https://media.timeout.com/images/106181721/image.jpg', // Image 3: Tokyo
  'https://media.timeout.com/images/106181722/image.jpg', // Image 4: Singapore
  'https://media.timeout.com/images/106181723/image.jpg', // Image 5: London
  'https://media.timeout.com/images/106181724/image.jpg', // Image 6: Dubai
  'https://media.timeout.com/images/106181725/image.jpg', // Image 7: Goa
  'https://media.timeout.com/images/106181726/image.jpg', // Image 8: Jaipur
  'https://media.timeout.com/images/106181727/image.jpg', // Image 9: Kerala
  'https://media.timeout.com/images/106181728/image.jpg', // Image 10: Varanasi
  'https://media.timeout.com/images/106181729/image.jpg', // Image 11: Himachal Pradesh
  'https://media.timeout.com/images/106181730/image.jpg', // Image 12: Rajasthan
  // Add more images as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center my-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <GalleryImage key={idx} img={img} onClick={() => openLightbox(img)} />
        ))}
      </div>

      {/* Lightbox for viewing larger images */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
