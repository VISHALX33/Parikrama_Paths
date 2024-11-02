// src/pages/BookingDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingDetails = () => {
  const location = useLocation();
  const { bookingData } = location.state || {}; // Get the booking data from the state

  if (!bookingData) {
    return <h2>No booking details available.</h2>; // Display message if no data
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center my-8">Booking Details</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Your Booking Information</h2>
        <p><strong>Name:</strong> {bookingData.name}</p>
        <p><strong>Email:</strong> {bookingData.email}</p>
        <p><strong>Phone:</strong> {bookingData.phone}</p>
        <p><strong>Destination:</strong> {bookingData.destination}</p>
        <p><strong>Travel Date:</strong> {bookingData.travelDate}</p>
        <p><strong>Number of Travelers:</strong> {bookingData.numberOfTravelers}</p>
        <p><strong>Aadhar Number:</strong> {bookingData.aadharNumber}</p>
        <p><strong>Number of Adults:</strong> {bookingData.numberOfAdults}</p>
        <p><strong>Number of Children:</strong> {bookingData.numberOfChildren}</p>
        <p><strong>Special Requests:</strong> {bookingData.specialRequests}</p>
        <p><strong>Payment Method:</strong> {bookingData.paymentMethod}</p>
      </div>
    </div>
  );
};

export default BookingDetails;
