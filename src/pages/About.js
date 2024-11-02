import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gray-100 text-gray-800 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-center text-black mb-8">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-center mb-6 leading-relaxed">
          Welcome to <span className="font-semibold text-black">Parikrama Paths</span>, where every journey is a sacred story.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          At Parikrama Paths, we believe that travel in India is more than just visiting places; it’s an immersive experience, a timeless connection with the soul of the land. From the spiritual ghats of Varanasi to the snow-capped peaks of Himachal, from the bustling streets of Mumbai to the tranquil backwaters of Kerala—each destination is a unique <span className="font-semibold text-black">parikrama</span>, a journey that invites you to discover, reflect, and belong.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          Our mission is to bring you closer to the heart of India. We curate travel experiences that let you explore not only the famous landmarks but also the hidden gems, the local traditions, and the vibrant culture that make India unlike any other place on Earth. Whether you’re a seeker of ancient temples, a lover of vibrant festivals, or an adventurer of nature’s untouched beauty, Parikrama Paths is your companion in crafting unforgettable journeys.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          As passionate travelers ourselves, we’ve designed Parikrama Paths to be user-friendly and enriching. Our platform offers seamless booking, diverse itineraries, and personalized recommendations that cater to every kind of traveler—from first-time visitors to seasoned explorers.
        </p>
        <p className="text-lg text-center mb-4 leading-relaxed italic text-black font-semibold">
          So pack your bags, ignite your wanderlust, and let Parikrama Paths guide you through India’s timeless landscapes and soulful adventures.
        </p>
        <p className="text-lg text-center font-medium text-black">
          Join us in discovering India, one path at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
