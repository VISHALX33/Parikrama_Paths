import React from 'react';
import FeaturedDestinations from '../components/FeaturedDestinations';
import Testimonials from '../pages/Testimonials'
import  FAQ  from '../pages/FAQ';
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/heroimg.webp)' }} // Using a relative URL
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-serif text-white  shadow-2xl mt-4">Your Journey, Your Path with Parikrama Paths.</h1>
         
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-bold text-black mt-4">Welcome to Your Travel Adventure</h1>
         
        </div>
      {/* Featured Destinations */}
      <FeaturedDestinations />
      <Testimonials/>
      <FAQ/>
    </div>
  );
};

export default Home;
