import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heart, Zap } from "lucide-react";
import Image from "next/image";
const ProductCard = () => {
  return (
    <div>
      <Card className="w-full min-w-48 max-w-xs px-2 pt-0 shadow-none">
        <CardHeader className="mb-0 flex flex-row items-center justify-between px-1 py-1 pb-0">
          {/* Lighting Blot */}
          <Button
            variant="ghost"
            size="icon"
            className="flex h-6 w-6 items-center gap-3 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <Zap className="h-5 w-5 text-gray-900" />
          </Button>
          {/* Heart Icon */}
          <Button className="h-6 w-6 cursor-pointer rounded-full bg-gray-100 transition-colors hover:bg-gray-200">
            <Heart className="h-5 w-5 text-gray-900" />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="relative">
            <Image
              src="/images/iphone1.webp"
              alt="iPhone 12 Pro Max"
              width={200}
              height={200}
              className="h-40 w-full cursor-pointer object-contain"
            />
          </div>
          {/*Remain Content */}
          <div className="px-0 pb-0 pt-0">
            {/* Offer + Product Title */}
            <div className="">
              <div className="font-montserrat inline-block rounded bg-gradient-to-l from-fuchsia-900 to-pink-500 px-3 py-0.5 text-xs text-white">
                -49% vs new
              </div>

              {/* Product Title */}
              <h3 className="font-montserrat mb-2 cursor-pointer text-sm font-semibold text-gray-900">
                {"Iphone 12 Pro Max"}
              </h3>
            </div>
            {/* Varient Color+ Product Price */}
            <div className="py- m-0 gap-1">
              <div className="flex cursor-pointer items-center justify-start gap-1 py-1">
                <div className="h-6 w-6 cursor-pointer rounded-full border-2 border-gray-200 bg-gray-500 transition-colors hover:border-gray-400"></div>
                <div className="h-6 w-6 cursor-pointer rounded-full border-2 border-gray-200 bg-gray-700 transition-colors hover:border-gray-400"></div>
                <div className="h-6 w-6 cursor-pointer rounded-full border-2 border-gray-200 bg-purple-400 transition-colors hover:border-gray-400"></div>
                <div className="h-6 w-6 cursor-pointer rounded-full border-2 border-gray-200 bg-red-600 transition-colors hover:border-gray-400"></div>
                <span className="text-xs text-gray-400">+1</span>
              </div>
              {/* Product Price */}

              <h3 className="font-montserrat mb-0 text-sm font-bold text-black">
                {"AED 1299"}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
