"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Tag } from "lucide-react";
import FilterSection from "./FilterSection";
import ShowMoreLessWrapper from "./button/show-more-button";
// import FilterSection from "./FilterSection";

const categories = [
  "0-gen (20)",
  "1st-gen (9)",
  "2nd-gen (14)",
  "3rd-gen (19)",
  "4th-gen (35)",
  "5th-gen (26)",
  "6th-gen (60)",
  "7th-gen (37)",
  "8th-gen (48)",
  "9th-gen (4)",
  "10th-gen (7)",
  "11th-gen (7)",
  "7th Gen (1)",
  "10th gen (2)",
  "10th Gen (1)",
];

export default function GenerationFilter() {
  return (
    <FilterSection title="Generation">
      <ShowMoreLessWrapper
        title=""
        allItems={categories}
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
  );
}
