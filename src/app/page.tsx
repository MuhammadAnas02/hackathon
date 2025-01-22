import Image from "next/image";
import React from "react";
import Banner from '@/../Public/assets/image.png'
import Tables from "@/Components/Tables";
import Topick from "@/Components/Topick";
import NewArrivial from "@/Components/NewArrivial";
import Blogs from "../Components/Blogs";
import Instagram from "../Components/Instagram";


export default function Home() {
  return (
<>
<div className="w-full h-auto">
  <div className="flex flex-col md:flex-row mx-auto 2xl:w-[1600px] bg-primary w-full">
    {/* Text Content */}
    <div className="mt-[100px] md:mt-[380px] ml-6 md:ml-[230px] text-center md:text-left">
      <h1 className="text-4xl md:text-7xl font-semibold">
        Rocket single <br /> <span>Seater</span>
      </h1>
      <p className="mt-6 md:mt-[40px] font-semibold text-lg md:text-2xl">
        Shop Now
      </p>
    </div>

    {/* Image Section */}
    <div className="mt-8  md:-mt-8 md:-ml-9 flex justify-center">
      <Image
        src={Banner}
        alt="Banner"
        width={846}
        height={1250}
        className="object-cover w-full max-w-[300px] md:max-w-none"
      />
    </div>
  </div>
</div>

   <Tables/>
   <Topick/>
   <NewArrivial/>
   <Blogs/>
   <Instagram/>
</>
  );
}
