import useProductStore from "../productStore";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 100,
  category: "electronics",
  description: "Test description",
  image: "test.jpg",
  rating: { rate: 4.5, count: 100 },
  quantity: 1,
};

describe("ProductStore", () => {
  beforeEach(() => {
    global.localStorage = {
      clear: jest.fn(),
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      length: 0,
      key: jest.fn(),
    };
    const store = useProductStore.getState();
    store.setProducts([]);
  });

  describe("Cart Operations", () => {
    it("should add product to cart", () => {
      const store = useProductStore.getState();
      store.addToCart(mockProduct);
      expect(store.getCartItems()).toHaveLength(1);
      expect(store.getCartItems()[0]).toEqual({ ...mockProduct, quantity: 1 });
    });

    it("should remove product from cart", () => {
      const store = useProductStore.getState();
      store.addToCart(mockProduct);
      store.removeFromCart(mockProduct.id);
      expect(store.getCartItems()).toHaveLength(0);
    });
  });

  describe("Wishlist Operations", () => {
    it("should add product to wishlist", () => {
      const store = useProductStore.getState();
      store.addToWishlist(mockProduct);
      expect(store.getWishlistItems()).toHaveLength(1);
      expect(store.getWishlistItems()[0]).toEqual(mockProduct);
    });

    it("should remove product from wishlist", () => {
      const store = useProductStore.getState();
      store.addToWishlist(mockProduct);
      store.removeFromWishlist(mockProduct.id);
      expect(store.getWishlistItems()).toHaveLength(0);
    });
  });

  describe("Cart and Wishlist Integration", () => {
    it("should remove product from wishlist when added to cart", () => {
      const store = useProductStore.getState();
      store.addToWishlist(mockProduct);
      store.addToCart(mockProduct);
      expect(store.getWishlistItems()).toHaveLength(0);
      expect(store.getCartItems()).toHaveLength(1);
    });
  });
});
