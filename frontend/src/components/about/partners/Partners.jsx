import React from 'react';
import PartnerCard from './PartnerCard';
import { partners } from './partnersData';

function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Nos Partenaires
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard
              key={index}
              name={partner.name}
              logo={partner.logo}
              description={partner.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Partners