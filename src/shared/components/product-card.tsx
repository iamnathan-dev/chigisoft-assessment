import { Product } from "@/app/(shop)/home/actions/get-products";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

const ProductCard = (product: Product) => {
  const discountedPrice = (product.price * 0.978).toLocaleString();
  const originalPrice = product.price.toLocaleString();
  const ratingStars =
    "★".repeat(Math.floor(product.rating.rate)) +
    "☆".repeat(5 - Math.floor(product.rating.rate));

  return (
    <div className="relative w-full h-fit rounded-sm bg-white overflow-hidden group duration-300">
      <span className="text-xs bg-green-100 absolute top-0 left-0 m-3 z-10 text-green-600 px-2 py-1 rounded-full">
        -2.2%
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
        <h4 className="text-sm font-medium line-clamp-2 h-10">
          {product.title}
        </h4>

        <div className="flex flex-row gap-2 items-center">
          <div className="flex items-center gap-1">
            <div className="flex items-center text-yellow-400">
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
              ${discountedPrice}
            </div>
            <small className="text-gray-400 line-through">
              ${originalPrice}
            </small>
          </div>
          <Button
            variant="default"
            size="icon"
            className="absolute top-3 right-3 p-2 rounded-full !bg-gray-100 cursor-pointer text-gray-400 hover:text-red-400 transition-colors"
          >
            <Heart size={20} />
          </Button>
        </div>

        <Button
          variant="default"
          size="icon"
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 bg-red-400 hover:bg-red-500 rounded-sm text-white transition-opacity duration-300 flex items-center justify-center gap-2 py-2 cursor-pointer"
        >
          <ShoppingCart size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
