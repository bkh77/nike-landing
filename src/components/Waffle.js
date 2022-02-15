import React from "react";
import ton from "../img/ton1.png";

export default function Waffle() {
  return (
    <div className="h-[640px] grid grid-cols-2 relative">
      <div className="legs1 ">
        <img
          className="w-full h-full opacity-50 mix-blend-lighten"
          src={ton}
          alt="ton"
        />
      </div>
      <div className="legs2">
        <img
          className="w-full h-full opacity-50 mix-blend-lighten"
          src={ton}
          alt="ton"
        />
      </div>

      <div className=" absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 
      sm:w-[626px] sm:h-[301px] w-full h-[226px] bg-[rgba(255,255,255,0.8)] opacity-[0.95] backdrop-blur-sm text-center flex justify-center items-center flex-col space-y-6">
        <h1 className="sm:text-[60px] text-[40px] sm:leading-[72px] font-['Bebas_Neue'] ">
          Waffle One Crater
        </h1>

        <button className="sm:w-[177px] sm:h-[61px] w-[152px] h-[44px] btn-buy text-white font-semibold uppercase">
          Shop Now
        </button>
      </div>
    </div>
  );
}
