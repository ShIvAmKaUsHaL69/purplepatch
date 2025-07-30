import React from 'react';

function HorizontalCard({ image, text, customHeight = "lg:h-[40vh]" }) {
  return (
    <div className="w-full sm:w-[30vw] md:w-[30vw] lg:w-[30vw] flex flex-col gap-4 opacity-70 p-4">
      
      {/* Image Section */}
      <div className={`w-full ${customHeight}`}>
        <img
          src={image}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-end w-full lg:w-[10vw]">
        <h2 className="font-bold text-xl sm:text-sm">{text.title}</h2>
        <p className="text-sm sm:text-base md:text-sm lg:text-smmt-1">
          {text.description}
        </p>
      </div>
    </div>
  );
}

export default HorizontalCard;
