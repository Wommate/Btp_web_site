import React from 'react';

function PartnerCard({ name, logo, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={logo} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
export default PartnerCard