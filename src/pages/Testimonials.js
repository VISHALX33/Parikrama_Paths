import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Best travel experience ever! Parikrama Paths took care of every detail and made our journey unforgettable.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg', // Placeholder image
    },
    {
      name: 'Aditi Sharma',
      feedback: 'A fantastic adventure! The itineraries were well-planned, and the local guides were knowledgeable and friendly.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg', // Placeholder image
    },
    {
      name: 'Rajesh Kumar',
      feedback: 'A memorable experience exploring India’s hidden gems. Highly recommend Parikrama Paths for anyone looking to travel!',
      image: 'https://randomuser.me/api/portraits/men/2.jpg', // Placeholder image
    },
    {
      name: 'Sneha Patel',
      feedback: 'Amazing customer service and beautiful destinations. Every moment was magical, thanks to the team at Parikrama Paths!',
      image: 'https://randomuser.me/api/portraits/women/2.jpg', // Placeholder image
    },
    {
      name: 'Anil Verma',
      feedback: 'The best way to explore India! The unique experiences and cultural insights were invaluable.',
      image: 'https://randomuser.me/api/portraits/men/3.jpg', // Placeholder image
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center my-8">Testimonials</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div key={index} className="my-4 p-6 border rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="font-bold">{t.name}</h3>
              </div>
            </div>
            <p className="text-gray-700 italic">"{t.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
