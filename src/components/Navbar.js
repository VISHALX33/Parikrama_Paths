import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`absolute z-10 bg-black w-full left-0 top-16 p-4 space-y-4 md:static md:flex md:items-center md:space-y-0 md:space-x-6 text-lg ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/destinations"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            Destinations
          </Link>
          <Link
            to="/contact"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            Contact
          </Link>
          <Link
            to="/booking"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            Booking
          </Link>
          <Link
            to="/gallery"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            Gallery
          </Link>
          <Link
            to="/blog"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            Blog
          </Link>
          <Link
            to="/careers"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            Careers
          </Link>
          <Link
            to="/terms"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            Terms
          </Link>
          <Link
            to="/privacy"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            Privacy
          </Link>
          <Link
            to="/booking-details"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            Details
          </Link>
          <Link
            to="/services"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            Services
          </Link>
          <Link
            to="/BusBooking"
            className="block md:inline hover:text-yellow-300 transition duration-200"
          >
            BusBooking
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

