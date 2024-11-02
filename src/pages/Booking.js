// src/pages/Booking.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    numberOfTravelers: 1,
    aadharNumber: '',
    numberOfAdults: 1,
    numberOfChildren: 0,
    specialRequests: '',
    paymentMethod: 'credit',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to BookingDetails with formData
    navigate('/booking-details', { state: { bookingData: formData } });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center my-8">Booking Form</h1>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        
        {/* Personal Information Section */}
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <div className="mb-4">
          <input 
            name="name" 
            onChange={handleChange} 
            placeholder="Name" 
            required 
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <input 
            name="email" 
            type="email" 
            onChange={handleChange} 
            placeholder="Email" 
            required 
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <input 
            name="phone" 
            onChange={handleChange} 
            placeholder="Phone" 
            required 
            className="w-full p-2 border rounded" 
          />
        </div>

        {/* Travel Information Section */}
        <h2 className="text-2xl font-semibold mb-4 mt-6">Travel Information</h2>
        <div className="mb-4">
          <input 
            name="destination" 
            onChange={handleChange} 
            placeholder="Destination" 
            required 
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <input 
            name="travelDate" 
            type="date" 
            onChange={handleChange} 
            required 
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <input 
            name="numberOfTravelers" 
            type="number" 
            onChange={handleChange} 
            min="1" 
            className="w-full p-2 border rounded" 
            placeholder="Number of Travelers" 
          />
        </div>

        {/* Identification Section */}
        <h2 className="text-2xl font-semibold mb-4 mt-6">Identification</h2>
        <div className="mb-4">
          <input 
            name="aadharNumber" 
            onChange={handleChange} 
            placeholder="Aadhar Number" 
            required 
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <input 
            name="numberOfAdults" 
            type="number" 
            onChange={handleChange} 
            min="1" 
            className="w-full p-2 border rounded" 
            placeholder="Number of Adults" 
          />
        </div>
        <div className="mb-4">
          <input 
            name="numberOfChildren" 
            type="number" 
            onChange={handleChange} 
            min="0" 
            className="w-full p-2 border rounded" 
            placeholder="Number of Children" 
          />
        </div>

        {/* Special Requests Section */}
        <h2 className="text-2xl font-semibold mb-4 mt-6">Special Requests</h2>
        <div className="mb-4">
          <textarea 
            name="specialRequests" 
            onChange={handleChange} 
            placeholder="Special Requests" 
            className="w-full p-2 border rounded" 
          ></textarea>
        </div>

        {/* Payment Method Section */}
        <h2 className="text-2xl font-semibold mb-4 mt-6">Payment Method</h2>
        <div className="mb-4">
          <select 
            name="paymentMethod" 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
          >
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
