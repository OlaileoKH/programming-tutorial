'use client';
import Link from 'next/link';
import { Menu, X } from "lucide-react"; // Import menu icons
import React, { useState } from "react";
export default function Header({ title }: { title: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu state
  return (
    <header className=" font-mono text-white p-4 fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 to-blue-800 shadow-md flex justify-between items-center">
  <h1 className="text-3xl font-bold">{title}</h1>
  <nav className="hidden md:flex space-x-7">
    
      <Link href="/" className="text-white hover:text-black transition duration-300 ease-in-out">Home</Link>
      <Link href="/cpp" className="text-white hover:text-black transition duration-300 ease-in-out">C++</Link>
      <Link href="/python" className="text-white hover:text-black transition duration-300 ease-in-out">Python</Link>
    
  </nav>
  <button className="md:hidden focus:outline-none hover:text-black transition duration-300 ease-in-out" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
  {isMenuOpen && (
    <nav className="md:hidden ml-6 text-center space-y-4 py-4">
        <Link href="/" >Home</Link>
        <Link href="/cpp" >C++</Link>
        <Link href="/python" >Python</Link>
    </nav>
  )}
</header>

  );
};

        
      