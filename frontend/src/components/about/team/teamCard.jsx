import React from 'react'

function TeamCard({ name, role, image }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-48 h-48 object-cover rounded-lg mb-4 shadow-lg"
        data-aos="fade-up"
        data-aos-duration="2500"
      />
      <h3 className="text-xl font-bold" data-aos="zoom-in" data-aos-duration="3000">{name}</h3>
      <p data-aos="zoom-in" data-aos-duration="3000">{role}</p>
    </div>
  )
}

export default TeamCard