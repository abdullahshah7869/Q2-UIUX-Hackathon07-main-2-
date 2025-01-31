import React from 'react'
import CarCardComp from './CarCardComp'

export default function CategoryCar2() {
  return (
     <div className="my-8 px-6 md:px-8 lg:px-16 2xl:px-24">
          <div className="flex justify-between items-center p-3">
        
         
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <CarCardComp
              head="All New Rush"
              subHead="SUV"
              heartColor="white"
              carImage="/AdsSix.png"
              litter="70L"
              vehicleType="Manual"
              sittingCapacity="6 People"
              price="$72.00/"
              oldPrice="$80.00"
              buttonText="Rent Now"
              className=""
            />
            <CarCardComp
              head="CR - V"
              subHead="SUV"
              heartColor="red"
              carImage="/AdsSeven.png"
              litter="80L"
              vehicleType="Manual"
              sittingCapacity="6 People"
              price="$80.00/"
              oldPrice=""
              buttonText="Rent Now"
              className=""
            />
            <CarCardComp
              head="All New Terios"
              subHead="SUV"
              heartColor="white"
              carImage="/AdsEight.png"
              litter="90L"
              vehicleType="Manual"
              sittingCapacity="6 People"
              price="$74.00/"
              oldPrice=""
              buttonText="Rent Now"
              className=""
            />
    </div>  
    </div>
  )
}
