// Pic.js
import React, { useState } from "react";
import acesImage from "../../assets/img/aces.jpeg"; // Adjust the path based on your project structure

const Pic = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 pic-bg relative scroll-smooth pb-[10.25rem]">
      {/* {Gradient overlay
      <div
        className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 mix-blend-multiply"
        style={{
          zIndex: 1,
        }}
      ></div>} */}

      <p className="rog text-6xl font-extrabold mb-4 text-white "
      data-aos="zoom-out" // Apply zoom-out animation to the image
          data-aos-delay="300">TEAMS</p>
      <div className="inline-flex items-start justify-center items-center">
        <div
          className="relative ml-[15rem] transition-transform"
          data-aos="zoom-out" // Apply zoom-out animation to the image
          data-aos-delay="300"
        >
          <div className="w-[80%] absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 rounded-lg blur-lg"></div>
          <img
            src={acesImage}
            alt="ACES Logo"
            className={`mb-4 w-[80%] h-1/2 max-h-[80%] rounded-lg relative z-10 transform-gpu hover:scale-95 transition-transform ease-in-out duration-[350ms] hover:grayscale-0 grayscale transition-filter ease-in duration-600`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>
      {/* <div
        className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 mix-blend-overlay"
        style={{
          zIndex: 1,
        }}
      ></div> */}
    </div>
  );
};

export default Pic;