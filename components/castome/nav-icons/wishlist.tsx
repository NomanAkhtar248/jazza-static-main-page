import { Heart } from "lucide-react"
import React from "react"

const Wishlist = () => {
  return (
    <div className="flex flex-row items-center  group ">
      <span className="flex items-center justify-center cursor-pointer">
        <Heart
          size={24}
          className="text-gray-700 transition-transform duration-300 group-hover:text-[#c82d8c] group-hover:scale-110"
        />
      </span>
    </div>
  )
}

export default Wishlist
