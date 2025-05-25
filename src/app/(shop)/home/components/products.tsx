"use client";

import { Button } from "@/components/ui/button";
import { useGetProducts } from "../hooks/useGetProducts";
import ProductCard from "@/shared/components/product-card";
import SkeletonCard from "@/shared/components/product-skeleton";
import EmptyState from "@/shared/components/product-empty-state";
import useProductStore from "../store/productStore";
import { useEffect } from "react";

const SKELETON_COUNT = 8;
const SKELETON_ITEMS = Array.from({ length: SKELETON_COUNT }, (_, i) => i + 1);

const Products = () => {
  const { setProducts, filterProducts } = useProductStore();
  const { data: products, isLoading } = useGetProducts();

  useEffect(() => {
    setProducts(products || []);
  }, [products, setProducts]);

  const filteredProducts = filterProducts();

  const isEmpty =
    !isLoading && (!filteredProducts || filteredProducts.length === 0);

  return (
    <section className="mx-auto pt-[5rem] pb-[3rem]">
      <div className="flex flex-row items-center justify-between pb-2 border-b">
        <h2 className="text-gray-900 font-medium text-lg">All Products</h2>
        <Button
          variant="outline"
          size="lg"
          className="!cursor-pointer shadow-none rounded-sm bg-transparent border-red-400 text-red-400 hover:bg-red-400 hover:text-white duration-300 ease-in-out"
        >
          See more
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {isLoading ? (
          SKELETON_ITEMS.map((item) => <SkeletonCard key={item} />)
        ) : isEmpty ? (
          <EmptyState />
        ) : (
          filteredProducts?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
    </section>
  );
};
export default Products;
