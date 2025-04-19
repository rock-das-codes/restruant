'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCart } from '../context/CartContext';

const deliveryServices = [
  {
    name: "DoorDash",
    logo: "/images/doordash-logo.png", // This is a placeholder, we'll use icon instead
    link: "https://www.doordash.com"
  },
  {
    name: "UberEats",
    logo: "/images/ubereats-logo.png", // This is a placeholder, we'll use icon instead
    link: "https://www.ubereats.com"
  },
  {
    name: "GrubHub",
    logo: "/images/grubhub-logo.png", // This is a placeholder, we'll use icon instead
    link: "https://www.grubhub.com"
  },
  {
    name: "Direct Pickup",
    logo: "/images/pickup-logo.png", // This is a placeholder, we'll use icon instead
    link: "#"
  }
];

export default function OrderPage() {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();
 console.log(cart);
  // If cart is empty, show different UI
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold text-[#8B0000] mb-6">Your Cart</h1>
          <p className="text-gray-700 mb-8">Your cart is empty. Add some delicious Mexican dishes!</p>
          <Link href="/menu">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-[#8B0000] font-bold px-6 py-3 rounded">
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-[#8B0000] mb-12 text-center">Your Order</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-[#8B0000] mb-6">Cart Items ({totalItems})</h2>
              
              {cart.map((item) => (
                <div key={item.id} className="flex items-center py-4 border-b border-gray-200">
                  <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center">
                    <Image 
                      src={item.image}
                      alt={item.name} 
                      width={100} 
                      height={100} 
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                  
                  <div className="flex-1 ml-4">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-[#8B0000] font-semibold">{item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
              
              <div className="mt-6 flex justify-between">
                <span className="font-bold">Total:</span>
                <span className="font-bold text-[#8B0000]">{totalPrice}</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-[#8B0000] mb-6">Order Options</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">Choose a delivery service or pickup option:</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {deliveryServices.map((service, index) => (
                    <a 
                      key={index}
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-full flex items-center justify-center">
                        {service.name === "DoorDash" && (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF3008">
                            <path d="M23.071 8.409a6.09 6.09 0 0 0-5.396-3.228H.584A.589.589 0 0 0 .089 6.038L3.792 17.88a.585.585 0 0 0 .55.391h3.626c3.596 0 6.729-2.432 7.641-5.915l.66-2.493a.584.584 0 0 1 .56-.437h4.982c.323 0 .584-.261.584-.584v-.433zM3.102 8.409l-.437 1.831a.584.584 0 0 0 .568.716h4.005c.323 0 .584.262.584.584a.584.584 0 0 1-.584.584H2.08a.584.584 0 0 0-.568.717l.437 1.831a.584.584 0 0 0 .568.452h4.729c.322 0 .584.261.584.584a.584.584 0 0 1-.584.584H2.773a.584.584 0 0 0-.568.717l.437 1.831a.584.584 0 0 0 .568.452h2.08c.984 0 1.832-.71 1.996-1.683l.033-.182c.14-.89.635-1.68 1.345-2.274a4.545 4.545 0 0 1 2.7-.996h2.724a.584.584 0 0 0 .568-.717l-.437-1.831a.584.584 0 0 0-.568-.452h-3.447a.584.584 0 0 1-.568-.716l.437-1.832a.584.584 0 0 0-.568-.717H3.67a.584.584 0 0 0-.568.717z" />
                          </svg>
                        )}
                        {service.name === "UberEats" && (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000000">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-2 5v10h4v-10h-4zm-4 3v7h3v-7H6zm8 0v7h3v-7h-3z" />
                          </svg>
                        )}
                        {service.name === "GrubHub" && (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#F63440">
                            <path d="M21.577 11.861c0 .984-.204 1.932-.605 2.845a7.32 7.32 0 0 1-1.75 2.4 7.45 7.45 0 0 1-2.443 1.698 7.772 7.772 0 0 1-2.943.593c-1.553 0-2.94-.483-4.158-1.45l.683-1.95c1.002.865 2.056 1.3 3.161 1.3 1.337 0 2.454-.494 3.353-1.48.9-.989 1.348-2.214 1.348-3.675 0-1.473-.465-2.702-1.394-3.686-.93-.984-2.08-1.475-3.45-1.475-1.35 0-2.49.494-3.425 1.48-.934.988-1.4 2.214-1.4 3.68 0 .741.122 1.432.368 2.072l-4.158.445-1.013-9.26 12.777.01-.227 2.33h-8.848l.303 2.652c.757-.74 1.694-1.11 2.808-1.11 1.794 0 3.29.593 4.483 1.78 1.193 1.184 1.79 2.67 1.79 4.455zm-15.961 4.143 2.183-.227c.124.325.29.59.498.796.209.206.467.315.775.325.287.01.523-.063.704-.217a.717.717 0 0 0 .304-.536c.021-.216-.053-.4-.22-.552-.167-.151-.525-.31-1.075-.477-.79-.237-1.382-.51-1.773-.82-.583-.457-.885-1.036-.908-1.735-.02-.688.192-1.27.628-1.744.437-.475 1.058-.717 1.864-.728.855-.01 1.525.22 2.007.687.483.467.771 1.036.866 1.703l-2.128.237a1.306 1.306 0 0 0-.422-.7c-.194-.184-.435-.271-.725-.26-.205.009-.365.063-.48.163a.464.464 0 0 0-.187.358c-.01.227.095.4.314.513.219.114.725.268 1.52.466.794.196 1.375.479 1.741.847.366.368.54.836.52 1.404a2.434 2.434 0 0 1-.682 1.698c-.446.489-1.097.739-1.953.75-.946.01-1.7-.226-2.261-.714-.562-.488-.892-1.11-.99-1.867z" />
                          </svg>
                        )}
                        {service.name === "Direct Pickup" && (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#8B0000">
                            <path d="M18.31 4.689C17.464 3.846 16.314 3 15 3H9c-1.313 0-2.464.846-3.31 1.689-1.261 1.259-1.688 2.076-1.689 3.75 0 .704.311 1.335.797 1.76v6.543C4.798 17.586 6.258 19 8.102 19h7.796c1.844 0 3.305-1.414 3.305-3.258v-6.544c.486-.425.797-1.056.797-1.76-.001-1.673-.428-2.491-1.69-3.75zM8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 0c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm font-medium">{service.name}</span>
                    </a>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Order Details:</h3>
                  <p className="text-sm text-gray-600 mb-1">Items: {totalItems}</p>
                  <p className="text-sm text-gray-600 mb-1">Subtotal: {totalPrice}</p>
                  <p className="text-sm text-gray-600 mb-4">Delivery Fee: Varies by service</p>
                  
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-[#8B0000] font-bold py-3 rounded">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
