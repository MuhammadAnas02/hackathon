import Image from 'next/image'
import React from 'react'
import singleProdc1 from '@/../Public/assets/single1.png'
import singleProdc2 from '@/../Public/assets/single2.png'
import singleProdc3 from '@/../Public/assets/single3.png'
import singleProdc4 from '@/../Public/assets/signle4.png'
import NewArrivals from '@/../Public/assets/NewArrivals.png'
import { FaStar } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import featured1 from '@/../Public/assets/featured.png'
import featured2 from '@/../Public/assets/featured2.png'
import top1 from '@/../Public/assets/top1.png'
import top2 from '@/../Public/assets/top2.png'
import top3 from '@/../Public/assets/top3.png'
import top4 from '@/../Public/assets/top4.png'
import Link from 'next/link'



export default function page() {
  return (
    <div className='w-full h-[100%]'>
        <div className=' mt-9 ml-32 flex mb-3   '>
            <Link href={'/'}>Home  > </Link>
            <Link href={'/Product'} className='mx-6'>Product > </Link>
            <p className='font-semibold mx-4'> | </p>
            <Link href={'/SingleProduct'} className='font-semibold'>Asgaard sofa
            </Link>
        </div>
        <div className='mx-auto 2xl:w-[1600px] flex '>
            <div className='flex-row  gap-y-6 ml-28  mt-5'>
            <div className='bg-[#FFF9E5] w-[76px] h-[80px]  rounded-xl mt-6 '>
                <Image src={singleProdc1} alt='product1'></Image>

            </div>
            <div className='bg-[#FFF9E5] w-[76px] h-[80px] rounded-xl mt-3'>
                <Image src={singleProdc2} alt='product1'></Image>

            </div>
            <div className='bg-[#FFF9E5] w-[76px] h-[80px] rounded-xl mt-3'>
                <Image src={singleProdc3} alt='product1'></Image>

            </div>
            <div className='bg-[#FFF9E5] w-[76px] h-[80px] rounded-xl mt-3'>
                <Image src={singleProdc4} alt='product1'></Image>


            </div>

            </div>

            <div className='w-[423px] h-[500px] bg-[#FFF9E5] ml-[40px] mt-[34px] rounded-lg'>
                <Image src={NewArrivals} alt='Product' className='pt-16' width={700} height={600}></Image>

</div>
<div className='mt-11 ml-[110px]'>
    <h1 className='text-4xl font-semibold'>Asgaard sofa</h1>
    <p className='text-2xl text-[#9F9F9F] mt-4'>Rs. 250,000.00</p>
    <div className='flex gap-x-2 my-4'>
        <FaStar className='text-[#FFDA5B]'/>
        <FaStar className='text-[#FFDA5B]'/>
        <FaStar className='text-[#FFDA5B]'/>
        <FaStar className='text-[#FFDA5B]'/>
        <FaStar className='text-[#FFDA5B]'/>
        <p className='text-2xl -mt-2'> | </p>
        <p>5 Customer Review</p>
    </div>
    <p>Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced
    
    <br />  audio which boasts a clear midrange and extended highs for a <br /> sound.
</p>
<p className='mt-4 text-[#9F9F9F] '>Size</p>
<div className='flex gap-x-5 mt-4'>
<div className='bg-[#FBEBB5] px-5 py-3 rounded-xl'>L</div>
          <div className='bg-[#FAF4F4] px-5 py-3 rounded-xl'>XL</div>
          <div className='bg-[#FAF4F4] px-5 py-3 rounded-xl'>XS</div>
        
</div>
<p className='text-[#9F9F9F] mt-6'>Color</p>

<div className='flex gap-x-5 mt-4'>
          <div className='bg-[#816DFA] px-6 py-6  rounded-full'></div>
          <div className='bg-[#000] px-6 py-6 rounded-full'></div>
          <div className='bg-[#CDBA7B] px-6 py-6 rounded-full'></div>
          </div>

          <div className='flex'>
          <div className='flex gap-x-6 border-2 w-[150px] py-5 mt-5 boder-[#9F9F9F] px-8 rounded-lg '>
            <p>-</p>
            <p>1</p>
            <p>+</p>

          </div>
          <button className='flex gap-x-6 border-2 w-[200px] py-5 mt-5 boder-[#9F9F9F] px-8 rounded-lg  ml-4'>
                Add To Cart

          </button>
          </div>
          <div  className='w-full  mt-8 font-bold h-0.5   bg-[#D9D9D9] '></div>
          <div className='flex gap-x-6  py-[20px] '>
            <div >
                <p>SKU</p>
                <p>Category</p>
                <p>Tags</p>
                <p>Share</p>
            </div>
            <div>
                <p> : </p>
                <p> : </p>
                <p> : </p>
                <p> : </p>
            </div>
            <div className='mb-10'>
                <p>SS001</p>
                <p>Sofas</p>
                <p>Sofa, Chair, Home, Shop</p>
                <div className='flex gap-x-2'>
                    <FaFacebook/>
                    <FaLinkedin/>
                    <AiFillTwitterCircle/>

                </div>
            </div>
          </div>

</div>

</div>

<hr className='bg-[#D9D9D9]' />

<div className='flex justify-evenly -mx-3 mt-4 text-3xl'>
    <p>Description</p>
    <p>Additional Information</p>
    <p>Reviews [5]</p>
</div>
<div>
<p className='text-[#9F9F9F] text-center mt-9'>
Embodying the raw, wayward spirit of rock ‘n’ roll,the Kilburn portable active stereo speaker takes the unmistakable look and <br /> 
sound of Marshall, unplugs the chords, and takes the show on the road.
</p>
<p className='text-[#9F9F9F] my-8 text-center'>
Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br />
 speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br />
 and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br />
 to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
</p>

<div className='flex my-9 gap-x-4 px-[110px] pt-4'>
    <div className='w-[605px] h-[348px] bg-primary rounded-lg'>
        <Image src={featured1} alt='featured'></Image>
    </div>
    <div className='w-[605px] h-[348px] bg-primary rounded-lg'>
        <Image src={featured2} alt='featured2'></Image>
    </div>

</div>
<hr className='bg-[#D9D9D9]' />
  <h1 className='text-3xl text-center mt-10'>
  Related Products
  </h1>

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
      <div className='h-1 mt-[38px] rounded-xl  w-[100px] mx-auto bg-black mb-20'></div>
</div>



    </div>
  )
}
