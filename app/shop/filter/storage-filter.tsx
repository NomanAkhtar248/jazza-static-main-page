"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import FilterSection from "./FilterSection";
import ShowMoreLessWrapper from "./button/show-more-button";
// import ShowMoreLessWrapper from "./ShowMoreLessWrapper";

const storageCategories = [
  "16 GB (10)",
  "32 GB (27)",
  "64 GB (45)",
  "128 GB (104)",
  "256 GB (115)",
  "512 GB (75)",
  "768 GB (4)",
  "1000 GB (6)",
  "16 GB eMMC (7)",
  "32 GB eMMC (1)",
  "128 GB HDD (2)",
  "256 GB HDD (5)",
  "320 GB HDD (10)",
  "500 GB HDD (35)",
  "1000 GB HDD (9)",
  "16 GB SSD (7)",
  "32 GB SSD (1)",
  "128 GB SSD (103)",
  "256 GB SSD (230)",
  "512 GB SSD (115)",
  "1000 GB SSD (34)",
  "1 TB (26)",
  "2 TB (9)",
  "1 TB HDD (3)",
  "1 TB SSD (16)",
  "1.5 TB SSD (2)",
  "2 TB SSD (8)",
  "4 TB SSD (4)",
  "1 TB SSD SSD (1)",
];

export default function CategoryFilter() {
  return (
    <div className="w-auto xl:w-80">
      <FilterSection title="Storage">
        <ShowMoreLessWrapper
          title=""
          allItems={storageCategories}
          visibleLimit={11}
          renderItems={(categories) =>
            categories.map((category) => (
              <div key={category} className="mb-2 flex items-center space-x-3">
                <Checkbox id={category} />
                <Label htmlFor={category}>{category}</Label>
              </div>
            ))
          }
        />
      </FilterSection>
    </div>
  );
}
