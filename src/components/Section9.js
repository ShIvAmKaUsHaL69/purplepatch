"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/bxfilms-10-1.jpg",
  "/images/bxfilms-10-4.jpg",
  "/images/bxfilms-1-4.jpg",
  "/images/bxfilms-9.jpg",
  "/images/bxfilms-6.jpg",
  "/images/bxfilms-1-3.jpg",
];

const IMAGE_WIDTH = 400 + 24;

export default function Section9() {
  const controls = useAnimation();
  const xRef = useRef(0);
  const [tapped, setTapped] = useState({});
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) return; // disable animation on mobile

    const totalImages = images.length * 1000;
    const maxOffset = IMAGE_WIDTH * totalImages;

    const interval = setInterval(() => {
      xRef.current -= IMAGE_WIDTH;
      if (Math.abs(xRef.current) >= maxOffset / 2) {
        xRef.current = 0;
        controls.set({ x: 0 });
      } else {
        controls.start({ x: xRef.current });
      }
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
              <Image
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
        src="/images/bg-film.png"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-fill -z-10"
      />
    </div>
  );
}
