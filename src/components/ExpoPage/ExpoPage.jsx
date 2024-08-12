// src/components/ExpoPage/ExpoPage.jsx

import React from 'react';
import Problems from './Problems';
import './ExpoPage.css'; // Import the CSS file
import Prizes from './Prize';
import Mentors from './Mentor';
import Workshops from './Workshop';
import FAQ from './FAQ';

const ExpoPage = () => {
  return (
    <div className="p-6 bg-[#1C371E]">
      <h1 className="text-4xl font-bold mb-8 text-center text-white mt-[80px]">DisruptX - Hackathon</h1>
      <hr></hr>
      <Problems/>
      
      <Prizes/>

      <Mentors/>

      <Workshops/>

      <FAQ/>
    </div>
  );
};

export default ExpoPage;
