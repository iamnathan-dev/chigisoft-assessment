import { create } from "zustand";
import { Product } from "../actions/get-products";

interface ProductStore {
  products: Product[];
  selectedProduct: Product | null;
  cartItems: (Product & { quantity: number })[];
  wishlistItems: Product[];
  setProducts: (products: Product[]) => void;
  setSelectedProduct: (product: Product | null) => void;
  filterProducts: (query: string) => Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  getCartItems: () => (Product & { quantity: number })[];
}

const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  selectedProduct: null,
  cartItems: [],
  wishlistItems: [],

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

  addToCart: (product) => {
    const { cartItems } = get();
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      set({
        cartItems: cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ cartItems: [...cartItems, { ...product, quantity: 1 }] });
    }
  },

  removeFromCart: (productId) => {
    const { cartItems } = get();
    set({
      cartItems: cartItems.filter((item) => item.id !== productId),
    });
  },

  increaseQuantity: (productId) => {
    const { cartItems } = get();
    set({
      cartItems: cartItems.map((item) =>
        item.id === Number(productId)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    });
  },

  decreaseQuantity: (productId) => {
    const { cartItems } = get();
    set({
      cartItems: cartItems.map((item) =>
        item.id === Number(productId) && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    });
  },

  addToWishlist: (product) => {
    const { wishlistItems } = get();
    set({ wishlistItems: [...wishlistItems, product] });
  },

  removeFromWishlist: (productId) => {
    const { wishlistItems } = get();
    set({
      wishlistItems: wishlistItems.filter(
        (item) => item.id !== Number(productId)
      ),
    });
  },

  getCartItems: () => {
    const { cartItems } = get();
    return cartItems;
  },
}));

export default useProductStore;
