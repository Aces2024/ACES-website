import React from "react";
import Lottie from "lottie-react";
import girl from "../../assets/font/stand.json";
import girl1 from "../../assets/font/robot.json";
import ProjectCard from "./ProjectCard";
import { projects } from "./project.js";

const Pro = () => {
  const lottieContainerStyle = {
    width: "400px",  // Adjust the width
    height: "400px", // Adjust the height
    display: "flex",
    flexDirection: "column", // Display Lotties in a column
    alignItems: "center",
    margin: "10px", // Adjust the vertical margin
  };

  return (
    <>
    <div className="min-h-screen flex flex-col items-center p-8 pic-bg scroll-smooth">
      {/* <p
        className="rog text-8xl font-extrabold mb-4 text-white"
        data-aos="zoom-out"
        data-aos-delay="300"
      >
        Project
      </p>
      <div
        className="lottie-container"
        data-aos="zoom-in-down"
        data-aos-delay="400"
        style={lottieContainerStyle}
      >
        <Lottie animationData={girl1} />
        {/* <div style={{ marginTop: "-70px" }}>
          {/* <Lottie animationData={girl} /> 
        </div> 
        
      </div> */}
      <ProjectCard projects={projects} />
    </div>
    </>
  );
};

export default Pro;