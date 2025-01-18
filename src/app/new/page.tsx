// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';


// export async function getServerSideProps() {
//   const products = await client.fetch(`*[_type == 'product']`);

//   return {
//     props: { products },
//   };
// }

// export default function Home({ products }) {
//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             <h2>{product.name}</h2>
//             <Image src={product.imagePath} alt={product.name} width="200" />
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <p>Category: {product.category}</p>
//             <p>Stock Level: {product.stockLevel}</p>
//             <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
