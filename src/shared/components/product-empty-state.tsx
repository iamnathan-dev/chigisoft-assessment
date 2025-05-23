import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const EmptyState = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
    <div className="w-24 h-24 mb-6 rounded-full bg-gray-100 flex items-center justify-center">
      <ShoppingBag size={50} className="text-gray-400" strokeWidth={1} />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      No products found
    </h3>
    <p className="text-gray-500 mb-6 max-w-sm">
      We couldn&apos;t find any products at the moment. Please check back later
      or try refreshing the page.
    </p>
    <Button
      variant="outline"
      size="lg"
      onClick={() => window.location.reload()}
      className="border-red-400 text-red-400 hover:bg-red-400 cursor-pointer bg-transparent hover:text-white"
    >
      Refresh Page
    </Button>
  </div>
);

export default EmptyState;
