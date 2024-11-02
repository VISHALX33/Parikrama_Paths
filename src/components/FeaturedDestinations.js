// src/components/FeaturedDestinations.js

import React from 'react';
import DestinationCard from './DestinationCard';
// import Rajasthan from './/States/Rajasthan.jpg'

const featuredDestinations = [
  { 
    name: 'Rajasthan', 
    description: 'Land of Forts & Royalty', 
    price: 800, 
    image: '/States/rajasthan.jpg',
    galleryLink: '/gallery/rajasthan'
  },
  { 
    name: 'Kerala', 
    description: 'God’s Own Country', 
    price: 900, 
    image: '/States/Kerala.jpg',
    galleryLink: '/gallery/kerala'
  },
  { 
    name: 'Goa', 
    description: 'Beaches & Sunsets', 
    price: 700, 
    image: '/States/Goa.jpg',
    galleryLink: '/gallery/goa'
  },
  { 
    name: 'Himachal Pradesh', 
    description: 'Land of Snowy Peaks', 
    price: 1100, 
    image: '/States/HimachalPradesh.jpg',
    galleryLink: '/gallery/himachal'
  },
  { 
    name: 'Tamil Nadu', 
    description: 'Temples & Traditions', 
    price: 850, 
    image: '/States/TamilNadu.jpg',
    galleryLink: '/gallery/tamilnadu'
  },
  { 
    name: 'Uttarakhand', 
    description: 'Himalayan Bliss', 
    price: 1000, 
    image: '/States/Uttarakhand.jpg',
    galleryLink: '/gallery/uttarakhand'
  },
  { 
    name: 'Maharashtra', 
    description: 'Caves, Forts & Coastline', 
    price: 950, 
    image: '/States/Maharashtra.jpg',
    galleryLink: '/gallery/maharashtra'
  },
  { 
    name: 'West Bengal', 
    description: 'Culture & Heritage', 
    price: 780, 
    image: '/States/WestBengal.jpg',
    galleryLink: '/gallery/westbengal'
  },
  { 
    name: 'Karnataka', 
    description: 'Palaces & Tech Hub', 
    price: 850, 
    image: '/States/Karnataka.jpg',
    galleryLink: '/gallery/karnataka'
  },
  { name: 'Punjab', description: 'Land of Five Rivers', price: 750, image: '/States/Punjab.jpg', galleryLink: '/gallery/punjab' },
  { name: 'Gujarat', description: 'Land of Legends', price: 920, image: '/States/Gujarat.jpg', galleryLink: '/gallery/gujarat' },
  { name: 'Bihar', description: 'Rich in Heritage', price: 660, image: '/States/Bihar.jpg', galleryLink: '/gallery/bihar' },
  { name: 'Jharkhand', description: 'Land of Forests', price: 670, image: '/States/Jharkhand.jpg', galleryLink: '/gallery/jharkhand' },
  { name: 'Odisha', description: 'Temples & Beaches', price: 780, image: '/States/Odisha.jpg', galleryLink: '/gallery/odisha' },
  { name: 'Assam', description: 'Tea Gardens & Festivals', price: 820, image: '/States/Assam.jpg', galleryLink: '/gallery/assam' },
  { name: 'Madhya Pradesh', description: 'Heart of India', price: 860, image: '/States/MadhyaPradesh.jpg', galleryLink: '/gallery/madhyapradesh' },
  { name: 'Chhattisgarh', description: 'Nature & Tribes', price: 700, image: '/States/Chhattisgarh.jpg', galleryLink: '/gallery/chhattisgarh' },
  { name: 'Sikkim', description: 'Northeast Beauty', price: 1200, image: '/States/Sikkim.jpg', galleryLink: '/gallery/sikkim' },
  { name: 'Manipur', description: 'Land of Jewels', price: 800, image: '/States/Manipur.jpg', galleryLink: '/gallery/manipur' },
  { name: 'Nagaland', description: 'Land of Festivals', price: 810, image: '/States/Nagaland.jpg', galleryLink: '/gallery/nagaland' },
  { name: 'Mizoram', description: 'Hills & Culture', price: 830, image: '/States/Mizoram.jpg', galleryLink: '/gallery/mizoram' },
  { name: 'Tripura', description: 'Palaces & Temples', price: 790, image: '/States/Tripura.jpg', galleryLink: '/gallery/tripura' },
  { name: 'Meghalaya', description: 'Abode of Clouds', price: 890, image: '/States/Meghalaya.jpg', galleryLink: '/gallery/meghalaya' },
  { name: 'Arunachal Pradesh', description: 'Land of Rising Sun', price: 1150, image: '/States/ArunachalPradesh.jpg', galleryLink: '/gallery/arunachal' },
  { name: 'Andhra Pradesh', description: 'Spiritual & Scenic', price: 700, image: '/States/AndhraPradesh.jpg', galleryLink: '/gallery/andhrapradesh' },
  { name: 'Telangana', description: 'Tradition & Technology', price: 820, image: '/States/Telangana.jpg', galleryLink: '/gallery/telangana' },
  { name: 'Delhi', description: 'Heart of India', price: 950, image: '/States/Delhi.jpg', galleryLink: '/gallery/delhi' }
];

const FeaturedDestinations = () => (
  <section className="featured-destinations px-4 py-8">
  <h2 className="text-2xl font-semibold mb-6 text-center">Featured Destinations</h2>
  <div className="destination-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
    {featuredDestinations.map(destination => (
      <DestinationCard 
        key={destination.name} 
        name={destination.name} 
        description={destination.description} 
        price={destination.price} 
        image={destination.image} 
        galleryLink={destination.galleryLink}
      />
    ))}
  </div>
</section>

);

export default FeaturedDestinations;
