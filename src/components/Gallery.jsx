import React from "react";
import About from "./About";

const Gallery = () => {
  return (
    
    <div className="bg-[#151414]">
      <About/>
        <h1 className="text-white text-3xl font-bold text-center">Gallery</h1>
      <div className="container mx-auto px-5  lg:px-32 lg:py-10">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div className="w-full p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
