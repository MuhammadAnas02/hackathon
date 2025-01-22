"use client";

import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoIosClose, IoIosContact } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { useCart } from "../app/context/CartContext"; 

export default function Navbar() {
  const { cart } = useCart();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="w-full bg-primary py-4">
  <div className="flex w-[97%] 2xl:w-[1300px] mx-auto text-center justify-between">
    <div className="flex items-center">
      <Link href="/">
        <h1 className="text-black font-bold text-lg">Anas</h1>
      </Link>
    </div>


    <div className="hidden md:flex gap-x-[75px] justify-end mx-auto">
      <Link href={"/"}>
        <li>Home</li>
      </Link>
      <Link href={"/Product"}>
        <li>Shop</li>
      </Link>
      <Link href={"/MyAccount"}>
        <li>About</li>
      </Link>
      <Link href={"/Contact"}>
        <li>Contact</li>
      </Link>
    </div>
    <div className="hidden md:flex gap-x-[30px]">
      <li>
        <IoIosContact size={20} />
      </li>
      <li>
        <CiSearch size={20} />
      </li>
      <li>
        <FaRegHeart size={20} />
      </li>
      <Link href={"/cart"}>
        <div className="relative">
          <FaCartPlus size={20} />
          {totalCartItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {totalCartItems}
            </span>
          )}
        </div>
      </Link>
    </div>

    <div className="md:hidden flex items-center">
      <button onClick={() => setSidebarOpen(true)}>
        <div className="text-black">
          <IoIosContact size={25} />
        </div>
      </button>
    </div>
  </div>

  <div
    className={`fixed top-0 left-0 h-full w-[250px] bg-primary shadow-lg transform ${
      sidebarOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300 ease-in-out`}
  >
    <button
      className="absolute top-5 right-5 text-black"
      onClick={() => setSidebarOpen(false)}
    >
      <IoIosClose size={30} />
    </button>
    <ul className="flex flex-col items-start mt-20 pl-8 gap-y-5 text-black">
      <Link href={"/"}>
        <li onClick={() => setSidebarOpen(false)}>Home</li>
      </Link>
      <Link href={"/Product"}>
        <li onClick={() => setSidebarOpen(false)}>Shop</li>
      </Link>
      <Link href={"/MyAccount"}>
        <li onClick={() => setSidebarOpen(false)}>About</li>
      </Link>
      <Link href={"/Contact"}>
        <li onClick={() => setSidebarOpen(false)}>Contact</li>
      </Link>
      <li className="flex gap-x-4 mt-10">
        <IoIosContact size={20} />
        <CiSearch size={20} />
        <FaRegHeart size={20} />
        <Link href={"/cart"}>
        <div className="relative">
          <FaCartPlus size={20} />
          {totalCartItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {totalCartItems}
            </span>
          )}
        </div>
      </Link>
      </li>
    </ul>
  </div>
</div>

  );
}
