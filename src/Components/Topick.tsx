import Image from 'next/image'
import React from 'react'
import top1 from '@/../Public/assets/top1.png'
import top2 from '@/../Public/assets/top2.png'
import top3 from '@/../Public/assets/top3.png'
import top4 from '@/../Public/assets/top4.png'

export default function Topick() {
  return (
    <div className="mx-auto 2xl:w-[1600px] w-full h-auto md:h-[777px] bg-white">
    <h1 className="text-3xl md:text-5xl text-center my-6 md:my-9">Top Pick for you</h1>
    <p className="text-[#9F9F9F] text-sm md:text-base py-1 mx-auto text-center px-4 md:px-0">
      Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-32 mt-8">
      {/* First Item */}
      <div>
        <Image src={top1} alt="top1" width={287} height={287} className="w-full max-w-[287px] mx-auto" />
        <p className="text-black mt-4 text-center md:text-left">Trenton modular sofa_3</p>
        <h1 className="text-black text-lg md:text-xl font-semibold text-center md:text-left">Rs. 25,000.00</h1>
      </div>
      {/* Second Item */}
      <div className="pt-4 md:pt-10">
        <Image src={top2} alt="top2" width={287} height={287} className="w-full max-w-[287px] mx-auto" />
        <p className="text-black mt-6 md:mt-14 text-center md:text-left">Granite dining table with <br /> dining chair</p>
        <h1 className="text-black text-lg md:text-xl font-semibold text-center md:text-left">Rs. 25,000.00</h1>
      </div>
      {/* Third Item */}
      <div className="pl-0 md:pl-4 -mt-4 md:-mt-9">
        <Image src={top3} alt="top3" width={287} height={287} className="w-full max-w-[287px] mx-auto" />
        <p className="text-black mt-6 md:mt-14 text-center md:text-left">Outdoor bar table and <br /> stool</p>
        <h1 className="text-black text-lg md:text-xl font-semibold text-center md:text-left">Rs. 25,000.00</h1>
      </div>
      {/* Fourth Item */}
      <div className="pt-4 md:pt-10">
        <Image src={top4} alt="top4" width={287} height={287} className="w-full max-w-[287px] mx-auto" />
        <p className="text-black mt-6 md:mt-14 text-center md:text-left">Plain console with teak <br /> mirror</p>
        <h1 className="text-black text-lg md:text-xl font-semibold text-center md:text-left">Rs. 25,000.00</h1>
      </div>
    </div>
    <p className="text-center text-xl md:text-2xl mt-10 md:mt-[100px]">View More</p>
    <div className="h-1 mt-6 md:mt-[38px] rounded-xl w-[60px] md:w-[100px] mx-auto bg-black"></div>
  </div>
  
  
  )
}
