"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import VerticalCard from './VerticalCard'
import HorizontalCard from './HorizontalCard'

const Hero = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsBlurred(false);
      } else {
        setIsBlurred(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative h-[100vh] md:h-[100vh] lg:h-[160vh] w-full flex mb-[5vh] lg:mb-0'>
      <div className={`h-[120vh] w-[6%] text-white flex items-center justify-center transition-all duration-500 ease-in-out`}>
        <h1 className='-rotate-90 w-full whitespace-nowrap font-bold opacity-45 text-2xl my-auto mx-auto'>
          Commercial Video Production
        </h1>
      </div>
      {/* bg-pink-500  hover:bg-pink-600 */}
      <div className={`flex flex-col justify-start items-center h-full w-full transition-all duration-500 ease-in-out gap-5`}>
        <div className='flex items-center justify-between w-[90%] md:w-[70%] p-3'>
          <img src="images/whitelogo.png" alt="logo" className='w-25 md:w-50' />
          <button className='text-white font-bold uppercase  bg-pink-600 hover:text-white cursor-pointer w-25 p-2 md:w-40 md:p-5 transition-all duration-150'>
            Go To End
          </button>
        </div>

        <div className={` border-amber-50 h-1/3 w-full flex justify-around items-start gap-3 transition-all duration-500 ease-in-out ${isBlurred ? "lg:blur-sm" : ' lg:blur-none'} blur-sm`}>
          <HorizontalCard image={"branding/purple/img-1.png"} text={{ title: "Pre Production", description: "The planning patch where ideas, scripts, budgets,locations, and logistics are finalized before shooting begins" }} />
          <HorizontalCard image={"branding/purple/img-2.png"} text={{ title: "Production", description: "The execution patch where shooting takes place, capturing planned visuals,performances, and audio to bring the project alive." }} />
        </div>


        <div className={`border-amber-50 md:h-2/3 w-full flex justify-around items-start sm:items-start lg:items-center transition-all duration-500 ease-in-out  ${isBlurred ? "lg:blur-sm" : ' lg:blur-none'} blur-sm gap-3`}>

          {/* First Card - move up on sm/md */}
          <div className="sm:-translate-y-3 md:-translate-y-4 lg:translate-y-0 transition-transform duration-300">
            <VerticalCard
              image={"branding/purple/img-6.png"}
              text={{
                title: "BREAD & BUTTER",
                description:
                  "Birthdays, Anniversaries, Enagagements, Baby Showers, House Warmings, Corporate Events",
              }}
            />
          </div>

          {/* Middle Card - no transform */}
          <HorizontalCard
            image={"branding/purple/img-7.png"}
            text={{
              title: "CREAM",
              description:
                "Weddings, Exhibitions, Documantaries, Sport Events",
            }}
            customHeight="h-[60vh]"
          />

          {/* Last Card - move down on sm/md */}
          <div className="sm:translate-y-3 md:translate-y-4 lg:translate-y-0 transition-transform duration-300">
            <HorizontalCard
              image={"branding/purple/img-8.png"}
              text={{
                title: "DREAM & GOAL",
                description:
                  "Movies, Web-series, Corporate house",
              }}
            />
          </div>

        </div>


      </div>
      <div className='absolute top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-4/5 md:translate-y-[10vw] lg:-translate-y-1/2 w-[80%] h-[20%]  flex justify-center items-center'>
        <p className='font-extrabold text-center text-[11.5vw] sm:text-[10vw] md:text-[10vw] lg:text-[8vw] uppercase leading-[0.9] tracking-tighter'>
          {/* this isn<span className='text-pink-600'>’</span>t <br /> about us */}
          Purple Patch <br />Productions
        </p>
      </div>
    </div>
  )
}

export default Hero
