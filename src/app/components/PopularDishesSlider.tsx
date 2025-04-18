'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '../context/CartContext';

// Define the menu item type
interface MenuItem {
  name: string;
  price: string;
  image: string;
  description: string;
}

interface MenuData {
  items: MenuItem[];
}

// Import with type assertion
import menuDataImport from '../../../public/data/menu.json';
const menuData = (menuDataImport as MenuData).items;

// Get the most popular dishes (first 6 items for demo purposes)
const popularDishes = menuData.slice(0, 6);

export default function PopularDishesSlider() {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: parseInt(item.name.replace('SP#', '')) || Math.floor(Math.random() * 1000),
      name: item.name,
      price: item.price,
    });
  };
  
  const nextSlide = () => {
    if (currentIndex < popularDishes.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the beginning
    }
  };
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(popularDishes.length - 3); // Loop to the end
    }
  };
  
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }
  }, [currentIndex]);
  
  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold"><span className="text-[#8B0000]">Popular</span> Dishes</h2>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide} 
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            onClick={nextSlide} 
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ 
            width: `${popularDishes.length * 33.33}%`,
          }}
        >
          {popularDishes.map((dish, index) => (
            <div key={index} className="w-full md:w-1/3 px-4">
              <Card className="bg-white rounded-xl overflow-hidden shadow-md h-full">
                <div className="relative h-[200px] bg-gray-200">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-3xl text-gray-400">Food Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">{dish.name}</h3>
                    <div className="font-bold text-[#8B0000]">{dish.price}</div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dish.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-600">Add to Cart</span>
                    <Button 
                      onClick={() => handleAddToCart(dish)} 
                      className="bg-yellow-500 hover:bg-yellow-600 text-[#8B0000] font-bold rounded-full h-10 w-10 flex items-center justify-center"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 