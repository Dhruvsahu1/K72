import React from "react";

const Agence = () => {
  return (
    <div>
      <div className="section1">
        <div className="absolute overflow-hidden h-[20vw] rounded-4xl w-[15vw]  top-[10vw] left-[30vw]  ">
          <img
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
          <div className="pl-[40%]  mt-20">
            <p className="text-5xl">
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
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
