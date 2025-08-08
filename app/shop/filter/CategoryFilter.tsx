"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Tag } from "lucide-react";
import FilterSection from "./FilterSection";
// import FilterSection from "./FilterSection";

const categories = [
  "16 GB (10)",
  "32 GB (27)",
  "64 GB (45)",
  "Home & Garden",
  "Toys",
];

export default function CategoryFilter() {
  return (
    <FilterSection title="Storage">
      {categories.map((category) => (
        <div key={category} className="mb-2 flex items-center space-x-3">
          <Checkbox id={category} />
          <Label htmlFor={category}>{category}</Label>
        </div>
      ))}
    </FilterSection>
  );
}
