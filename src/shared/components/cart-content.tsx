import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const cartItems: CartItem[] = [];

const CartContent = () => (
  <div className="space-y-4 h-full">
    {cartItems.length === 0 ? (
      <div className="h-full flex flex-col items-center justify-center py-6 px-4">
        <ShoppingCart
          className="h-12 w-12 text-gray-300 mb-3"
          strokeWidth={1}
        />
        <p className="text-sm font-medium text-gray-900">Your cart is empty</p>
        <p className="text-xs text-gray-500 text-center mt-1">
          Add items to your cart to start shopping
        </p>
      </div>
    ) : (
      <>
        <div className="px-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 py-2">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t pt-4">
          <Button className="w-full">View Cart</Button>
        </div>
      </>
    )}
  </div>
);

export default CartContent;
