"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import FilterSection from "./FilterSection";
// import FilterSection from "./FilterSection";

export default function RatingFilter() {
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  return (
    <FilterSection title="Rating" icon={Star}>
      <div className="mb-1 flex space-x-1">
        {[1, 2, 3, 4, 5].map((ratingValue) => (
          <Star
            key={ratingValue}
            className={`h-6 w-6 cursor-pointer ${
              (
                hoveredRating !== null
                  ? hoveredRating >= ratingValue
                  : rating !== null && rating >= ratingValue
              )
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
            onMouseEnter={() => setHoveredRating(ratingValue)}
            onMouseLeave={() => setHoveredRating(null)}
            onClick={() =>
              setRating(ratingValue === rating ? null : ratingValue)
            }
          />
        ))}
      </div>
    </FilterSection>
  );
}
