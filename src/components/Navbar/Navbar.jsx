import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  // Function to determine if the current route is active
  const isActive = (path) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 mx-auto flex justify-center items-center w-full max-w-screen-xl z-50 px-4 py-2">
      <div className="relative flex justify-between items-center md:max-w-5xl md:w-fit w-full rounded-full px-6 py-3 border-[1px] border-[#8F9D91] cursor-pointer shadow-lg bg-[#DADADA] bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <div className="md:hidden flex items-center space-x-4">
          <Image src="/icons/Ecell_logo.png" alt="Ecell Logo" width={50} height={50} />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`px-4 py-2 rounded-full ${isActive("/") ? "bg-white text-black" : "text-white"}`}>
            Home
          </Link>
          {/* <Link href="/teams" className={`px-4 py-2 rounded-full ${isActive("/teams") ? "bg-white text-black" : "text-white"}`}>
            Teams
          </Link> */}
          <Link href="/about" className={`px-4 py-2 rounded-full ${isActive("/about") ? "bg-white text-black" : "text-white"}`}>
            About
          </Link>
          <Link href="/contact" className={`px-4 py-2 rounded-full ${isActive("/contact") ? "bg-white text-black" : "text-white"}`}>
            Contact
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe30F-Ua4EtQTPG2QmXiF-yAjcUwrOR__eR5JHkYTRpP_RRSQ/alreadyresponded"
            target="_blank"
            rel="noopener noreferrer"
          > 
            <button className="ml-4 px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black">
              Register Now
            </button>
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full mt-2 cursor-pointer shadow-lg bg-[#1C371E] bg-opacity-75 backdrop-filter backdrop-blur-lg border-[1px] border-[#8F9D91] rounded-lg py-2 px-4 z-50">
            <ul className="flex flex-col space-y-2 text-white">
              <li className={`block w-full px-4 py-2 hover:bg-gray-700 rounded ${isActive("/") ? "bg-white text-black" : ""}`}>
                <Link href="/">
                  Home
                </Link>
              </li>
              {/* <li className={`block w-full px-4 py-2 hover:bg-gray-700 rounded ${isActive("/teams") ? "bg-white text-black" : ""}`}>
                <Link href="/teams">
                  Teams
                </Link>
              </li> */}
              <li className={`block w-full px-4 py-2 hover:bg-gray-700 rounded ${isActive("/about") ? "bg-white text-black" : ""}`}>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li className={`block w-full px-4 py-2 hover:bg-gray-700 rounded ${isActive("/contact") ? "bg-white text-black" : ""}`}>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
              <li className="block w-full px-4 py-2 hover:bg-gray-700 rounded">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe30F-Ua4EtQTPG2QmXiF-yAjcUwrOR__eR5JHkYTRpP_RRSQ/alreadyresponde"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black">
                    Register Now
                  </button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
