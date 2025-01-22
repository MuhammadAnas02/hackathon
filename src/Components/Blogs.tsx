import Image from 'next/image'
import React from 'react'
import Blog1 from '@/../Public/assets/blog1.png'
import Blog2 from '@/../Public/assets/blo2.png'
import Blog3 from '@/../Public/assets/blog3.png'
import { FaRegClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

export default function Blogs() {
  return (
    <div className="mx-auto 2xl:w-[1600px] h-auto md:h-[944px] bg-white">
  <div>
    <h1 className="text-center text-xl md:text-2xl font-semibold mt-6 md:mt-11">Our Blogs</h1>
    <p className="text-center text-sm md:text-base text-[#9F9F9F] mt-2 md:mt-3">
      Find a bright ideal to suit your taste with our great selection
    </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-[100px] mt-8">
    <div>
      <Image
        src={Blog1}
        alt="Blog1"
        width={393}
        height={393}
        className="w-full max-w-[393px] mx-auto"
      />
      <p className="text-center mt-2 text-sm md:text-base">
        Going all-in with millennial design
      </p>
      <h2 className="text-lg md:text-2xl text-center mt-4 font-semibold">
        Read More
      </h2>
      <div className="flex justify-center md:justify-start gap-x-3 mt-2">
        <FaRegClock className="mt-1" />
        <p className="text-sm md:text-base">5 min</p>
        <CiCalendar className="mt-1" />
        <p className="text-sm md:text-base">12th Oct 2022</p>
      </div>
    </div>
    <div>
      <Image
        src={Blog2}
        alt="Blog2"
        width={393}
        height={393}
        className="w-full max-w-[393px] mx-auto"
      />
      <p className="text-center mt-2 text-sm md:text-base">
        Going all-in with millennial design
      </p>
      <h2 className="text-lg md:text-2xl text-center mt-4 font-semibold">
        Read More
      </h2>
      <div className="flex justify-center md:justify-start gap-x-3 mt-2">
        <FaRegClock className="mt-1" />
        <p className="text-sm md:text-base">5 min</p>
        <CiCalendar className="mt-1" />
        <p className="text-sm md:text-base">12th Oct 2022</p>
      </div>
    </div>
    <div>
      <Image
        src={Blog3}
        alt="Blog3"
        width={393}
        height={393}
        className="w-full max-w-[393px] mx-auto"
      />
      <p className="text-center mt-2 text-sm md:text-base">
        Going all-in with millennial design
      </p>
      <h2 className="text-lg md:text-2xl text-center mt-4 font-semibold">
        Read More
      </h2>
      <div className="flex justify-center md:justify-start gap-x-3 mt-2">
        <FaRegClock className="mt-1" />
        <p className="text-sm md:text-base">5 min</p>
        <CiCalendar className="mt-1" />
        <p className="text-sm md:text-base">12th Oct 2022</p>
      </div>
    </div>
  </div>
  <p className="text-center text-lg md:text-2xl mt-10 md:mt-[100px]">View More</p>
  <div className="h-1 mt-6 md:mt-[38px] rounded-xl w-[60px] md:w-[100px] mx-auto bg-black"></div>
</div>

  )
}
