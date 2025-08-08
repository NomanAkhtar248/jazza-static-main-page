// "use client";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Slider } from "@/components/ui/slider";
// import { ChevronDown, CircleDollarSign, Star, Tag } from "lucide-react";
// import { ReactNode, useState } from "react";

// type PriceRange = { from: number; to: number };

// const CollapsibleFilters = () => {
//   return (
//     <div className="w-full max-w-xs divide-y">
//       <PriceRangeFilter />
//       <BrandFilter />
//       <SeriesFilter />
//       <CategoryFilter />
//       <RatingFilter />
//     </div>
//   );
// };

// // ---------------- PRICE RANGE ----------------
// const MIN_PRICE = 0;
// const MAX_PRICE = 1000;
// function PriceRangeFilter() {
//   const [value, setValue] = useState<PriceRange>({
//     from: MIN_PRICE,
//     to: MAX_PRICE,
//   });

//   const handleChange = (newValue: PriceRange) => {
//     setValue(newValue);
//   };

//   return (
//     <CollapsibleFilter title="Price Range" icon={CircleDollarSign}>
//       <div className="flex justify-between space-x-4">
//         <Input
//           type="number"
//           value={value.from}
//           onChange={(e) =>
//             handleChange({ from: +e.target.value, to: value.to })
//           }
//           className="w-20"
//         />
//         <Input
//           type="number"
//           value={value.to}
//           onChange={(e) =>
//             handleChange({ from: value.from, to: +e.target.value })
//           }
//           className="w-20"
//         />
//       </div>
//       <Slider
//         min={MIN_PRICE}
//         max={MAX_PRICE}
//         step={10}
//         value={[value.from, value.to]}
//         onValueChange={([from, to]) => handleChange({ from, to })}
//         className="mb-3 mt-4 w-full"
//       />
//     </CollapsibleFilter>
//   );
// }

// // ---------------- BRAND FILTER ----------------
// const brands = [
//   { name: "Acer", count: 4 },
//   { name: "Apple", count: 195 },
//   { name: "AWEI", count: 16 },
//   { name: "Dell", count: 105 },
//   { name: "Fitbit", count: 1 },
//   { name: "HP", count: 91 },
//   { name: "Huawei", count: 3 },
//   { name: "JBL", count: 13 },
//   { name: "Lenovo", count: 60 },
//   { name: "Microsoft", count: 9 },
//   { name: "Oppo", count: 7 },
// ];
// function BrandFilter() {
//   const [showAll, setShowAll] = useState(false);
//   const visibleItems = showAll ? brands : brands.slice(0, 6);

//   return (
//     <CollapsibleFilter title="Brand">
//       {visibleItems.map((brand) => (
//         <div
//           key={brand.name}
//           className="mb-2 flex items-center justify-between"
//         >
//           <div className="flex items-center gap-3">
//             <Checkbox id={brand.name} />
//             <Label htmlFor={brand.name}>{brand.name}</Label>
//           </div>
//           <span className="text-sm text-gray-500">({brand.count})</span>
//         </div>
//       ))}
//       <button
//         onClick={() => setShowAll(!showAll)}
//         className="mt-1 text-xs font-medium text-gray-600 hover:underline"
//       >
//         {showAll ? "Show Less" : "Show All"}
//       </button>
//     </CollapsibleFilter>
//   );
// }

// // ---------------- SERIES FILTER ----------------
// const seriesList = [
//   { name: "Chromebook", count: 15 },
//   { name: "Elitebook", count: 62 },
//   { name: "Galaxy-Note-Series", count: 4 },
//   { name: "Galaxy-S20-Series", count: 2 },
//   { name: "Galaxy-S-Series", count: 11 },
//   { name: "Galaxy-Z-Series", count: 2 },
//   { name: "Latitude", count: 82 },
//   { name: "MacBook Air", count: 51 },
//   { name: "MacBook Pro", count: 48 },
//   { name: "Precision", count: 14 },
//   { name: "Probook", count: 16 },
// ];
// function SeriesFilter() {
//   const [showAll, setShowAll] = useState(false);
//   const visibleItems = showAll ? seriesList : seriesList.slice(0, 6);

//   return (
//     <CollapsibleFilter title="Series">
//       {visibleItems.map((series) => (
//         <div
//           key={series.name}
//           className="mb-2 flex items-center justify-between"
//         >
//           <div className="flex items-center gap-3">
//             <Checkbox id={series.name} />
//             <Label htmlFor={series.name}>{series.name}</Label>
//           </div>
//           <span className="text-sm text-gray-500">({series.count})</span>
//         </div>
//       ))}
//       <button
//         onClick={() => setShowAll(!showAll)}
//         className="mt-1 text-xs font-medium text-gray-600 hover:underline"
//       >
//         {showAll ? "Show Less" : "Show All"}
//       </button>
//     </CollapsibleFilter>
//   );
// }

// // ---------------- RATING FILTER ----------------
// function RatingFilter() {
//   const [rating, setRating] = useState<number | null>(null);
//   const [hoveredRating, setHoveredRating] = useState<number | null>(null);

//   return (
//     <CollapsibleFilter title="Rating" icon={Star}>
//       <div className="mb-1 flex space-x-1">
//         {[1, 2, 3, 4, 5].map((ratingValue) => (
//           <Star
//             key={ratingValue}
//             className={`h-6 w-6 cursor-pointer ${
//               (
//                 hoveredRating !== null
//                   ? hoveredRating >= ratingValue
//                   : rating !== null && rating >= ratingValue
//               )
//                 ? "fill-yellow-400 text-yellow-400"
//                 : "text-gray-300"
//             }`}
//             onMouseEnter={() => setHoveredRating(ratingValue)}
//             onMouseLeave={() => setHoveredRating(null)}
//             onClick={() =>
//               setRating(ratingValue === rating ? null : ratingValue)
//             }
//           />
//         ))}
//       </div>
//     </CollapsibleFilter>
//   );
// }

// // ---------------- CATEGORY FILTER ----------------
// const categories = ["storage", "iphone", "Books", "Home & Garden", "Toys"];
// function CategoryFilter() {
//   return (
//     <CollapsibleFilter title="Category" icon={Tag}>
//       {categories.map((category) => (
//         <div key={category} className="mb-2 flex items-center space-x-3">
//           <Checkbox id={category} />
//           <Label htmlFor={category}>{category}</Label>
//         </div>
//       ))}
//     </CollapsibleFilter>
//   );
// }

// // ---------------- COLLAPSIBLE WRAPPER ----------------
// const CollapsibleFilter = ({
//   title,
//   icon: Icon,
//   children,
// }: {
//   title: string;
//   icon: any;
//   children: ReactNode;
// }) => (
//   <Collapsible defaultOpen>
//     <CollapsibleTrigger className="group flex w-full items-center justify-between py-3">
//       <h3 className="flex items-center gap-2 text-sm font-semibold">
//         {!!Icon && <Icon className="h-5 w-5" />} {title}
//       </h3>
//       <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
//     </CollapsibleTrigger>
//     <CollapsibleContent className="pb-3 pt-1">{children}</CollapsibleContent>
//   </Collapsible>
// );

// export default CollapsibleFilters;
