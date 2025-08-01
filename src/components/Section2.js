"use client"; // for Next.js App Router

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  const fullText = "Everyone has those. And it’s not really what you are looking for.";
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
    <div className="lg:h-[70vh] h-[50vh] w-full bg-pink-600 flex items-center justify-center">
      <motion.h1
        className="text-white text-5xl lg:text-8xl font-bold text-center w-full lg:w-[55vw]"
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
