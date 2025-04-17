import React from 'react';
import Link from 'next/link';

import {RestaurantInfo} from "@/components/restaurant-info";
import {ImageGallery} from "@/components/image-gallery";
import {AIDishRecommendation} from "@/components/ai-dish-recommendation";
import {OnlineFoodOrdering} from "@/components/online-food-ordering";
import {ExternalLinks} from "@/components/external-links";
import {Accessibility} from "@/components/accessibility";
import {ServiceOptions} from "@/components/service-options";
import {Highlights} from "@/components/highlights";
import {PopularFor} from "@/components/popular-for";
import {Offerings} from "@/components/offerings";
import {DiningOptions} from "@/components/dining-options";
import {Amenities} from "@/components/amenities";
import {Atmosphere} from "@/components/atmosphere";
import {Crowd} from "@/components/crowd";
import {Payments} from "@/components/payments";
import {Children} from "@/components/children";
import {Parking} from "@/components/parking";


const restaurantDetails = {
  name: "La Gran Fiesta Mexican Restaurant",
  address: "123 Main St",
  phone: "555-123-4567",
  hours: "10:00 AM - 10:00 PM"
};

const images = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300"
];

const externalLinks = {
  googleMaps: "https://www.google.com/maps",
  deliveryApp: "https://www.doordash.com"
};

const aiEndpoint = "/api/ai/recommendDish";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-red-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">La Gran Fiesta</Link>
          <div className="space-x-4">
            <Link href="/about" className="hover:text-yellow-200">About</Link>
            <Link href="/menu" className="hover:text-yellow-200">Menu</Link>
            <Link href="/order" className="hover:text-yellow-200">Order Online</Link>
          </div>
        </div>
      </nav>

      <header className="bg-yellow-500 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-900">Welcome to La Gran Fiesta!</h1>
          <p className="text-xl text-red-900 mt-4">Authentic Mexican Cuisine</p>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <RestaurantInfo restaurant={restaurantDetails} />
        <ImageGallery images={images} />
        <AIDishRecommendation aiEndpoint={aiEndpoint} />
        <OnlineFoodOrdering />
        <ExternalLinks links={externalLinks} />
        <Accessibility />
        <ServiceOptions />
        <Highlights />
        <PopularFor />
        <Offerings />
        <DiningOptions />
        <Amenities />
        <Atmosphere />
        <Crowd />
        <Payments />
        <Children />
        <Parking />
      </div>

      <footer className="bg-red-500 text-white text-center p-4">
        <p>&copy; 2024 La Gran Fiesta. All rights reserved.</p>
      </footer>
    </div>
  );
}
