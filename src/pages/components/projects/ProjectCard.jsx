import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className="w-1/2 group relative rounded-none transition-all h-full hover:rounded-[70px] overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={props.image1}
          alt="Bag"
        />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 bg-black/20 h-full w-full">
          <h2 className="uppercase text-white text-center text-5xl border-3 rounded-[50px]  px-4 pt-2 font-[font2] font-bold">
            Voir le Projet
          </h2>
        </div>
      </div>
      <div className="w-1/2 group relative rounded-none transition-all h-full hover:rounded-[70px] overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={props.image2}
          alt="Bag"
        />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 bg-black/20 h-full w-full">
          <h2 className="uppercase text-white text-center text-5xl border-3 rounded-[50px]  px-4 pt-2 font-[font2] font-bold">
            Voir le Projet
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
