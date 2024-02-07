// Cans.js
import React from "react";
import lataChitaImage from "../../assets/img/lata-chita.webp";
import lataFitasImage from "../../assets/img/lata-fitas.webp";
import lataPenasImage from "../../assets/img/lata-penas.webp";
import lataBordadoImage from "../../assets/img/lata-bordado.webp";
import bordadosImage from "../../assets/img/Bordados.webp";
import chitaImage from "../../assets/img/Chita.webp";
import fitasImage from "../../assets/img/Fitas.webp";
import penasImage from "../../assets/img/Penas.webp";
import "../../App.css";
import { Link } from "react-router-dom";

const AdditionalImages = {
  0: bordadosImage,
  1: chitaImage,
  2: fitasImage,
  3: penasImage,
};

const Cans = ({ images, hoveredIndex, handleMouseOver, handleMouseOut }) => {
  const grayscaleStyle = {
    filter: "grayscale(100%)",
    transition: "filter 0.3s ease-in-out, transform 0.3s ease-in-out",
  };

  const removeGrayscale = {
    filter: "none",
    transition: "filter 0.1s ease-in-out, transform 0.3s ease-in-out",
  };

  const translateYStyle = {
    transform: "translateY(15%)",
    brightness: 1,
  };

  return (
    <div className="flex justify-around w-full gap-3 mb-0 flex-grow relative mt-40">
      {images.map((image, index) => (
        
        <div
          key={index}
          className="relative"
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
          data-aos="fade-up" // Apply zoom-out animation to the image
          data-aos-delay="4000"
        >
          <div
            className="absolute top-0 left-0 w-full h-full opacity-0.9 transition-opacity duration-300 custom-bg z-0"
            style={{
              opacity: hoveredIndex === index ? 0.8 : 0,
              top: hoveredIndex === index ? "-600px" : 0,
              height: hoveredIndex === index ? "1000px" : "500px",
              transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
            }}
            
          >
            {hoveredIndex === index && (
              <img
                src={AdditionalImages[index]}
                alt={`Additional Image ${index}`}
                className="absolute top-[40%] left-0 w-[380px] h-[320px] object-cover flex-shrink-0"
              />
            )}
            <div
              className={`rog text-white absolute left-1/2 transform -translate-x-1/2 text-[35px] font-extrabold top-[15%]`}
              style={{
                color: "#fff",
                zIndex: 2,
                opacity:hoveredIndex || hoveredIndex === 0 ? "1":"0", // Ensure the label is above the background
              }}
            >
              {image.label}
            </div>
          </div>
          <div
                className={"text-white absolute left-1/2 transform -translate-x-1/2 text-[50px] font-extrabold top-1/2"}
                style={{
                  color: "#fff",
                  opacity: hoveredIndex===index || (hoveredIndex === 0 && hoveredIndex===index)  ?"0":"0.5",
                  zIndex: 2, // Ensure the label is above the background
                  transform: "rotate(-90deg)", // Rotate the text by default
                  transformOrigin: "bottom left",
                  whiteSpace: "nowrap", // Prevent text from wrapping
                  top : "-100px",
                  height: "100px",
                  transition: hoveredIndex? "opacity 0.3 ease-in-out" : {},
                }}
              >
                {image.name}
              </div>
            <Link to={'/' + image.label}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              ...grayscaleStyle,
              ...(hoveredIndex === index ? removeGrayscale : {}),
              ...(hoveredIndex === index ? { ...translateYStyle, filter: "brightness(1.5)" } : {}),
              zIndex: 3, // Ensure the image is above both background and label
            }}
            className={`w-[380px] h-[320px] object-cover flex-shrink-0 ${hoveredIndex ? {} : "opacity-70"}`}
            
          />
          </Link> 
        </div>
      ))}
    </div>
  );
};

export default Cans;