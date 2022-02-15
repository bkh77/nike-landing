import React from "react";
import bgFeatures from "../img/bg-features.png";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import shoe8 from "../img/shoe-8.png";

export default function Features() {
  return (
    <div className="flex sm:flex-row flex-col relative">
      <div className="sm:w-[526px] sm:h-[970px] w-full h-[250px] hidden md:block">
        <img
          className="w-full h-full object-cover"
          src={bgFeatures}
          alt="bg-features"
        />
        <div className="shoe-shadow absolute bottom-24 left-0 hidden md:block"></div>
      </div>

      <img
        className="md:w-[750px] w-full rotate-[32.6deg] absolute left-4 sm:-left-20 top-[35%] opacity-50 lg:opacity-100 lg:z-0 -z-10"
        src={shoe8}
        alt="shoe-8"
      />

      <div className=" w-full sm:w-[850px] h-[970]  sm:bg-features p-[30px] md:p-[160px]  space-y-8">
        <span className="uppercase text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0047FF] to-[#EC00E2]">
          Features
        </span>

        <h1 className='font-["Bebas_Neue"] text-[45px] sm:text-[85px] leading-[50px] sm:leading-[95px] '>
          Bring The Future <br /> to Light
        </h1>

        <p className="sm:text-[16px] text-[14px] text-[#3E3E3E] sm:leading-[30px] leading-[26px] capitalize">
          the Nike SB Nyjah Free 2 is a sequel worthy of its predecessor.
          Inspired by the iconic Nike Air Zoom Spiridon, the original rubber
          design has been updated with mesh panels to help your feet stay cool
          through your hottest skate sessions.
        </p>

        <div className="flex space-x-4 items-center ">
          <p className="sm:text-[18px] text-[14px] text-[#1F170A] font-semibold mr-2">
            Colors:
          </p>
          <div className={`w-[21px] h-[21px] bg-[#DFD2BF] rounded-full`}></div>
          <div className={`w-[21px] h-[21px] bg-[#DBA82F] rounded-full`}></div>
          <div className={`w-[21px] h-[21px] bg-[#FFEF5A] rounded-full`}></div>
          <div className={`w-[21px] h-[21px] bg-[#5ACEFF] rounded-full`}></div>
        </div>

        <div className="w-full my-2 border-b-[1px] border-[rgba(62,62,62,0.2)]"></div>

        <div className="flex items-center sm:space-x-4 space-x-1 ">
          <p className="sm:text-[18px] text-[14px] text-[#1F170A] font-semibold mr-2">
            Size:
          </p>

          <div className="w-[84px] h-[37px] border-[1px] border-[rgba(62,62,62,0.3)] text-[#00000099] text-center text-[15px] leading-[32px]">
            UK 5.5
          </div>
          <div className="w-[84px] h-[37px] border-[1px] border-[rgba(62,62,62,0.3)] text-[#00000099] text-center text-[15px] leading-[32px]">
            EU 39
          </div>
          <div className="w-[84px] h-[37px] border-[1px] border-[rgba(62,62,62,0.3)] text-[#00000099] text-center text-[15px] leading-[32px]">
            UK 6.5
          </div>
          <div className="w-[84px] h-[37px] border-[1px] border-[rgba(62,62,62,0.3)] text-[#00000099] text-center text-[15px] leading-[32px]">
            UK 7.5
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row gap-4  ">
          <button className="sm:w-[176px] sm:h-[62px] w-[146px] h-[42px] font-bold sm:text-[16px] text-[14px] uppercase btn-add-to-bag text-white ">
            Add to bag <ShoppingBagIcon className="w-4 h-4 inline mb-1 ml-2" />{" "}
          </button>

          <button className="sm:w-[176px] sm:h-[62px] w-[146px] h-[42px] font-bold sm:text-[16px] text-[14px] uppercase btn-wishlist">
            wishlist <HeartIcon className="w-4 h-4 inline mb-1 ml-2" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
