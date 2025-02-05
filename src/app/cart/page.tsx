'use client';
import React from 'react';
import Image from 'next/image';
import { AiFillDelete } from 'react-icons/ai';
import { PiGreaterThanLight } from 'react-icons/pi';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import { useUser } from '@clerk/clerk-react'; // Clerk hook for user session
import { useRouter } from 'next/navigation'; // To handle redirection

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { isSignedIn } = useUser(); // Check if the user is signed in
  const router = useRouter();

  // Redirect to the sign-in page if not signed in
  React.useEffect(() => {
    if (!isSignedIn) {
      router.push('/sign-in'); // Adjust the URL to your actual sign-in page
    }
  }, [isSignedIn, router]);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-full">
      {/* Header */}
      <div
        className="w-full mx-auto h-[316px] 2xl:w-[1600px] object-fill"
        style={{ backgroundImage: "url('/assets/product.png')" }}
      >
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={200}
          height={100}
          className="mx-auto pt-[40px] w-[90px]"
        />
        <h1 className="text-center text-3xl font-bold pt-[10px]">Shop</h1>
        <div className="flex mx-auto md:mx-4">
          <a href="/" className="font-semibold">Home</a>
          <PiGreaterThanLight size={15} className="mt-1.5" />
          <a href="/Product">Cart</a>
        </div>
      </div>

      {/* Cart items */}
      <div className="mx-auto 2xl:w-[1600px] bg-white mt-5 flex flex-col md:flex-row px-4 md:px-8">
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 md:px-16 bg-[#FFF9E5] py-4 gap-x-8 text-sm sm:text-base">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 px-4 md:px-8 mt-10 py-4 gap-x-8"
            >
              <div className="bg-primary rounded-md">
                <Image src={item.image} alt={item.title} width={50} height={50} />
              </div>
              <p className="text-[#000000] font-bold mt-6">{item.title}</p>
              <div className="text-[#000000] mt-6">Rs. {item.price.toFixed(2)}</div>
              <div className="flex items-center mt-6">
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
              <div className="text-[#000] font-semibold mt-6">
                Rs. {(item.price * item.quantity).toFixed(2)}
              </div>
              <AiFillDelete
                size={25}
                className="text-primary mt-6 cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          ))}
        </div>

        {/* Cart total and Checkout button */}
        <div className="w-full md:w-[360px] bg-[#FFF9E5] ml-0 md:ml-5 mt-2 md:mt-0 py-6">
          <h1 className="text-2xl font-semibold text-center mb-4">Cart Total</h1>
          <div className="flex justify-between mx-5 text-sm sm:text-base">
            <p>Subtotal</p>
            <p>Rs. {totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mx-5 mt-3 text-sm sm:text-base">
            <p>Shipping</p>
            <p>Rs. 0.00</p>
          </div>
          <div className="flex justify-between mx-5 mt-3 text-sm sm:text-base">
            <p>Total</p>
            <p>Rs. {totalPrice.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <Link href="/checkout">
            <button
              className="border-2 border-black mt-9 mx-5 w-full sm:w-[236px] h-[58px] rounded-2xl text-lg font-semibold bg-black text-white"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
