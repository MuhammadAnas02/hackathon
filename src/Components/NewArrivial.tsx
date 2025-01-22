import Image from 'next/image'
import React from 'react'
import NewArrival from '@/../Public/assets/NewArrivals.png'

export default function NewArrivial() {
  return (
    <div className="flex flex-col md:flex-row mx-auto 2xl:w-[1600px] bg-newArrival h-auto md:h-[639px] w-full">
    {/* Image Section */}
    <div className="w-full flex justify-center md:w-auto">
      <Image
        src={NewArrival}
        alt="New Arrival"
        width={836}
        height={400}
        className="object-cover w-full max-w-[350px] md:max-w-none"
      />
    </div>
  
    {/* Text Content */}
    <div className="mt-10 md:mt-[250px] md:ml-[50px] text-center md:text-left px-6 md:px-0">
      <h3 className="text-xl font-semibold">New Arrivals</h3>
      <h1 className="font-extrabold text-3xl md:text-5xl pt-4 md:pt-[20px]">
        Asgaard sofa
      </h1>
      <button className="border-2 border-black mt-6 md:mt-[40px] w-[200px] md:w-[236px] h-[48px] md:h-[58px] mx-auto md:ml-[40px]">
        Order Now
      </button>
    </div>
  </div>
  
  )
}