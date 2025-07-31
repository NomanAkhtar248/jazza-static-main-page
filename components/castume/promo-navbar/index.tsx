import { Zap } from "lucide-react";

const PromoNavbar = () => {
  return (
    <div className="flex h-6 items-center justify-center bg-[#c82d8c] md:h-8 md:justify-between">
      <div className="font-semibold text-white sm:text-center">
        FREE DELIVERY ON ALL ORDERS
      </div>
      <div className="hidden items-center space-x-5 md:flex">
        <span className="flex cursor-pointer items-center gap-1 font-semibold text-yellow-400">
          <Zap size={15} className="fill-[yellow] stroke-[yellow]" />
          Sale
        </span>
        <span className="cursor-pointer font-semibold text-white hover:text-blue-500">
          Track Order
        </span>
        <span className="cursor-pointer font-semibold text-white hover:text-blue-500">
          Contact
        </span>
      </div>
    </div>
  );
};

export default PromoNavbar;
