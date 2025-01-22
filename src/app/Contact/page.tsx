import React from 'react'
import product from '@/../Public/assets/product.png'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/../Public/assets/logo.png'
import { PiGreaterThanLight } from 'react-icons/pi'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

export default function contact() {
  return (
    <>
    <div className='w-full mx-auto h-[316px] 2xl:w-[1600px] object-fill' style={{ backgroundImage: `url(${product.src})` }}>
      <Image src={logo} alt='logo' className='mx-auto pt-[40px] w-[90px]' />
  
      <h1 className='text-center text-3xl font-bold pt-[10px]'>Shop</h1>
      {/* Breadcrumb */}
      <div className='flex mx-[740px] md:mx-10'>
        <Link href={'/'} className='font-semibold'>Home</Link>
        <PiGreaterThanLight size={17} className='mt-1.5' />
        <Link href={'/Contactus'}>Contact</Link>
      </div>
    </div>
  
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black">Get In Touch With Us</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            For More Information About Our Product & Services, Please Feel Free To Drop Us An Email.
            Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column */}
          <div className="p-8 rounded-lg space-y-6">
            <div className='flex gap-2'>
              <FaLocationDot size={30} />
              <h2 className="text-xl font-semibold text-black">Address</h2>
            </div>
            <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
  
            <div className='flex gap-2'>
              <FaPhone size={30} />
              <h2 className="text-xl font-semibold text-black">Phone</h2>
            </div>
            <p className="text-gray-600">Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
  
            <div className='flex gap-2'>
              <FaClock size={30} />
              <h2 className="text-xl font-semibold text-black">Working Time</h2>
            </div>
            <p className="text-gray-600">
              Monday-Friday: 9:00 - 22:00<br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="abs@gmail.com"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is optional"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </div>
  
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  placeholder="I'd like to ask about"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 bg-secondary py-16 mx-auto my-20 2xl:w-[1600px]'>
      <div className='text-center'>
        <h1 className='text-4xl font-semibold'>Free Delivery</h1>
        <p className='text-[#9F9F9F]'>For all orders over $50, consectetur <br />adipiscing elit.</p>
      </div>
      <div className='text-center'>
        <h1 className='text-4xl font-semibold'>90 Days Return</h1>
        <p className='text-[#9F9F9F]'>If goods have problems, consectetur <br />adipiscing elit.</p>
      </div>
      <div className='text-start'>
        <h1 className='text-4xl font-semibold'>Secure Payment</h1>
        <p className='text-[#9F9F9F]'>If goods have problems, consectetur <br />adipiscing elit.</p>
      </div>
    </div>
  </>
  
  )
}
