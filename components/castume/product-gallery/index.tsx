import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ChevronRight, ChevronLeft } from "lucide-react";

// import { Button } from "@/components/ui/button";

import Image from "next/image";

import React from "react";

const ProductPage = () => {
  return (
    <div className="p-40 py-40">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="h-[80vh] w-full max-w-6xl p-0">
          <div className="flex h-full">
            {/* Left Side - Image (70% width) */}
            <div className="relative aspect-square w-[70%]">
              <Image
                src="/iphone-1.webp"
                alt="Product Image"
                fill
                className="object-cover"
              />

              <Button className="absolute left-2 top-1/2 flex h-14 w-10 -translate-y-1/2 items-center justify-center rounded-none bg-gray-600 hover:!bg-gray-600">
                <ChevronLeft className="h-6 w-4 text-white" />
              </Button>

              <Button className="absolute right-2 top-1/2 flex h-14 w-10 -translate-y-1/2 items-center justify-center rounded-none bg-gray-600 hover:!bg-gray-600">
                <ChevronRight className="h-6 w-4 text-white" />
              </Button>
            </div>

            {/* Right Side - Content (30% width) */}
            <div className="flex w-[30%] flex-col">
              <DialogHeader className="mt-6 p-6 pb-4">
                <DialogTitle>
                  【🔥Malaysia Stock🔥】 DW6900 full black UNISEX WATCH JAM
                  TANGAN
                </DialogTitle>
              </DialogHeader>

              {/* 5 Pictures Grid - DialogHeader ke neeche */}
              <div className="mt-4 px-8">
                <div className="grid grid-cols-3 gap-3">
                  {/* First 4 images in 2x2 grid */}
                  <div className="relative aspect-square ring-2 ring-red-500 ring-offset-1">
                    <Image
                      src="/iphone-1.webp"
                      alt="Product Image 1"
                      fill
                      className="cursor-pointer object-cover"
                    />
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src="/iphone-2.webp"
                      alt="Product Image 2"
                      fill
                      className="cursor-pointer object-cover"
                    />
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src="/iphone-3.webp"
                      alt="Product Image 3"
                      fill
                      className="cursor-pointer object-cover"
                    />
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src="/iphone-4.webp"
                      alt="Product Image 4"
                      fill
                      className="cursor-pointer object-cover"
                    />
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src="/iphone-3.webp"
                      alt="Product Image 5"
                      fill
                      className="cursor-pointer object-cover"
                    />
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src="/iphone-1.webp"
                      alt="Product Image 1"
                      fill
                      className="cursor-pointer object-cover"
                    />
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src="/iphone-2.webp"
                      alt="Product Image 2"
                      fill
                      className="cursor-pointer object-cover"
                    />
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src="/iphone-3.webp"
                      alt="Product Image 3"
                      fill
                      className="cursor-pointer object-cover"
                    />
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src="/iphone-4.webp"
                      alt="Product Image 4"
                      fill
                      className="cursor-pointer object-cover"
                    />
                  </div>
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
