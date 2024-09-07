import React from 'react';

const MuseumCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img 
        className="w-full h-48 object-cover" 
        src={imageUrl} 
        alt={title} 
      />
      <div className="p-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MuseumCard;
