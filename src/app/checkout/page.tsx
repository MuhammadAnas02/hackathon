import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



export default function Checkout() {
  return (
    <div>
    {/* Hero Section */}
    <section className="relative h-[60vh] bg-shop-bg bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <Image
          src="/image/shop.png"
          alt="Shop Icon"
          width={120}
          height={120}
          className="mb-6 rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-extrabold uppercase tracking-wide">Check Out</h1>
        <p className="mt-4 text-sm">
          <Link href="/" className="underline hover:text-gray-200">Home</Link> &gt; Check Out
        </p>
      </div>
    </section>

    {/* Checkout Section */}
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Billing Details */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Billing Details</h2>
            <form className="space-y-6 bg-white p-6 shadow-md rounded-lg">
              {[
                { id: "firstName", label: "First Name", type: "text" },
                { id: "lastName", label: "Last Name", type: "text" },
                { id: "companyName", label: "Company Name (optional)", type: "text" },
                { id: "country", label: "Country/Region", type: "text" },
                { id: "streetAddress", label: "Street Address", type: "text" },
                { id: "townCity", label: "Town/City", type: "text" },
                { id: "province", label: "Province", type: "text" },
                { id: "zipCode", label: "ZIP Code", type: "text" },
                { id: "phone", label: "Phone", type: "tel" },
                { id: "email", label: "Email", type: "email" },
              ].map(({ id, label, type }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-lg font-medium mb-1">{label}</label>
                  <input
                    type={type}
                    id={id}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-600"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="additionalInfo" className="block text-lg font-medium mb-1">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  placeholder="Any additional information"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-600"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Order Summary</h2>
            <div className="bg-white p-6 shadow-md rounded-lg space-y-6">
              {/* Products */}
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span className="font-medium">Asgaard Sofa *1</span>
                  <span>Rs 250,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs 250,000.00</span>
                </div>
                <div className="flex justify-between font-semibold text-xl">
                  <span>Total</span>
                  <span>Rs 250,000.00</span>
                </div>
              </div>
              {/* Payment Methods */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="radio" id="bankTransfer" name="paymentMethod" className="mr-3" />
                  <label htmlFor="bankTransfer" className="font-medium text-gray-700">Direct Bank Transfer</label>
                </div>
                <p className="text-sm text-gray-500 pl-6">
                  Use your order ID as the payment reference. Orders are shipped upon fund confirmation.
                </p>
                <div className="flex items-center">
                  <input type="radio" id="cashOnDelivery" name="paymentMethod" className="mr-3" />
                  <label htmlFor="cashOnDelivery" className="font-medium text-gray-700">Cash on Delivery</label>
                </div>
                <p className="text-sm text-gray-500 pl-6">
                  Data is used to support your account and as outlined in our privacy policy.
                </p>
              </div>
              <button className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          { title: "Free Delivery", description: "For all orders over $50" },
          { title: "90 Days Return", description: "If the product has an issue" },
          { title: "Secure Payments", description: "100% secure payments" },
        ].map(({ title, description }) => (
          <div key={title} className="space-y-3">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
  )
}

