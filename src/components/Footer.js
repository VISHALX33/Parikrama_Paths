// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">Parikrama Paths</h2>
            <p className="text-sm">
              Connecting travelers with unforgettable experiences and providing guidance for an enjoyable travel journey.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Our Services</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <p className="text-sm mb-2">123 Travel Road, Kota, India</p>
            <p className="text-sm mb-2">Email: info@parikramapaths.com</p>
            <p className="text-sm mb-2">Phone: +91 1234 567 890</p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe for travel tips, guides, and special offers.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:border-blue-500" 
                required 
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-blue-600 rounded text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Lower Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Testimonials */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Testimonials</h3>
            <p className="text-sm italic">"An exceptional travel experience! Parikrama Paths made our journey unforgettable."</p>
            <p className="text-sm italic">"Reliable and affordable travel services. Highly recommended!"</p>
          </div>

          {/* Social Media and Popular Destinations */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            {/* Social Media Links */}
            <div>
              <h3 className="font-semibold text-white mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">LinkedIn</a>
              </div>
            </div>
            
            {/* Popular Destinations */}
            <div>
              <h3 className="font-semibold text-white mb-2">Popular Destinations</h3>
              <div className="flex space-x-4 text-sm">
                <Link to="/destinations/goa" className="hover:underline">Goa</Link>
                <Link to="/destinations/kerala" className="hover:underline">Kerala</Link>
                <Link to="/destinations/himachal" className="hover:underline">Himachal</Link>
                <Link to="/destinations/rajasthan" className="hover:underline">Rajasthan</Link>
                <Link to="/destinations/ladakh" className="hover:underline">Ladakh</Link>
              </div>
            </div>
          </div>
          
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Parikrama Paths. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
