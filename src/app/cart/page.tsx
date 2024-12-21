import React from 'react'
import product from '@/../Public/assets/product.png'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/../Public/assets/logo.png'
import NewArrival from '@/../Public/assets/NewArrivals.png'
import { AiFillDelete } from "react-icons/ai";
import { PiGreaterThanLight } from "react-icons/pi";

export default function Cart() {
  return (
    <div className='w-full'>
       <div className='w-full mx-auto h-[316px] 2xl:w-[1600px] object-fill' style={{ backgroundImage: `url(${product.src})` }}>
        <Image src={logo} alt='logo'  className='mx-auto pt-[40px] w-[90px] '></Image>

        <h1 className='text-center text-3xl font-bold pt-[10px]'>Shop</h1>
    {/* //there is a breadcrumb but i dont have time to put this here */}
        <div className='flex mx-[740px]'>
        <Link href={'/'} className='font-semibold'>Home</Link>
        <PiGreaterThanLight size={15} className='mt-1.5'/> 
        <Link href={'/Product'}> Cart</Link>
        </div>


      </div>

      <div className='mx-auto 2xl:w-[1600px] bg-white mt-5  flex'>
         <div>
         <div className='grid grid-cols-4 px-16  bg-[#FFF9E5] mx-[60px] w-[800px] py-4 gap-x-8'>

<Link href={'/'}>Product</Link>
<Link href={'/'}>Price</Link>
<Link href={'/'}>Quantity</Link>
<Link href={'/'}>Total</Link>
</div> 
<div className='grid grid-cols-6 px-5  mt-10  mx-[60px] w-[800px] py-4 gap-x-8'>
  <div className=' bg-primary rounded-md '><Image src={NewArrival} sizes='30'  alt='cart'></Image></div>
  <p className='text-[#9F9F9F] mt-6'>Asgaard sofa</p>
  <div className='text-[#9F9F9F] mt-6'>Rs. 25,000.00</div>
  <div className='text-[#9F9F9F] mt-6 border-[#9F9F9F] '>1</div>
  <div className='text-[#9F9F9F] mt-6'>Rs. 25,000.00</div>
  <AiFillDelete size={25} className='text-primary  mt-6'/>


</div>
         </div>
          <div>
          <div className='bg-[#FFF9E5] w-[360px] h-[350px] ml-5 mt-2'>
            <h1 className='text-2xl font-semibold ml-5 mt-5 text-center pt-5'>Cart Total</h1>
            <div className='flex justify-around ml-5 mt-5'>
              <p>Subtotal</p>
              <p>Rs. 25,000.00</p>
            </div>
            <div className='flex justify-around ml-5 mt-5'>
              <p>Shipping</p>
              <p>Rs. 25,000.00</p>
            </div>
            <div className='flex justify-around ml-5 mt-5'>
              <p>Total</p>
              <p>Rs. 25,000.00</p>
            </div>
            <button className='border-2 border-black mt-9 ml-16 w-[236px] h-[58px] rounded-2xl '>Checkout</button>
            </div>
          </div>
        </div>
        
        <div className='grid grid-cols-3 gap-x-5 bg-secondary py-16 mx-auto my-20 2xl:w-[1600px]'>
          <div className='text-center'> 
            <h1 className='text-4xl font-semibold'>Free Delivery</h1>
            <p className='text-[#9F9F9F]'>For all oders over $50, consectetur <br /> adipim scing elit.</p>
          </div>
          <div className='text-center'> 
            <h1 className='text-4xl font-semibold'>90 Days Return</h1>
            <p className='text-[#9F9F9F]'>If goods have problems, consectetur <br />adipim scing elit.</p>
          </div>
          <div className='text-start'> 
            <h1 className='text-4xl font-semibold'>Secure Payment</h1>
            <p className='text-[#9F9F9F]'>If goods have problems, consectetur <br />adipim scing elit.</p>
          </div>

        </div>
      
    </div>
  )
}
