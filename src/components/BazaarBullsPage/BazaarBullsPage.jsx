// src/components/BazaarBullsPage/BazaarBullsPage.jsx

import React from 'react';
import Problems from './Problems';
import './BazaarBullsPage.css'; // Import the CSS file
import Prizes from './Prize';
import Mentors from './Mentor';
import Workshops from './Workshop';
import FAQ from './FAQ';

const BazaarBullsPage = () => {
  return (
    <div className="p-6 bg-[#1C371E]">
      <h1 className="text-4xl font-bold mb-8 text-center text-white mt-[80px]">BlindPitch</h1>
      <hr></hr>
      <Problems/>
      
      <Prizes/>

      <Mentors/>

      <Workshops/>

      <FAQ/>
    </div>
  );
};

export default BazaarBullsPage;
