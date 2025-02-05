"use client";
import React, { useEffect, useState } from "react";
import Tabbular from "./Tabbular";
import { productType } from "@/constants";
import { client } from "@/sanity/lib/client";
import { Product } from "sanity.types";
import ProductCard from "./ProductCard";

const query = `*[_type == 'product' && variant == $variant] | order(name desc)`;

export default function ProductTab() {
  const [SelectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const params = { variant: SelectedTab.toLowerCase() };
        const res = await client.fetch(query, params);
        setProducts(res);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [SelectedTab]); // Only `SelectedTab` is needed in the dependency array

  return (
    <div>
      <Tabbular SelectedTab={SelectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        products.map((product) => (
          <div key={product._id}>
            <ProductCard product={product} />
          </div>
        ))
      )}
    </div>
  );
}
