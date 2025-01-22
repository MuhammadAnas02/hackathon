import React from 'react'
import instagram from '@/../Public/assets/instagram.png'

export default function Instagram() {
  return (
<div
  className="mx-auto w-full 2xl:w-[1600px] h-[300px] sm:h-[400px] md:h-[450px] object-contain bg-cover bg-center"
  style={{ backgroundImage: `url(${instagram.src})` }}
>
  <div className="pt-[100px] sm:pt-[120px] md:pt-[150px] text-center">
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">Our Instagram</h1>
    <p className="pt-4 sm:pt-5 md:pt-6 text-sm sm:text-base">
      Follow our store on Instagram
    </p>
    <button className="bg-[#FAF4F4] rounded-full border px-5 sm:px-[20px] md:px-[30px] py-2 sm:py-[8px] md:py-[10px] mt-4">
      Follow us
    </button>
  </div>
</div>


  )
}
