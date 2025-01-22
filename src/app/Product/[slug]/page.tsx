// import Image from 'next/image'
// import React from 'react'
// // import singleProdc2 from '@/../Public/assets/single2.png'
// // import singleProdc3 from '@/../Public/assets/single3.png'
// // import singleProdc4 from '@/../Public/assets/signle4.png'
// // import NewArrivals from '@/../Public/assets/NewArrivals.png'
// // import { FaStar } from "react-icons/fa";
// // import { FaFacebook } from "react-icons/fa";
// // import { FaLinkedin } from "react-icons/fa6";
// // import { AiFillTwitterCircle } from "react-icons/ai";
// import featured1 from '@/../Public/assets/featured.png'
// import featured2 from '@/../Public/assets/featured2.png'
// import top1 from '@/../Public/assets/top1.png'
// import top2 from '@/../Public/assets/top2.png'
// import top3 from '@/../Public/assets/top3.png'
// import top4 from '@/../Public/assets/top4.png'
// import Link from 'next/link'
// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'



// const DetailedProduct = async(slug:string)=>{
//     const query = `*[_type=="product" && slug.current == '${slug}']{
//         "id": _id,
//         "slug": slug.current,
//         title,
//         description,
//         image,
//         price,
//       }[0]`

//  const singleProduct = await client.fetch(query)
//  return singleProduct;
// }



// export default async  function SingleProduct({ params }: { params: { slug: string } }) {
//     const singleProduct = await DetailedProduct(params.slug)

    
//   return (
//     <div className='w-full h-[100%]'>
//         <div className=' mt-9 ml-32 flex mb-3   '>
//             <Link href={'/'}>Home </Link>
//             <Link href={'/Product'} className='mx-6'>Product </Link>
//             <p className='font-semibold mx-4'> | </p>
//             <Link href={'/SingleProduct'} className='font-semibold'>Asgaard sofa
//             </Link>
            
            
//         </div>
//         {/* <div className='mx-auto 2xl:w-[1600px] flex '>
//             <div className='flex-row  gap-y-6 ml-28  mt-5'>
//             <div className='bg-[#FFF9E5] w-[76px] h-[80px]  rounded-xl mt-6 '>
//                 <Image src={singleProdc1} alt='product1'></Image>

//             </div>
//             <div className='bg-[#FFF9E5] w-[76px] h-[80px] rounded-xl mt-3'>
//                 <Image src={singleProdc2} alt='product1'></Image>

//             </div>
//             <div className='bg-[#FFF9E5] w-[76px] h-[80px] rounded-xl mt-3'>
//                 <Image src={singleProdc3} alt='product1'></Image>

//             </div>
//             <div className='bg-[#FFF9E5] w-[76px] h-[80px] rounded-xl mt-3'>
//                 <Image src={singleProdc4} alt='product1'></Image>


//             </div>

//             </div>

//             <div className='w-[423px] h-[500px] bg-[#FFF9E5] ml-[40px] mt-[34px] rounded-lg'>
//                 <Image src={NewArrivals} alt='Product' className='pt-16' width={700} height={600}></Image>

// </div>
// <div className='mt-11 ml-[110px]'>
//     <h1 className='text-4xl font-semibold'>Asgaard sofa</h1>
//     <p className='text-2xl text-[#9F9F9F] mt-4'>Rs. 250,000.00</p>
//     <div className='flex gap-x-2 my-4'>
//         <FaStar className='text-[#FFDA5B]'/>
//         <FaStar className='text-[#FFDA5B]'/>
//         <FaStar className='text-[#FFDA5B]'/>
//         <FaStar className='text-[#FFDA5B]'/>
//         <FaStar className='text-[#FFDA5B]'/>
//         <p className='text-2xl -mt-2'> | </p>
//         <p>5 Customer Review</p>
//     </div>
//     <p>Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced
    
//     <br />  audio which boasts a clear midrange and extended highs for a <br /> sound.
// </p>
// <p className='mt-4 text-[#9F9F9F] '>Size</p>
// <div className='flex gap-x-5 mt-4'>
// <div className='bg-[#FBEBB5] px-5 py-3 rounded-xl'>L</div>
//           <div className='bg-[#FAF4F4] px-5 py-3 rounded-xl'>XL</div>
//           <div className='bg-[#FAF4F4] px-5 py-3 rounded-xl'>XS</div>
        
// </div>
// <p className='text-[#9F9F9F] mt-6'>Color</p>

// <div className='flex gap-x-5 mt-4'>
//           <div className='bg-[#816DFA] px-6 py-6  rounded-full'></div>
//           <div className='bg-[#000] px-6 py-6 rounded-full'></div>
//           <div className='bg-[#CDBA7B] px-6 py-6 rounded-full'></div>
//           </div>

//           <div className='flex'>
//           <div className='flex gap-x-6 border-2 w-[150px] py-5 mt-5 boder-[#9F9F9F] px-8 rounded-lg '>
//             <p>-</p>
//             <p>1</p>
//             <p>+</p>

//           </div>
//           <button className='flex gap-x-6 border-2 w-[200px] py-5 mt-5 boder-[#9F9F9F] px-8 rounded-lg  ml-4'>
//                 Add To Cart

//           </button>
//           </div>
//           <div  className='w-full  mt-8 font-bold h-0.5   bg-[#D9D9D9] '></div>
//           <div className='flex gap-x-6  py-[20px] '>
//             <div >
//                 <p>SKU</p>
//                 <p>Category</p>
//                 <p>Tags</p>
//                 <p>Share</p>
//             </div>
//             <div>
//                 <p> : </p>
//                 <p> : </p>
//                 <p> : </p>
//                 <p> : </p>
//             </div>
//             <div className='mb-10'>
//                 <p>SS001</p>
//                 <p>Sofas</p>
//                 <p>Sofa, Chair, Home, Shop</p>
//                 <div className='flex gap-x-2'>
//                     <FaFacebook/>
//                     <FaLinkedin/>
//                     <AiFillTwitterCircle/>

