import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
      <Link
        to="/projects"
        className="uppercase rounded-full border-2 sm:border-3 md:border-4 lg:border-5 border-white 
        px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:pt-5 
        text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl 
        leading-tight md:leading-[4vw] lg:leading-[5vw] 
        transition-colors duration-300 
        hover:text-[#D3FD50] hover:border-[#D3FD50]"
      >
        Projects
      </Link>

      <Link
        to="/agence"
        className="uppercase rounded-full border-2 sm:border-3 md:border-4 lg:border-5 border-white 
        px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:pt-5 
        text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl 
        leading-tight md:leading-[4vw] lg:leading-[5vw] 
        transition-colors duration-300 
        hover:text-[#D3FD50] hover:border-[#D3FD50]"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
