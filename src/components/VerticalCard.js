import React from 'react';

function VerticalCard({ image, text, customHeight = "h-[40vh]" }) {
  return (
    <div className="flex md:flex-row sm:flex-col gap-4 w-full sm:w-[30vw] md:w-[30vw] lg:w-[30vw] opacity-70 p-4">
      
      {/* Image Section */}
      <div className={`w-full lg:w-full ${customHeight}`}>
        <img
          src={image}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-100vw flex flex-col justify-end lg:w-[20vw]">
        <h2 className="font-bold text-xl sm:text-sm">{text.title}</h2>
        <p className="text-sm sm:text-base mt-1">
          {text.description}
        </p>
      </div>
    </div>
  );
}

export default VerticalCard;
