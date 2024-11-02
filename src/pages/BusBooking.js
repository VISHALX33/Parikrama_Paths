import React, { useState } from 'react';

const BusBooking = () => {
  const [bookingType, setBookingType] = useState('bus'); // Default to bus booking

  const [carDetails, setCarDetails] = useState({
    name: '',
    email: '',
    carType: '',
    pickupDate: '',
    returnDate: '',
    numberOfPassengers: 1,
  });

  const [busDetails, setBusDetails] = useState({
    name: '',
    email: '',
    departureDate: '',
    returnDate: '',
    numberOfPassengers: 1,
  });

  const [bookingHistory, setBookingHistory] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (bookingType === 'car') {
      setCarDetails((prev) => ({ ...prev, [name]: value }));
    } else {
      setBusDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookingType === 'car') {
      setBookingHistory((prev) => [...prev, { type: 'Car', ...carDetails }]);
      setCarDetails({
        name: '',
        email: '',
        carType: '',
        pickupDate: '',
        returnDate: '',
        numberOfPassengers: 1,
      });
    } else {
      setBookingHistory((prev) => [...prev, { type: 'Bus', ...busDetails }]);
      setBusDetails({
        name: '',
        email: '',
        departureDate: '',
        returnDate: '',
        numberOfPassengers: 1,
      });
    }
  };

  const clearHistory = () => {
    setBookingHistory([]);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Booking</h1>

      {/* Booking Type Selection */}
      <div className="mb-4">
        <label className="mr-2">
          <input
            type="radio"
            value="car"
            checked={bookingType === 'car'}
            onChange={() => setBookingType('car')}
          />
          Car
        </label>
        <label>
          <input
            type="radio"
            value="bus"
            checked={bookingType === 'bus'}
            onChange={() => setBookingType('bus')}
          />
          Bus
        </label>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        {bookingType === 'car' && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Book Your Car</h2>
            <input
              type="text"
              name="name"
              value={carDetails.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={carDetails.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
              name="carType"
              value={carDetails.carType}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>Select Car Type</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
            </select>
            <label className="block mb-1">Pickup Date:</label>
            <input
              type="date"
              name="pickupDate"
              value={carDetails.pickupDate}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block mb-1">Return Date:</label>
            <input
              type="date"
              name="returnDate"
              value={carDetails.returnDate}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              name="numberOfPassengers"
              value={carDetails.numberOfPassengers}
              onChange={handleChange}
              min="1"
              required
              placeholder="Number of Passengers"
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </>
        )}

        {bookingType === 'bus' && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Book Your Bus</h2>
            <input
              type="text"
              name="name"
              value={busDetails.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={busDetails.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block mb-1">Departure Date:</label>
            <input
              type="date"
              name="departureDate"
              value={busDetails.departureDate}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block mb-1">Return Date:</label>
            <input
              type="date"
              name="returnDate"
              value={busDetails.returnDate}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              name="numberOfPassengers"
              value={busDetails.numberOfPassengers}
              onChange={handleChange}
              min="1"
              required
              placeholder="Number of Passengers"
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </>
        )}

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Submit Booking
        </button>
      </form>

      {/* Booking History */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Booking History</h2>
        <ul className="list-disc pl-5">
          {bookingHistory.map((booking, index) => (
            <li key={index} className="mb-2">
              {booking.type}: {booking.name}, {booking.email}, {booking.numberOfPassengers} passenger(s) 
              {booking.departureDate && `, Departure: ${booking.departureDate}`} 
              {booking.returnDate && `, Return: ${booking.returnDate}`}
            </li>
          ))}
        </ul>
        <button
          onClick={clearHistory}
          className="mt-2 p-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Clear Booking History
        </button>
      </div>
    </div>
  );
};

export default BusBooking;
