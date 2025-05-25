import useProductStore from "../../app/(shop)/home/store/productStore";
import "@testing-library/jest-dom";

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

describe("ProductCard Logic (store only)", () => {
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

  it("should allow adding product to wishlist via store", () => {
    const store = useProductStore.getState();
    store.addToWishlist(mockProduct);
    expect(store.getWishlistItems()).toHaveLength(1);
  });

  it("should allow adding product to cart via store", () => {
    const store = useProductStore.getState();
    store.addToCart(mockProduct);
    expect(store.getCartItems()).toHaveLength(1);
  });

  it("should remove item from wishlist when added to cart", () => {
    const store = useProductStore.getState();
    store.addToWishlist(mockProduct);
    store.addToCart(mockProduct);
    expect(store.getWishlistItems()).toHaveLength(0);
    expect(store.getCartItems()).toHaveLength(1);
  });
});
