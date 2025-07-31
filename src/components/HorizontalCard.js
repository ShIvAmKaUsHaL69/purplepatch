import React from 'react';

function HorizontalCard({ image, text, customHeight = "lg:h-[40vh]" }) {
  return (
         <div className="max-w-sm shadow-md overflow-hidden">
      <img
        src={image}
        alt={text.title}
        className="w-full object-cover"
      />
      <div className="p-1 text-left">
        <h2 className="text-xs sm:text-sm md:text-2xl md:font-bold mb-2">{text.title}</h2>
<p className="sm:line-clamp-none line-clamp-2 text-[10px] sm:text-sm mt-2">{text.description}</p>

      </div>
    </div>
  );
}

export default HorizontalCard;
