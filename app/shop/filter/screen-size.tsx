"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Tag } from "lucide-react";
import FilterSection from "./FilterSection";
import ShowMoreLessWrapper from "./button/show-more-button";
// import FilterSection from "./FilterSection";

const categories = [
  '7.9" (5)',
  '9.7" (16)',
  '10.3" (4)',
  '10.5" (2)',
  '11" (3)',
  '11.6" (17)',
  '12" (1)',
  '12.3" (12)',
  '12.5" (24)',
  '12.9" (5)',
  '13" (11)',
  '13.3" (97)',
  '13.5" (2)',
  '14" (119)',
  '14.1" (2)',
  '15" (6)',
  '15.4" (16)',
  '15.6" (46)',
  '16" (3)',
  '17" (1)',
  '17.3" (4)',
  '21.5" (4)',
  '27" (3)',
];

export default function ScreenSizeFilter() {
  return (
    <FilterSection title="Screen Size">
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
