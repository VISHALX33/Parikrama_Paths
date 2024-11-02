import React from 'react';

const Blog = () => {
  const articles = [
    {
      title: '10 Tips for Budget Travel',
      content: 'Travel doesn’t have to be expensive. Discover how to save on flights, accommodation, and food while enjoying your trip!',
      image: '/States/bihar.jpg',
      link: '#',
      author: 'Jane Doe',
      date: 'October 5, 2024',
      tags: ['Travel', 'Budget', 'Tips'],
    },
    {
      title: 'Exploring India’s Hidden Gems',
      content: 'From serene villages to untouched beaches, explore the lesser-known places in India that offer unique experiences.',
      image: '',
      link: '#',
      author: 'Raj Patel',
      date: 'September 20, 2024',
      tags: ['India', 'Hidden Gems', 'Travel'],
    },
    {
      title: 'The Ultimate Guide to Indian Street Food',
      content: 'Savor the flavors of India with this guide to the best street food dishes you must try during your travels.',
      image: '',
      link: '#',
      author: 'Priya Singh',
      date: 'August 15, 2024',
      tags: ['Food', 'Street Food', 'India'],
    },
    {
      title: 'Top 5 Spiritual Destinations in India',
      content: 'Discover the most serene and spiritual places in India that will leave you feeling refreshed and rejuvenated.',
      image: '',
      link: '#',
      author: 'Amit Kumar',
      date: 'July 30, 2024',
      tags: ['Spiritual', 'India', 'Destinations'],
    },
    {
      title: 'Adventure Awaits: Trekking in the Himalayas',
      content: 'Experience the thrill of trekking in the majestic Himalayas. Here are some of the best routes for adventure seekers.',
      image: '',
      link: '#',
      author: 'Lily Chen',
      date: 'June 10, 2024',
      tags: ['Adventure', 'Trekking', 'Himalayas'],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-center text-gray-800 my-8">Travel Blog</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-52 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h2>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <p className="mr-3"><strong>Author:</strong> {article.author}</p>
                <p><strong>Date:</strong> {article.date}</p>
              </div>
              <p className="text-gray-700 mb-4">{article.content}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, i) => (
                  <span key={i} className="bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <a href={article.link} className="text-blue-600 font-semibold hover:underline mb-4">Read More</a>
              <div className="flex justify-between items-center mt-auto">
                <button className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded hover:bg-blue-700 transition duration-200">
                  Share
                </button>
                <div className="flex gap-2">
                  <a href="#" className="text-blue-500 hover:text-blue-700"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-blue-500 hover:text-blue-700"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-blue-500 hover:text-blue-700"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
