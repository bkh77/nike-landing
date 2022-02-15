import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import bgCircle from "../img/bg-circle.png";
import shoe7 from "../img/shoe-7.png";

import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RiInstagramFill, RiMouseFill } from "react-icons/ri";

export default function Header() {
  return (
    <div className="flex relative">
      <div className="w-[537px] h-[609px] sm:h-[909px] bg-[#FFFAD0] hidden md:block "></div>

      <div className="absolute left-[32px] md:left-[83px] top-[116px] sm:top-[226px] space-y-6 z-50">
        <span className="text-[18px] uppercase font-bold text-[#00A79D] pb-2 border-b-2 border-[#00A79D]">
          Men's Shoes
        </span>

        <h1 className="text-[76px] sm:text-[126px] sm:leading-[125px] font-['Bebas_Neue'] leading-[76px] ">
          Nike SB Nyjah <br /> Free 2
        </h1>

        <h2 className="text-[#FF9A00] sm:text-[35px] text-[26px] font-bold ">
          $259.00
        </h2>

        <button className="sm:w-[172px] w-[162px] sm:h-[62px] h-[52px] btn-buy text-white font-semibold uppercase">
          Buy Now <ArrowNarrowRightIcon className="w-4 h-4 inline mb-1 ml-2" />{" "}
        </button>
      </div>

      <div className="w-[903px] h-[609px] sm:h-[909px] bg-grd-header flex justify-center items-center relative ">
        <div className="w-[250px] h-[250px] sm:w-[600px] sm:h-[600px] rounded-full overflow-hidden -rotate-[2.98deg]">
          <img className="w-full h-full" src={bgCircle} alt="bg-alfa" />
        </div>

        <div className="absolute right-14  top-[16rem] -rotate-[33deg] ">
          <img className="w-[888px] filter-shoe" src={shoe7} alt="shoe 7" />
        </div>
      </div>

      <IconContext.Provider value={{ color: "white", className: "w-6 h-6" }}>
        <div className="sm:w-[214px] w-[200px] sm:h-[54px] h-[46px] socials absolute bottom-0 right-0 flex justify-evenly items-center">
          <button>
            <FaFacebookF />
          </button>
          <button>
            <FaTwitter />
          </button>
          <button>
            <RiInstagramFill />
          </button>
          <button>
            <FaYoutube />
          </button>
        </div>
      </IconContext.Provider>

      <div className="absolute bottom-[120px] sm:right-[18px] right-0 flex flex-col justify-center items-center">
        <p className="rotate-[90deg] text-white text-[18px] mb-[100px]">
          scroll down
        </p>

        <div className="w-[80px] h-[1px] bg-white rotate-[90deg] mb-[70px]"></div>

        <IconContext.Provider
          value={{ color: "white", className: "w-6 h-6 inlin" }}
        >
          <RiMouseFill />
        </IconContext.Provider>
      </div>
    </div>
  );
}
