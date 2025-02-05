"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../Public/assets/logo.png";
import { CgMenuGridO } from "react-icons/cg";
import { PiGreaterThanLight } from "react-icons/pi";
import Tabbular from "@/Components/Tabbular";
import { useCart } from '@/app/context/CartContext';
import { productType } from "@/constants";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function Product() {
  const [SelectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!SelectedTab) return;
      setLoading(true);
      try {
        const params = { variant: SelectedTab.toLowerCase() };
        const query = `*[_type == 'product' && variant == $variant] | order(name desc) {
          _id,
          name,
          slug,
          description,
          price,
          discount,
          image
        }`;
        const res = await client.fetch(query, params);
        setProducts(res);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [SelectedTab]); // Only SelectedTab is needed as a dependency

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product._id,
      title: product.name,
      price: product.price - product.discount,
      quantity: 1,
      image: urlFor(product.image).url(),
    });
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div
        className="w-full mx-auto h-[250px] md:h-[316px] object-fill bg-cover bg-center"
        style={{ backgroundImage: `url(/assets/product.png)` }}
      >
        <Image src={logo} alt="logo" className="mx-auto pt-[20px] md:pt-[40px] w-[60px] md:w-[90px]" />
        <h1 className="text-center text-2xl md:text-3xl font-bold pt-[10px]">Shop</h1>
        <div className="flex justify-center md:justify-start mx-auto md:mx-[740px] text-sm md:text-base">
          <Link href="/" className="font-bold">Home</Link>
          <PiGreaterThanLight size={15} className="mt-1.5 mx-2" />
          <Link href="/Product">Products</Link>
        </div>
      </div>

      {/* Filter and Sorting Section */}
      <div className="w-full mx-auto bg-[#FAF4F4] flex flex-col md:flex-row justify-between py-4 md:py-8 px-4 md:px-8 items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Tabbular SelectedTab={SelectedTab} onTabSelect={setSelectedTab} />
          <CgMenuGridO className="mt-1" />
          <p className="hidden md:block">|</p>
          <p>Showing {filteredProducts.length} results</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full md:w-[200px]"
          />
          <div className="flex gap-2 items-center">
            <p>Show</p>
            <p className="bg-white px-2 py-1">{filteredProducts.length}</p>
            <p>Sort by</p>
            <select className="px-4 py-2 border rounded-lg">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mx-auto bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-4 sm:px-6 md:px-8 gap-4 md:gap-6">
          {loading ? (
            <div className="col-span-full text-center">Loading...</div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="border rounded-lg overflow-hidden shadow-md flex flex-col items-center text-center bg-white relative">
                <div className="relative w-full h-[200px] sm:h-[287px]">
                  <Link href={`/Product/${product.slug.current}`}>
                    <Image
                      src={urlFor(product.image).url() || ""}
                      layout="fill"
                      className="object-cover w-full h-full rounded-t-lg"
                      alt={product.name}
                    />
                  </Link>
                </div>
                <div className="flex flex-col items-center p-2 sm:p-4 space-y-2">
                  <h2 className="font-bold text-sm sm:text-lg">{product.name}</h2>
                  <p className="text-gray-500 text-xs sm:text-base line-through">${product.price}</p>
                  <p className="text-red-500 font-semibold text-sm sm:text-base">
                    ${(product.price - product.discount).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="xl:px-[100px] mt-2 px-3 sm:px-4 py-1 sm:py-2 bg-white text-black border-black border-2 rounded-lg hover:bg-black hover:text-white text-xs sm:text-base"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">No products found.</div>
          )}
        </div>

        <div className="flex justify-center gap-x-3 sm:gap-x-5 my-6 md:my-[50px]">
          <div className="bg-[#FBEBB5] px-3 sm:px-5 py-2 sm:py-3 rounded-xl">1</div>
          <div className="bg-[#FFF9E5] px-3 sm:px-5 py-2 sm:py-3 rounded-xl">2</div>
          <div className="bg-[#FFF9E5] px-3 sm:px-5 py-2 sm:py-3 rounded-xl">3</div>
          <div className="bg-[#FFF9E5] px-3 sm:px-5 py-2 sm:py-3 rounded-xl">Next</div>
        </div>
      </div>
    </div>
  );
}
