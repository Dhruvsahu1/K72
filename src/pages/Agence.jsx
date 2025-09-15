import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  
  const imageArray = [
    "/public/Images/carl.jpg",
    "/public/Images/camilie.jpg",
    "/public/Images/chantal.jpg",
    "/public/Images/claire.jpg",
    "/public/Images/joel.jpg",
    "/public/Images/Lawrence.jpg",
    "/public/Images/Maggie.jpg",
    "/public/Images/Maxime.jpg",
    "/public/Images/joseph.jpg",
    "/public/Images/mel.jpg",
    "/public/Images/Michele.jpg",
    "/public/Images/Oliver.jpg",
    "/public/Images/sophie.jpg",

  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:"top 23%",
        end:"top -70%",
        pin: true,
        onUpdate:function(elem){
          let imageIndex ;
          if(elem.progress<1){
            imageIndex = Math.floor(elem.progress*imageArray.length);
          }else{
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    })
  })



  return (
    <div>
      <div className="section1">
        <div ref={imageDivRef} className="absolute overflow-hidden h-[20vw] rounded-4xl w-[15vw]  top-[10vw] left-[30vw]  ">
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="/public/images/carl.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font1]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Soxian7e <br />
              Douze
            </h1>
          </div>
          <div className="pl-[50%]  mt-2">
            <p className="text-6xl">
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit &nbsp;
              notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue àlong
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen "></div>
    </div>
  );
};

export default Agence;
