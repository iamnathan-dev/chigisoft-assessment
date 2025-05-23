"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import { Heart, ShoppingCart } from "lucide-react";

const Products = () => {
  const { data: products, isLoading } = useGetProducts();

  return (
    <section className="mx-auto py-[5rem]">
      <div className="flex flex-row items-center justify-between pb-2 border-b">
        <h2 className="text-gray-900 font-semibold text-2xl">New Arrivals</h2>

        <div>
          <Button
            variant={"outline"}
            size={"lg"}
            className="!cursor-pointer shadow-none rounded-sm bg-transparent border-red-400 text-red-400 hover:bg-red-400 hover:text-white duration-300 ease-in-out"
          >
            See more
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            {/* add skeleton */}
          </div>
        ) : (
          products?.map((product) => (
            <div
              key={product.id}
              className="relative w-full h-fit rounded-sm bg-white overflow-hidden group duration-300"
            >
              <span className="text-xs bg-green-100 absolute top-0 right-0 m-3 z-10 text-green-600 px-2 py-1 rounded-full">
                -2.2%
              </span>
              <div className="h-[200px] overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={150}
                  className="object-contain w-auto h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <div className="inline-block px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600 mb-2">
                  {product.category}
                </div>
                <h4 className="text-sm font-semibold line-clamp-2 h-10">
                  {product.title}
                </h4>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-light text-indigo-600">
                      ${(product.price * 0.978).toLocaleString()}
                    </div>
                    <small className="text-gray-400 line-through">
                      ${product.price.toLocaleString()}
                    </small>
                  </div>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Heart
                      size={20}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    />
                  </button>
                </div>

                <Button
                  variant={"default"}
                  size={"sm"}
                  className="w-full bg-red-400 hover:bg-red-500 rounded-sm text-white transition-all duration-300 flex items-center justify-center gap-2 py-2 cursor-pointer"
                >
                  <ShoppingCart size={18} />
                  Add to cart
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Products;
