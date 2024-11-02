// import React from 'react';

// const Careers = () => {
//   const jobs = [
//     {
//       title: 'Travel Consultant',
//       description: 'We are looking for experienced travel consultants to assist clients in planning their dream vacations. You should have excellent communication skills and a passion for travel.',
//       requirements: [
//         'Minimum 2 years of experience in the travel industry',
//         'Strong knowledge of travel destinations and products',
//         'Ability to work under pressure and meet deadlines',
//       ],
//     },
//     {
//       title: 'Marketing Coordinator',
//       description: 'Join our marketing team to help promote our travel services. You will be responsible for creating content, managing social media accounts, and assisting in marketing campaigns.',
//       requirements: [
//         'Bachelor’s degree in Marketing or related field',
//         'Excellent written and verbal communication skills',
//         'Experience with social media platforms and digital marketing',
//       ],
//     },
//     {
//       title: 'Customer Service Representative',
//       description: 'We are seeking a friendly and customer-oriented representative to handle inquiries and provide assistance to our clients. A positive attitude is a must!',
//       requirements: [
//         'Previous experience in customer service',
//         'Strong problem-solving skills',
//         'Ability to multitask and manage time effectively',
//       ],
//     },
//   ];

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center my-8">Careers</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {jobs.map((job, index) => (
//           <div key={index} className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-300">
//             <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
//             <p className="mb-4">{job.description}</p>
//             <h3 className="font-semibold">Requirements:</h3>
//             <ul className="list-disc list-inside mb-4">
//               {job.requirements.map((req, reqIndex) => (
//                 <li key={reqIndex}>{req}</li>
//               ))}
//             </ul>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
//               Apply Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Careers;

// src/pages/Careers.js
import React from 'react';

const Careers = () => {
  const jobs = [
    {
      title: 'Travel Consultant',
      location: 'Remote / New York, NY',
      description: 'We are looking for experienced travel consultants to assist clients in planning their dream vacations. You should have excellent communication skills and a passion for travel.',
      requirements: [
        'Minimum 2 years of experience in the travel industry',
        'Strong knowledge of travel destinations and products',
        'Ability to work under pressure and meet deadlines',
      ],
    },
    {
      title: 'Marketing Coordinator',
      location: 'Los Angeles, CA',
      description: 'Join our marketing team to help promote our travel services. You will be responsible for creating content, managing social media accounts, and assisting in marketing campaigns.',
      requirements: [
        'Bachelor’s degree in Marketing or related field',
        'Excellent written and verbal communication skills',
        'Experience with social media platforms and digital marketing',
      ],
    },
    {
      title: 'Customer Service Representative',
      location: 'Remote',
      description: 'We are seeking a friendly and customer-oriented representative to handle inquiries and provide assistance to our clients. A positive attitude is a must!',
      requirements: [
        'Previous experience in customer service',
        'Strong problem-solving skills',
        'Ability to multitask and manage time effectively',
      ],
    },
  ];

  const faqs = [
    {
      question: 'How do I apply for a job?',
      answer: 'Click on the "Apply Now" button below each job listing to start your application process. You’ll be redirected to a form where you can submit your resume and details.',
    },
    {
      question: 'What is the hiring process like?',
      answer: 'Our hiring process includes an initial application review, followed by a phone interview, and finally, an in-person or virtual interview with the hiring manager.',
    },
    {
      question: 'Are there any remote work opportunities?',
      answer: 'Yes, several of our positions are remote or offer remote work options. Please check the job listing for specific details on each role.',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center my-8">Careers</h1>
      
      {/* Job Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="p-6 border rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{job.location}</p>
            <p className="mb-4">{job.description}</p>
            
            <h3 className="font-semibold">Requirements:</h3>
            <ul className="list-disc list-inside mb-4">
              {job.requirements.map((req, reqIndex) => (
                <li key={reqIndex}>{req}</li>
              ))}
            </ul>

            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* FAQs Section */}
      <div className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
