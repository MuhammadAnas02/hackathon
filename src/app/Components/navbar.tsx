import Link from 'next/link';
import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

export default function Navbar() {
  return (
    <div className='w-full bg-primary py-4 '>
      <div className='flex w-[97%] 2xl:w-[1300px]  mx-auto text-center pl-[370px] justify-end'>

        <ul className='flex gap-x-[75px] justify-end mx-auto'>
            <Link href={'/'}><li>Home</li></Link>
            <Link href={'/Product'}><li>Shop</li></Link>
            <Link href={'MyAccount'}><li>About</li></Link>
            <Link href={'/Contact'}><li>Contact</li></Link>
        </ul>
        <ul className='flex gap-x-[30px]  '>
            <li><IoIosContact size={20}/></li>
            <Link href={'/cart'} > <li><BsCart3 size={20}/></li></Link>
            <li><CiSearch size={20}/></li>
            <li><FaRegHeart size={20}/></li>
           

        </ul>

      </div>
    </div>
  )
}
