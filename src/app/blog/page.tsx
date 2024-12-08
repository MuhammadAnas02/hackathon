import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



export default function Blog () {
  return (
    <div>
      {/* First Section with Tailwind Background */}
      <section className="relative h-[60vh] bg-cover bg-center bg-blog-bg">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          {/* Small Image in Center */}
          <div className="mb-4">
            <Image
              src="/image/blog.png"
              alt="Blog Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl font-bold">Blog</h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; Blog
          </p>
        </div>
      </section>

      {/* 2nd Section: Blog Content with Two Columns (65:35 Ratio) */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* First Column (65% width) */}
            <div className="md:col-span-3 space-y-6">
              {/* First Post */}
              <div>
                <Image
                  src="/image/2.jpeg"
                  alt="Going On"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">Going all-in with millenial design</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Second Post */}
              <div className="mt-12">
                <Image
                  src="/image/blog2.jpeg"
                  alt="Going On Again"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">Exploring New ways of decorating</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Third Post */}
              <div className="mt-12">
                <Image
                  src="/image/blog3.jpeg"
                  alt="Third Post"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">Hand made pieces that took time to make</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>
            </div>

            {/* Second Column (35% width) for Recent Posts */}
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>

              {/* Recent Post 1 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/image/b1.png"
                  alt="Recent Post 1"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Going all-in one with millenial design</h2>
                  <p className="text-gray-600 text-sm">
                    03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 2 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/image/b2.png"
                  alt="Recent Post 2"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Exploring new ways of decorating</h2>
                  <p className="text-gray-600 text-sm">
                    03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 3 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/image/b3.png"
                  alt="Recent Post 3"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Hand made pieces that took time to make</h2>
                  <p className="text-gray-600 text-sm">
                  03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 4 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/image/b4.png"
                  alt="Recent Post 4"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Modern home in Milan</h2>
                  <p className="text-gray-600 text-sm">
                  03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 5 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/image/b5.png"
                  alt="Recent Post 5"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Colorful office redesign 5</h2>
                  <p className="text-gray-600 text-sm">
                  03 Aug 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3rd Section: CONCEPT Posts */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">Free Delivery</h2>
              <p className="text-lg text-gray-700">For all orders over $50, consectetur adipim scing elit.</p>
            </div>

            {/* Second Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">90 Days Return</h2>
              <p className="text-lg text-gray-700 text-">If the product has an issue, consectetur adipim scing elit.</p>
            </div>

            {/* Third Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">Secure Payments</h2>
              <p className="text-lg text-gray-700">100% secure payments, consectetur adipim scing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

