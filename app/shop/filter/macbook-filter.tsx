"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Tag } from "lucide-react";
import FilterSection from "./FilterSection";
// import FilterSection from "./FilterSection";

const categories = ["MacBook Air (51)", "MacBook Pro (48)"];

export default function MacbookTypeFilter() {
  return (
    <FilterSection title="Macbook Type">
      {categories.map((category) => (
        <div key={category} className="mb-2 flex items-center space-x-3">
          <Checkbox id={category} />
          <Label htmlFor={category}>{category}</Label>
        </div>
      ))}
    </FilterSection>
  );
}
