"use client"; // for Next.js App Router

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  const fullText = "At Purple Patch, we turn vision into impact. By understanding our clients inside out, we create videos and photography that are timeless, memorable, and boundary pushing.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 20 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000); // wait before deleting
        }
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div className="lg:h-[90vh] h-[65vh] w-full bg-pink-600 flex items-center justify-center">
      <motion.h1
        className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold text-center w-full xl:w-[70vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.h1>
    </div>
  );
};

export default Section2;
