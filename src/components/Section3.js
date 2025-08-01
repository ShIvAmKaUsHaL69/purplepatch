"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Section3() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80%", "start 10%"], // starts a bit earlier
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const height = useTransform(scrollYProgress, [0, 1], ["5vh", "100vh"]);
  // const borderRadius = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-start">
      <div ref={targetRef} className="w-full flex justify-center items-center rounded-full">
        <motion.div
          style={{ width}}
          className="bg-white overflow-hidden shadow-xl lg:h-[100vh] h-[40vh] sm:h-[50vh] flex justify-center items-center"
        >
          <img
            src="/images/bxfilms-3.jpg"
            alt="Animated"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
      <div className="md:-translate-y-[14vw] -translate-y-[23vw]">

      <h1 className="uppercase sm:leading-[-200px]  text-[15vw] md:text-[10vw] font-bold text-center ">This Is <br/>about you<span className="text-pink-600">.</span></h1>
      </div>
    </div>
    
  );
}

export default Section3;
