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
<div className="w-full h-[1442]   ">
    <div className=" flex mx-auto 2xl:w-[1600px]  bg-primary  w-[100%]">
      <div className="mt-[380px] ml-[230px] ">
        <h1 className="text-7xl font-semibold">
        Rocket single <br/> <span>Seater</span> 
        </h1>
        <p className="mt-[40px] font-semibold text-2xl " >Shop Now</p>
      </div>
      <div className="-mt-8 -ml-9 ">
        <Image src={Banner} alt="Banner" width={846} height={1250} className="object-cover" ></Image>
        
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
