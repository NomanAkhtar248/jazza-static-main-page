"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Tag } from "lucide-react";
import FilterSection from "./FilterSection";
// import FilterSection from "./FilterSection";

const categories = [
  "2 GB (6)",
  "4 GB (101)",
  "6 GB (1)",
  "8 GB (249)",
  "16 GB (131)",
  "24 GB (2)",
  "32 GB (17)",
];

export default function RamFilter() {
  return (
    <FilterSection title="RAM">
      {categories.map((category) => (
        <div key={category} className="mb-2 flex items-center space-x-3">
          <Checkbox id={category} />
          <Label htmlFor={category}>{category}</Label>
        </div>
      ))}
    </FilterSection>
  );
}
