"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const WishlistButton = ({
  productId,
  setApiWishlistProducts,
  updateParent = false,
}: {
  productId: number;
}) => {
  const [btnText, setBtnText] = useState("Add To Wishlist");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

      if (wishlist.includes(productId)) {
        setBtnText("Remove From Wishlist");
      }
    }
  }, []);

  const handleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    if (wishlist.includes(productId)) {
      wishlist = wishlist.filter((id: number) => id !== productId);
      setBtnText("Add To Wishlist");
    } else {
      wishlist.push(productId);
      setBtnText("Remove From Wishlist");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    if (updateParent) setApiWishlistProducts(wishlist);
  };

  return (
    <div>
      <Button onClick={() => handleWishlist()}>{btnText}</Button>
    </div>
  );
};

export default WishlistButton;
