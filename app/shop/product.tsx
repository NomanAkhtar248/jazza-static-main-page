import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Product from "@/app/shop/product-Data.json";

const ProductPage = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Product.map((item, index) => (
        <Card
          key={index}
          className="w-full min-w-48 max-w-xs px-2 pt-0 shadow-none"
        >
          <CardContent className="p-0">
            <div className="relative">
              <Image
                src={item.imgUrl}
                alt={item.title}
                width={200}
                height={200}
                className="h-40 w-full cursor-pointer object-contain"
              />
            </div>
            <div>
              <h3 className="text-red-400">{item.title}</h3>
              <p className="text-green-500">{item.price}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductPage;
