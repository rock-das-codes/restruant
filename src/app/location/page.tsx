'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const LocationPage = () => {
  // Restaurant details
  const address = "1218 University Blvd, Tuscaloosa, AL 35401";
  const phone = "(205) 345-1199";
  const hours = [
    { day: "Monday - Thursday", time: "10:30 AM - 9:30 PM" },
    { day: "Friday - Saturday", time: "10:30 AM - 10:30 PM" },
    { day: "Sunday", time: "11:00 AM - 9:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#8B0000] text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Find Us</h1>
            <p className="text-xl text-gray-200">Visit La Gran Fiesta for an authentic Mexican dining experience</p>
          </div>
        </div>
      </section>

      {/* Map and Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.6774963806365!2d-87.55556962392993!3d33.11678237378663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888601c38a36d9ed%3A0x5ee13d9a6bb24662!2sLa%20Gran%20Fiesta%20Mexican%20Restaurant!5e0!3m2!1sen!2sus!4v1718540941913!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
                className="rounded-lg"
              ></iframe>
            </div>
            
            {/* Information */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#8B0000] mb-8">Visit Our Restaurant</h2>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8B0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p className="text-gray-700">{address}</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8B0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">{phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8B0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Hours</h3>
                    <div className="text-gray-700">
                      {hours.map((item, index) => (
                        <div key={index} className="flex justify-between mb-1">
                          <span className="mr-4 font-medium">{item.day}:</span>
                          <span>{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#8B0000] font-bold px-6 py-3 rounded">
                  Get Directions
                </Button>
                <Button className="bg-[#8B0000] hover:bg-red-900 text-white font-bold px-6 py-3 rounded">
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Do you offer parking?</h3>
              <p className="text-gray-700">Yes, we have a dedicated parking lot available for our customers. The parking is free for all our guests.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Do you take reservations?</h3>
              <p className="text-gray-700">Yes, we accept reservations for parties of all sizes. We recommend making a reservation for groups of 6 or more, especially during peak hours.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Is outdoor seating available?</h3>
              <p className="text-gray-700">Yes, we have a lovely patio area for outdoor dining, weather permitting. Just let us know your preference when you arrive or make a reservation.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Do you offer catering services?</h3>
              <p className="text-gray-700">Yes, we offer catering for events of all sizes. Please contact us at least 48 hours in advance to discuss your catering needs and to place an order.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#8B0000] mb-8 text-center">Contact Us</h2>
            <p className="text-gray-700 text-center mb-12">Have a question or want to make a reservation? Send us a message and we'll get back to you as soon as possible.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000]" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000]"></textarea>
              </div>
              <div className="text-center">
                <Button className="bg-[#8B0000] hover:bg-red-900 text-white font-bold px-8 py-3 rounded">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage; 