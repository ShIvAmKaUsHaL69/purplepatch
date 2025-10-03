"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Items array
const items = [
  {
    title: "REVIVING KHELO INDIA.",
    description:
      "We created the official National Games 2023 film, presented to PM Narendra Modi and Minister Anurag Thakur. Its impact led to the revival of Khelo India Youth Games after 14 years, which we proudly captured in Chennai in 2024.",
    image: "branding/purple/img-4.png",
    direction: "rightToLeft",
  },
  {
    title: "LEGACY WITH TATA.",
    description:
      "For four years, we streamlined and archived AGM and meeting media for Tata Trusts & Sons. This system enabled the creation of a short documentary on Shri Ratan Tata’s life, reflecting both trust and sensitivity in handling legacy.",
    image: "branding/purple/img-9.png",
    direction: "leftToRight",
  },
  {
    title: "HOPE IN MANIPUR",
    description:
      "Under the leadership of the Indian Army’s Assam Rifles, we created a documentary for the Prime Minister’s Office, capturing ground realities, challenges, and solutions while mapping potential sites for schools, hospitals, and housing.",
    image: "branding/purple/img-5.png",
    direction: "rightToLeft",
  },
];

// ✅ Safe Hook usage per item
function ScrollAnimatedItem({ item, index }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    item.direction === "leftToRight" ? ["-80%", "50%"] : ["50%", "-40%"]
  );

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const titleText = item.title.replace(".", "");

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col md:w-full md:flex-row items-start justify-start md:items-center md:justify-center gap-10 px-6 max-w-7xl mx-auto ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div className="w-full md:w-1/2 text-center">
        {isMobile ? (
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
            {titleText}
            <span className="text-pink-500">.</span>
          </h2>
        ) : (
          <motion.h2
            style={{ x }}
            className="lg:text-8xl whitespace-nowrap font-bold mb-4 sm:text-2xl md:text-6xl"
          >
            {titleText}
            <span className="text-pink-500">.</span>
          </motion.h2>
        )}
        <p className="text-sm sm:text-lg md:font-bold text-gray-300 max-w-lg mx-auto md:mx-0">
          {item.description}
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={item.image}
          alt={item.title}
          width={800}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
}

export default function Section7() {
  return (
    <div className="text-white py-24 space-y-24 overflow-x-hidden">
      {items.map((item, index) => (
        <ScrollAnimatedItem key={index} item={item} index={index} />
      ))}
    </div>
  );
}
