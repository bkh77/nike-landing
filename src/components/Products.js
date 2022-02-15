import React from "react";

import { ShoppingBagIcon } from "@heroicons/react/outline";
// import leron1 from "../img/leron1png.png";
import data from "../data/products.json";

export default function Products() {
  return (
    <div className="lg:h-[930px] mb-8 lg:mb-0">
      <div className="text-center sm:p-32 p-6 sm:space-y-[30px]">
        <span className="text-[20px] uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0047FF] to-[#EC00E2] leading-[23px]">
          Categorys
        </span>

        <h2 className='text-[#1F170A] sm:text-[60px] text-[42px] sm:leading-[72px] uppercase font-["Bebas_Neue"]'>
          Similler product
        </h2>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[265px] h-[406px] card-shadow flex flex-col justify-center space-y-4 p-4 items-center relative"
          >
            <div
              style={{ background: item.bgColor }}
              className={`w-[147px] h-[147px] rounded-full`}
            ></div>

            <div className="flex space-x-4 ">
              <div
                className={`w-[13px] h-[13px] bg-[#DFD2BF] rounded-full`}
              ></div>
              <div
                className={`w-[13px] h-[13px] bg-[#DBA82F] rounded-full`}
              ></div>
              <div
                className={`w-[13px] h-[13px] bg-[#FFEF5A] rounded-full`}
              ></div>
              <div
                className={`w-[13px] h-[13px] bg-[#5ACEFF] rounded-full`}
              ></div>
            </div>

            <h3 className="text-[#3A2E39] text-[25px] uppercase font-['Bebas_Neue']">
              {item.name}
            </h3>

            <h3 className="text-[#FF3D00] text-[20px] uppercase font-['Bebas_Neue'] tracking-widest">
              {item.price}
            </h3>

            <button className="w-[132px] h-[36px] text-[12px] uppercase card-btn">
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#0047FF] 
                    to-[#EC00E2] font-semibold"
              >
                Add To Cart
              </span>
              <ShoppingBagIcon className="w-4 h-4 inline mb-1 ml-2 text-[#EC00E2]" />
            </button>

            <img
              className="absolute w-[209px] rotate-[-23deg] top-[11px] left-2"
              src={require("../img" + item.img)}
              alt="shoe leron 1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
