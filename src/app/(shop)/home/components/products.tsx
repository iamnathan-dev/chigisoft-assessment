"use client";

import { Button } from "@/components/ui/button";
import { useGetProducts } from "../hooks/useGetProducts";
import ProductCard from "@/shared/components/product-card";
import SkeletonCard from "@/shared/components/product-skeleton";

const SKELETON_COUNT = 8;
const SKELETON_ITEMS = Array.from({ length: SKELETON_COUNT }, (_, i) => i + 1);

const Products = () => {
  const { data: products, isLoading } = useGetProducts();

  return (
    <section className="mx-auto py-[5rem]">
      <div className="flex flex-row items-center justify-between pb-2 border-b">
        <h2 className="text-gray-900 font-semibold text-2xl">New Arrivals</h2>
        <Button
          variant="outline"
          size="lg"
          className="!cursor-pointer shadow-none rounded-sm bg-transparent border-red-400 text-red-400 hover:bg-red-400 hover:text-white duration-300 ease-in-out"
        >
          See more
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        {isLoading
          ? SKELETON_ITEMS.map((item) => <SkeletonCard key={item} />)
          : products?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
      </div>
    </section>
  );
};

export default Products;
