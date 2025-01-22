
import React from 'react'
import product from '@/../Public/assets/product.png'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/../Public/assets/logo.png'
import { CgMenuGridO } from "react-icons/cg";


import { PiGreaterThanLight } from 'react-icons/pi'
import { client } from '@/sanity/lib/client'
import { urlFor} from '@/sanity/lib/image'

export const getProduct = async()=>{
  const res = await client.fetch(`*[_type== "product"]{
   title,
    description,
    "CurrentSlug" : slug.current,
    image,
    price,
}`)
  return res
  
}


export default async function Product() {
  const data = await getProduct()
  return (
    <div className="w-full">
  <div
    className="w-full mx-auto h-[316px] 2xl:w-[1600px] object-fill bg-cover bg-center"
    style={{ backgroundImage: `url(${product.src})` }}
  >
    <Image src={logo} alt="logo" className="mx-auto pt-[40px] w-[90px]" />
    <h1 className="text-center text-3xl font-bold pt-[10px]">Shop</h1>
    <div className="flex justify-center md:justify-start mx-auto md:mx-[740px]">
      <Link href="/" className="font-bold">
        Home
      </Link>
      <PiGreaterThanLight size={15} className="mt-1.5 mx-2" />
      <Link href="/Product">Products</Link>
    </div>
  </div>

  <div className="w-full mx-auto 2xl:w-[1600px] bg-[#FAF4F4] flex flex-col md:flex-row justify-between py-8 px-4 md:px-0">
    <div className="flex flex-col md:flex-row gap-4 md:ml-24 md:gap-x-9">
      <p>Filter</p>
      <CgMenuGridO className="mt-1" />
      <p className="hidden md:block">|</p>
      <p>Showing 1–16 of 32 results</p>
    </div>
    <div className="flex flex-col md:flex-row gap-4 justify-between md:gap-x-9 md:mr-36">
      <p>Show</p>
      <p className="bg-white px-2 py-1">16</p>
      <p>Sort by</p>
      <input
        type="text"
        placeholder="Default"
        className="px-[15px] py-2 md:py-6"
      />
    </div>
  </div>

  <div className="mx-auto 2xl:w-[1600px] bg-white">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-6 md:px-16 gap-4 md:gap-6">
      {data.map((datas, id) => (
        <div key={id}>
          <Link href={`/Product/${datas.CurrentSlug}`}>
            <Image
              src={urlFor(datas.image).url()}
              width={287}
              height={287}
              alt="Hello"
            />
          </Link>
          <p>{datas.title}</p>
          <p>{datas.price}</p>
        </div>
      ))}
    </div>

    <div className="flex justify-center gap-x-5 my-[50px] md:my-[110px]">
      <div className="bg-[#FBEBB5] px-5 py-3 rounded-xl">1</div>
      <div className="bg-[#FFF9E5] px-5 py-3 rounded-xl">2</div>
      <div className="bg-[#FFF9E5] px-5 py-3 rounded-xl">3</div>
      <div className="bg-[#FFF9E5] px-5 py-3 rounded-xl">Next</div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-5 bg-secondary py-8 md:py-16">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">Free Delivery</h1>
        <p className="text-[#9F9F9F] text-sm md:text-base">
          For all orders over $50, consectetur <br className="hidden md:block" />
          adipim scing elit.
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">90 Days Return</h1>
        <p className="text-[#9F9F9F] text-sm md:text-base">
          If goods have problems, consectetur <br className="hidden md:block" />
          adipim scing elit.
        </p>
      </div>
      <div className="text-center md:text-start">
        <h1 className="text-2xl md:text-4xl font-semibold">Secure Payment</h1>
        <p className="text-[#9F9F9F] text-sm md:text-base">
          If goods have problems, consectetur <br className="hidden md:block" />
          adipim scing elit.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}
