"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts, Product } from "../actions/get-products";

export const useGetProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
