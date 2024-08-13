// src/components/CaseBattlePage/CaseBattlePage.jsx

import React from 'react';
import Problems from './Problems';
import './CaseBattlePage.css'; // Import the CSS file
import Prizes from './Prize';
import Mentors from './Mentor';
import Workshops from './Workshop';
import FAQ from './FAQ';

const CaseBattlePage = () => {
  return (
    <div className="p-6 bg-[#1C371E]">
      <h1 className="text-4xl font-bold mb-8 text-center text-white mt-[80px]">Case-Battle</h1>
      <hr></hr>
      <p>
      In a world where innovation moves at lightning speed, why not seize the opportunity to lead? The Case Battle at KIIT E-Summit 2024 challenges you to address real-world challenges such as enhancing user retention, rolling out new features, or optimizing user experience. Team up, analyze, strategize, and present groundbreaking solutions that have the potential to transform industries. Are you ready to shine?
      </p>

      <Problems/>
      
      <Prizes/>

      <Mentors/>

      <Workshops/>

      <FAQ/>
    </div>
  );
};

export default CaseBattlePage;
