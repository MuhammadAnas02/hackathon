"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "../app/context/CartContext";
import { useUser, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Navbar() {
  const { cart } = useCart();
  const { isSignedIn } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="w-[100%] bg-primary py-4 shadow-md ">
      <div className="container mx-auto 2xl:max-w-[1500px] flex items-center justify-between px-4 sm:px-6 lg:px-8">
       
        <Link href="/">
          <h1 className="text-black font-bold text-lg">Furni vibe</h1>
        </Link>

        <ul className="hidden md:flex gap-x-12 text-black font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Product">Shop</Link>
          </li>
          <li>
            <Link href="/MyAccount">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

      
        <div className="hidden md:flex gap-x-6 items-center">
          <CiSearch size={24} className="cursor-pointer" />
          <FaRegHeart size={24} className="cursor-pointer" />
          <Link href="/cart">
            <button className="relative" onClick={() => setCartOpen(!cartOpen)}>
              <FaCartPlus size={24} />
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </button>
          </Link>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Link href="/sign-in">
              <Image
                src="/default-avatar.png"
                alt="Login"
                width={30}
                height={30}
                className="rounded-full cursor-pointer"
              />
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
          <IoIosMenu size={30} className="text-black" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 flex"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="relative w-64 h-full bg-primary p-6 shadow-lg animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-black"
              onClick={() => setSidebarOpen(false)}
            >
              <IoIosClose size={30} />
            </button>
            <ul className="flex flex-col gap-6 text-xl font-medium text-black">
              <li>
                <Link href="/" onClick={() => setSidebarOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Product" onClick={() => setSidebarOpen(false)}>
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/MyAccount" onClick={() => setSidebarOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/Contact" onClick={() => setSidebarOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mt-8 flex gap-x-6 items-center">
              <CiSearch size={28} className="cursor-pointer" />
              <FaRegHeart size={28} className="cursor-pointer" />
              <button
                className="relative"
                onClick={() => setCartOpen(!cartOpen)}
              >
                <FaCartPlus size={28} />
                {totalCartItems > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {totalCartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
          {/* Semi-transparent overlay */}
          <div className="flex-1 bg-black opacity-50" />
        </div>
      )}
    </div>
  );
}
