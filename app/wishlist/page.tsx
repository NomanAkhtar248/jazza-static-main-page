import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight, Shapes } from "lucide-react";
import Link from "next/link";
import { products } from "./data";
import React from "react";
import WishlistButton from "./wishlist";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <ProductRow product={product} />
        </React.Fragment>
      ))}
    </div>
  );
};

const ProductRow = ({ product }) => {
  return (
    <>
      <Card key={product.id} className="max-w-xs shadow-none">
        <CardHeader className="flex-row items-center gap-3 px-5 pb-4 pt-4 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Shapes className="h-5 w-5" />
          </div>
          {product.title}
        </CardHeader>

        <CardContent className="px-5 text-[15px] text-muted-foreground">
          <p>{product.description}</p>
          <div className="mt-5 aspect-video w-full rounded-xl bg-muted" />
        </CardContent>

        <CardFooter className="flex gap-2">
          <Link href={`/wishlist/${product.slug}`}>
            <Button>
              Explore <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <WishlistButton productId={product.id} />
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
