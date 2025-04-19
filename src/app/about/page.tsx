import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import pic from "@/../public/images/470174444_584367617577141_7573296372560812904_n.jpg"
import men from "@/../public/images/man1.jpg"
import wommen1 from "@/../public/images/women1.jpg"
import women2 from "@/../public/images/women2.jpg"
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#8B0000] text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About La Gran Fiesta</h1>
            <p className="text-xl text-gray-200">Experience authentic Mexican cuisine with a rich heritage of flavor and tradition.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#8B0000] mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                La Gran Fiesta is more than just a restaurant; it's a celebration of Mexican culture and cuisine. Founded in 1985 by the Hernandez family, our restaurant has been serving authentic Mexican dishes for nearly four decades.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began with a simple dream: to share our family's culinary traditions with the community. What started as a small taqueria has grown into a beloved dining destination, but our commitment to authenticity and quality has never wavered.
              </p>
              <p className="text-gray-700">
                We are committed to using the freshest ingredients and traditional recipes to bring you the true taste of Mexico. Every dish tells a story of our heritage and passion for food.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src={pic}
                alt="La Gran Fiesta Restaurant Interior" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#8B0000] mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-8">
              Our mission is to provide a warm and welcoming atmosphere where families and friends can come together to enjoy delicious food and create lasting memories. We believe in supporting our local community and sourcing our ingredients from local farmers whenever possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8B0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Authentic Recipes</h3>
                <p className="text-gray-600 text-center">Traditional family recipes passed down through generations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8B0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Quality Ingredients</h3>
                <p className="text-gray-600 text-center">We source the freshest local ingredients for our dishes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8B0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Family Experience</h3>
                <p className="text-gray-600 text-center">Creating memorable dining experiences for all ages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={men}
                  alt="Executive Chef"
                  
                  className=""
                />
              </div>
              <h3 className="text-xl font-bold">Miguel Hernandez</h3>
              <p className="text-[#8B0000]">Executive Chef</p>
              <p className="mt-4 text-gray-600">With over 30 years of culinary experience, Miguel leads our kitchen with passion and expertise.</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={wommen1}
                  alt="Owner"
                
                  className=""
                />
              </div>
              <h3 className="text-xl font-bold">Maria Hernandez</h3>
              <p className="text-[#8B0000]">Owner</p>
              <p className="mt-4 text-gray-600">The heart of La Gran Fiesta, Maria ensures every guest feels like part of the family.</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={women2}
                  alt="Manager"
                  
                  className=""
                />
              </div>
              <h3 className="text-xl font-bold">Carlos Hernandez</h3>
              <p className="text-[#8B0000]">Manager</p>
              <p className="mt-4 text-gray-600">Carlos oversees daily operations, ensuring a seamless dining experience for all our guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#8B0000]">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to experience authentic Mexican cuisine?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">Join us for lunch or dinner and discover why La Gran Fiesta has been a local favorite for decades.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#8B0000] font-bold px-8 py-3 rounded">
              View Menu
            </Button>
            <Button variant="outline" className="border-2 border-white hover:bg-white text-white hover:text-[#8B0000] font-bold px-8 py-3 rounded">
              Make a Reservation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
