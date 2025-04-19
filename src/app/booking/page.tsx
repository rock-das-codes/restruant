'use client';

import React, { useState } from 'react';

interface Table {
  id: number;
  shape: 'circle' | 'rectangle';
  timeSlot: string;
  reserved: boolean;
}

export default function BookingPage() {
  const [selectedTables, setSelectedTables] = useState<number[]>([]);
  const [reservations, setReservations] = useState<{ id: number; time: string; guests: number }[]>([]);

  const tables: Table[] = [
    { id: 1, shape: 'circle', timeSlot: '11:00 - 12:00', reserved: false },
    { id: 2, shape: 'circle', timeSlot: '11:00 - 12:00', reserved: false },
    { id: 3, shape: 'rectangle', timeSlot: '12:00 - 13:00', reserved: true },
    { id: 4, shape: 'circle', timeSlot: '12:00 - 13:00', reserved: false },
    { id: 5, shape: 'rectangle', timeSlot: '13:00 - 14:00', reserved: false },
    { id: 6, shape: 'circle', timeSlot: '13:00 - 14:00', reserved: true },
    { id: 7, shape: 'circle', timeSlot: '14:00 - 15:00', reserved: false },
    { id: 8, shape: 'rectangle', timeSlot: '14:00 - 15:00', reserved: false },
    { id: 9, shape: 'circle', timeSlot: '15:00 - 16:00', reserved: false },
    { id: 10, shape: 'circle', timeSlot: '15:00 - 16:00', reserved: true },
    { id: 11, shape: 'rectangle', timeSlot: '16:00 - 17:00', reserved: false },
    { id: 12, shape: 'circle', timeSlot: '16:00 - 17:00', reserved: false },
  ];

  const toggleTableSelection = (tableId: number) => {
    if (selectedTables.includes(tableId)) {
      setSelectedTables(selectedTables.filter((id) => id !== tableId));
    } else {
      setSelectedTables([...selectedTables, tableId]);
    }
  };

  const confirmBooking = () => {
    if (selectedTables.length === 0) {
      alert('Please select at least one table to book.');
      return;
    }
    const newReservations = selectedTables.map((id) => {
      const table = tables.find((t) => t.id === id);
      return { id, time: table?.timeSlot || '', guests: Math.floor(Math.random() * 5) + 1 };
    });
    setReservations([...reservations, ...newReservations]);
    setSelectedTables([]);
    alert('Booking confirmed!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto flex gap-8">
        {/* Table Layout */}
        <div className="flex-1 border-4 border-[#8B0000] rounded-lg p-8 bg-white relative">
          <h2 className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-4 text-[#8B0000] font-bold">
            La Gran Fiesta Restaurant
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {tables.map((table) => (
              <div
                key={table.id}
                onClick={() => !table.reserved && toggleTableSelection(table.id)}
                className={`${
                  table.shape === 'circle' ? 'rounded-full' : 'rounded-lg'
                } w-24 h-24 flex items-center justify-center cursor-pointer text-white font-bold relative ${
                  table.reserved
                    ? 'bg-gray-400 cursor-not-allowed'
                    : selectedTables.includes(table.id)
                    ? 'bg-green-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              >
                Table {table.id}
                <span className="absolute -bottom-6 text-xs text-gray-600">
                  {table.reserved ? 'Reserved' : table.timeSlot}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reservation Details */}
        <div className="w-1/3 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#8B0000] mb-4">Reservations</h2>
          <div className="space-y-4">
            {reservations.length > 0 ? (
              reservations.map((res) => (
                <div key={res.id} className="flex justify-between items-center border-b pb-2">
                  <span>Table {res.id}</span>
                  <span>{res.time}</span>
                  <span>{res.guests} Guests</span>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No reservations yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 text-center">
        <button
          onClick={confirmBooking}
          className="bg-[#8B0000] hover:bg-red-700 text-white font-bold px-8 py-3 rounded"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}