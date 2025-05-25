import { create } from "zustand";
import { Product } from "../actions/get-products";

interface ProductStore {
  products: Product[];
  selectedProduct: Product | null;
  cartItems: (Product & { quantity: number })[];
  wishlistItems: Product[];
  query: string;
  priceRange: { min: number; max: number } | null;
  selectedCategory: string | null;
  setProducts: (products: Product[]) => void;
  setSelectedProduct: (product: Product | null) => void;
  setQuery: (query: string) => void;
  setPriceRange: (range: { min: number; max: number } | null) => void;
  setSelectedCategory: (category: string | null) => void;
  filterProducts: () => Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  getCartItems: () => (Product & { quantity: number })[];
  getWishlistItems: () => Product[];
  isInCart: (productId: number) => boolean;
  inWishlist: (productId: number) => boolean;
  getQuantity: (productId: number) => number;
}

const useProductStore = create<ProductStore>((set, get) => {
  const getLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(key) || "[]");
    }
    return [];
  };

  return {
    products: [],
    selectedProduct: null,
    cartItems: getLocalStorage("cartItems"),
    wishlistItems: getLocalStorage("wishlistItems"),
    query: "",
    priceRange: null,
    selectedCategory: null,

    setProducts: (products) => {
      set({ products });
    },

    setSelectedProduct: (product) => {
      set({ selectedProduct: product });
    },

    setQuery: (query) => {
      set({ query });
    },

    setPriceRange: (range) => {
      set({ priceRange: range });
    },

    setSelectedCategory: (category) => {
      set({ selectedCategory: category });
    },

    filterProducts: () => {
      const { products, query, priceRange, selectedCategory } = get();

      const filtered = products.filter((product) => {
        const matchesSearch =
          product.title.toLowerCase().includes((query || "").toLowerCase()) ||
          product.category.toLowerCase().includes((query || "").toLowerCase());

        const matchesCategory =
          !selectedCategory || product.category === selectedCategory;

        let matchesPriceRange = true;
        if (priceRange) {
          const min = priceRange.min;
          const max = priceRange.max;
          if (max === Infinity) {
            matchesPriceRange = product.price >= min;
          } else {
            matchesPriceRange = product.price >= min && product.price <= max;
          }
        }

        return matchesSearch && matchesCategory && matchesPriceRange;
      });
      return filtered;
    },

    addToCart: (product) => {
      const { cartItems, wishlistItems } = get();
      const existingItem = cartItems.find((item) => item.id === product.id);

      let updatedCartItems;
      if (existingItem) {
        updatedCartItems = cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }

      const updatedWishlistItems = wishlistItems.filter(
        (item) => item.id !== product.id
      );
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(updatedWishlistItems)
        );
      }

      set({
        cartItems: updatedCartItems,
        wishlistItems: updatedWishlistItems,
      });
    },

    removeFromCart: (productId) => {
      const { cartItems } = get();
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== productId
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
      set({ cartItems: updatedCartItems });
    },

    updateQuantity: (productId, quantity) => {
      const { cartItems } = get();
      let updatedCartItems;
      if (quantity <= 0) {
        updatedCartItems = cartItems.filter((item) => item.id !== productId);
      } else {
        updatedCartItems = cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: quantity } : item
        );
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
      set({ cartItems: updatedCartItems });
    },

    addToWishlist: (product) => {
      const { wishlistItems } = get();
      const existingItem = wishlistItems.find((item) => item.id === product.id);
      if (existingItem) return;

      const updatedWishlistItems = [...wishlistItems, product];
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(updatedWishlistItems)
        );
      }
      set({ wishlistItems: updatedWishlistItems });
    },

    removeFromWishlist: (productId) => {
      const { wishlistItems } = get();
      const updatedWishlistItems = wishlistItems.filter(
        (item) => item.id !== Number(productId)
      );
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(updatedWishlistItems)
        );
      }
      set({ wishlistItems: updatedWishlistItems });
    },

    getCartItems: () => {
      const { cartItems } = get();
      return cartItems;
    },

    getWishlistItems: () => {
      const { wishlistItems } = get();
      return wishlistItems;
    },

    isInCart: (productId) => {
      const { cartItems } = get();
      return cartItems.some((item) => item.id === productId);
    },

    inWishlist: (productId) => {
      const { wishlistItems } = get();
      return wishlistItems.some((item) => item.id === productId);
    },

    getQuantity: (productId) => {
      const { cartItems } = get();
      const item = cartItems.find((item) => item.id === productId);
      return item ? item.quantity : 0;
    },
  };
});
export default useProductStore;
