"use client";
import { useState } from 'react';

// FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I participate in the hackathon?',
      answer: 'To participate in the hackathon, you need to register through our website. Make sure to review the rules and guidelines before signing up.'
    },
    {
      question: 'What are the eligibility criteria?',
      answer: 'Participants must be currently enrolled in a university or college. Check the specific rules for each competition segment on our website.'
    },
    {
      question: 'How can I contact a mentor?',
      answer: 'Mentor contact information is provided once you register. You can also reach out through the event platform for any queries.'
    },
    {
      question: 'What are the prizes for the winners?',
      answer: 'Prizes vary depending on the competition segment. For detailed prize information, refer to the prizes section on our website.'
    },
    {
      question: 'Will there be workshops?',
      answer: 'Yes, we will have several workshops throughout the event. Check the workshops section for dates and details.'
    }
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-transparent" >
      <h2 className="text-3xl font-semibold mb-6 text-green-300 text-center shadow-lg" >FAQ</h2>
      <div className="max-w-7xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 cursor-pointer"
            onClick={() => toggleOpen(index)}
          >
            <div className="p-6" >
              <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
              <p className={`text-gray-400 transition-all duration-300 ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
