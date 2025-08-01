import React from 'react'

const Section8 = () => {
    return (
        <div className='h-[60vh] md:h-[60vh] w-full flex flex-col justify-center items-center gap-[10vh] lg:mt-[10vh]'>
            <h2 className='text-5xl md:text-5xl lg:text-9xl font-extrabold w-full text-center uppercase'>
                <span className='bg-gradient-to-b from-pink-600 to-black-900 bg-clip-text text-transparent'>We do us </span><br/>
                so you can <br/>be you.
            </h2>

            <h2 className='text-3 md:text-xl lg:text-7xl font-bold w-full text-center'>
                So tell us about your project<span className='text-pink-600'>...</span>
            </h2>
        </div>
    )
}

export default Section8
