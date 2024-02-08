// Member.js

import React from "react";
import Card from "./Card";
import { Cultural } from "./imagesData";
import Lottie, { useLottie } from "lottie-react";
import Team from "../../assets/font/Team.json";
import girl from "../../assets/font/cat.json";

const Culturals = () => {
  const options = {
    animationData: girl,
    loop: true,
  };

  const { View } = useLottie(options);

  const lottieContainerStyle = {
    width: "150px",
    height: "150px",
  };

  return (
    <div className="pic-bg h-screen flex flex-col items-center justify-start text-white overflow-auto">
      <h1
        className="text-2xl font-bold p-6 tracking-[1rem]"
        data-aos="zoom-in-down"
        data-aos-delay="100"
      >
       CULTIVATE UNITY, CELEBRATE DIVERSITY
      </h1>
      <div
        className="flex items-center"
        // style="margin: -90px 4px;"
      >
        <div className="flex-grow h-[3px] bg-white"></div>
        <div className="mx-4">
          <h1
            className="rog text-6xl font-bold"
            data-aos="zoom-in-down"
            data-aos-delay="400"
          >
            Cultural TEAM
          </h1>
        </div>
        <div
          className="lottie-container inline-flex"
          data-aos="zoom-in-down"
          data-aos-delay="400"
          style={lottieContainerStyle}
        >
          {View}
        </div>
        <div className="flex-grow h-[3px] bg-white"></div>
      </div>
      <div
        className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[5rem] ml-24 pt-6" // Adjusted the top padding here
        data-aos="zoom-out"
        data-aos-delay="400"
      >
        {Cultural.map((person, index) => (
          <Card key={index} people={[person]} />
        ))}
      </div>
    </div>
  );
};

export default Culturals;