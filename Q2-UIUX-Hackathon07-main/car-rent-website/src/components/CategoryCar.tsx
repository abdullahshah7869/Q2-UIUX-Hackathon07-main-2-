import React from 'react'
import CarCardComp from './CarCardComp'
import { Button } from './ui/button'

export default function CategoryCar() {
  return (

    <div className="my-8 px-6 md:px-8 lg:px-16 2xl:px-24">
      <div className="flex justify-between items-center p-3">
        
        
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 ">
        <CarCardComp
          head="Koenigsegg"
          subHead="Sport"
          heartColor="red"
          carImage="/car01.png"
          litter="90L"
          vehicleType="Manual"
          sittingCapacity="2 People"
          price="$99.00/"
          oldPrice=""
          buttonText="Rent Now"
          className=""
        />
        <CarCardComp
          head="NissanGT-R"
          subHead="Sport"
          heartColor="white"
          carImage="/AdsThree..png"
          litter="80L"
          vehicleType="Manual"
          sittingCapacity="2 People"
          price="$80.00/"
          oldPrice="$100.00"
          buttonText="Rent Now"
          className=""
        />
        <CarCardComp
          head="Rolls-Royce"
          subHead="Sport"
          heartColor="red"
          carImage="/AdsFive.png"
          litter="70L"
          vehicleType="Manual"
          sittingCapacity="4 People"
          price="$96.00/"
          oldPrice=""
          buttonText="Rent Now"
          className=""
        />
</div>
</div>
  )
}
