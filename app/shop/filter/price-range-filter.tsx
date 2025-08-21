"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ChevronDown } from "lucide-react";
// import FilterSection from "./FilterSection";

type PriceRange = {
  from: number;
  to: number;
};

const MIN_PRICE = 0;
const MAX_PRICE = 9999;

export default function PriceRangeFilter() {
  const [value, setValue] = useState<PriceRange>({
    from: MIN_PRICE,
    to: MAX_PRICE,
  });

  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = (newValue: PriceRange) => {
    setValue(newValue);
  };

  return (
    <div className="p-4w-auto rounded-lg xl:w-80">
      {/* Header */}
      <div
        className="mb-4 flex cursor-pointer items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-bold text-gray-900">Price</h3>
        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="space-y-4">
          {/* Input Fields */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">AED</span>
              <Input
                type="number"
                value={value.from}
                onChange={(e) =>
                  handleChange({ from: +e.target.value || 0, to: value.to })
                }
                className="h-8 w-16 bg-gray-200 text-sm"
                min={MIN_PRICE}
                max={value.to}
              />
            </div>

            <span className="text-sm text-gray-500">To</span>

            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-600">AED</span>
              <Input
                type="number"
                value={value.to}
                onChange={(e) =>
                  handleChange({
                    from: value.from,
                    to: +e.target.value || MAX_PRICE,
                  })
                }
                className="h-8 w-16 bg-gray-200 text-sm"
                min={value.from}
                max={MAX_PRICE}
              />
            </div>
          </div>

          {/* Slider */}
          <div className="mb-2 mt-6">
            <Slider
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={10}
              value={[value.from, value.to]}
              onValueChange={([from, to]) => handleChange({ from, to })}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
