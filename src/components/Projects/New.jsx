import React from "react";
import Lottie from "lottie-react";
import girl from "../../assets/font/stand.json";
import girl1 from "../../assets/font/robot.json";
import { projects } from "./project.js";
import ProjectCard from "./ProjectCard.jsx";
import Test from "./Test.jsx";
import Pro from "./Pro.jsx";

const New = () => {
  const lottieContainerStyle = {
    width: "400px", // Adjust the width
    height: "400px", // Adjust the height
    display: "flex",
    flexDirection: "column", // Display Lotties in a column
    alignItems: "center",
    margin: "10px", // Adjust the vertical margin
  };

  return (
    <div className="min-h-screen bg-[#151414] flex flex-col items-center p-5 pic-bg scroll-smooth">
      <p
        className="rog text-8xl font-extrabold mb-4 text-white"
        data-aos="zoom-out"
        data-aos-delay="300"
      >
        Project
      </p>
      <Pro />
    </div>
  );
};

export default New;