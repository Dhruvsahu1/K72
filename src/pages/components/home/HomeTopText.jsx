import React from "react";
import Video from "./Video";

const HomeTopText = () => {
  return (
    <div className="font-[font1] pt-5 text-center space-y-5">
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">
        L'étincelle
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex  items-center justify-center">
        qui
        <div className="h-[7.5vw] w-[18vw] overflow-hidden rounded-full  [mask-image:radial-gradient(white,white)]">
          <Video className="h-full w-full object-cover" playsInline src="/video/83c745cf.mp4" />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">
        la créativité
      </div>
    </div>
  );
};

export default HomeTopText;
