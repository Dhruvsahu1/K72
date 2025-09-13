import React from "react";
import Video from "./Video";

const HomeTopText = () => {
  return (
    <div className="font-[font1] pt-4 sm:pt-6 md:pt-8 text-center space-y-3 sm:space-y-4 md:space-y-6">
      {/* Line 1 */}
      <div className="uppercase flex items-center justify-center 
        text-3xl sm:text-5xl md:text-7xl lg:text-[9.5vw] 
        leading-tight sm:leading-[5vw] md:leading-[6vw] lg:leading-[8vw]">
        L'étincelle
      </div>

      {/* Line 2 with video inside */}
      <div className="uppercase flex items-center justify-center gap-2 sm:gap-4 
        text-3xl sm:text-5xl md:text-7xl lg:text-[9.5vw] 
        leading-tight sm:leading-[5vw] md:leading-[6vw] lg:leading-[8vw]">
        qui
        <div className="
          h-10 w-24 sm:h-14 sm:w-36 md:h-20 md:w-48 lg:h-[7.5vw] lg:w-[18vw] 
          overflow-hidden rounded-full 
          [mask-image:radial-gradient(white,white)]
        ">
          <Video
            className="h-full w-full object-cover"
            playsInline
            src="/video/83c745cf.mp4"
          />
        </div>
        génère
      </div>

      {/* Line 3 */}
      <div className="uppercase flex items-center justify-center 
        text-3xl sm:text-5xl md:text-7xl lg:text-[9.5vw] 
        leading-tight sm:leading-[5vw] md:leading-[6vw] lg:leading-[8vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeTopText;
