// filepath: /restruant/restruant/src/app/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import PopularDishesSlider from './components/PopularDishesSlider';

import image1 from "./../../public/images/470174444_584367617577141_7573296372560812904_n.jpg"
import image2 from "./../../public/images/images.jpg"
import image3 from "./../../public/images/unnamed.jpg"
import image5 from "./../../public/images/image5.jpg"
import image6 from "./../../public/images/image6.jpg"
import image7 from "./../../public/images/image7.jpg"
import image4 from "./../../public/images/472433363_17958685028850107_6407977825743000131_n.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[url('/images/mexican-bg.jpg')] bg-cover bg-center bg-[#8B0000] text-white py-16 relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Authentic Mexican Cuisine With A Modern Twist</h1>
            <p className="text-gray-200 mb-8">Experience the vibrant flavors of Mexico at La Gran Fiesta. Our family recipes have been perfected over generations to bring you the most authentic and delicious Mexican dishes.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#8B0000] font-bold px-6 py-3 rounded">Order Online</Button>
              <Button variant="outline" className="border-2 border-white hover:bg-white hover:text-[#8B0000] text-white font-bold px-6 py-3 rounded">
                Book A Table
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src={image2}
              alt="Delicious Mexican food" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why La Gran Fiesta Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8 text-center mb-12">
          <h2 className="text-4xl font-bold">Why <span className="text-[#8B0000]">La Gran Fiesta</span></h2>
        </div>
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white p-8 text-center shadow-sm rounded-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-yellow-50 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8B0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Authentic Recipes</h3>
          </Card>
          <Card className="bg-white p-8 text-center shadow-sm rounded-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-yellow-50 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8B0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
          </Card>
          <Card className="bg-white p-8 text-center shadow-sm rounded-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-yellow-50 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8B0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Premium Quality</h3>
          </Card>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src={image1}
              alt="Restaurant food display" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-[#8B0000] font-medium mb-2">ABOUT US</div>
            <h2 className="text-3xl font-bold mb-6">Experience Authentic Mexican Flavors</h2>
            <p className="text-gray-700 mb-6">At La Gran Fiesta, we bring the vibrant flavors of Mexico to your table. Our chefs use traditional recipes and the freshest ingredients to create an unforgettable dining experience. Whether you're dining in or ordering online, expect the highest quality Mexican cuisine.</p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#8B0000] font-bold px-6 py-3 rounded">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section with Slider */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <PopularDishesSlider />
          <div className="mt-8 text-center">
            <Link href="/menu">
              <Button className="bg-[#8B0000] hover:bg-red-900 text-white font-bold px-8 py-3 rounded">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#8B0000]">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience La Gran Fiesta?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">Join us for a memorable dining experience or order your favorite Mexican dishes for delivery or takeout.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link className="bg-yellow-500 hover:bg-yellow-600 text-[#8B0000] font-bold px-8 py-3 rounded" href={'/menu'}>Order Online</Link>
            <Link className="border-2 border-white text-white font-bold px-8 py-3 rounded" href="/booking">
              Book A Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}