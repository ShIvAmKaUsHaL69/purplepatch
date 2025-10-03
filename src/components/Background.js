'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
// import ButtonSection from './button';
import Marquee from 'react-fast-marquee';

// import { BringToFrontIcon, CircleCheckBigIcon, BlendIcon, AtomIcon, HandCoinsIcon, BoltIcon, ChartPieIcon} from './icons/BringToFrontIcon';


const items = [
    "Strong foundation in Media, Television, and Bollywood.",
    "Hands-on experience across reality shows for Colors, Sony, and Star.",
    "Worked on acclaimed films and web series.",
    "Trained by industry icons: A. R. Rahman, Vishal Punjabi, and Amar Ramesh.",
    "Created a documentary for the Indian Army.",
    "Collaborated with Tata Trusts & Sons and ISKCON Chowpatty.",
    "Leads Purple Patch Productions, specializing in:",
    "Cinematic weddings",
    "Impactful documentaries",
    "Editorial photos",
];

// Parent animation for stagger
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25, // delay between list items
        },
    },
};

// Each item animation
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};


gsap.registerPlugin(ScrollTrigger);

export default function Background() {
    const cardWrapperRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.utils.toArray('.image').forEach((img) => {
                gsap.from(img, {
                    y: 150,
                    opacity: 0,
                    duration: 0.7,
                    scrollTrigger: {
                        trigger: img,
                        start: 'top 80%',
                        end: 'bottom top',
                        toggleActions: 'play reverse play reverse',
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);




  const cardData = [
  { icon: "branding/purple/icon1.png" },
  { icon: "branding/purple/icon-2.png" },
  { icon: "branding/purple/icon-3.png" },
  { icon: "branding/purple/icon-4.png" },
  { icon: "branding/purple/icon-5.png" },
  { icon: "branding/purple/icon-6.png" },
  { icon: "branding/purple/icon-7.png" },
];


    return (

        <div className="min-h-222 sm:min-h-220 md:min-h-200  h-100 text-white flex items-evenly justify-center rounded-4xl px-2 py-4 abhusection overflow-hidden mx-2 md:mx-6 lg:mx-4 2xl:mx-5">
            <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
                {/* Mobile Version */}
                <div className="flex flex-col block md:hidden justify-center items-center h-full relative bg-amber-600align-self-start">

                    <div className='self-center justify-self-center'>
                        <h1
                            className="relative text-[2rem] sm:text-[2.6rem] md:text-[3.5rem] lg:text-[4.6rem]
               max-[1254px]:text-[2.2rem] max-[1096px]:text-[2rem] max-[768px]:text-[1.8rem]
               font-bold  leading-[1] tracking-[-0.03em] sm:tracking-[-0.04em] md:tracking-[-0.05em]
               text-white whitespace-nowrap box-border mb-8"
                        >
                            Our Background<br />

                        </h1>

                        <ul className="space-y-3 list-none list-inside">
                            {items.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-[1rem]"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        {/* <div className='justify-self-start'>
 
            <ButtonSection />
            </div> */}
                    </div>

                </div>
                <div className="flex-1 sm:h-[600px] h-[400px] overflow-hidden relative align-self-end w-200 top-0 -left-10 sm:top-20 md:w-95 md:top-50 lg:w-125 lg:top-50 xl:w-166 xl:top-55 2xl:w-230 2xl:-left-60">
                    <Marquee
                        gradient={false}
                        speed={130}
                        pauseOnHover={false}
                        direction="right"
                        className="absolute left-0"
                    >
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="card bg-purple-400 p-6 rounded-2xl shadow-xl w-72 h-62 md:w-96 md:h-60 mx-3 flex-shrink-0 flex items-center justify-center"
                            >
                                <img src={card.icon} alt={`icon-${index}`} className="max-w-full max-h-full object-contain" />
                            </div>
                        ))}

                    </Marquee>

                </div>
                <div className="hidden md:block md:flex md:flex-col   my-auto justify-center h-150 md:h-180 relative sm:w-80 lg:w-100 lg:h-180 xl:w-150 2xl:w-168">

                    <div className="sm:ml-0 lg:ml-0 xl:ml-10">
                        <h1
                            className=" text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl
       max-[1254px]:text-[2.2rem] max-[1096px]:text-[2rem] max-[768px]:text-[1.8rem]
       font-bold leading-[1] tracking-[-0.03em] sm:tracking-[-0.04em] md:tracking-[-0.05em]
       text-white whitespace-nowrap box-border"
                        >
                            Our Background
                        </h1>

                        <motion.ul
                            className="list-none md:text-[0.8rem] lg:text-[1rem] xl:text-[1.5rem] 
                 2xl:text-[1.1rem] text-white mb-8 mt-8 ml-5 space-y-2"
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            {items.map((line, index) => (
                                <motion.li key={index} variants={item}>
                                    {line}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-end sm:flex-col sm:gap-30 lg:flex-col lg:gap-10 xl:flex-col xl:justify-between xl:items-start 2xl:flex-row 2xl:justify-between 2xl:items-end md:flex p-4">
                    </div>
                </div>


            </div>
        </div>
    );
}