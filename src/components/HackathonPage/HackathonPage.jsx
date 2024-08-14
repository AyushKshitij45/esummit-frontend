// src/components/HackathonPage/HackathonPage.jsx
"use client";

import React, {useState, useEffect} from 'react';
import Problems from './Problems';
import './HackathonPage.css'; // Import the CSS file
import Prizes from './Prize';
import Mentors from './Mentor';
import Workshops from './Workshop';
import FAQ from './FAQ';
import { motion } from 'framer-motion'; 
import CustomizedTimeline from './Timeline';
import RubyTrophy from './TrophyMode';


const HackathonPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="p-6 bg-[#1C371E]" >
      <div className="flex flex-col items-center justify-center hero text-center py-0 bg-cover bg-center min-h-screen">

        <motion.div
          className="content fixed top-10 left-0 w-full flex justify-center mt-20 items-center"
          style={{ zIndex: 1 }} // Adjusted zIndex to keep it above background but below nav
          animate={{
            opacity: scrollY > 100 ? 0.25 : 1,
            scale: scrollY > 100 ? 10 : 1,
            filter: scrollY > 100 ? 'blur(5px)' : 'blur(0px)',
            x: scrollY > 100 ? '45vw' : '0vw',
          }}
          transition={{ duration: 0.25}}
        >
          <img src="/images/disruptx-logo.png" alt="Logo" className="h-[125px]" />
        </motion.div>

        <div style={{ marginTop: '150px' , zIndex: 2}}> {/* Adjust margin to clear space for the nav and logo */}
          <h1 className="text-4xl font-bold mb-8 text-center text-white mt-20">DisruptX - Hackathon</h1>
          <p className="text-lg text-white mb-8">
            The DisruptX Hackathon is an exciting event where participants come together to showcase their skills and creativity in solving real-world problems. Join us for a weekend of innovation, collaboration, and friendly competition. Whether you're a seasoned developer or just starting out, this hackathon is the perfect opportunity to learn, network, and have fun. Don't miss out on this incredible experience!
          </p>
          <hr></hr>

          <Problems />

          <div className='timeline-hackathon'>
            <CustomizedTimeline/>
          </div>
          <Prizes />

          <Mentors />
          <RubyTrophy src="/files/ruby-trophy.glb" alt="Ruby Trophy" />

          <Workshops />

          <FAQ />
      </div>
      </div>
    </div>
  );
};

export default HackathonPage;

