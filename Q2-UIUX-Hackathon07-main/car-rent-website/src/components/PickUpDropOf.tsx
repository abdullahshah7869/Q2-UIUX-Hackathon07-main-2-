import React from "react";
import { LuArrowDownUp } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function PickUpDropOf() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-2 my-6 px-6 md:px-8 lg:px-16 2xl:px-24">
      {/* Pickup Section */}
      <div className="bg-white px-6 md:px-10 py-4 md:py-8 rounded-lg w-full lg:w-[45%] space-y-6">
        <div className="flex justify-start items-center gap-2">
          <span className="w-[10px] h-[10px] bg-primary inline-block rounded-full border-2 border-blue-300 "></span>
          <p className="text-sm font-semibold ">Pick - Up</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="space-y-">
            <p className="text-sm font-semibold">Locations</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your city
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="space-y-">
            <p className="text-sm font-semibold">Date</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your date
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="space-y-">
            <p className="text-sm font-semibold">Time</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your time
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>
      {/* pick up section ends here */}

      {/* icon of arrow */}
      <div className="bg-primary p-4 rounded-md">
        <LuArrowDownUp className="text-primary-foreground text-2xl" />
      </div>

      {/* drop of section */}
      <div className="bg-white px-6 md:px-10 py-4 md:py-8 rounded-lg w-full lg:w-[45%] space-y-6">
        <div className="flex justify-start items-center gap-2">
          <span className="w-[10px] h-[10px] bg-primary inline-block rounded-full border-2 border-blue-300 "></span>
          <p className="text-sm font-semibold ">Drop - Off</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="space-y-">
            <p className="text-sm font-semibold">Locations</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your city
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="space-y-">
            <p className="text-sm font-semibold">Date</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your date
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="space-y-">
            <p className="text-sm font-semibold">Time</p>
            <div className="flex justify-between items-center gap-4">
              <p className="text-xs font-medium text-gray-500">
                Select your time
              </p>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
