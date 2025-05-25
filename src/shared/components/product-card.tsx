import { Product } from "@/app/(shop)/home/actions/get-products";
import useProductStore from "@/app/(shop)/home/store/productStore";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";

const ProductCard = (product: Product) => {
  const originalPrice = product.price.toLocaleString();
  const increasedPrice = (product.price * 1.022).toLocaleString();
  const ratingStars =
    "★".repeat(Math.floor(product.rating.rate)) +
    "☆".repeat(5 - Math.floor(product.rating.rate));

  const { addToCart, isInCart, updateQuantity, cartItems, addToWishlist } =
    useProductStore((state) => state);
  const isProductInCart = isInCart(product.id);
  const quantity =
    cartItems.find((item) => item.id === product.id)?.quantity || 0;

  return (
    <div className="relative w-full h-fit rounded-sm bg-white overflow-hidden group duration-300">
      <span className="text-xs bg-green-100 absolute top-0 left-0 m-3 z-10 text-green-600 px-2 py-1 rounded-full">
        +2.2%
      </span>
      <div className="h-[150px] overflow-hidden flex items-center justify-center p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
          className="object-contain w-auto h-full transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="px-4 pb-2">
        <div className="inline-block px-2 p-1 bg-gray-100 rounded-full text-xs text-gray-600 mb-2">
          {product.category}
        </div>
        <h4 className="text-xs font-medium line-clamp-2 h-9">
          {product.title}
        </h4>
        <div className="flex flex-row gap-2 items-center">
          <div className="flex items-center gap-1">
            <div className="flex items-center text-xs text-yellow-400">
              {ratingStars}
            </div>
            <span className="text-xs text-gray-500">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-gray-400">•</span>

          <div className="text-xs text-gray-400">Stock: {product.quantity}</div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="text-base font-light text-indigo-600">
              ${increasedPrice}
            </div>
            <small className="text-gray-400 line-through">
              ${originalPrice}
            </small>
          </div>
          <Button
            variant="default"
            size="icon"
            className="absolute top-3 right-3 p-2 rounded-full !bg-gray-100 cursor-pointer text-gray-400 hover:text-red-400 transition-colors"
            onClick={() => addToWishlist(product)}
          >
            <Heart size={20} />
          </Button>
        </div>
        {isProductInCart ? (
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6 cursor-pointer"
              onClick={() => updateQuantity(product.id, quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-xs w-6 text-center">{quantity || 1}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6 cursor-pointer"
              onClick={() => updateQuantity(product.id, quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        ) : (
          <Button
            variant="default"
            size="icon"
            className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 bg-red-400 hover:bg-red-500 rounded-sm text-white transition-opacity duration-300 flex items-center justify-center gap-2 py-2 cursor-pointer"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart size={18} />
          </Button>
        )}{" "}
      </div>
    </div>
  );
};
export default ProductCard;
