// Team.js
import React, { useState } from "react";
import Cans from "./Cans";
import bannerBg from "../../assets/img/banner-bg.png";
import lataChitaImage from "../../assets/img/lata-chita.webp";
import lataFitasImage from "../../assets/img/lata-fitas.webp";
import lataPenasImage from "../../assets/img/lata-penas.webp";
import lataBordadoImage from "../../assets/img/lata-bordado.webp";

const Team = () => {
  const images = [
    { src: lataFitasImage, alt: "Lata Fitas", label: "technicals", name:"TECHNICAL" },
    { src: lataPenasImage, alt: "Lata Penas", label: "cultural", name:"CULTURAL" },
    { src: lataBordadoImage, alt: "Lata Bordado", label: "PR Design", name:"PR AND DESIGN" },
    { src: lataChitaImage, alt: "Lata Chita", label: "sports", name:"GENERAL" },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      className="flex flex-col items-center justify-between h-screen p-8 bg-gradient-to-r from-black to-gray-700 overflow-hidden mix-blend-difference"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-1">
        <h1
          className="rog font-extrabold leading-tight uppercase text-white pt-3 pb-1 text-[92px] mix-blend-overlay"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="800" // Adjust the duration as needed
          data-aos-easing="ease-in-out" // Use a different easing function if desired
          style={{
           color: hoveredIndex || hoveredIndex === 0 ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 1)",
            transition: hoveredIndex ? "color 0.3s ease-in-out": {},
          }}
        >
           Association
          <br />
           Computer Engineering
          <br />
           Students
        </h1>
      </div>
      <Cans
        images={images}
        hoveredIndex={hoveredIndex}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        
      />
    </div>
  );
};

export default Team;