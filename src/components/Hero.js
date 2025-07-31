"use client"
import React,{ useEffect, useState } from 'react'
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
    <div className='relative h-screen md:h-[160vh] w-full flex'>
        <div className={`h-[120vh] w-[6%] text-white flex items-center justify-center transition-all duration-500 ease-in-out`}>
            <h1 className='-rotate-90 w-full whitespace-nowrap font bold opacity-45 text-2xl my-auto mx-auto'>
                Commercial Video Production
            </h1>
        </div>
       <div className={`flex flex-col h-full w-full ${isBlurred?"lg:blur-sm" :' lg:blur-none'} blur-sm transition-all duration-500 ease-in-out gap-20`}>
            <div className=' border-amber-50 h-1/3 w-full flex justify-around items-start gap-3'>
                  <HorizontalCard image={"/images/bxfilms-1-2.jpg"} text={{title:"AppLovin" , description:"BX Films teamed up with the inimitable Tyler McPherron (Director of Photography) and the talented Robby Klein (Photography)"}}/>
                  <HorizontalCard image={"/images/bxfilms-1-3.jpg"} text={{title:"AppLovin" , description:"BX Films teamed up with the inimitable Tyler McPherron (Director of Photography) and the talented Robby Klein (Photography)"}}/>
            </div>
            <div className=' border-amber-50 h-2/3 w-full flex justify-around md:items-start sm:items-start lg:items-center gap-3'>
                 <VerticalCard image={"/images/bxfilms-1-1.jpg"} text={{title:"AppLovin" , description:"BX Films teamed up with the inimitable Tyler McPherron (Director of Photography) and the talented Robby Klein (Photography)"}}/>
                 <HorizontalCard image={"/images/bxfilms-1-4.jpg"} text={{title:"AppLovin" , description:"BX Films teamed up with the inimitable Tyler McPherron (Director of Photography) and the talented Robby Klein (Photography)"}} customHeight="h-[60vh]"/>
                 <HorizontalCard image={"/images/bxfilms-1-5-768x477.jpg"} text={{title:"AppLovin" , description:"BX Films teamed up with the inimitable Tyler McPherron (Director of Photography) and the talented Robby Klein (Photography)"}}/>
            </div>
          
       </div>
       <div className='absolute top-1/2 lg:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[20%]  flex justify-center items-center'>
           <p className='font-bold text-center text-[20vw] md:text-[11vw] lg:text-[10vw] uppercase leading-[0.8] tracking-tighter'>
            this isn<span className='text-pink-600'>’</span>t <br/> about us
           </p>
       </div>
    </div>
  )
}

export default Hero
