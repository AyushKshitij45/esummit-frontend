"use client";
import { useState } from 'react';

// WorkshopModal Component
const WorkshopModal = ({ isOpen, onClose, workshop }) => {
  if (!isOpen || !workshop) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-[#1C371E] rounded-lg shadow-lg flex flex-col items-center border-[1.5px] border-[#8F9D91] 
      [backdrop-filter:blur(17.79px)] p-8 z-10 max-w-lg w-full mx-4">
        <h2 className="text-3xl font-bold mb-4 text-white">{workshop.title}</h2>
        <p className="text-white text-lg mb-4"><strong>Date:</strong> {workshop.date}</p>
        <p className="text-white text-md mb-4"><strong>Time:</strong> {workshop.time}</p>
        <p className="text-white text-md mb-4"><strong>Venue:</strong> {workshop.venue}</p>
        <p className="text-white text-md mb-4"><strong>Charges:</strong> {workshop.charges}</p>
        <p className="text-white text-md mb-4"><strong>Description:</strong> {workshop.description}</p>
        <button className="bg-green-500 text-black px-4 py-2 rounded-full text-xl font-bold" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

// WorkshopCard Component
const WorkshopCard = ({ workshop, onClick }) => {
  return (
    <div
      className="relative bg-[#1C371E] rounded-lg shadow-lg border-[1.5px] border-[#8F9D91] 
      [backdrop-filter:blur(17.79px)] p-4 cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-2xl font-bold text-white mb-2">{workshop.title}</h2>
      <p className="text-white text-sm mb-2">{workshop.date} - {workshop.time}</p>
      <p className="text-white text-xs bg-green-600 px-2 py-1 rounded-full">Workshop</p>
      <div className="w-full flex justify-end mt-2">
        <button className="text-green-500 text-xl">&#x279C;</button>
      </div>
    </div>
  );
};

// Workshops Component
const Workshops = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const workshopDetails = [
    {
      title: 'Placements and Tech World Tactics',
      date: '16th Aug',
      time: '8-9pm',
      venue: 'Online',
      charges: 'Free of cost',
      description: 'How to solve problems using AI/ML and build Startups around it? And how to get a job ready for Data Science roles?',
      by: 'Archy Gupta or Shumbhul Arifa'
    },
    {
      title: 'Hands-on Experience with GraphQL and Flask',
      date: '22nd Aug',
      time: '5-7pm',
      venue: 'Annex Building Kalam Hall or LH 001 to 110 in Campus 7 or Audi 7',
      charges: 'Only available to ESummit participants',
      description: 'Hands-on experience with GraphQL and Flask.',
      by: 'Vijay Murugadoss'
    },
    {
      title: 'Advanced AI/ML Techniques',
      date: '24th Aug',
      time: '9 am to 11 am',
      venue: 'Seminar Hall Campus 14',
      charges: 'Free of cost',
      description: 'Advanced AI/ML techniques with certification from AdrigAI.',
      by: 'Vijay Murugadoss'
    }
  ];

  const handleWorkshopClick = (workshop) => {
    setSelectedWorkshop(workshop);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWorkshop(null);
  };

  return (
    <div className="text-white py-16 bg-[#1C371E]">
      <h1 className="text-4xl font-bold text-center mb-8">Workshop Details</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workshopDetails.map((workshop, index) => (
          <WorkshopCard
            key={index}
            workshop={workshop}
            onClick={() => handleWorkshopClick(workshop)}
          />
        ))}
      </div>
      <WorkshopModal isOpen={isModalOpen} onClose={handleCloseModal} workshop={selectedWorkshop} />
    </div>
  );
};

export default Workshops;
