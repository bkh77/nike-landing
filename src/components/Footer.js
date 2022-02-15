import React from "react";
import nikeWhite from "../img/nike-logo-white.png";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className=" lg:h-[419px] bg-[#02083C] p-[78px] text-white/75">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
        <div className="relative space-y-8">
          <img
            className="w-[80px] block"
            src={nikeWhite}
            alt="White Nike logo"
          />

          <p className="text-[14px] capitalize text-white">
            Stay update with our lastes ventures & news
          </p>

          <input
            className="bg-transparent border-b-2 w-full outline-none py-[12px]"
            type="text"
            placeholder="enter your email box"
          />

          <button>
            <ArrowRightIcon className="w-4 h-4 inline absolute right-0 bottom-4" />{" "}
          </button>
        </div>
        <div className="">
          <h3 className="text-[22px] font-semibold text-white">GET HELP</h3>
          <ul className="space-y-4 mt-6 text-[14px] hover">
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[22px] font-semibold text-white">About Nike</h3>
          <ul className="space-y-4 mt-6 text-[14px] hover">
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className="lg:place-self-start" >
          <IconContext.Provider
            value={{ color: "#ffffff", className: "w-6 h-6 " }}
          >
            <div className="w-full space-x-6">
              <button >
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
        </div>
      </div>
      <div className="border-t-2 border-white/50 mt-6 lg:mt-[87px]" >
            <p className="text-[14px] font-thin text-center mt-4" >Copyright © 2022 Reluxy ! All Rights Reserved By Bakhtiyor Khasanov </p>
      </div>
    </div>
  );
}
