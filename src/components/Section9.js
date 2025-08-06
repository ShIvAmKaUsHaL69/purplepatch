"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "images/bxfilms-10-1.jpg",
  "images/bxfilms-10-4.jpg",
  "images/bxfilms-1-4.jpg",
  "images/bxfilms-9.jpg",
  "images/bxfilms-6.jpg",
  "images/bxfilms-1-3.jpg",
];

const IMAGE_WIDTH = 400 + 24;

export default function Section9() {
  const controls = useAnimation();
  const xRef = useRef(0);
  const [tapped, setTapped] = useState({});
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

useEffect(() => {
  if (isMobile) return;

  const duplicatedImagesCount = images.length * 4; // since you're spreading it 4 times
  const totalWidth = IMAGE_WIDTH * duplicatedImagesCount;

  const interval = setInterval(() => {
    xRef.current -= IMAGE_WIDTH;

    // If the xRef has moved past half the scrollable width, reset instantly
    if (Math.abs(xRef.current) >= totalWidth / 2) {
      xRef.current = 0;
      controls.set({ x: 0 }); // instantly reset without animation
    }

    controls.start({
      x: xRef.current,
      transition: { duration: 0.8, ease: "easeInOut" }, // smooth slide
    });
  }, 1500);

  return () => clearInterval(interval);
}, [controls, isMobile]);


  const handleTap = (index) => {
    setTapped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="relative overflow-hidden flex justify-center items-center lg:h-[50vh] md:h-[70vh] h-[55vh] w-full py-10 mt-[10vh]">
      <div className="w-full overflow-x-auto md:overflow-hidden">
        <motion.div
          className="flex"
          animate={!isMobile ? controls : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {[...images, ...images, ...images, ...images].map((src, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[300px] mr-6 flex-shrink-0"
              onClick={() => handleTap(index)}
            >
              <img
                src={src}
                alt={`carousel-img-${index}`}
                width={400}
                height={300}
                className={`w-full h-full object-cover transition-all hover:grayscale-0 duration-150 ${
                  tapped[index] ? "grayscale-0" : "grayscale"
                }`}
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>

      <img
        src="images/bg-film.png"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-fill -z-10"
      />
    </div>
  );
}
