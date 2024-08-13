"use client";
import { useState } from 'react';
import {motion} from "framer-motion";
// PrizeModal Component
const PrizeModal = ({ isOpen, onClose, prize }) => {
  if (!isOpen || !prize) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-[#1C371E] rounded-lg shadow-lg flex flex-col items-center border-[1.5px] border-[#8F9D91] 
      [backdrop-filter:blur(17.79px)] p-8 z-10 max-w-lg w-full mx-4">
        <h2 className="text-3xl font-bold mb-4 text-white">{prize.title}</h2>
        <p className="text-white text-lg mb-4"><strong>Prize:</strong> {prize.amount}</p>
        <p className="text-white text-md mb-4"><strong>Criteria:</strong> {prize.criteria}</p>
        <button className="bg-green-500 text-black px-4 py-2 rounded-full text-xl font-bold" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

// PrizeCard Component
const PrizeCard = ({ prize, onClick }) => {
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.05 }}
      className="relative bg-[#1C371E] rounded-lg shadow-lg border-[1.5px] border-[#8F9D91] 
      [backdrop-filter:blur(17.79px)] m-4 p-4 cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-2xl font-bold text-white mb-2">{prize.title}</h2>
      <p className="text-white text-sm mb-2">{prize.amount}</p>
      <p className="text-white text-xs bg-green-600 px-2 py-1 rounded-full">Prize</p>
      <div className="w-full flex justify-end mt-2">
        <button className="text-green-500 text-xl">&#x279C;</button>
      </div>
    </motion.div>
  );
};

// Prizes Component
const Prizes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState(null);

  const prizeDetails = [
    {
      title: '1st Place',
      amount: 'Rs. 25000/-',
      criteria: 'Based on overall evaluation and scoring.'
    },
    {
      title: '2nd Place',
      amount: 'Wolfram Licence worth USD 1660',
      criteria: 'Based on overall evaluation and scoring.'
    },
    {
      title: '3rd Place',
      amount: 'Proto.io USD 260',
      criteria: 'Based on overall evaluation and scoring.'
    },
    {
      title: 'Special Awards: Best Innovation',
      amount: '[Description of Prize]',
      criteria: '[Description of Criteria]'
    },
    {
      title: 'Special Awards: Best Presentation',
      amount: '[Description of Prize]',
      criteria: '[Description of Criteria]'
    }
  ];

  const handlePrizeClick = (prize) => {
    setSelectedPrize(prize);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPrize(null);
  };

  return (
    <div className="text-white py-16 bg-transparent">
      <h1 className="text-4xl font-bold text-center mb-8">Prize Details</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {prizeDetails.map((prize, index) => (
          <PrizeCard
            key={index}
            prize={prize}
            onClick={() => handlePrizeClick(prize)}
          />
        ))}
      </div>
      <PrizeModal isOpen={isModalOpen} onClose={handleCloseModal} prize={selectedPrize} />
    </div>
  );
};

export default Prizes;
