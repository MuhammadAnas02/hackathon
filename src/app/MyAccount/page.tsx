
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/../Public/assets/logo.png'
import product from '@/../Public/assets/product.png'
import React from 'react'

export default function MyContact() {
  return (
    <div className='w-full h-screen'>
      <div className='mx-auto h-screen 2xl:w-[1600px]'>
      <div className='w-full mx-auto h-[316px] 2xl:w-[1600px] object-fill' style={{ backgroundImage: `url(${product.src})` }}>
        <Image src={logo} alt='logo'  className='mx-auto pt-[40px] w-[90px] '></Image>

        <h1 className='text-center text-3xl font-bold pt-[10px]'>My Account</h1>
    {/* //there is a breadcrumb but i dont have time to put this here */}
        <div className='flex mx-[740px]'>
        <Link href={'/'} className='font-bold'>Home</Link>
        <Link href={'/Product'}> >MyAccount</Link>
        </div>

      </div>
      <div className='mx-auto 2xl:w-[1600px] h-screen'>
      <div className='mx-[60px] my-6 gap-8'>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            <form className="space-y-9">
              <input
                type="text"
                placeholder="Username or email address"
                className="border border-gray-300 rounded-md px-4 py-5 w-full"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-md px-4 py-5 w-full"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 form-checkbox mt-9 border-2 py-4"
                  />
                  <label className="text-gray-700">Remember me</label>
                </div>
                <a href="#" className="">
                  Lost your password?
                </a>
              </div>
              <button
                type="submit"
                className=" text-black boder-2 border border-black font-medium py-2 px-28 rounded-md "
              >
                Log In
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="border-1 border-black  rounded-md px-4 py-2 w-full"
              />
              <p className="text-gray-500 text-sm">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-gray-500 text-sm">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              <button
                type="submit"
                className="border border-3 border-black text-blackfont-medium py-2 px-12 rounded-md"
              >
                Register
              </button>
            </form>
          </div>
        </div>
        
      </div>
    
    </div>
      </div>
    
    </div>
  );
};


