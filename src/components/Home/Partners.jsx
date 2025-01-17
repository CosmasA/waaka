// import React from "react";
import MTNUganda from "../../assets/images/mtn-logo.jpg";
import MinistryOfWorks from "../../assets/images/worksandTransport.jpeg";
import StandardChartered from "../../assets/images/standard.webp";

const Partners = () => {
  const partners = [
    { name: "Standard Chartered", logo: StandardChartered },
    { name: "MTN Uganda", logo: MTNUganda },
    { name: "Ministry Of Works", logo: MinistryOfWorks },
    { name: "Standard Chartered", logo: StandardChartered },
    { name: "MTN Uganda", logo: MTNUganda },
    { name: "Ministry Of Works", logo: MinistryOfWorks },
  ];

  return (
    <section className="partners-section">
      <h2 className="text-center mb-4">Our Partners</h2>
      <div className="scroll-container">
        <div className="scroll-track">
          {partners.map((partner, index) => (
            <div key={index} className="scroll-item">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
