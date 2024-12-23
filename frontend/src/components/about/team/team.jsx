import React from "react";
import TeamCard from "./teamCard";
import { teamMembers } from "./teamData";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Team() {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-down">
          Notre Équipe Dirigeante
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
