"use client";
import Image from "next/image";
import { IoIosHeart } from "react-icons/io";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface CarCardType {
  head: string;
  subHead: string;
  heartColor: string; // "red" or "white"
  carImage: string;
  litter: string;
  vehicleType: string;
  sittingCapacity: string;
  price: string;
  oldPrice?: string;
  buttonText: string;
  className?: string;
}

export default function CarCardComp({
  head,
  subHead,
  heartColor,
  carImage,
  litter,
  vehicleType,
  sittingCapacity,
  price,
  oldPrice,
  buttonText,
  className,
}: CarCardType) {
  const [heartClr, setHeartClr] = useState<boolean>(heartColor === "red");

  const changeHeartColor = () => {
    setHeartClr(!heartClr);
  };

  return (
    <div
      className={`flex flex-col justify-between items-center rounded-lg bg-background p-5 ${className}`}
    >
      <div className="w-full">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl text-foreground">{head}</p>
          <Image
            src={heartClr ? "/heartRed.svg" : "/heartWhite.svg"}
            alt="Heart Icon"
            width={40}
            height={40}
            onClick={changeHeartColor}
            className="cursor-pointer w-6 h-6"
          />
        </div>
        <p className="font-semibold text-sm text-card-foreground">{subHead}</p>
      </div>

      <Image
        src={carImage}
        alt={head}
        width={400}
        height={400}
        className="w-[90%] py-14"
      />
      <div className="space-y-5 w-full">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/iconLitter.svg"
              alt="Litter Icon"
              width={200}
              height={200}
              className="w-5 h-5"
            />

            <p className="font-medium text-sm text-card-foreground">{litter}</p>
          </div>
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/iconManual.svg"
              alt="Litter Icon"
              width={200}
              height={200}
              className="w-5 h-5"
            />

            <p className="font-medium text-sm text-card-foreground">
              {vehicleType}
            </p>
          </div>
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/iconProfileTwoUsers.svg"
              alt="Litter Icon"
              width={200}
              height={200}
              className="w-5 h-5"
            />

            <p className="font-medium text-sm text-card-foreground">
              {sittingCapacity}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-xl text-foreground leading-none">
              {price}
              <span className="font-semibold text-sm text-card-foreground">
                day
              </span>
            </p>

            <del className="font-semibold text-sm text-card-foreground leading-none">
              {oldPrice}
            </del>
          </div>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
}
