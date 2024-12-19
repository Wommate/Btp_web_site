import React from 'react'

function TeamCard({ name, role, image }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-48 h-48 object-cover rounded-full mb-4 shadow-lg"
      />
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}

export default TeamCard