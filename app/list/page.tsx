"use client";

import React, { useEffect, useState } from "react";
import { products } from "../wishlist/data";
// import WishlistButton from "../wishlist/wishlist";
import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  title: string;
  description: string;
  slug: string;
};

const WishlistPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ApiWishlistProducts, setApiWishlistProducts] = useState<Product[]>([]);

  useEffect(
    () => {
      if (typeof window !== "undefined" && window.localStorage) {
        const localWishlist = JSON.parse(
          localStorage.getItem("wishlist") || "[]",
        );
        const filteredProducts = products.filter((product) =>
          localWishlist.includes(product.title),
        );

        setApiWishlistProducts(filteredProducts);
        setIsLoading(false);

        // if (!ApiWishlistProducts.length) {
        //   // Initial fetch
        //   const filteredProducts = products.filter((product) =>
        //     localWishlist.includes(product.id),
        //   );
        //   setApiWishlistProducts(filteredProducts);
        //   setIsLoading(false);
        // } else {
        //   // Sync: Remove items that are no longer in localStorage
        //   const updatedProducts = ApiWishlistProducts.filter((product) =>
        //     localWishlist.includes(product.id),
        //   );
        //   setApiWishlistProducts(updatedProducts);
        // }
      }
    },
    [],
    // [ApiWishlistProducts]
  );

  const handleRemove = (productTitle: string) => {
    if (typeof window !== "undefined" && window.localStorage) {
      const localWishlist = JSON.parse(
        localStorage.getItem("wishlist") || "[]",
      );
      const updatedWishlist = localWishlist.filter(
        (title: string) => title !== productTitle,
      );

      // localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      const updatedProducts = ApiWishlistProducts.filter(
        (product) => product.title !== productTitle,
      );
      setApiWishlistProducts(updatedProducts);
    }
    // const updatedWishlist = JSON.parse(
    //   localStorage.getItem("wishlist") || "[]",
    // ).filter((id) => id !== productId);
    // localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // // Filter removed product from state
    // const updatedProducts = ApiWishlistProducts.filter(
    //   (product) => product.id !== productId,
    // );
    // setApiWishlistProducts(updatedProducts);
  };
  // localStorage.setItem("wishlist", JSON.stringify(wishlist));
  if (isLoading) return <div className="p-6">Loading...</div>;
  if (ApiWishlistProducts.length === 0)
    return <div className="p-6">No items in wishlist.</div>;

  return (
    <div>
      {ApiWishlistProducts.map((product) => (
        <div key={product.id} className="mb-4 mt-2">
          <div className="">
            <h2 className="mb-2 ml-20">{product.title}</h2>
            <Button
              variant="destructive"
              className="ml-20 bg-black hover:bg-black"
              onClick={() => handleRemove(product.title)}
            >
              Remove from Wishlist
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistPage;