//                 </div>
//             </div>
//           </div>

// </div>

// </div> */}

//  <div className="w-full h-[100%]">
//       <div className='w-full mx-auto justify-between flex'>
//         <h1>{singleProduct.title}</h1>
//         <Image
//           src={urlFor(singleProduct.image).url()}
//           alt="Detailed"
//           width={300}
//           height={500}
//         />
//         <p>{singleProduct.description}</p>
//         <h2>{singleProduct.price}</h2>
//       </div>
//     </div>

// <hr className='bg-[#D9D9D9]' />

// <div className='flex justify-evenly -mx-3 mt-4 text-3xl'>
//     <p>Description</p>
//     <p>Additional Information</p>
//     <p>Reviews [5]</p>
// </div>
// <div>
// <p className='text-[#9F9F9F] text-center mt-9'>
// Embodying the raw, wayward spirit of rock ‘n’ roll,the Kilburn portable active stereo speaker takes the unmistakable look and <br /> 
// sound of Marshall, unplugs the chords, and takes the show on the road.
// </p>
// <p className='text-[#9F9F9F] my-8 text-center'>
// Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br />
//  speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br />
//  and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br />
//  to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
// </p>

// <div className='flex my-9 gap-x-4 px-[110px] pt-4'>
//     <div className='w-[605px] h-[348px] bg-primary rounded-lg'>
//         <Image src={featured1} alt='featured'></Image>
//     </div>
//     <div className='w-[605px] h-[348px] bg-primary rounded-lg'>
//         <Image src={featured2} alt='featured2'></Image>
//     </div>

// </div>
// <hr className='bg-[#D9D9D9]' />
//   <h1 className='text-3xl text-center mt-10'>
//   Related Products
//   </h1>

//   <div className='grid grid-cols-4 px-32 '>

//         <div>
//           <Image src={top1} alt='top1 ' width={287} height={287}></Image>
//           <p className='text-black mt-4'>Trenton modular sofa_3</p>
//           <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
//         </div>
//         <div className='pt-10'>
//         <Image src={top2} alt='top1'width={287} height={287}></Image>
//         <p className='text-black mt-14'>Granite dining table with <br /> dining chair</p>
//         <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
//         </div>
//         <div className='pl-4 -mt-9' >
//         <Image src={top3} alt='top1' width={287} height={287}></Image>
//         <p className='text-black mt-14'>Outdoor bar table and <br /> stool</p>
//           <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
//         </div>
//         <div className='pt-10'>
//         <Image src={top4} alt='top1' width={287} height={287}></Image>
//         <p className='text-black mt-14'>Plain console with teak <br /> mirror</p>
//           <h1 className='text-black text-xl font-semibold'>Rs. 25,000.00</h1>
//         </div>

//       </div>
//       <p className='text-center text-2xl mt-[100px]'>View More</p>
//       <div className='h-1 mt-[38px] rounded-xl  w-[100px] mx-auto bg-black mb-20'></div>
// </div>



//     </div>
//   )
// }
"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from '../../context/CartContext'; // Ensure the path is correct
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const fetchProduct = async (slug: string) => {
  const query = `*[_type=="product" && slug.current == '${slug}']{
    "id": _id,
    "slug": slug.current,
    title,
    description,
    image,
    price,
  }[0]`;
  return await client.fetch(query);
};

export default function SingleProduct({ params }: { params: { slug: string } }) {
  const { addToCart } = useCart(); 
  const [singleProduct, setSingleProduct] = useState<any>(null);

  useEffect(() => {
    const getProduct = async () => {
      const product = await fetchProduct(params.slug);
      setSingleProduct(product);
    };

    getProduct();
  }, [params.slug]);

  const handleAddToCart = () => {
    if (singleProduct) {
      addToCart({
        id: singleProduct.id,
        title: singleProduct.title,
        price: singleProduct.price,
        image: urlFor(singleProduct.image).url(),
        quantity: 1,
      });
    }
  };

  if (!singleProduct) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex flex-wrap items-center space-x-2 text-gray-500 mb-8 text-sm md:text-base">
      <Link href="/" className="hover:text-gray-800">
        Home
      </Link>
      <span className="text-gray-400">/</span>
      <Link href="/Product" className="hover:text-gray-800">
        Product
      </Link>
      <span className="text-gray-400">/</span>
      <span className="font-semibold text-gray-800">{singleProduct.title}</span>
    </div>
  
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <Image
          src={urlFor(singleProduct.image).url()}
          alt="product"
          width={400}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>
  
      {/* Product Info */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
          {singleProduct.title}
        </h1>
        <p className="text-sm md:text-lg text-gray-600 mb-4 leading-relaxed">
          {singleProduct.description}
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Rs. {singleProduct.price}
        </h2>
  
        <button
          onClick={handleAddToCart}
          className="bg-black text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-gray-800 transition duration-300 w-full md:w-auto text-sm md:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  

    <div className="mt-16">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-gray-100 p-4 rounded-lg text-center hover:shadow-md transition duration-300"
          >
            <Image
              src={urlFor(singleProduct.image).url()} // Example image
              alt="Related Product"
              width={200}
              height={200}
              className="rounded-lg mx-auto object-cover"
            />
            <p className="text-base md:text-lg text-gray-700 mt-4">
              Sample Product {item}
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-800 mt-2">
              Rs. {singleProduct.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
}
