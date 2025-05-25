import useProductStore from "@/app/(shop)/home/store/productStore";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import { Product } from "@/app/(shop)/home/actions/get-products";

const WishlistContent = () => {
  const { getWishlistItems, removeFromWishlist, addToCart } = useProductStore(
    (state) => state
  );
  const wishlistItems = getWishlistItems();

  const EmptyWishlist = () => (
    <div className="h-full flex flex-col items-center justify-center py-6 px-4">
      <Heart className="h-12 w-12 text-gray-300 mb-3" strokeWidth={1} />
      <p className="text-sm font-medium text-gray-900">
        Your wishlist is empty
      </p>
      <p className="text-xs text-gray-500 text-center mt-1">
        Add items to your wishlist to save them for later
      </p>
    </div>
  );

  const WishlistItem = ({ item }: { item: Product }) => (
    <div className="flex items-center gap-4 py-3 px-4 border-b">
      <div className="h-14 w-14 overflow-hidden flex items-center justify-center p-2 bg-gray-50 rounded-sm">
        <Image
          src={item.image}
          alt={item.title}
          width={150}
          height={150}
          className="object-contain w-auto h-full transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <div className="inline-block px-2 p-1 bg-gray-100 rounded-full text-xs text-gray-600 mb-2">
              {item.category}
            </div>
            <h4 className="text-xs font-medium line-clamp-2 h-9">
              {item.title}
            </h4>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex items-center gap-1">
                <div className="flex items-center text-xs text-yellow-400">
                  {"★".repeat(Math.floor(item.rating.rate)) +
                    "☆".repeat(5 - Math.floor(item.rating.rate))}
                </div>
                <span className="text-xs text-gray-500">
                  ({item.rating.count})
                </span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="text-xs text-gray-400">
                Stock: {item.quantity}
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 cursor-pointer text-gray-400 hover:text-red-500"
            onClick={() => removeFromWishlist(item.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-base font-light text-indigo-600">
              ${(item.price * 1.022).toLocaleString()}
            </div>
            <small className="text-gray-400 line-through">
              ${item.price.toLocaleString()}
            </small>
          </div>
          <Button
            variant="default"
            size="icon"
            className="mt-2 text-xs bg-red-400 hover:bg-red-500 cursor-pointer"
            onClick={() => addToCart(item)}
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 h-full">
      {wishlistItems.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <div className="max-h-[89vh] overflow-y-auto">
          {wishlistItems.map((item: Product) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistContent;
