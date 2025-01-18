import Image from 'next/image'
import React from 'react'
import NewArrival from '@/../Public/assets/NewArrivals.png'

export default function NewArrivial() {
  return (
    <div className=" flex mx-auto 2xl:w-[1600px]  bg-newArrival h-[639px]  w-[100%]">
      <div className=" ">
        <Image src={NewArrival} alt='New Arrival' width={836} height={400}></Image>
        </div>
        <div className='mt-[250px] ml-[50px] '>
            <h3 className='text-center text-xl font-semibold'>New Arrivals</h3>
            <h1 className='font-extrabold text-5xl  pt-[20px]'>Asgaard sofa</h1>
            <button className='border-2 border-black mt-[40px]  w-[236px] h-[58px] ml-[40px] '>Order Now</button>
        </div>
    </div>
  )
}