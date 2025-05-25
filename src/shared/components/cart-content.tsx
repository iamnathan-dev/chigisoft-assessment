import useProductStore from "@/app/(shop)/home/store/productStore";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import Image from "next/image";
import { Product } from "@/app/(shop)/home/actions/get-products";

const CartContent = () => {
  const { getCartItems, removeFromCart, updateQuantity } = useProductStore(
    (state) => state
  );
  const cartItems = getCartItems();

  const quantity = cartItems.find((item) => item.id === item.id)?.quantity || 0;

  const calculateSubtotal = (items: Product[]) => {
    return items
      .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
      .toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  };

  const EmptyCart = () => (
    <div className="h-full flex flex-col items-center justify-center py-6 px-4">
      <ShoppingCart className="h-12 w-12 text-gray-300 mb-3" strokeWidth={1} />
      <p className="text-sm font-medium text-gray-900">Your cart is empty</p>
      <p className="text-xs text-gray-500 text-center mt-1">
        Add items to your cart to start shopping
      </p>
    </div>
  );

  const CartItem = ({ item }: { item: Product }) => (
    <div className="flex items-center gap-4 py-3 px-4 border-b">
      <div className="h-14 w-14 overflow-hidden flex items-center justify-center p-2 bg-gray-50 rounded-sm">
        <Image
          src={item.image}
          alt={item.title}
          width={150}
          height={150}
          className="object-contain w-auto h-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="text-xs font-medium line-clamp-2 h-9">{item.title}</h4>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 cursor-pointer text-gray-400 hover:text-red-500"
            onClick={() => removeFromCart(item.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-base font-light text-indigo-600">
            ${(item.price * 1.022).toLocaleString()}
          </div>
          <small className="text-gray-400 line-through">
            ${item.price.toLocaleString()}
          </small>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 cursor-pointer"
            onClick={() => updateQuantity(item.id, quantity - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="text-xs w-6 text-center">{item.quantity || 1}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 cursor-pointer"
            onClick={() => updateQuantity(item.id, quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );

  const CartFooter = () => (
    <div className="border-t pt-4 px-4 space-y-2 fixed bottom-0 left-0 right-0 bg-white">
      <div className="flex justify-between py-2">
        <span className="text-sm text-gray-500">Subtotal</span>
        <span className="text-sm text-indigo-600">
          ${calculateSubtotal(cartItems)}
        </span>
      </div>
      <Button
        variant="default"
        size="icon"
        className="w-full mb-3 bg-red-400 hover:bg-red-500 rounded-sm text-white transition-opacity duration-300 flex items-center justify-center gap-2 py-2 cursor-pointer"
      >
        Checkout
      </Button>
    </div>
  );

  return (
    <div className="space-y-4 h-full">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="max-h-[70vh] overflow-y-auto">
            {cartItems.map((item: Product) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartFooter />
        </>
      )}
    </div>
  );
};

export default CartContent;
