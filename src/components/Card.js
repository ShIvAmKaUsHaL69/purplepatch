import React from 'react'

const Card = ({text,image,rotateMainDiv,rotateImg,rotateText}) => {
  return (
    <>
      <div className={`w-[20vw]  h-[30rem] rotate-${rotateMainDiv} `}>
         <div className='w-full  h-[80%]'>
             <img src={image} alt='Card Image' className={`w-full h-full object-fill opacity-65 rotate-${rotateImg}`}/>
         </div>

         <div className={`w-full  h-[15%] rotate-${rotateText}`}>
              <h2 className='font-bold text-2xl opacity-65'>{text.title}</h2>
              <p className='text-[0.5rem] opacity-65 text-left'>{text.description}</p>
         </div>
      </div>   
    </>
  )
}

export default Card 