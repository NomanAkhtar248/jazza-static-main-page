"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const RefinedFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState([
    "16 GB",
    "64 GB",
    "256 GB",
    "32 GB eMMC",
    "Apple",
    "Huawei",
    "Lenovo",
    "Chromebook",
    "MacBook Air",
  ]);

  //   const removeFilter = (filterToRemove) => {
  //     setSelectedFilters((prev) =>
  //       prev.filter((filter) => filter !== filterToRemove),
  //     );
  //   };

  //   const clearAll = () => {
  //     setSelectedFilters([]);
  //   };

  //   if (selectedFilters.length === 0) {
  //     return (
  //       <div className="rounded-lg bg-gray-50 p-4">
  //         <p className="text-sm text-gray-500">No filters selected</p>
  //       </div>
  //     );
  //   }

  return (
    <div className="mb-4 w-auto xl:w-80">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="mt-4 text-lg font-bold text-gray-900">REFINED BY</h3>
          <p className="text-sm text-gray-500">
            {selectedFilters.length} results
          </p>
        </div>
        <Button
          variant="link"
          //   onClick={clearAll}
          className="text-sm text-gray-600 underline transition-colors hover:no-underline"
        >
          Clear All
        </Button>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2">
        {selectedFilters.map((filter, index) => (
          <div
            key={index}
            className="flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"
          >
            <span>{filter}</span>
            <button
              //   onClick={() => removeFilter(filter)}
              className="ml-1 rounded-full p-0.5 transition-colors hover:bg-purple-200"
              //   aria-label={`Remove ${filter} filter`}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefinedFilter;
