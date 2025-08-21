"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { ChevronUp } from "lucide-react";
import { ChevronsUpDown } from "lucide-react";
// import { ChevronDown } from "lucide-react";
interface Props {
  title: string;
  renderItems: (items: string[]) => React.ReactNode; // category render karne ka tarika
  allItems: string[];
  visibleLimit?: number;
}

export default function ShowMoreLessWrapper({
  title,
  renderItems,
  allItems,
  visibleLimit = 11,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = isExpanded ? allItems : allItems.slice(0, visibleLimit);

  return (
    <div className="">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>

      {renderItems(visibleItems)}

      <div className="flex justify-between">
        {allItems.length > visibleLimit && (
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex h-10 w-20 items-center justify-center text-gray-600 hover:bg-white hover:text-gray-600"
          >
            <ChevronsUpDown className="h-4 w-4 transition-transform duration-200 group-hover:scale-110 group-hover:stroke-[2]" />
            <span>{isExpanded ? "Show Less" : "Show More"}</span>
          </Button>
        )}

        <Button
          variant="link"
          className="text-gray-600 underline hover:no-underline"
        >
          Clear All
        </Button>
      </div>
    </div>
  );
}
