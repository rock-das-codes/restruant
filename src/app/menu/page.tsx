'use client';

import React from 'react';
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

export default function MenuPage() {
  const { addToCart } = useCart();
  
  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: parseInt(item.name.replace('SP#', '')) || Math.floor(Math.random() * 1000),
      name: item.name,
      price: item.price,
    });
  };
  
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-[#8B0000] mb-12 text-center">Our Menu</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuData.map((item, index) => (
            <Card key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-[200px] bg-gray-200">
                {/* Using a placeholder image since menu.json has invalid image URLs */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-3xl text-gray-400">Food Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">{item.name}</h3>
                  <div className="font-bold text-[#8B0000]">{item.price}</div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Add to Cart</span>
                  <Button 
                    onClick={() => handleAddToCart(item)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-[#8B0000] font-bold rounded-full h-10 w-10 flex items-center justify-center"
                  >
                    +
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
