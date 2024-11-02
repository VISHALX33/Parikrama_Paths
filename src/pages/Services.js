import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Travel Booking',
      description: 'Book flights, hotels, and car rentals easily from our platform.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Tour Packages',
      description: 'Choose from a variety of customizable and group tour packages.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Travel Planning Services',
      description: 'Get personalized itinerary planning and expert travel consultation.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Adventure Activities',
      description: 'Experience thrilling adventure sports and guided tours.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Travel Insurance',
      description: 'Protect your trip with our comprehensive travel insurance options.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Local Experiences',
      description: 'Immerse yourself in local culture through unique experiences and events.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Transportation Services',
      description: 'Enjoy seamless airport transfers and local transport guides.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Travel Guides and Resources',
      description: 'Access in-depth destination guides and inspiring travel blogs.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Customer Support',
      description: 'Receive 24/7 assistance for all your travel inquiries and emergencies.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'User Reviews and Ratings',
      description: 'Check out reviews and ratings from fellow travelers.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Loyalty Programs',
      description: 'Join our loyalty program for exclusive rewards and discounts.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Payment Options',
      description: 'Enjoy flexible payment methods for your convenience.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Travel Communities',
      description: 'Connect with fellow travelers through forums and groups.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center my-8 text-black">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-black">{service.title}</h2>
            <p className="mb-4 text-gray-600">{service.description}</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
