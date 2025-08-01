"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductPage = () => {
  return (
    <div className="px-4 py-10 sm:px-8 md:px-16 lg:p-40">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>

        <DialogContent className="mx-auto w-[90%] p-4 sm:w-[80%] sm:max-w-3xl md:w-[80%] md:max-w-4xl lg:w-[75%] lg:max-w-5xl xl:w-[70%]">
          <div className="flex h-full flex-col xl:flex-row">
            {/* Left Side - Image */}
            <div className="relative aspect-[4/3] w-full sm:aspect-[6/5] md:aspect-[6/5] xl:aspect-square xl:w-[70%]">
              <Image
                src="/watch.webp"
                alt="Product Image"
                fill
                className="object-contain"
              />

              {/* Left Button - Centered for all screen sizes */}
              <Button className="absolute left-2 top-1/2 flex h-14 w-8 -translate-y-1/2 items-center justify-center rounded-none bg-gray-600 hover:!bg-gray-600">
                <ChevronLeft className="h-5 w-5 text-white" />
              </Button>

              {/* Right Button - Centered for all screen sizes */}
              <Button className="absolute right-2 top-1/2 flex h-14 w-8 -translate-y-1/2 items-center justify-center rounded-none bg-gray-600 hover:!bg-gray-600">
                <ChevronRight className="h-5 w-5 text-white" />
              </Button>
            </div>

            {/* Right Side */}
            <div className="hidden w-full flex-col overflow-y-auto xl:flex xl:w-[30%]">
              <DialogHeader className="mt-6 pb-4">
                <DialogTitle>
                  【🔥Malaysia Stock🔥】 DW6900 full black UNISEX WATCH JAM
                  TANGAN
                </DialogTitle>
              </DialogHeader>

              <div className="mt-4 px-8">
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(9)].map((_, i) => {
                    const src = `/iphone-${(i % 4) + 1}.webp`;
                    return (
                      <div
                        key={i}
                        className={`relative aspect-square ${
                          i === 0 ? "ring-2 ring-red-500 ring-offset-1" : ""
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`Product ${i + 1}`}
                          fill
                          className="cursor-pointer object-cover transition-opacity duration-300 hover:opacity-60"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductPage;
