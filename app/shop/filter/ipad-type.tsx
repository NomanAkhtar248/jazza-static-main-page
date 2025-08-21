"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Tag } from "lucide-react";
import FilterSection from "./FilterSection";
// import FilterSection from "./FilterSection";

const categories = [
  "iPad (11)",
  "iPad Air (6)",
  "iPad Mini (5)",
  "iPad Pro (10)",
];

export default function IPadTypeFilter() {
  return (
    <FilterSection title="IPad Type">
      {categories.map((category) => (
        <div key={category} className="mb-2 flex items-center space-x-3">
          <Checkbox id={category} />
          <Label htmlFor={category}>{category}</Label>
        </div>
      ))}
    </FilterSection>
  );
}
