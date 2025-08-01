"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section4() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const middleRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      });

      gsap.from(middleRef.current, {
        y: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      });

      gsap.from(rightRef.current, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row lg:h-[20vh] w-full items-center justify-center gap-6 lg:gap-[10vh] px-4 py-6 mb-20"
    >
      <div ref={leftRef} className="w-full lg:w-[20%]">
        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
          You want a killer strategy for a video you’ll love
          <span className="text-pink-600">.</span>
        </h4>
      </div>

      <div ref={middleRef} className="w-full lg:w-[20%]">
        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
          You want collaboration through the entire process
          <span className="text-pink-600">.</span>
        </h4>
      </div>

      <div ref={rightRef} className="w-full lg:w-[20%]">
        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
          You want people to fall head over heels for your brand, your product,
          your… thing<span className="text-pink-600">.</span>
        </h4>
      </div>
    </div>
  );
}
