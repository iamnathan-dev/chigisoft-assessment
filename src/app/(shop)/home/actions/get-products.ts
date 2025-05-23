import axios from "axios";

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  return data;
};
