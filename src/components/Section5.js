import React from 'react'

function Section5() {
  return (
    <div className='h-[20vh] md:h-[50vh] w-full mb-20'>
        <div className='h-full w-full'>
                <video
              src="/images/video.mp4"
              width={400}
              height={300}
              className={`w-full h-full object-cover transition-all duration-150 `}
              muted
              autoPlay
              loop
              playsInline
            />
        </div>

    </div>
  )
}

export default Section5
