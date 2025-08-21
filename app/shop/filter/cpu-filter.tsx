"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Tag } from "lucide-react";
import FilterSection from "./FilterSection";
import ShowMoreLessWrapper from "./button/show-more-button";
// import FilterSection from "./FilterSection";

const categories = [
  "1.1GHz dual-core Intel Core i3 (3)",
  "1.1GHz quad-core Intel Core i5 (3)",
  "1.2GHz quad-core Intel Core i7 (3)",
  "1.3GHz dual-core Intel Core i5 (1)",
  "1.4GHz dual-core Intel Core i5 (1)",
  "1.4GHz quad-core 8th-generation Intel Core i5 (1)",
  "1.6GHz dual-core Intel Core i5 (6)",
  "1.7GHz dual-core Intel Core i7 (1)",
  "1.8GHz dual-core Intel Core i5 (2)",
  "2.0GHz quad-core Intel Core i7 (2)",
  "2.0GHz quad‑core 10th‑generation Intel Core i5",
  "2.2GHz 6-core Intel Core i7",
  "2.2GHz dual-core Intel Core i7",
  "2.2GHz quad-core Intel Core i7",
  "2.3GHz 8-core Intel Core i9",
  "2.3GHz dual-core Intel Core i5",
  "2.3GHz quad-core Intel Core i5",
  "2.3GHz quad-core Intel Core i7",
  "2.3GHz quad-core Intel Core i7 Retina",
  "2.4GHz 8-core Intel Core i9",
  "2.4GHz dual-core Intel Core i5",
  "2.4GHz quad-core Intel Core i7",
  "2.5GHz dual-core Intel Core i5",
  "2.5GHz quad-core Intel Core i7",
  "2.6GHz 6-core Intel Core i7",
  "2.6GHz dual-core Intel Core i5",
  "2.6GHz quad-core Intel Core i7",
  "2.6GHz quad-core Intel Core i7 Retina",
  "2.7GHz dual-core Intel Core i7",
  "2.7GHz quad-core Intel Core i7",
  "2.7GHz quad-core Intel Core i7 Retina",
  "2.8GHz dual-core Intel Core i5",
  "2.8GHz dual-core Intel Core i7",
  "2.8GHz quad-core Intel Core i7",
  "2.9GHz 6-core Intel Core i9",
  "2.9GHz dual-core Intel Core i5",
  "2.9GHz dual-core Intel Core i7",
  "3.0GHz dual-core Intel Core i7",
  "3.1GHz dual-core Intel Core i5",
  "3.3GHz dual-core Intel Core i5",
  "3.5GHz dual-core Intel Core i7",
  "Apple M1 chip: 8-core CPU / 7-core GPU",
  "Apple M1 chip: 8-core CPU / 8-core GPU",
  "Apple M1 chip: 8-Core CPU / 8-Core GPU",
  "Apple M2 chip: 8-Core CPU / 10-Core GPU",
];

export default function CpuFilter() {
  return (
    <FilterSection title="CPU">
      <ShowMoreLessWrapper
        title=""
        allItems={categories}
        visibleLimit={10}
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
