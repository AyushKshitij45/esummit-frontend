import React from 'react';

const About_us = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start leading-normal tracking-normal">
      
      <main className="w-full bg-darkslategray overflow-hidden flex flex-col items-center justify-start p-4 box-border relative min-h-screen max-w-full">
        <div className="bg-[#1C371E]">
          <div className="w-auto relative hidden max-w-full" />
          <div className="flex flex-col items-start justify-start box-border">
            <div className="flex flex-col items-start mt-12">
              <span className="text-greenyellow font-Druk-Wide-Bold text-[10vw]">ABOUT</span>
              <div className="flex items-center justify-start">
                <span className="text-greenyellow font-Druk-Wide-Bold text-[8vw]">E</span>
                <span className="text-white font-Druk-Wide-Bold text-[8vw]">SUMMIT</span>
              </div>
            </div>
          </div>
        </div>
        <section className="w-full max-w-7xl bg-darkslategray relative flex flex-col lg:flex-row items-start justify-start text-left text-lg text-white font-poppins mt-16 px-4 lg:px-8">
          <div className="w-full lg:10 relative backdrop-blur-md rounded-lg bg-gradient-to-r from-white/30 to-transparent p-4 lg:p-40 border border-gray">
            <div style={{ fontSize: 'x-large' }} className="text-base lg:text-lg leading-relaxed mb-10">
              KIIT E-Cell&apos;s E-Summit annual flagship event, E-Summit is a conference
              involving a number of speakers, incubators, investors, early
              entrepreneurs, students from diverse backgrounds, corporates,
              venture capitalists, and start-ups from all over the country to
              one platform sharing their entrepreneur ventures and wisdom with
              delegates, offering a chance to dive into an unforgettable and
              splendid frenzy of the startup world, featuring competitions
              with substantial cash prizes, numerous speaker sessions by CEOs
              and other top-level executives from across India.
            </div>
            <div style={{ fontSize: 'x-large' }} className="text-base lg:text-lg leading-relaxed mb-4">
              KIIT E-Summit &apos;24 symbolizes KIIT E-Cell&apos;s unwavering commitment
              to nurturing and fostering the spirit of entrepreneurship
              amongst young minds. Through this event, we aim to empower the
              start-up community by providing a platform for them to express
              their ideas and opinions and connect with potential investors
              who can help bring these ideas to life. With various workshops,
              talk sessions and extensive networking opportunities, we strive
              to foster an environment of productivity and innovation,
              aspiring to cultivate a generation of successful startups and
              become the foundational support of the entrepreneurial
              ecosystem.
            </div>
            <div style={{ fontSize: 'x-large' }} className="text-base lg:text-lg leading-relaxed mb-4">
              The E-Summit &apos;24 shall uphold the spirit of entrepreneurship,
              and contribute to the development of the startup
              ecosystem in India!
            </div>
          </div>
        </section>
        <section className="w-full max-w-7xl flex flex-col lg:flex-row items-stretch justify-between mt-16 px-4 lg:px-8 text-white font-poppins">
          <div className="w-full lg:w-1/2 lg:p-4 flex flex-col">
            <h2 className="font-bold mb-4 font-Druk-Wide-Bold mbMedium:text-[2vw] text-[8vw]">ABOUT KIIT</h2>
            <div className="flex-grow text-base lg:text-lg leading-relaxed backdrop-blur-md rounded-lg bg-gradient-to-r from-white/30 to-transparent p-4 lg:p-12 border border-gray">
              KIIT (Kalinga Institute of Industrial Technology) is one of the most prestigious educational institutions in India. Known for its commitment to academic excellence, KIIT offers a diverse range of programs in engineering, management, law, and more. The university is dedicated to fostering an environment of innovation and research, providing students with the tools and opportunities to excel in their respective fields.
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-4 flex flex-col">
            <h2 className="font-bold mb-4 font-Druk-Wide-Bold mbMedium:text-[2vw] text-[8vw]">ABOUT KIIT KAREER SCHOOL</h2>
            <div className="flex-grow text-base lg:text-lg leading-relaxed backdrop-blur-md rounded-lg bg-gradient-to-r from-white/30 to-transparent p-4 lg:p-12 border border-gray">
              KIIT Kareer School is dedicated to shaping the careers of KIIT students across various disciplines including Engineering, Management, and Law. We offer comprehensive training for placements, focusing on aptitude and soft skills, and also prepare students for higher studies such as MBA and GRE. Additionally, we provide training for banking exams, CSAT, and PSU tests. Our team consists of highly experienced trainers with over a decade of expertise. Our mission is to equip students with the skills and confidence needed to tackle life&apos;s challenges and succeed.
            </div>
          </div>
        </section>
        <section className="w-full max-w-7xl flex flex-col items-center justify-center mt-16">
          <div className="w-full absolute top-0 left-0 h-full z-10" />
        </section>
      </main>
    </div>
  );
};

export default About_us;
