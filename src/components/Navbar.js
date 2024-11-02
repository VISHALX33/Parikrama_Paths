import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-widest">
          Parikrama Paths
        </Link>
        
        {/* Menu button for mobile view */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Menu items */}
        <div className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 text-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="hover:text-yellow-300 transition duration-200">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition duration-200">About</Link>
          <Link to="/destinations" className="hover:text-yellow-300 transition duration-200">Destinations</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition duration-200">Contact</Link>
          <Link to="/booking" className="hover:text-yellow-300 transition duration-200">Booking</Link>
          <Link to="/gallery" className="hover:text-yellow-300 transition duration-200">Gallery</Link>
          <Link to="/blog" className="hover:text-yellow-300 transition duration-200">Blog</Link>
          <Link to="/careers" className="hover:text-yellow-300 transition duration-200">Careers</Link>
          <Link to="/terms" className="hover:text-yellow-300 transition duration-200">Terms</Link>
          <Link to="/privacy" className="hover:text-yellow-300 transition duration-200">Privacy</Link>
          <Link to="/booking-details" className="hover:text-yellow-300 transition duration-200">Details</Link>
          <Link to="/services" className="hover:text-yellow-300 transition duration-200">Services</Link>
          <Link to="/BusBooking" className="hover:text-yellow-300 transition duration-200">BusBooking</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
