import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-8">
      <Link className="text-[6vw] leading-[5.5vw] border-5 border-white rounded-full px-10 pt-5 uppercase hover:text-[#D3FD50] hover:border-[#D3FD50]" to='/projects'>Projects</Link>
      <Link className="text-[6vw] leading-[5.5vw] border-5 border-white rounded-full px-10 pt-5 uppercase hover:text-[#D3FD50] hover:border-[#D3FD50] " to="/agence">Agence</Link>
    </div>
  );
};

export default HomeBottomText;
