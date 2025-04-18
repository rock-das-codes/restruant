'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItems } = useCart();
  
  return (
    <nav className="bg-[#8B0000] py-6 px-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">La Gran Fiesta</Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-yellow-200">Home</Link>
          <Link href="/menu" className="hover:text-yellow-200">Menu</Link>
          <Link href="/about" className="hover:text-yellow-200">About Us</Link>
          <Link href="/location" className="hover:text-yellow-200">Location</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </button>
          <Link href="/order">
            <button className="text-white relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#8B0000] text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems || 0}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
} 