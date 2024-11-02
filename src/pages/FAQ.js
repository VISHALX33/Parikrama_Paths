import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Parikrama Paths?',
      answer: 'Parikrama Paths is a travel platform that curates unique and immersive travel experiences across India.'
    },
    {
      question: 'How can I book a trip?',
      answer: 'You can book a trip through our website by selecting your destination, dates, and preferences.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and online payment methods.'
    },
    {
      question: 'Can I modify my booking?',
      answer: 'Yes, you can modify your booking by contacting our customer support team.'
    },
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes, we offer special discounts for group bookings. Please contact us for more details.'
    },
    {
      question: 'Are the travel experiences customizable?',
      answer: 'Yes, our trips are customizable. We can tailor the itinerary, accommodations, and activities to meet your preferences.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made within 48 hours of booking are fully refundable. After that, a cancellation fee may apply. Please refer to our cancellation policy for details.'
    },
    {
      question: 'Is travel insurance included?',
      answer: 'Travel insurance is not included but is highly recommended. We can assist in obtaining a suitable travel insurance policy if needed.'
    },
    {
      question: 'Do you accommodate travelers with special needs?',
      answer: 'Yes, we strive to accommodate all travelers. Please inform us of any special requirements when booking, and we will do our best to meet your needs.'
    },
    {
      question: 'How safe are the travel destinations?',
      answer: 'Safety is our top priority. We partner with trusted local providers and prioritize safe destinations, keeping travelers updated on any travel advisories.'
    },
    {
      question: 'Can I travel solo on Parikrama Paths?',
      answer: 'Absolutely! We offer solo travel options, and our itineraries are crafted to provide a fulfilling experience for solo travelers.'
    },
    {
      question: 'Are meals included in the travel packages?',
      answer: 'Meals included vary by package. Many of our packages include breakfasts, and some may cover additional meals. Please check the package details for specific meal inclusions.'
    },
    {
      question: 'What should I pack for my trip?',
      answer: 'Packing recommendations are provided based on your chosen destination. We send a list of essentials once your booking is confirmed.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach customer support through our website, by phone, or by emailing us at support@parikramapaths.com.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No, we strive to maintain transparency. The trip cost will cover all specified expenses, and any optional activities are clearly indicated.'
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center my-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded shadow p-4">
            <div onClick={() => toggleFAQ(index)} className="cursor-pointer flex justify-between">
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <span className="text-blue-500 ml-2">
                {openIndex === index ? '-' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-500 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
