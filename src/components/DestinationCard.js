import React from 'react';

const DestinationCard = ({ name, description, price, image, galleryLink }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md ">
      {/* Image links to the gallery */}
      <a href={galleryLink} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </a>
      <div className="p-4">
        
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-bold">₹{price}</p>
        {/* Book Now button linking to the booking page */}
        <a
          href="/booking" // Redirect to /booking
          className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;
