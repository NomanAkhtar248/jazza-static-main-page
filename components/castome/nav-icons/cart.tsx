import { ShoppingCart } from "lucide-react";

const Cart = ({ itemCount = 0 }) => {
  return (
    <div className="flex items-center">
      <div className="group relative cursor-pointer">
        <ShoppingCart
          size={24}
          className="text-gray-700 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#c82d8c]"
        />
        <span className="absolute -right-2 -top-3 rounded-full bg-[#c82d8c] px-1.5 py-[4px] text-[10px] font-semibold leading-none text-white">
          {itemCount}
        </span>
      </div>
    </div>
  );
};

export default Cart;
