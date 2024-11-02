import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero bg-cover bg-center h-96 text-white flex flex-col items-center justify-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore the World with Us</h1>
      <p className="text-lg md:text-xl mb-6">Book unforgettable travel experiences.</p>
      <Link to="/destinations" className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700">Explore Destinations</Link>
    </div>
  );
};

export default Hero;
