"use client";

import { useState, useEffect } from "react";
import { PopoverGroup } from "@headlessui/react";
import Image from "next/image";
import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Logo from "@/shared/assets/images/logo.png";
import LogoMobile from "@/shared/assets/images/logo-mb.png";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSidebar } from "@/context/sidebarContext";
import CartContent from "./cart-content";
import useProductStore from "@/app/(shop)/home/store/productStore";
import WishlistContent from "./wishlist-content";

interface IconButton {
  icon: React.FC<{ strokeWidth?: number }>;
  showBadge: boolean;
  tooltip?: string;
  badgeCount?: number;
  onClick?: () => void;
}

const iconsBtns: IconButton[] = [
  { icon: Heart, showBadge: true, tooltip: "Wishlist" },
  { icon: User, showBadge: false, tooltip: "Account" },
];

const mobileIcons: IconButton[] = [
  { icon: Search, showBadge: false, tooltip: "Search" },
  { icon: Heart, showBadge: true, tooltip: "Wishlist" },
  { icon: ShoppingCart, showBadge: true, tooltip: "Cart" },
  { icon: User, showBadge: false, tooltip: "Account" },
];

const SearchInput = ({ className = "" }) => {
  const setQuery = useProductStore((state) => state.setQuery);
  const [seachQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setQuery(query);
  };

  return (
    <div className="flex flex-row items-center gap-2 py-1 px-2">
      <Search strokeWidth={1} />
      <Input
        type="text"
        placeholder="Search by title or category..."
        className={`shadow-none border-0 focus:ring-0 focus-visible:ring-0 p-0 ${className}`}
        value={seachQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

const IconButtonComponent = ({
  icon: Icon,
  showBadge,
  tooltip,
  onClick,
  badgeCount,
}: IconButton) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          onClick={onClick}
          className="text-gray-700 rounded-full relative shadow-none focus:ring-0 focus-visible:ring-0 cursor-pointer"
        >
          {showBadge && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {badgeCount || 0}
            </span>
          )}
          <Icon strokeWidth={1} />
        </Button>
      </TooltipTrigger>
      {tooltip && (
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      )}
    </Tooltip>
  </TooltipProvider>
);

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { toggleSidebar } = useSidebar();
  const { cartItems, wishlistItems } = useProductStore();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-xl shadow-black/3 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-8xl items-center p-5 py-4 lg:px-6 justify-between"
        >
          <div className="flex md:mr-0 mr-10 md:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Cartzilla</span>
              <Image
                alt="cartzilla logo"
                src={isMobile ? LogoMobile : Logo}
                className={`${isMobile ? "h-6" : "h-8"} w-auto`}
              />
            </Link>
          </div>

          <div className="flex gap-5 lg:hidden">
            <Button
              variant="secondary"
              size="icon"
              className="text-gray-700 rounded-full relative shadow-none focus:ring-0 focus-visible:ring-0 cursor-pointer"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open main menu</span>
              <Menu strokeWidth={1} />
            </Button>
            {mobileIcons.map((item, index) =>
              item.icon === Search ? (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="text-gray-700 rounded-full relative shadow-none focus:ring-0 focus-visible:ring-0 cursor-pointer"
                    >
                      <Search strokeWidth={1} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] p-2 top-15 translate-y-0">
                    <DialogHeader>
                      <h1 className="text-start">Search products</h1>
                    </DialogHeader>
                    <div className="flex flex-row w-full border rounded-sm">
                      <SearchInput />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <IconButtonComponent
                  key={index}
                  {...item}
                  onClick={
                    item.icon === Heart
                      ? () => setIsWishlistOpen(true)
                      : item.icon === ShoppingCart
                      ? () => setIsCartOpen(true)
                      : undefined
                  }
                  badgeCount={
                    item.icon === Heart
                      ? wishlistItems.length
                      : item.icon === ShoppingCart
                      ? cartItems.length
                      : undefined
                  }
                />
              )
            )}
          </div>

          <PopoverGroup className="hidden lg:block w-[500px] xl:w-[800px]">
            <div className="flex flex-row w-full border rounded-sm">
              <SearchInput className="xl:w-[600px] w-[300px]" />
            </div>
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex items-center gap-4">
              {iconsBtns.map((item, index) => (
                <IconButtonComponent
                  key={index}
                  {...item}
                  onClick={
                    item.icon === Heart
                      ? () => setIsWishlistOpen(true)
                      : undefined
                  }
                  badgeCount={
                    item.icon === Heart ? wishlistItems.length : undefined
                  }
                />
              ))}
              <IconButtonComponent
                icon={ShoppingCart}
                showBadge={true}
                tooltip="Cart"
                onClick={() => setIsCartOpen(true)}
                badgeCount={cartItems.length}
              />
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black/10 bg-opacity-50 transition-opacity z-50 ${
          isCartOpen || isWishlistOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setIsCartOpen(false);
          setIsWishlistOpen(false);
        }}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div>
            <h2 className="font-medium">Shopping Cart</h2>
            <small className="text-xs text-gray-400">
              Number of items in cart ({cartItems.length})
            </small>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500"
          >
            <X strokeWidth={1} />
          </Button>
        </div>
        <div className="h-full">
          <CartContent />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isWishlistOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div>
            <h2 className="font-medium">Wishlist</h2>
            <small className="text-xs text-gray-400">
              Number of items in wishlist ({wishlistItems.length})
            </small>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsWishlistOpen(false)}
            className="text-gray-500"
          >
            <X strokeWidth={1} />
          </Button>
        </div>
        <div className="h-full">
          <WishlistContent />
        </div>
      </div>
    </>
  );
}
