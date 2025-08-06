"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { products } from "../wishlist/data";
import WishlistButton from "../wishlist/wishlist";

const WishlistPage = () => {
  const [localWishlist, setLocalWishlist] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ApiWishlistProducts, setApiWishlistProducts] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      if (!ApiWishlistProducts.length) {
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        //   fetch
        // setApiWishlistProducts()
        // setIsLoading(false)
      } else {
        setApiWishlistProducts(
          ApiWishlistProducts.filter((ApiWishlistProduct) =>
            localWishlist.includes(ApiWishlistProduct.id),
          ),
        );
      }
    }
  }, [localWishlist]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (ApiWishlistProducts.length === 0) {
    return <div className="p-6">No items in wishlist.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
      {ApiWishlistProducts.map((id) => (
        <div key={id}>
          <h1>{id}</h1>
          <WishlistButton
            productId={id}
            updateParent={true}
            setApiWishlistProducts={setApiWishlistProducts}
          />
        </div>
      ))}
    </div>
  );
};

export default WishlistPage;
