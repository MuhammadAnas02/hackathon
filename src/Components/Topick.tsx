import Image from 'next/image'
import React from 'react'
import top1 from '@/../Public/assets/top1.png'
import top2 from '@/../Public/assets/top2.png'
import top3 from '@/../Public/assets/top3.png'
import top4 from '@/../Public/assets/top4.png'

export default function Topick() {
  return (
    <div className='mx-auto 2xl:w-[1600px] w-full h-[777px] bg-white'>
      <h1 className='text-5xl text-center my-9'>Top Pick for you</h1>
      <p className='text-[#9F9F9F] py-1 mx-auto  text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      <div className='grid grid-cols-4 px-32 '>

        <div>
          <Image src={top1} alt='top1 ' width={287} height={287}></Image>
          <p className='text-black mt-4'>Trenton modular sofa_3</p>
          <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
        </div>
        <div className='pt-10'>
        <Image src={top2} alt='top1'width={287} height={287}></Image>
        <p className='text-black mt-14'>Granite dining table with <br /> dining chair</p>
        <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
        </div>
        <div className='pl-4 -mt-9' >
        <Image src={top3} alt='top1' width={287} height={287}></Image>
        <p className='text-black mt-14'>Outdoor bar table and <br /> stool</p>
          <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
        </div>
        <div className='pt-10'>
        <Image src={top4} alt='top1' width={287} height={287}></Image>
        <p className='text-black mt-14'>Plain console with teak <br /> mirror</p>
          <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
        </div>

      </div>
      <p className='text-center text-2xl mt-[100px]'>View More</p>
      <div className='h-1 mt-[38px] rounded-xl  w-[100px] mx-auto bg-black'></div>

     
      
    </div>
  )
}
