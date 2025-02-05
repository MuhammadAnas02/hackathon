"use client";
import React, { useEffect, useState } from 'react'
import Tabbular from './Tabbular'
import { productType } from '@/constants';
import { client } from '@/sanity/lib/client';
import { Product } from 'sanity.types';
import ProductCard from './ProductCard';


export default function ProductTab() {
    const [SelectedTab, setSelectedTab] = useState(productType[0]?.title || '')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const query = `*[_type == 'product' && variant == $variant] | order(name desc)`
    const params = {variant: SelectedTab.toLowerCase()}
    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            try {
                const  res = await client.fetch(query, params)
                setProducts(res)
                
            } catch (error) {
                console.log(error)
                
            }finally{
                setLoading(false)
            }; 
        };
        fetchData();

    },[SelectedTab]);


  return (
    <div>
      <Tabbular SelectedTab={SelectedTab} onTabSelect={setSelectedTab}/>
      {loading ? (
         <div>
         <span>
             Loading...
         </span>
     </div> 
      )
      :(
        products.map((product: Product)=> <div key={product._id}>
            <ProductCard product={product}/>
        </div> 
        )

        )
      }
    </div>
  )
}
