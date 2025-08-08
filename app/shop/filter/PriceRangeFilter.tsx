"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { CircleDollarSign } from "lucide-react";
import FilterSection from "./FilterSection";
// import FilterSection from "./FilterSection";

type PriceRange = { from: number; to: number };

const MIN_PRICE = 0;
const MAX_PRICE = 1000;

export default function PriceRangeFilter() {
  const [value, setValue] = useState<PriceRange>({
    from: MIN_PRICE,
    to: MAX_PRICE,
  });

  const handleChange = (newValue: PriceRange) => {
    setValue(newValue);
  };

  return (
    <FilterSection title="Price Range" icon={CircleDollarSign}>
      <div className="flex justify-between space-x-4">
        <Input
          type="number"
          value={value.from}
          onChange={(e) =>
            handleChange({ from: +e.target.value, to: value.to })
          }
          className="w-20"
        />
        <Input
          type="number"
          value={value.to}
          onChange={(e) =>
            handleChange({ from: value.from, to: +e.target.value })
          }
          className="w-20"
        />
      </div>
      <Slider
        min={MIN_PRICE}
        max={MAX_PRICE}
        step={10}
        value={[value.from, value.to]}
        onValueChange={([from, to]) => handleChange({ from, to })}
        className="mb-3 mt-4 w-full"
      />
    </FilterSection>
  );
}
