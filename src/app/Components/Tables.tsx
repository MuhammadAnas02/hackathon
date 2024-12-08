import Image from 'next/image'
import React from 'react'
import Table from '@/../Public/assets/table.png'
import sofa from '@/../Public/assets/sofa.png'
// import Link from 'next/link'

export default function Tables() {
  return (
    <div className='mx-auto 2xl:w-[1600px] w-full h-[672] bg-secondary flex justify-evenly py-11 '>
      <div className=' py-9   '>
        <Image src={Table} alt='table' width={600} className='object-fill'></Image>
        <p className='text-3xl -mt-[170px] pl-[70px]  '>Side table</p>
        <p  className='text-xl pl-[70px] mt-[40px]'>View more</p>
        <div className='w-[92px] rounded-xl mt-4 h-1 ml-[70px] bg-black'></div>
      </div>
      <div className='pr-20'>
        <Image src={sofa} alt = 'sofa' width={650} ></Image>
        <p className='text-3xl -mt-[150px] pl-[80px] '>Side table</p>
        <p className='text-xl pl-[80px] mt-10'>View more</p>
        <div className='w-[92px] rounded-xl mt-4 h-1 ml-[80px] bg-black'></div>


      </div>
    </div>
  )
}
