import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const BookingPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the booking submission logic here
    console.log(`Booking Details: Date: ${date}, Time: ${time}, Guests: ${guests}`);
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Book A Table</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>
          <Button type="submit" className="bg-[#8B0000] hover:bg-red-900 text-white font-bold px-6 py-3 rounded">
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;