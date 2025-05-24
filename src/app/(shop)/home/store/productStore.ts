import { create } from "zustand";
import { Product } from "../actions/get-products";

interface ProductStore {
  products: Product[];
  selectedProduct: Product | null;
  setProducts: (products: Product[]) => void;
  setSelectedProduct: (product: Product | null) => void;
  filterProducts: (query: string) => Product[];
}

const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  selectedProduct: null,

  setProducts: (products) => {
    set({ products });
  },

  setSelectedProduct: (product) => {
    set({ selectedProduct: product });
  },

  filterProducts: (query) => {
    const { products } = get();
    if (!query) return products;

    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
  },
}));

export default useProductStore;
