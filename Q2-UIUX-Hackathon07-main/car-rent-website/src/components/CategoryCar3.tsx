import React from 'react'
import CarCardComp from './CarCardComp'
import { Button } from './ui/button'

export default function CategoryCar3() {
  return (
    
            <div className="my-8 px-6 md:px-8 lg:px-16 2xl:px-24">
              <div className="flex justify-between items-center p-3">
                
             
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 ">
                <CarCardComp
                  head="MG ZX Exclusice"
                  subHead="Hatchback"
                  heartColor="red"
                  carImage="/AdsTen.png"
                  litter="70L"
                  vehicleType="Manual"
                  sittingCapacity="4 People"
                  price="$76.00/"
                  oldPrice="$80.00"
                  buttonText="Rent Now"
                  className=""
                />
                <CarCardComp
                  head="New MG ZS"
                  subHead="SUV"
                  heartColor="white"
                  carImage="/AdsEleven.png"
                  litter="80L"
                  vehicleType="Manual"
                  sittingCapacity="6 People"
                  price="$80.00/"
                  oldPrice=""
                  buttonText="Rent Now"
                  className=""
                />
                <CarCardComp
                  head="MG ZX Excite"
                  subHead="Hatchback"
                  heartColor="red"
                  carImage="/AdsTwelve.png"
                  litter="90L"
                  vehicleType="Manual"
                  sittingCapacity="4 People"
                  price="$74.00/"
                  oldPrice=""
                  buttonText="Rent Now"
                  className=""
                />
    </div>  
    <div className='relative text-center my-10'>
            <Button>Show more car</Button>
            <p className='text-xs font-medium text-gray-400 right-0 top-0 translate-y-1/2 absolute' >120Car</p>
          </div>

    </div>
  )
}
