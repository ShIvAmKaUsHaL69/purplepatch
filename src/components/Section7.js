"use client";
 
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
 
const items = [
  {
    title: "WE DO CONCEPTS.",
    description:
      "We do concept to completion, so that we’re tracking with you from start to finish",
    image: "/images/bxfilms-7.jpg",
    direction: "rightToLeft",
  },
  {
    title: "WE DO BRAND.",
    description:
      "We do brand, product, and documentary-style videos to tell your best story the best way",
    image: "/images/bxfilms-8.jpg",
    direction: "leftToRight",
  },
  {
    title: "WE’RE EXPERTS.",
    description:
      "We’re experts at live-action and animation, so your story can be told in whatever style will help it thrive.",
    image: "/images/bxfilms-9.jpg",
    direction: "rightToLeft",
  },
];
 
export default function Section6() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
 
  const [isMobile, setIsMobile] = useState(false);
 
  // Detect mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
 
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
 
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  return (
    <div ref={containerRef} className=" text-white py-24 space-y-24 overflow-x-hidden">
      {items.map((item, index) => {
        const translateX = useTransform(
          scrollYProgress,
          [0, 1],
          item.direction === "leftToRight" ? ["-50%", "70%"] : ["50%", "-70%"]
        );
 
        const titleText = item.title.replace(".", "");
 
        return (
          <div
            key={index}
            className={`flex flex-col md:w-full md:flex-row items-center justify-center gap-10 px-6 max-w-7xl mx-auto ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center ">
              {isMobile ? (
                <h2 className="text-4xl sm:text-6xl  md:text-6xl font-bold mb-4">
                  {titleText}
                  <span className="text-pink-500">.</span>
                </h2>
              ) : (
                <motion.h2
                  style={{ x: translateX }}
                  className="sm: 6xl translateX:none lg:text-8xl whitespace-nowrap font-bold mb-4 md:text-6xl "
                >
                  {titleText}
                  <span className="text-pink-500">.</span>
                </motion.h2>
              )}
              <p className="text-lg sm:text-xl font-bold text-gray-300 max-w-lg mx-auto md:mx-0">
                {item.description}
              </p>
            </div>
 
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={500}
                className="object-cover w-full h-auto "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}