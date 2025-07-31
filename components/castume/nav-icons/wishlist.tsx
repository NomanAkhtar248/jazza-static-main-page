import { Heart } from "lucide-react";
import React from "react";

const Wishlist = () => {
  return (
    <div className="group flex flex-row items-center">
      <span className="flex cursor-pointer items-center justify-center">
        <Heart
          size={24}
          className="text-gray-700 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#c82d8c]"
        />
      </span>
    </div>
  );
};

export default Wishlist;
