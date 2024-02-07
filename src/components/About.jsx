import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faFileLines, faLaptopCode, faMedal, faMusic, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="w-screen bg-[#151414]">
      <div className="py-10 sm:py-2 block lg:py-2 relative  bg-opacity-50">
        <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="max-w-xl mx-auto text-center">
              <div className="inline-flex px-4 py-1.5 mx-auto rounded-full">
                <p className="rog text-6xl font-extrabold text-[#FEFEFF] tracking-widest text-g uppercase"
                data-aos="zoom-out"
                data-aos-delay="300">ABOUT US</p>
              </div>
              {/* <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit..</p> */}
            </div>

            <div className="grid  grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">
            <a href="#"
              className="transition-all duration-1000  bgco text-white   hover:shadow-xl m-2 p-4 relative z-40 group rounded-lg"
              data-aos="zoom-in-down"
              data-aos-delay="300">
              <div className="absolute bg-gray-600 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
              <div className="py-2 px-9 relative">
                <FontAwesomeIcon icon={faLaptopCode} size="3x" className="mt-2 group-hover:text-white"/> {/* Adjust size here */}

                <h3 className="mt-8 text-lg font-semibold text-white group-hover:text-white">Technical Team</h3>
                <p className="mt-4 text-base text-white group-hover:text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </a>


              <a
                href="#"
                className="transition-all duration-1000  bgco hover:shadow-xl m-2 p-4 relative z-40 group text-white border-[#FEFEFF] rounded-lg"
                data-aos="zoom-in-down"
                data-aos-delay="400"
              >
                <div className="absolute bg-gray-600 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                  <FontAwesomeIcon icon={faMedal} size="3x" className="mt-2 group-hover:text-white"/>
              
                  <h3 className="mt-8 text-lg font-semibold text-white">Sports Team</h3>
                  <p className="mt-4 text-base text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="transition-all duration-1000 bgco text-white  hover:shadow-xl m-2 p-4 relative z-40 group  border-[#FEFEFF] rounded-lg"
                data-aos="zoom-in-down"
                data-aos-delay="500"
              >
                <div className="absolute bg-gray-600 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                <FontAwesomeIcon icon={faMusic} size="3x" className="mt-2 group-hover:text-white"/>

      
                  <h3 className="mt-8 text-lg font-semibold text-white">Cultural Team</h3>
                  <p className="mt-4 text-base text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="transition-all duration-1000 bgco text-white hover:shadow-xl m-2 p-4 relative z-40 group border-[#FEFEFF] rounded-lg"
                data-aos="zoom-in-down"
                data-aos-delay="300"
              >
                <div className="absolute bg-gray-600 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                <FontAwesomeIcon icon={faCameraRetro} size="3x" className="mt-2 group-hover:text-white"/>
                
                  <h3 className="mt-8 text-lg font-semibold text-white">Public Relations Team</h3>
                  <p className="mt-4 text-base text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="transition-all duration-1000 bgco hover:shadow-xl m-2 p-4 relative z-40 group text-white border-[#FEFEFF] rounded-lg"
                data-aos="zoom-in-down"
                data-aos-delay="400"
              >
                <div className="absolute bg-gray-600 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                <FontAwesomeIcon icon={faFileLines} size="3x" className="mt-2 group-hover:text-white"/>
      
                  <h3 className="mt-8 text-lg font-semibold text-white">Documentation Team</h3>
                  <p className="mt-4 text-base text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="transition-all duration-1000 bgco text-white hover:shadow-xl m-2 p-4 relative z-40 group  border-[#FEFEFF] rounded-lg"
                data-aos="zoom-in-down"
                data-aos-delay="500"
              >
                <div className="absolute bg-gray-600 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                <FontAwesomeIcon icon={faUserGroup} size="3x" className="mt-2 group-hover:text-white"/>
                  <h3 className="mt-8 text-lg font-semibold text-white">Management Team</h3>
                  <p className="mt-4 text-base text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;