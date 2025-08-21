"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Tag } from "lucide-react";
import FilterSection from "./FilterSection";
import ShowMoreLessWrapper from "./button/show-more-button";
// import FilterSection from "./FilterSection";

const categories = [
  "Chromebook (15)",
  "Elitebook (62)",
  "Galaxy-Note-Series (4)",
  "Galaxy-S20-Series (2)",
  "Galaxy-S-Series (11)",
  "Galaxy-Z-Series (2)",
  "Latitude (82)",
  "MacBook Air (51)",
  "MacBook Pro (48)",
  "Precision (14)",
  "Probook (16)",
  "Surface (9)",
  "Thinkpad (38)",
  "X1 Carbon (7)",
  "X1 Yoga (10)",
  "XPS (2)",
  "Z-book (2)",
];

export default function SeriesFilter() {
  return (
    <FilterSection title="Series">
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
