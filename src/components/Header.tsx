'use client';
import Link from 'next/link';
import { Menu, X } from "lucide-react"; // Import menu icons
import React, { useState } from "react";


export default function Header({ title }: { title: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu state
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false); // Language dropdown state
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };
  return (

    <header className="font-mono text-white p-4 fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 to-blue-800 shadow-md flex justify-between items-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <nav className="hidden md:flex space-x-7">
    
        <Link href="/" className="text-lg text-white hover:text-black transition duration-300 ease-in-out">Home</Link>

        {/* Language Dropdown */}
        <div className="relative">
          <button onClick={toggleLanguageDropdown}className="text-lg text-white hover:text-black transition duration-300 ease-in-out">Language</button>
          {isLanguageDropdownOpen && (
            <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-lg">
              <Link href="/cpp" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">C++</Link>
              <Link href="/python" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Python</Link>
            </div>
          )}
        </div>

      <Link href="/login" className="text-lg text-white hover:text-black transition duration-300 ease-in-out">Login</Link>
    
  </nav>
  <button className="md:hidden focus:outline-none hover:text-black transition duration-300 ease-in-out" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
  {isMenuOpen && (
    <nav className=" md:hidden ml-4 text-center space-y-4 py-4">
    <ul className="list-none text-lg">
      <li>
        <Link className='hover:text-black hover:font-bold' href="/">Home</Link>
      </li>
      <li>
        <Link className='hover:text-black hover:font-bold' href="/cpp">C++</Link>
      </li>
      <li>
        <Link className='hover:text-black hover:font-bold' href="/python">Python</Link>
      </li>
      <li>
        <Link className='hover:text-black hover:font-bold' href="/login">Login</Link>
      </li>
    </ul>
    </nav>
  )}
</header>

  );
};

        
      