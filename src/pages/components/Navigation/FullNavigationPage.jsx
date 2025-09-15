import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { navBarContext } from "../../../context/NavContext";

const FullNavigationPage = () => {
      const fullNavLinkRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(navBarContext);

  useGSAP(
    function () {
      if (navOpen) {
        // OPEN NAV
        gsap.set(fullScreenRef.current, { display: "block" });

        const tl = gsap.timeline();
        tl.from(".stairing", {
          delay: 0.5,
          y: 100,
          height: 0,
          stagger: { amount: -0.25 },
        })
          .from(fullNavLinkRef.current, {
            opacity: 0,
          })
          .from(".link", {
            opacity: 0,
            rotateX: 90,
            stagger: { amount: -0.25 },
          })
          .from(".navLink", {
            opacity: 1,
          });
      } else {
        // CLOSE NAV
        gsap.to(fullScreenRef.current, {
          opacity: 0,
          duration: 0.4,
          onComplete: () => {
            gsap.set(fullScreenRef.current, { display: "none", opacity: 1 });
          },
        });
      }
    },
    [navOpen]
  );

  return (
    <div ref={fullScreenRef} id="fullScreenNav" className="fullScreenNav hidden text-white w-full h-screen fixed top-0 left-0 z-[9999] overflow-hidden">
        <div  className="h-screen w-full fixed ">
            <div className='h-full w-full flex'>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                        <div className='stairing h-full w-1/5 bg-black'></div>
                    </div>
        </div>
      <div ref={fullNavLinkRef} className="relative">
        <div  className=" navlink flex w-full justify-between p-5 items-start">
        <div className=" w-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="44"
            viewBox="0 0 103 44"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
        <div onClick={()=>{
            setNavOpen(false)
        }} className="h-25 w-25 relative cursor-pointer group">
          
            <div className="h-35 w-1 -rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50]   "></div>
            <div className="h-35 w-1 right-0 rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50]   "></div>
        </div>
      </div>
      <div className="">
        <div className="link origin-top relative border-t border-white">
          <h1 className="font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
            Projects
          </h1>
          <div className=" moveLink absolute text-black top-0 bg-[#D3FD50] flex ">
            <div className="movelink moveX flex p-2  items-center">
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/crisis24_behance_1920X1200_cartes-1280x960.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/OKA_thumbnail-1280x960.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex p-2 items-center">
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/Snow.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/Bag.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="link origin-top relative border-t border-white">
          <h1 className="font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
            Agence
          </h1>
          <div className=" moveLink absolute text-black top-0 bg-[#D3FD50] flex ">
            <div className="movelink moveX flex p-2  items-center">
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/crisis24_behance_1920X1200_cartes-1280x960.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/OKA_thumbnail-1280x960.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex p-2 items-center">
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/Snow.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/Bag.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="link origin-top relative border-t border-white">
          <h1 className="font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
            Contact
          </h1>
          <div className=" moveLink absolute text-black top-0 bg-[#D3FD50] flex ">
            <div className="movelink moveX flex p-2  items-center">
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/OKA_thumbnail-1280x960.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/Bag.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex p-2 items-center">
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/Snow.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/PME-MTL_Thumbnail-1280x960.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="link origin-top relative border-y border-white">
          <h1 className="font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
            Blogue
          </h1>
          <div className=" moveLink absolute text-black top-0 bg-[#D3FD50] flex ">
            <div className="movelink moveX flex p-2  items-center">
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/Snow.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/OKA_thumbnail-1280x960.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex p-2 items-center">
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/crisis24_behance_1920X1200_cartes-1280x960.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center uppercase leading-[0.8] pt-5">
                Pour Tout voir
              </h2>
              <img
                className="h-20 w-64 shrink-0 rounded-full object-cover"
                src="/public/Images/Bag.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FullNavigationPage;
