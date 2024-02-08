// Card.jsx
import React from 'react';
import instagramIcon from "../../assets/pwa/instagram.png";
import githubIcon from "../../assets/pwa/githubicon.png";
import blueTwitterIcon from "../../assets/pwa/bluetwitter.png";
import Tilt from 'react-parallax-tilt';

const Card = ({ people }) => {
  return (
    <div>
      {people.map((person, index) => (
        <div key={index} className="flex items-center justify-center m-6">
        <Tilt glareEnable={false} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
          <div className="flex flex-col items-center w-full max-w-xs p-4 custom-bg rounded-3xl md:flex-row">
          
            <div className="mt-28 md:-my-16 md:-ml-32 transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
             style={{ clipPath: "url(#roundedPolygon)" }}>
              <img
                className="w-auto h-48"
                src={person.image}
                alt={person.name}
              />
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex flex-col items-center md:items-start pl-4">
                <h2 className="orbit text-xl font-bold text-white tracking-widest">{person.name}</h2>
                <p className="text-base font-medium text-gray-400">{person.role}</p>
              </div>
              <div className="flex items-center justify-center space-x-3 md:justify-start pl-5">
                {/* Instagram Icon */}
                <img
                  className="w-6 h-6 transform-gpu hover:scale-125 transition-transform ease-in-out duration-[350ms] filter hover:brightness-150"
                  src={instagramIcon}
                  alt="Instagram Icon"
                />
                
                {/* GitHub Icon */}
                <img
                  className="w-6 h-6 transform-gpu hover:scale-125 transition-transform ease-in-out duration-[350ms] filter hover:brightness-155"
                  src={githubIcon}
                  alt="GitHub Icon"
                />

                {/* Blue Twitter Icon */}
                <img
                  className="w-6 h-6 transform-gpu hover:scale-125 transition-transform ease-in-out duration-[350ms] filter hover:brightness-125"
                  src={blueTwitterIcon}
                  alt="Blue Twitter Icon"
                />
              </div>
            </div>
          </div>
          </Tilt>

          {/* SVG Definitions */}
          <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Rounded Polygon Clip Path */}
              <clipPath id="roundedPolygon">
                <path
                  d="M79 6.237604307034a32 32 0 0 1 32 0l52.870489570875 30.524791385932a32 32 0 0 1 16 27.712812921102l0 61.049582771864a32 32 0 0 1 -16 27.712812921102l-52.870489570875 30.524791385932a32 32 0 0 1 -32 0l-52.870489570875 -30.524791385932a32 32 0 0 1 -16 -27.712812921102l0 -61.049582771864a32 32 0 0 1 16 -27.712812921102"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      ))} 
    </div>
  );
};

export default Card;