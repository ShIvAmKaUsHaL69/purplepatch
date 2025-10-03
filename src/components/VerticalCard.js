import React from 'react';

function VerticalCard({ image, text, customHeight = "h-[40vh]" }) {
  return (
   <div className="max-w-2xl shadow-md overflow-hidden flex flex-col xl:flex-row">
      
      {/* Image */}
      <div className="md:w-full lg:w-[30vw] xl:w-[30vw] lg:h-[50vh]">
        <img
          src={image}
          alt={text.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="p-1 flex flex-col justify-end xl:w-1/2">
        <h2 className="text-xs sm:text-sm md:text-2xl md:font-bold mb-2">{text.title}</h2>
<p className="lg:line-clamp-none line-clamp-2 text-[10px] sm:text-sm mt-2">{text.description}</p>

      </div>
      
    </div>
  );
}

export default VerticalCard;
