"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { PiGreaterThanLight } from "react-icons/pi";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div
        className="w-full mx-auto h-[316px] 2xl:w-[1600px] object-fill"
        style={{ backgroundImage: `url('/assets/product.png')` }}
      >
        <Image src="/assets/logo.png" alt="logo"width={200} height={100} className="mx-auto pt-[40px] w-[90px]" />
        <h1 className="text-center text-3xl font-bold pt-[10px]">Shop</h1>
        <div className="flex mx-[740px]">
          <Link href="/" className="font-semibold">
            Home
          </Link>
          <PiGreaterThanLight size={15} className="mt-1.5" />
          <Link href="/Product">Cart</Link>
        </div>
      </div>

      {/* Cart Section */}
      <div className="mx-auto 2xl:w-[1600px] bg-white mt-5 flex">
        <div>
          {/* Cart Header */}
          <div className="grid grid-cols-4 px-16 bg-[#FFF9E5] mx-[60px] w-[800px] py-4 gap-x-8">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>

          {/* Cart Items */}
          {cart.map((item) => (
            <div key={item.id} className="grid grid-cols-6 px-5 mt-10 mx-[60px] w-[800px] py-4 gap-x-8">
              <div className="bg-primary rounded-md">
                <Image src={item.image} alt={item.title} width={50} height={50} />
              </div>
              <p className="text-[#9F9F9F] mt-6">{item.title}</p>
              <div className="text-[#9F9F9F] mt-6">Rs. {item.price.toFixed(2)}</div>
              <div className="flex items-center">
                <button
                  className="border px-2"
                  onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="border px-2"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="text-[#9F9F9F] mt-6">Rs. {(item.price * item.quantity).toFixed(2)}</div>
              <AiFillDelete
                size={25}
                className="text-primary mt-6 cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div>
          <div className="bg-[#FFF9E5] w-[360px] h-[350px] ml-5 mt-2">
            <h1 className="text-2xl font-semibold ml-5 mt-5 text-center pt-5">Cart Total</h1>
            <div className="flex justify-around ml-5 mt-5">
              <p>Subtotal</p>
              <p>Rs. {totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-around ml-5 mt-5">
              <p>Shipping</p>
              <p>Rs. 0.00</p>
            </div>
            <div className="flex justify-around ml-5 mt-5">
              <p>Total</p>
              <p>Rs. {totalPrice.toFixed(2)}</p>
            </div>
            <button
              className="border-2 border-black mt-9 ml-16 w-[236px] h-[58px] rounded-2xl"
              onClick={() => alert("Proceeding to checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="grid grid-cols-3 gap-x-5 bg-secondary py-16 mx-auto my-20 2xl:w-[1600px]">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Free Delivery</h1>
          <p className="text-[#9F9F9F]">
            For all orders over $50, consectetur <br /> adipiscing elit.
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold">90 Days Return</h1>
          <p className="text-[#9F9F9F]">
            If goods have problems, consectetur <br /> adipiscing elit.
          </p>
        </div>
        <div className="text-start">
          <h1 className="text-4xl font-semibold">Secure Payment</h1>
          <p className="text-[#9F9F9F]">
            If goods have problems, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
