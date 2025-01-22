import Image from 'next/image'
import React from 'react'
import Table from '@/../Public/assets/table.png'
import sofa from '@/../Public/assets/sofa.png'
// import Link from 'next/link'

export default function Tables() {
  return (
    <div className="mx-auto 2xl:w-[1600px] w-full h-auto bg-secondary flex flex-col md:flex-row justify-evenly py-11">
    <div className="py-9 flex flex-col items-center md:items-start">
      <Image
        src={Table}
        alt="table"
        width={600}
        className="object-fill w-full max-w-[300px] md:max-w-none"
      />
      <p className="text-lg md:text-3xl -mt-4 md:-mt-[170px] pl-0 md:pl-[70px] text-center md:text-left">
        Side table
      </p>
      <p className="text-base md:text-xl pl-0 md:pl-[70px] mt-2 md:mt-[40px] text-center md:text-left">
        View more
      </p>
      <div className="w-[50px] md:w-[92px] rounded-xl mt-4 h-1 bg-black"></div>
    </div>
    <div className="py-9 flex flex-col items-center md:items-start md:pr-20">
      <Image
        src={sofa}
        alt="sofa"
        width={650}
        className="object-fill w-full max-w-[300px] md:max-w-none"
      />
      <p className="text-lg md:text-3xl -mt-4 md:-mt-[150px] pl-0 md:pl-[80px] text-center md:text-left">
        Side table
      </p>
      <p className="text-base md:text-xl pl-0 md:pl-[80px] mt-2 md:mt-10 text-center md:text-left">
        View more
      </p>
      <div className="w-[50px] md:w-[92px] rounded-xl mt-4 h-1 bg-black"></div>
    </div>
  </div>
  
  
  
  )
}
