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
  quantity: number;
}

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Omit<Product, "quantity">[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );

  return data.map((product) => ({
    ...product,
    quantity: Math.floor(Math.random() * 121), // Random stock quantity between 0 and 120
  }));
};
