import React from "react";
import ProjectCard from "./components/projects/ProjectCard";

const Projects = () => {
  const images = [
    {
      image1:"/Images/100temps_Thumbnail-1280x960.jpg",
      image2:"/Images/BEST_site_menu_Thumbnail-1280x960.jpg"
    },
    {
      image1:"/Images/CF_thumbnail-1280x960.jpg",
      image2:"/Images/chalaxeur-thumbnail_img-1280x960.jpg"
    },
    {
      image1:"/Images/crisis24_behance_1920X1200_cartes-1280x960.jpg",
      image2:"/Images/Fruite_thumbnail_bbq-1280x960.jpg"
    },
    {
      image1:"/Images/OKA_thumbnail-1280x960.jpg",
      image2:"/Images/opto_thumbnail2-1280x960.jpg"
    },
    {
      image1:"/Images/PME-MTL_Thumbnail-1280x960.jpg",
      image2:"/Images/WS---K72.ca---Thumbnail-1280x960.jpg"
    },
    {
      image1:"/Images/thumbnailimage_atable2-1280x960.jpg",
      image2:"/Images/thumbnailimage_opto-1280x960.jpg"
    },
    {
      image1:"/Images/thumbnailimage_shelton-1280x960.jpg",
      image2:"Images/thumbnailimage_SollioAg-1280x960.jpg"
    }
  ]
  return (
    <div className="p-[4]">
      <div className=" pt-[45vh]">
        <h1 className="font-[font2] text-[9.5vw] uppercase">Projets</h1>
      </div>
      <div className="-mt-12 p-4">
        {images.map(function(elem){
          return <ProjectCard key={elem.image1} image1={elem.image1} image2={elem.image2}/>
        })}
      </div>
    </div>
  );
};

export default Projects;
