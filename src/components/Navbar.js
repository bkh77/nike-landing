import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { MenuAlt1Icon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import { ShoppingBagIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <nav className="w-full h-[180px] sm:h-[90px] flex relative">
      <div className="bg-[#FFFFF5] flex w-[1346px] justify-between items-center pl-8">
        
        <div className="flex space-x-10">
          <img
            className="w-[80px]"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="nike logo"
          />
          <ul className="sm:flex sm:space-y-0 sm:space-x-6 space-y-2 uppercase cursor-pointer">
            <li>men</li>
            <li>women</li>
            <li>kids</li>
            <li>customise</li>
          </ul>
        </div>
        <div className="text-[#686868] sm:flex sm:space-y-0 sm:space-x-4 space-y-2 mr-8">
          <span className="nav-icons">
            <SearchIcon className="w-6 h-6" />
          </span>
          <span className="nav-icons">
            <HeartIcon className="w-6 h-7" />
          </span>
          <span className="nav-icons">
            <ShoppingBagIcon className="w-6 h-6" />
          </span>
        </div>
      </div>
      <div className="w-[94px] h-full bg-[#FFC700] flex justify-center items-center">
        <MenuAlt1Icon className="w-6 h-6 text-[#1F170A] rotate-180 cursor-pointer " />
      </div>
    </nav>
  );
}
