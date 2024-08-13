"use client";
import { useState } from 'react';

// MentorModal Component
const MentorModal = ({ isOpen, onClose, mentor }) => {
  if (!isOpen || !mentor) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-[#1C371E] rounded-lg shadow-lg flex flex-col items-center border-[1.5px] border-[#8F9D91] 
      [backdrop-filter:blur(17.79px)] p-8 z-10 max-w-lg w-full mx-4">
        <h2 className="text-3xl font-bold mb-4 text-white">{mentor.name}</h2>
        <p className="text-white text-lg mb-4"><strong>Expertise:</strong> {mentor.expertise}</p>
        <p className="text-white text-md mb-4"><strong>Bio:</strong> {mentor.bio}</p>
        <p className="text-white text-md mb-4"><strong>Availability:</strong> {mentor.availability}</p>
        <button className="bg-green-500 text-black px-4 py-2 rounded-full text-xl font-bold" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

// MentorCard Component
const MentorCard = ({ mentor, onClick }) => {
  return (
    <div
      className="relative bg-[#1C371E] rounded-lg shadow-lg border-[1.5px] border-[#8F9D91] 
      [backdrop-filter:blur(17.79px)] p-4 cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-2xl font-bold text-white mb-2">{mentor.name}</h2>
      <p className="text-white text-sm mb-2">{mentor.expertise}</p>
      <div className="w-full flex justify-end mt-2">
        <button className="text-green-500 text-xl">&#x279C;</button>
      </div>
    </div>
  );
};

// Mentors Component
const Mentors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentorDetails = [
    {
      name: 'Shumbhul Arifa',
      expertise: '[Field/Industry]',
      bio: 'Brief biography and professional background.',
      availability: '[Days/Times]'
    },
    {
      name: 'Archy Gupta',
      expertise: '[Field/Industry]',
      bio: 'Brief biography and professional background.',
      availability: '[Days/Times]'
    },
    {
      name: 'Vijay Murugadoss',
      expertise: '[Field/Industry]',
      bio: 'Brief biography and professional background.',
      availability: '[Days/Times]'
    },
    {
      name: 'Simran Preet Kaur',
      expertise: '[Field/Industry]',
      bio: 'Brief biography and professional background.',
      availability: '[Days/Times]'
    }
  ];

  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMentor(null);
  };

  return (
    <div className="text-white py-16 bg-transparent">
      <h1 className="text-4xl font-bold text-center mb-8">Mentor Details</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentorDetails.map((mentor, index) => (
          <MentorCard
            key={index}
            mentor={mentor}
            onClick={() => handleMentorClick(mentor)}
          />
        ))}
      </div>
      <MentorModal isOpen={isModalOpen} onClose={handleCloseModal} mentor={selectedMentor} />
    </div>
  );
};

export default Mentors;
