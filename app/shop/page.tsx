import React from "react";
// import ProductPage from "@/components"
import FilterPage from "./filter/filter-page";
// import ProductPage from "./product";
// import MYShopPage from "./filter/filter-page";
import { Button } from "@/components/ui/button";
import { Funnel } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ShopPage = () => {
  return (
    <div className="flex gap-2">
      {/* Show Filter as Sheet for sm, md, lg */}
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mb-4">
              <Funnel />
              <span>Filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[280px] px-4 sm:w-[380px] md:w-[420px] lg:w-[500px]"
          >
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <FilterPage />
          </SheetContent>
        </Sheet>
      </div>

      {/* xl screens */}
      <div className="hidden xl:block">
        <FilterPage />
      </div>
    </div>
  );
};

export default ShopPage;
