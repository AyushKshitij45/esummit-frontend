"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import "../index.css";

import Teams from "@/components/Teams/teams";
import Events from "@/components/Events/Events";



export default function Layout() {
  return (
    <div className="bg-[#1C371E]">
      <div className="[background:linear-gradient(90deg,_rgba(0,_14,_1,_1),_rgba(0,_14,_1,_0.1))] bg-cover">
        <div className="flex flex-col items-center justify-center hero text-center py-0 bg-hompage-bg-grid bg-cover bg-center min-h-screen">
          <div className="absolute top-0 left-0 py-2 hidden sm:block">
              <Image
                src="/icons/Ecell_logo.png"
                alt=""
                width={80}
                height={80}
                className="contain"
              />
            </div>
            <div className="absolute top-0 right-0 py-2 hidden sm:block ">
              <Image
                src="/images/KIIT_logo.png"
                alt=""
                width={80}
                height={80}
                style={{ height: '3rem', objectFit: 'contain' }}
              />
            </div>
          <div className="flex flex-col content mb-10">
            <div className="w-[fit-content] self-center text-white border-[1.5px] font-bold rounded-full px-6 py-2 mb-12 text-lg">
              23rd - 25th August
            </div>
            <Image
              src="/images/Esummit_logo.png"
              alt=""
              width={300}
              height={300}
              className="self-center"
            />
            <div className="text-lg mt-4 mx-auto max-w-m px-4 my-12 gradient-text font-bold">
              The flagship event of the Entrepreneurship Cell of KIIT University
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe30F-Ua4EtQTPG2QmXiF-yAjcUwrOR__eR5JHkYTRpP_RRSQ/viewform" 
            target="_blank" rel="noopener noreferrer">
            <button
              className="w-[fit-content] self-center text-black rounded-full p-2 px-6 text-l tracking-wider
              stroke-black stroke-2 bg-gradient-to-b from-gray-100 to-gray-400 font-extrabold mt-4 
              transition-all duration-300 ease-in-out transform hover:scale-95 active:scale-90
              hover:shadow-lg hover:bg-gradient-to-b from-gray-200 to-gray-500 
              focus:outline-none focus:ring focus:ring-black"
            >
              Register Now
            </button>
            </a>
          </div>

          <div className="sponsors-carousel mx-auto bg-white py-4 overflow-hidden relative w-[100%]">
            <div className="flex items-center justify-center overflow-hidden">
              <marquee scrollamount="10" behavior="scroll" direction="left" loop="infinite" >
              <img
                src="/images/ditto.png"
                alt="Acer"
                width={48}
                height={48}
                className="inline-block mx-12"
              />
              <img
                src="/images/decath.png"
                alt="Uber"
                width={48}
                height={48}
                className="inline-block mx-12"
              />
              <img
                src="/images/stockgroBlack.png"
                alt="Uber"
                width={48}
                height={48}
                className="inline-block mx-12"
              />
              <img
                src="/images/Protoio-logo.png"
                alt="Uber"
                width={48}
                height={48}
                className="inline-block mx-12"
              />
              <img
                src="/images/wolfram-one1.png"
                alt="Uber"
                width={48}
                height={48}
                className="inline-block mx-12"
              />
              <img
                src="/images/meraki-logo.jpeg"
                alt="Uber"
                width={48}
                height={48}
                className="inline-block mx-12"
              />
              <img
                src="/images/finshots.png"
                alt="Uber"
                width={48}
                height={48}
                className="inline-block mx-12"
              />
  
              </marquee>
            </div>
          </div>
        </div>
        <Events/>
        <Teams/>
      </div>
    </div>
  );
}
