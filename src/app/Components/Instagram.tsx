import React from 'react'
import instagram from '@/../Public/assets/instagram.png'

export default function Instagram() {
  return (
    <div
    className="mx-auto w-full 2xl:w-[1600px] h-[450px] object-contain"
    style={{ backgroundImage: `url(${instagram.src})` }}
  >
    <div className='pt-[150px] text-center'>
    <h1 className='text-center  font-bold text-7xl '>Our Instagram</h1>
    <p className='pt-6'>Follow our store on Instagram</p>
    <button className='bg-[#FAF4F4] rounded-full border px-[30px] py-[10px]'>Follow us</button>
    </div>
   
</div>

  )
}
