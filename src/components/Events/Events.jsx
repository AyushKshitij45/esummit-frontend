"use client";
import { useState } from "react";
import { Link } from 'react-router-dom';

// Modal Component
const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="nft rounded-lg shadow-lg flex flex-col items-center border-[1.5px] border-[#8F9D91] 
      [backdrop-filter:blur(17.79px)] rounded-[23.72px] 
      [background:linear-gradient(124.26deg,_rgba(255,_255,_255,_0.42),_rgba(255,_255,_255,_0))] p-8 z-10 max-w-lg w-full mx-4">
        <img src={event.image} alt={event.title} className="object-cover max-h-60 w-full rounded-t-lg mb-4" />
        <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
        <div className="text-white text-lg mb-4">{event.description}</div>
        <button className="bg-green-500 text-black px-4 py-2 rounded-full text-xl font-bold" onClick={onClose}>
          Close
        </button>
        {/* <a href={event.link}><button className="bg-green-500 text-black px-4 py-2 rounded-full text-xl font-bold">
          More Info
        </button></a> */}
      </div>
    </div>
  );
  
};

// EventCard Component
const EventCard = ({ title, description, image, onClick, link }) => {
  return (
    <div
      className="relative nft rounded-lg shadow-lg flex items-stretch border-[1.5px] border-[#8F9D91]
      [backdrop-filter:blur(17.79px)] rounded-[23.72px] 
      [background:linear-gradient(124.26deg,_rgba(255,_255,_255,_0.42),_rgba(255,_255,_255,_0))] cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-1/2 h-auto object-cover rounded-tl-lg rounded-bl-lg" />
      <div className="flex flex-col w-1/2 p-4">
        <div className="sticky top-0 bg-inherit">
          <h2 className="text-2xl font-bold border-b-[1.5px] border-[#8F9D91] text-center mb-2">{title}</h2>
          <div className="text-white text-[0.8em] mb-4 font-Gilroy-Medium">
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </div>
          <div className="w-full flex justify-end">
            {link && (
              <a href={link} className="text-green-600 text-xl flex items-center space-x-2 py-2 px-4 hover:text-white" target="_blank" rel="noopener noreferrer">
                <span>More Info</span>
              </a>
            )}
            <button className="text-green-500 text-2xl">&#x279C;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventsData = [
    {
      title: "DISRUPT-X",
      description:
        "The upcoming hackathon, DisruptX features three segments: Little Wiz (U12), \
        Rookies (UG students), and Seasoned Players (experienced UG students). \
        Participants can choose between product and technical solutions in tracks like Machine Learning,\
         Generative AI, Web3, and Web Development. Prizes include licenses, cash rewards, and sponsorships, \
         with workshops and mentorship provided throughout.\
        Conducted in 2 rounds, Live Development followed by pitching. Team members can be of 2-5 people. As well as verticals for Individual participants.",
      image: "/images/Poster-Hackathon.png",
      link: "/hackathon",
    },
    {
      title: "BAZAAR BULLS",
      description:
        "The trading event, “Bazaar Bulls: Trade your way to the top” is the stock market simulation event\
         of E-summit 2024. It will include the intraday trading session along with multiple smaller games like\
          ticker symbol game, quizzes etc. \
        This is an individual event, not teams are required. There is only one round, but there are multiple small games.",
      image: "/images/Bazaar-Bulls.png",
      // link: "/bazaar-bulls",
    },
    {
      title: "SPEAKER SESSIONS",
      description:
        "Don't miss the dynamic speaker sessions at the KIIT E-Summit 2024! Hear from industry legends,\
         uncover exclusive insights, and connect with visionary leaders. Elevate your entrepreneurial \
         journey with game-changing strategies and unparalleled networking opportunities!",
      image: "/images/speaker-session.png",
    },
    {
      title: "INNOVATE-X!",
      description:
        "Step into the future at E-Summit 2024 with INNOVATE X! This electrifying expo and carnival is where \
        cutting-edge startups and established companies showcase their groundbreaking products and services. Dive into\
         a world of fun games, interactive exhibitions, and thrilling competitions. Network with top company representatives\
          (2-4 per company), explore innovative ideas, and be part of the event where connection, collaboration,\
           and conquest are the keys to success. Don't miss out on the excitement!",
      image: "/images/expo.png",
    },
    {
      title: "CASE-BATTLE",
      description:
        "Case-Battle is a product management challenge aimed at testing your skills with real-world problems. \
        As a team of members ranging from 1 to 5,  you’ll analyze a product, pinpoint its challenges, and craft innovative solutions. \
        Participants will receive the challenges a week before the E-Summit, giving them the time to strategize and \
        develop their solutions. Top teams will make it to the finals on Day 3, where they'll refine their presentations \
        for a chance to win. \
        Join us and prove your product management prowess!",
      image: "/images/case-battle.png",
    },
    {
      title: "FLASH PITCH FIESTA",
      description:
        "This event will challenge the entrepreneurial skills of the participants as they pitch their innovation \
        to solve a given problem. But, there is a twist, the problem statement will be revealed on the day of the event.\
        Flash Pitch Fiesta, where participants will get a platform to prove their metal, capability to thinking over the course \
        of 5 hours to prepare, pitch and present their ideas.",
      image: "/images/Blind-pitch.png",
    },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="text-white py-16 relative overflow-x-hidden" id="event">
      <div className="relative text-center mb-[6em] mt-[1em]">
        <h1 className="relative text-5xl font-bold text-[10vw] text-black bg-[#A2F250] py-8 w-full inline-block transform -skew-y-6 z-10 font-Druk-Wide-Bold">
          *EVENTS*
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventsData.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            image={event.image}
            onClick={() => handleEventClick(event)}
            link={event.link}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} event={selectedEvent} />
      {/* <div className="flex justify-center items-center h-full">
      <h1 className="text-4xl font-bold text-white text-[4vw] bg-opacity-75 px-4 py-2 rounded-lg">
        Coming Soon
      </h1>
    </div> */}

    </div>
  );
}
