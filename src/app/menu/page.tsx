import React from 'react';

const MenuPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-red-900 mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold text-red-700">Enchiladas</h2>
          <p className="text-gray-700">Delicious enchiladas with your choice of filling.</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold text-red-700">Tacos</h2>
          <p className="text-gray-700">Authentic tacos with various toppings.</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold text-red-700">Burritos</h2>
          <p className="text-gray-700">Large burritos filled with flavorful ingredients.</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
