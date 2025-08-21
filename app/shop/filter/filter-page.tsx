// "use client";
import CategoryFilter from "./storage-filter";
import PriceRangeFilter from "./price-range-filter";
import BrandFilter from "./brand-filter";
import SeriesFilter from "./series-filter";
import GenerationFilter from "./generation-filter";
import MacbookTypeFilter from "./macbook-filter";
import ScreenSizeFilter from "./screen-size";
import IPadTypeFilter from "./ipad-type";
import RamFilter from "./ram-filter";
import CpuFilter from "./cpu-filter";
import ColorFilter from "./color-filter";
import RefinedFilter from "./refined-by";

export default function FilterPage() {
  return (
    <div className="mt-10 w-full">
      <div className="rounded-lg border border-gray-200 bg-white px-4 shadow-sm">
        <div className="divide-y">
          <RefinedFilter />
          <PriceRangeFilter />
          <ColorFilter />
          <CategoryFilter />
          <BrandFilter />
          <SeriesFilter />
          <GenerationFilter />
          <MacbookTypeFilter />
          <ScreenSizeFilter />
          <IPadTypeFilter />
          <RamFilter />
          <CpuFilter />
        </div>
      </div>
    </div>
  );
}
