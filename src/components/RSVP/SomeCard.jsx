import React, { useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import RegRSVP from "./ModalRSVP";
import { data } from "./data.js";
// import "bootstrap/dist/css/bootstrap.min.css";

const SomeCard = () => {
    return (
        <div className=" bg-[#151414] pt-32 text-center">
             <div className="inline-flex px-4  mx-auto rounded-full">
                <p className="rog text-6xl font-extrabold text-[#FEFEFF] tracking-widest text-g uppercase"
                data-aos="zoom-out"
                data-aos-delay="300">Events</p>
              </div>
            {data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="flex items-center justify-center w-full px-4 py-12 "
                    >
                        <Card data={item} />
                    </div>
                );
            })}
        </div>
    );
};

const Card = ({ data }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["20deg", "-20deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-20deg", "20deg"]
    );

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };
    const handleMouseLeave = (e) => {
        x.set(0);
        y.set(0);
    };

    const [showInfo, setShowInfo] = useState(false);
    const [toShow, setToShow] = useState("info");

    const handleSelect = (e) => {
        setToShow(e.target.innerText.toLowerCase());
    };

    return (
       
        <div className="h-full bg-[#151414] text-center pt-14 rounded-xl ">
             
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="flex max-sm:flex-col relative max-sm:h-fit h-96 max-w-5xl rounded-xl  bg-[#222323]  max-sm:gap-2 gap-10 justify-between items-stretch"
            >
                <div
                    className="relative flex-1 h-auto  max-sm:mx-4 ml-8  my-4 shadow-2xl rounded-2xl "
                    style={{
                        transform: "translateZ(50px)",
                        transformStyle: "preserve-3d",

                        clipPath:
                            "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Dragon"
                        className=" object-cover h-full rounded-xl "
                    />
                </div>
                <div className="flex flex-[2_2_30%] flex-col py-6 gap-6 flex-grow px-8 ">
                    <h1 className="text-left text-3xl font-semibold text-white">
                        {data.title}
                    </h1>
                    <p className="text-left text-white">{data.description}</p>
                    <div className="mt-auto mb-6 flex gap-6 ">
                        <button
                            onClick={() => {
                                setShowInfo(!showInfo);
                            }}
                            className="px-4 py-2 bg-green-400 rounded-xl"
                        >
                            Info
                        </button>
                        {/* <button className="px-4 py-2 bg-green-400 rounded-xl">
                            Register
                        </button> */}
                        <RegRSVP />
                    </div>
                </div>
            </motion.div>
            {showInfo && (
                <div className="w-full px-6 py-4">
                    <div className="flex justify-start items-center gap-6 text-2xl font-semibold  text-white">
                        <h1 onClick={handleSelect}>Info</h1>
                        <h1 onClick={handleSelect}>Rules</h1>
                        <h1 onClick={handleSelect}>Contact</h1>
                    </div>
                    <div className="flex w-full ">
                        <p className="w-full overflow-hidden text-white text-left mt-8">
                            {data[toShow]}
                        </p>
                    </div>
                </div>
            )}
        </div>
       
    );
};

export default SomeCard;
