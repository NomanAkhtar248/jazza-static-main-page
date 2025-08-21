"use client";
import { useState, useMemo } from "react";

export type PriceRange = { from: number; to: number };

export default function UsePriceFilter<T extends { price: number }>(
  products: T[],
) {
  const [priceRange, setPriceRange] = useState<PriceRange>({
    from: 0,
    to: 9999,
  });

  const filteredProducts = useMemo(() => {
    return products.filter(
      (item) => item.price >= priceRange.from && item.price <= priceRange.to,
    );
  }, [products, priceRange]);

  return { priceRange, setPriceRange, filteredProducts };
}
