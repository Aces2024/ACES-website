import React from "react";
import githubIcon from "../../assets/pwa/githubicon.png";
import Tilt from 'react-parallax-tilt';
// import { projects } from "./project.js";

const ProjectCard = ({projects}) => {
  return (
    <div className="max-w-7xl mx-auto mt-8 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      
      {projects.map((project, index) => (
        <Tilt glareEnable={false} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
       <div
          key={index}
          className="group projectcard-bg shadow-lg border-gray-100 border sm:rounded-3xl p-4 flex flex-col hover:translate-y-0 transition-transform duration-300 relative w-80"
        >
          <div className="orbit font-bold text-lg text-white mb-2">
            {project.name}
          </div>
          <div className="flex group h-56 overflow-hidden mb-4 transform-gpu hover:scale-95 transition-transform ease-in-out duration-[350ms]">
            {/* Adjust width and height as needed */}
            <img
              className="rounded-3xl shadow-lg w-full h-full object-cover"
              src={project.image}
              alt={project.name}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-sm text-white">{project.category}</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {project.name}
            </h2>
            <p className="text-gray-400 max-h-20 overflow-y-hidden font-serif">
              {project.description}
            </p>
            <div className="flex items-center">
              <img
                className="w-6 h-6 transform-gpu hover:scale-125 transition-transform ease-in-out duration-[350ms] filter invert hover:brightness-200"
                src={githubIcon}
                alt="GitHub Icon"
              />
            </div>
          </div>
        </div>
        </Tilt>
      ))}
 
    </div>
    
  );
};

export default ProjectCard;