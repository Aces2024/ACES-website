import React from "react";
import About from "./About";

const Gallery = () => {
    return (
      <div className="bg-[#151414] pb-10">
        <About/>
        <h1 className="rog font-extrabold text-6xl text-center text-white">Gallery</h1>
        <div className="mx-auto px-5 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src="src\assets\gal\20230228_161615.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src="src\assets\gal\88ea6e05-7af6-4cf5-98d0-43efc3fe473a.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src="src\assets\gal\IMG20230220112013.jpg"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src="src\assets\gal\IMG20230220174410.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src="src\assets\gal\IMG20230220175247.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2 grayscale">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                  src="src\assets\gal\IMG20230220180146 (1).jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Gallery;
