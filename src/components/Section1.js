"use client"
import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export default function PortfolioSection() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasHovered, setHasHovered] = useState(false);
    const [hasHoveredBottom, setHasHoveredBottom] = useState(false);

    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const handlePlay = () => {
        setIsPlaying(true);
        videoRef.current?.play();
    };

    return (
        <div className="w-full min-h-screen flex flex-col justify-evenly items-center px-4  lg:p-[200px] lg:gap-[30vh] overflow-hidden">
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-center relative">

                {/* Text */}
                <h1 className="font-bold text-5xl sm:text-5xl lg:text-5xl xl:text-7xl  text-center lg:text-center lg:w-[90%] xl:w-full z-10">
                    We’re not going to show you <span className="italic">our portfolio</span>
                    <span className="text-pink-600">.</span>
                </h1>



                {/* Video / Image section */}
                {isMobileOrTablet ? (
                    <div className="w-[150vw] flex justify-center z-10">
                        <img
                            src="images/video-thumb_01.jpg"
                            alt="Thumbnail"
                            className="w-[60%] object-cover"
                        />
                    </div>
                ) : (

                   <motion.div
                        className="w-[60%] absolute left-[60%] [perspective:1000px] z-10"
                        initial={{ opacity: 0, skewY: 10 }}
                        animate={hasHovered ? { opacity: 1, skewY: 0 } : {}}
                        whileHover={{
                            skewY: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.2,
                                ease: "anticipate"
                            }
                        }}
                        onHoverStart={() => setHasHovered(true)}
                        onHoverEnd={() => setHasHovered(false)}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {!isPlaying && (
                            <motion.img
                                src="images/video-thumb_01.jpg"
                                alt="Video thumbnail"
                                onClick={handlePlay}
                                className="cursor-pointer w-full h-auto object-cover"
                                style={{ backfaceVisibility: "hidden" }}
                            />
                        )}

                        <video
                            ref={videoRef}
                            className={`w-full h-auto ${!isPlaying ? 'hidden' : 'block'}`}
                            controls
                            preload="none"
                        >
                            <source src="/videos/sample.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                )}
                {/* Circular SVG */}
                <motion.img
                    src="images/text-round-portfolio.svg"
                    alt="Circular SVG"
                    className="
                                w-[300px] 
                                sm:w-[350px] 
                                md:w-[500px] 
                                lg:w-[45%] 
                                xl:w-[35%] 
                                mt-10 
                                lg:mt-0 
                                lg:absolute 
                                lg:left-[60%] 
                                translate-y-[-200px] 
                                
                                md:translate-y-[-250px] 
                                lg:translate-y-0
                                
                            "
                    style={{ rotate }}
                />

            </div>


            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row-reverse items-center justify-center relative">

                {/* Text */}
                <h1 className="font-bold text-5xl sm:text-5xl lg:text-5xl xl:text-7xl  text-center lg:text-center lg:w-[90%] xl:w-full lg:translate-x-20 z-10">
                    We’re not going to show you <span className="italic">our portfolio</span>
                    <span className="text-pink-600">.</span>
                </h1>

                {/* Video / Image section */}
                {isMobileOrTablet ? (
                    <div className="w-[150vw] mt-6 flex justify-center z-10">
                        <img
                            src="images/video-thumb_01.jpg"
                            alt="Thumbnail"
                            className="w-[60%] object-cover"
                        />
                    </div>
                ) : (
                    <motion.div
                        className="md:w-[60%] absolute lg:left-0 [perspective:1000px] z-10"
                        initial={{ opacity: 0, skewY: 10 }}
                        animate={hasHoveredBottom ? { opacity: 1, skewY: 0 } : {}}
                        whileHover={{
                            skewY: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.2,
                                ease: "anticipate"
                            }
                        }}
                        onHoverStart={() => setHasHoveredBottom(true)}
                        onHoverEnd={() => setHasHoveredBottom(false)}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {!isPlaying && (
                            <motion.img
                                src="images/BX-2203C_Logos-2048x1549.jpeg"
                                alt="Video thumbnail"
                                onClick={handlePlay}
                                className="cursor-pointer w-full h-full object-cover"
                                style={{ backfaceVisibility: "hidden" }}
                            />
                        )}

                        <video
                            ref={videoRef}
                            className={`w-full h-auto ${!isPlaying ? 'hidden' : 'block'}`}
                            controls
                            preload="none"
                        >
                            <source src="/videos/sample.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                )}

                {/* Circular SVG */}
                <motion.img
                    src="images/text-round-portfolio.svg"
                    alt="Circular SVG"
                    className="
                        w-[300px] 
                        sm:w-[350px] 
                        md:w-[500px] 
                        lg:w-[45%] 
                        xl:w-[35%] 
                        mt-10 
                        lg:mt-0 
                        lg:absolute 
                        lg:left-0 
                        translate-y-[-200px]
                        md:translate-y-[-250px] 
                        lg:translate-y-0
                        "
                    style={{ rotate }}
                />
            </div>


        </div>
    );
}
