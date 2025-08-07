"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

interface WishlistButtonProps {
  productTitle: string;
  setApiWishlistProducts?: (products: number[]) => void;
  updateParent?: boolean;
}

const WishlistButton = ({
  productTitle,
  setApiWishlistProducts,
  updateParent = false,
}: WishlistButtonProps) => {
  const [btnText, setBtnText] = useState("Add To Wishlist");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      if (wishlist.includes(productTitle)) {
        setBtnText("Remove From Wishlist");
      }
    }
  }, [productTitle]);

  const handleWishlist = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

      if (wishlist.includes(productTitle)) {
        wishlist = wishlist.filter((title: string) => title !== productTitle);
        setBtnText("Add To Wishlist");
      } else {
        wishlist.push(productTitle);
        setBtnText("Remove From Wishlist");
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      if (updateParent && typeof setApiWishlistProducts === "function") {
        setApiWishlistProducts(wishlist);
      }
    }
  };

  return (
    <div>
      <Button onClick={handleWishlist}>{btnText}</Button>
    </div>
  );
};

export default WishlistButton;
