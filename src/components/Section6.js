"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const videoData = [
  {
    title: "PRE-PRODUCTION",
    description:
      "The planning patch where ideas, scripts, budgets, locations, and logistics are finalized before shooting begins.",
    image: "branding/purple/img-1.png",
  },
  {
    title: "PRODUCTION",
    description:
      "The execution patch where shooting takes place, capturing planned visuals, performances, and audio to bring the project alive.",
    image: "branding/purple/img-2.png",
  },
  {
    title: "POST-PRODUCTION",
    description:
      "The crafting patch where raw footage is edited, enhanced with sound, music, color grading, and finalized for release",
    image: "branding/purple/img-3.png",
  },
];

function VideoRow({ data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -100px 0px",
  });

  return (
    <div
      ref={ref}
      className="w-full lg:h-[30vh] flex flex-col md:flex-row justify-center items-center gap-4 p-0 md:p-10"
    >
      <div className="w-full  xl:w-[30vw] h-full xl:h-[20vh] font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl text-left">
        {data.title}
      </div>
      <div className="w-full xl:w-[30vw] h-full xl:h-[20vh] text-sm md:text-sm lg:text-sm xl:text-xl  lg:px-[2vw] text-left">
        {data.description}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full xl:w-[30vw] h-full lg:h-[20vh]"
      >
        <img
          src={data.image}
          alt="image"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

export default function Section6() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-5 p-5 sm:p-10 md:p-0">
      <div className="sm:h-full lg:h-[20vh] lg:w-[60vw] md:w-full">
        <h1 className="text-center font-bold lg:text-6xl xl:text-7xl sm:text-5xl md:text-6xl text-5xl">
          Our Framework
        </h1>
      </div>

      <div className="h-full md:w-[100vw] xl:w-[80vw] w-full flex flex-col justify-around items-center gap-4 ">
        {videoData.map((data, idx) => (
          <VideoRow key={idx} data={data} />
        ))}
      </div>
    </div>
  );
}
