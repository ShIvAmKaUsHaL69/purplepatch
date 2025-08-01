"use client"
import { motion ,useInView } from 'framer-motion';
import React, { useRef } from 'react'

function Section6() {
    const videoData = [
        {
            title: "Product Videos",
            description: "Tell a story as compelling and world-changing as your product or service.",
            image: "/images/product-videos.jpg"
        },
        {
            title: "Brand Videos",
            description: "Share your journey with the world through a brand film that captures your unique vision.",
            image: "/images/brand-videos.jpg"
        },
        {
            title: "Agency Partnerships",
            description: "Simplify your message and make your audience understand what you do.",
            image: "/images/bxfilms-2-1024x515.jpg"
        }
    ];
    return (
        <div className='h-full w-full flex flex-col justify-center items-center gap-5 p-5 md:p-0'>
            <div className='md:h-full h-[20vh]   lg:w-[60vw] md:w-full  '>
                <h1 className='text-center font-bold lg:text-8xl text-5xl '>This is about moving your world forward.</h1>
            </div>

            <div className='h-full md:w-[70vw] w-full flex flex-col justify-around items-center gap-4'>

                {/* ROW 1 */}
                {
                    videoData.map((data, idx) => {
                           const ref = useRef(null);
                    const isInView = useInView(ref, { once: false, margin: '0px 0px -100px 0px' });

                        return (
                        
                        <div ref={ref} key={idx} className='w-full lg:h-[30vh] flex flex-col lg:flex-row justify-center items-center gap-4'>
                            <div className='w-full lg:w-[20vw] h-full lg:h-[20vh] font-bold text-4xl text-left'>{data.title}</div>
                            <div className='w-full lg:w-[20vw] h-full lg:h-[20vh] lg:text-2xl text-lg  lg:px-[2vw] text-left opacity-70'>{data.description}</div>
                            <motion.div
                             initial={{ opacity: 0, y: 200 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            className='w-full lg:w-[20vw] h-full lg:h-[20vh]'><img src={data.image} alt="image" className='w-full h-full object-cover' /></motion.div>
                        </div>)
                    })


                }


            </div>

        </div>
    )
}

export default Section6
