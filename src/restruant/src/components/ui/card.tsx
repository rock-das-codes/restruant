import React from 'react';

interface CardProps {
  title: string;
  content: string;
  image?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, content, image, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;