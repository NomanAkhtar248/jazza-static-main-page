"use client";
import { useState } from "react";
import FilterSection from "./FilterSection";
import ShowMoreLessWrapper from "./button/show-more-button";
// import ShowMoreLessWrapper from "./ShowMoreLessWrapper";

type ColorType = {
  name: string;
  value: string;
  bg: string;
};

const colors: ColorType[] = [
  { name: "Blue", value: "blue", bg: "bg-blue-500" },
  { name: "Green", value: "green", bg: "bg-green-500" },
  { name: "Yellow", value: "yellow", bg: "bg-yellow-400" },
  { name: "Pink", value: "pink", bg: "bg-pink-400" },
  { name: "Purple", value: "purple", bg: "bg-purple-500" },
  { name: "Orange", value: "orange", bg: "bg-orange-400" },
  { name: "Black", value: "black", bg: "bg-gray-900" },
  { name: "White", value: "white", bg: "bg-white border border-gray-300" },
  { name: "Red", value: "red", bg: "bg-red-500" },
  { name: "Blue", value: "blue", bg: "bg-blue-500" },
  { name: "Green", value: "green", bg: "bg-green-500" },
  { name: "Yellow", value: "yellow", bg: "bg-yellow-400" },
  { name: "Pink", value: "pink", bg: "bg-pink-400" },
  { name: "Purple", value: "purple", bg: "bg-purple-500" },
  { name: "Orange", value: "orange", bg: "bg-orange-400" },
  { name: "Black", value: "black", bg: "bg-gray-900" },
  { name: "White", value: "white", bg: "bg-white border border-gray-300" },
  { name: "Red", value: "red", bg: "bg-red-500" },
  { name: "Blue", value: "blue", bg: "bg-blue-500" },
  { name: "Green", value: "green", bg: "bg-green-500" },
  { name: "Yellow", value: "yellow", bg: "bg-yellow-400" },
  { name: "Pink", value: "pink", bg: "bg-pink-400" },
  { name: "Purple", value: "purple", bg: "bg-purple-500" },
  { name: "Orange", value: "orange", bg: "bg-orange-400" },
  { name: "Black", value: "black", bg: "bg-gray-900" },
  { name: "White", value: "white", bg: "bg-white border border-gray-300" },
  { name: "Red", value: "red", bg: "bg-red-500" },
  { name: "Blue", value: "blue", bg: "bg-blue-500" },
  { name: "Green", value: "green", bg: "bg-green-500" },
  { name: "Yellow", value: "yellow", bg: "bg-yellow-400" },
  { name: "Pink", value: "pink", bg: "bg-pink-400" },
  { name: "Purple", value: "purple", bg: "bg-purple-500" },
  { name: "Orange", value: "orange", bg: "bg-orange-400" },
  { name: "Black", value: "black", bg: "bg-gray-900" },
  { name: "White", value: "white", bg: "bg-white border border-gray-300" },
  { name: "Red", value: "red", bg: "bg-red-500" },
  { name: "Blue", value: "blue", bg: "bg-blue-500" },
  { name: "Green", value: "green", bg: "bg-green-500" },
  { name: "Yellow", value: "yellow", bg: "bg-yellow-400" },
  { name: "Pink", value: "pink", bg: "bg-pink-400" },
  { name: "Purple", value: "purple", bg: "bg-purple-500" },
  { name: "Orange", value: "orange", bg: "bg-orange-400" },
  { name: "Black", value: "black", bg: "bg-gray-900" },
  { name: "White", value: "white", bg: "bg-white border border-gray-300" },
  { name: "Red", value: "red", bg: "bg-red-500" },
  { name: "Blue", value: "blue", bg: "bg-blue-500" },
  { name: "Green", value: "green", bg: "bg-green-500" },
  { name: "Yellow", value: "yellow", bg: "bg-yellow-400" },
  { name: "Pink", value: "pink", bg: "bg-pink-400" },
  { name: "Purple", value: "purple", bg: "bg-purple-500" },
  { name: "Orange", value: "orange", bg: "bg-orange-400" },
  { name: "Black", value: "black", bg: "bg-gray-900" },
  { name: "White", value: "white", bg: "bg-white border border-gray-300" },
  { name: "Red", value: "red", bg: "bg-red-500" },
  { name: "Blue", value: "blue", bg: "bg-blue-500" },
  { name: "Green", value: "green", bg: "bg-green-500" },
  { name: "Yellow", value: "yellow", bg: "bg-yellow-400" },
  { name: "Pink", value: "pink", bg: "bg-pink-400" },
  { name: "Purple", value: "purple", bg: "bg-purple-500" },
  { name: "Orange", value: "orange", bg: "bg-orange-400" },
];

export default function ColorFilter() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleColor = (colorValue: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorValue)
        ? prev.filter((c) => c !== colorValue)
        : [...prev, colorValue],
    );
  };

  return (
    <FilterSection title="colors">
      <div className="w-auto overflow-y-auto xl:w-80">
        <ShowMoreLessWrapper
          title=""
          allItems={colors}
          visibleLimit={30}
          renderItems={(visibleColors: ColorType[]) => (
            <div className="grid grid-cols-5 gap-1 overflow-y-auto py-1">
              {visibleColors.map((colors, i) => (
                <div key={i} className="flex flex-col items-center">
                  <button
                    type="button"
                    className={`h-8 w-8 rounded-full ${colors.bg} ${
                      selectedColors.includes(colors.value)
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : ""
                    }`}
                    onClick={() => toggleColor(colors.value)}
                    aria-label={`Select ${colors.name}`}
                  />
                  <span className="text-xs text-gray-600">{colors.name}</span>
                </div>
              ))}
            </div>
          )}
        />
      </div>
    </FilterSection>
  );
}
