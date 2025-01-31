import React from "react";
import { LuSearch } from "react-icons/lu";
import { PiSlidersHorizontal } from "react-icons/pi";
import { IoHeart } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";
import Image from "next/image";

export default function Header() {
  return (
    <div className="px-6 md:px-8 lg:px-16 2xl:px-24">
      <div className="flex justify-between items-center border-none sm:border py-6 ">
        <div className="flex justify-between items-center gap-6 lg:gap-14">
          <h2 className="font-bold text-2xl md:text-[32px] text-primary">
            MORENT
          </h2>
          <div className="hidden md:flex justify-between items-center border rounded-full px-4 py-2 gap-4">
            <LuSearch className="text-xl text-[#90A3BF]" />
            <input
              type="text"
              placeholder="Search something here"
              className="w-52 lg:w-80 placeholder:text-sm text-sm font-medium outline-none"
            />
            <PiSlidersHorizontal className="text-2xl text-[#90A3BF]" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 lg:gap-5">
          <div className="hidden sm:grid place-items-center border w-11 h-11 rounded-full">
            <IoHeart className="text-2xl text-[#596780]" />
          </div>
          <div className="hidden sm:grid place-items-center border w-11 h-11 rounded-full relative">
            <span className="w-3 h-3 bg-red-600 rounded-full absolute right-0 top-0"></span>
            <FaBell className="text-2xl text-[#596780]" />
          </div>
          <div className="hidden sm:grid place-items-center border w-11 h-11 rounded-full">
            <RiSettings4Fill className="text-2xl text-[#596780]" />
          </div>
          <Image
            src="/profile image.png"
            alt="profile image"
            width={100}
            height={100}
            className="w-11 h-11"
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex sm:hidden justify-between items-center border rounded-md px-4 h-11 gap-4 w-full">
          <LuSearch className="text-xl text-[#90A3BF]" />
          <input
            type="text"
            placeholder="Search something here"
            className="w-full placeholder:text-sm text-sm font-medium outline-none"
          />
        </div>
        <div className="grid sm:hidden place-items-center border w-12 h-11 rounded-md">
          <PiSlidersHorizontal className="text-2xl text-[#90A3BF]" />
        </div>
      </div>
    </div>
  );
}
