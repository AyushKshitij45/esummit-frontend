"use client";
import { useState } from 'react';

// ProblemModal Component
const ProblemModal = ({ isOpen, onClose, problem }) => {
  if (!isOpen || !problem) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-[#1C371E] rounded-lg shadow-lg flex flex-col items-center border-[1.5px] border-[#8F9D91] 
      [backdrop-filter:blur(17.79px)] p-8 z-10 max-w-lg w-full mx-4">
        <img src={problem.image} alt={problem.title} className="object-cover max-h-60 w-full rounded-t-lg mb-4" />
        <h2 className="text-3xl font-bold mb-4 text-white">{problem.title}</h2>
        <p className="text-white text-lg mb-4"><strong>Problem Statement:</strong> {problem.statement}</p>
        <p className="text-white text-md mb-4"><strong>Description:</strong> {problem.description}</p>
        <p className="text-white text-md mb-4"><strong>Features:</strong> {problem.features}</p>
        <p className="text-white text-md mb-4"><strong>Expectations:</strong> {problem.expectations}</p>
        <p className="text-white text-md mb-4"><strong>Segment:</strong> {problem.segment}</p>
        <p className="text-white text-md mb-4"><strong>Prizes:</strong> {problem.prizes}</p>
        <a href={problem.link} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 text-black px-4 py-2 rounded-full text-xl font-bold mb-4">
            Download PDF
          </button>
        </a>
        <button className="bg-green-500 text-black px-4 py-2 rounded-full text-xl font-bold" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

// ProblemCard Component
const ProblemCard = ({ problem, onClick }) => {
  return (
    <div
      className="relative bg-[#1C371E] rounded-lg shadow-lg border-[1.5px] border-[#8F9D91] 
      [backdrop-filter:blur(17.79px)] p-4 cursor-pointer"
      onClick={onClick}
    >
      <img src={problem.image} alt={problem.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
      <h2 className="text-2xl font-bold text-white mb-2">{problem.title}</h2>
      <p className="text-white text-sm mb-2">
        {problem.statement.length > 100 ? `${problem.statement.substring(0, 100)}...` : problem.statement}
      </p>
      <p className="text-white text-xs bg-green-600 px-2 py-1 rounded-full">{problem.segment}</p>
      <div className="w-full flex justify-end mt-2">
        <button className="text-green-500 text-xl">&#x279C;</button>
      </div>
    </div>
  );
};

// Problems Component
const Problems = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);

  const problemStatements = [
    {
      title: 'Machine Learning: Predictive Maintenance of Nuclear Reactors',
      statement: 'Develop an ML model to predict potential failures in nuclear reactors by analysing sensor data.',
      description: 'Predictive maintenance aims to identify potential failures before they occur, using data from nuclear reactors.',
      features: 'Sensor readings, operational parameters, failure logs.',
      expectations: 'Accurate predictions to assist in maintenance planning.',
      segment: 'Little Wiz (U12)',
      prizes: '1st Prize: $5000, 2nd Prize: $2500',
      image: '/images/predictive-maintenance.jpg',
      link: '/files/predictive-maintenance.pdf'
    },
    {
      title: 'Web Development: Personalized Wellness Dashboard',
      statement: 'Develop a secure, personalized wellness dashboard for healthcare applications.',
      description: 'A web application providing personalized health recommendations and tracking features.',
      features: 'Data integration guidelines, user interface requirements.',
      expectations: 'Functional and secure application, along with a commercialization proposal.',
      segment: 'Little Wiz (U12)',
      prizes: '1st Prize: $3000, 2nd Prize: $1500',
      image: '/images/wellness-dashboard.jpg',
      link: '/files/wellness-dashboard.pdf'
    },
    {
      title: 'Machine Learning: Predicting Chronic Disease Outcomes Using Electronic Health Records',
      statement: 'Develop a model to predict outcomes of chronic diseases based on Electronic Health Records (EHRs).',
      description: 'Predictive model for chronic diseases using patient health data.',
      features: 'Health indicators, patient demographics, disease outcomes.',
      expectations: 'Model aiding in long-term outcome predictions.',
      segment: 'Rookies (UG Students)',
      prizes: '1st Prize: $4000, 2nd Prize: $2000',
      image: '/images/chronic-disease.jpg',
      link: '/files/chronic-disease.pdf'
    },
    {
      title: 'Web Development: Tinder for Startups',
      statement: 'Develop a platform to match startup founders with investors using a Tinder-like interface.',
      description: 'Matchmaking platform for startup founders and investors.',
      features: 'UI/UX design, matching algorithm, in-app messaging.',
      expectations: 'Effective matchmaking and user-friendly interface.',
      segment: 'Rookies (UG Students)',
      prizes: '1st Prize: $3500, 2nd Prize: $1750',
      image: '/images/tinder-for-startups.jpg',
      link: '/files/tinder-for-startups.pdf'
    },
    {
      title: 'Machine Learning: Computer Vision for Healthcare',
      statement: 'Classify chest X-ray images as pneumonia or normal. Additionally, analyze EKG signals for angina detection.',
      description: 'Computer vision model for healthcare diagnostics.',
      features: 'X-ray images, EKG signals, labels.',
      expectations: 'Support for diagnosing pneumonia and angina.',
      segment: 'Seasoned Players (UG Students)',
      prizes: '1st Prize: $6000, 2nd Prize: $3000',
      image: '/images/computer-vision.jpg',
      link: '/files/computer-vision.pdf'
    },
    {
      title: 'Web3: Blockchain-Powered Voting Systems',
      statement: 'Develop a blockchain-based voting system for secure and transparent voting.',
      description: 'Voting system leveraging blockchain technology for security and transparency.',
      features: 'Blockchain frameworks, secure protocols.',
      expectations: 'User-friendly and secure voting platform.',
      segment: 'Seasoned Players (UG Students)',
      prizes: '1st Prize: $5000, 2nd Prize: $2500',
      image: '/images/blockchain-voting.jpg',
      link: '/files/blockchain-voting.pdf'
    },
    {
      title: 'Web Development: Medical Dashboard for Patients',
      statement: 'Develop a dashboard to predict patient readmissions using clinical data.',
      description: 'Dashboard providing insights to manage patient readmissions.',
      features: 'Patient health data, readmission records.',
      expectations: 'Dashboard with actionable insights and monetizable pitch.',
      segment: 'Seasoned Players (UG Students)',
      prizes: '1st Prize: $4500, 2nd Prize: $2250',
      image: '/images/medical-dashboard.jpg',
      link: '/files/medical-dashboard.pdf'
    },
    {
      title: 'Crowd Funding Web Application',
      statement: 'Create a crowdfunding application with enhanced security and transparency features.',
      description: 'Crowdfunding platform with a focus on security and transparency.',
      features: 'Crowdfunding features, security enhancements.',
      expectations: 'Decentralized solution with high security.',
      segment: 'Seasoned Players (UG Students)',
      prizes: '1st Prize: $5500, 2nd Prize: $2750',
      image: '/images/crowd-funding.jpg',
      link: '/files/crowd-funding.pdf'
    }
  ];

  const handleProblemClick = (problem) => {
    setSelectedProblem(problem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProblem(null);
  };

  return (
    <div className="text-white py-16 bg-[#1C371E]">
      <h1 className="text-4xl font-bold text-center mb-8">Hackathon Problem Statements</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {problemStatements.map((problem, index) => (
          <ProblemCard
            key={index}
            problem={problem}
            onClick={() => handleProblemClick(problem)}
          />
        ))}
      </div>
      <ProblemModal isOpen={isModalOpen} onClose={handleCloseModal} problem={selectedProblem} />
    </div>
  );
};

export default Problems;
