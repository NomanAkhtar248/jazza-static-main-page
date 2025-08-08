"use client";

import CategoryFilter from "./CategoryFilter";
import PriceRangeFilter from "./PriceRangeFilter";
// import PriceRangeFilter from "./PriceRangeFilter";
import RatingFilter from "./RatingFilter";

export default function FilterPage() {
  return (
    <div className="w-full max-w-xs divide-y-2">
      <PriceRangeFilter />
      <CategoryFilter />
      <RatingFilter />
    </div>
  );
}
