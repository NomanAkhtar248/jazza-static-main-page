import { products } from "../data";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // console.log("Params slug:", params.slug);
  // console.log("All products:", products);
  const slug = (await params).slug;
  console.log("slug: ", slug);
  const product = products.find((p) => p.slug === slug);
  console.log("product: ", product);
  if (!product) {
    return <div className="p-6 text-red-500">Product not found</div>;
  }

  return (
    <div className="p-6">
      <div>My Post: {slug}</div>
      <h2>Hello world</h2>
      <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
}
