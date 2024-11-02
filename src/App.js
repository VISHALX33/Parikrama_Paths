

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Gallery from './components/Gallery'; // Updated path for Gallery
import StateGallery from './components/StateGallery'; // New component for state-specific galleries
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Footer from './components/Footer';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import BookingDetails from './components/BookingDetails';
import imagesData from './components/data/imagesData';
import Services from './pages/Services';
import BusBooking from './pages/BusBooking';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/booking-details" element={<BookingDetails />} />

        <Route path="/BusBooking" element={<BusBooking />} />

        {/* Route for individual state galleries using StateGallery */}
        {Object.entries(imagesData).map(([stateName, images], index) => (
          <Route 
            key={index} 
            path={`/gallery/${stateName}`} 
            element={<StateGallery stateName={stateName} images={images} />} 
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
