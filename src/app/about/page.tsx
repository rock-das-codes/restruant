import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-red-900 mb-8">About La Gran Fiesta</h1>
      <div className="prose max-w-none">
        <p>
          La Gran Fiesta is more than just a restaurant; it's a celebration of Mexican culture and cuisine. Founded in 1985 by the Hernandez family, our restaurant has been serving authentic Mexican dishes for nearly four decades. We are committed to using the freshest ingredients and traditional recipes to bring you the true taste of Mexico.
        </p>
        <p>
          Our mission is to provide a warm and welcoming atmosphere where families and friends can come together to enjoy delicious food and create lasting memories. We believe in supporting our local community and sourcing our ingredients from local farmers whenever possible.
        </p>
        <p>
          From our famous enchiladas to our mouth-watering tacos, every dish is made with love and care. We also offer a wide variety of vegetarian and gluten-free options to accommodate all dietary needs.
        </p>
        <h2 className="text-2xl font-bold text-red-900 mt-6">Our Team</h2>
        <p>
          Our team is made up of passionate individuals who are dedicated to providing exceptional service. From our experienced chefs to our friendly wait staff, we all share a common goal: to make your dining experience unforgettable.
        </p>
        <h2 className="text-2xl font-bold text-red-900 mt-6">Visit Us</h2>
        <p>
          We are located at 123 Main St and are open from 10:00 AM to 10:00 PM every day. Come and experience the fiesta for yourself!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
