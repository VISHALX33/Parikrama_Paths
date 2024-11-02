import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-center text-gray-800 my-8">Contact Us</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        We would love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out.
        Our team at Parikrama Paths is here to assist you on your journey through India.
      </p>

      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Contact Form */}
        <form className="flex-1 bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto lg:mx-0">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Your Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              className="h-4 w-4 text-blue-600 focus:ring focus:ring-opacity-50"
            />
            <label htmlFor="subscribe" className="ml-2 text-sm text-gray-600">Subscribe to our newsletter</label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information and Map */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-800">Our Location</h2>
          <p className="text-gray-600">
            Parikrama Paths Office<br />
            123 Heritage Way, Delhi, India<br />
            Phone: +91 123-456-7890<br />
            Email: info@parikramapaths.com
          </p>

          {/* Embedded Map */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-64">
            <iframe
              title="Parikrama Paths Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8124766164625!2d144.963057715317!3d-37.81410797975132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sParliament%20House%20Victoria!5e0!3m2!1sen!2sin!4v1630494419712!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
