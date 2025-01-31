import React from "react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="flex justify-between items-center px-6 md:px-8 lg:px-16 2xl:px-24 pt-10">
    
      <div className="bg-[#54A6FF] bg-[url('/AdsOne.png')] w-[49%] h-96 bg-center bg-no-repeat rounded-xl">
      <div className="p-7">
        <h1 className="font-samibold text-4xl text-white">The Best PlateForm  <br/>for Car Rental </h1><br />
        <p className="text-white font-samibold">Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p><br /><br />
        <Button>Rental Car</Button>
        </div>
      </div>
      <div className="bg-primary bg-[url('/AdsTwo.png')] w-[49%] h-96 bg-center bg-no-repeat rounded-xl">
      <div className="p-7">
        <h1 className="font-samibold text-4xl text-white">Easy Way To Rent a  <br/> Car at a low price </h1><br />
        <p className="text-white font-samibold">Providing Cheap Car Rental Services <br /> and save and comfortable facilities.</p><br /><br />
        <Button className="bg-blue-500">Rental Car</Button>
        </div>
      </div>
    </div>
  );
}
