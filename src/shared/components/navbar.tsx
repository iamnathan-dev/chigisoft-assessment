"use client";

import { useState, useEffect } from "react";
import { PopoverGroup } from "@headlessui/react";
import Image from "next/image";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Logo from "@/shared/assets/images/logo.png";
import LogoMobile from "@/shared/assets/images/logo-mb.png";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useSidebar } from "@/context/sidebarContext";

interface PriceOption {
  value: string;
  label: string;
}

const priceOPtions: PriceOption[] = [
  { value: "0-50", label: "$0 - $50" },
  { value: "51-100", label: "$51 - $100" },
  { value: "101-200", label: "$101 - $200" },
  { value: "201-500", label: "$201 - $500" },
  { value: "500+", label: "$500+" },
];

interface IconButton {
  icon: React.FC<{ strokeWidth?: number }>;
  showBadge: boolean;
  tooltip?: string;
}

const iconsBtns: IconButton[] = [
  { icon: Heart, showBadge: true, tooltip: "Wishlist" },
  { icon: User, showBadge: false, tooltip: "Account" },
  { icon: ShoppingCart, showBadge: true, tooltip: "Cart" },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { toggleSidebar } = useSidebar();

  return (
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
              className="h-8 w-auto"
            />{" "}
          </Link>
        </div>
        <div className="flex gap-5 lg:hidden">
          <Button
            variant={"secondary"}
            size={"icon"}
            className="text-gray-700 rounded-full relative shadow-none focus:ring-0 focus-visible:ring-0 cursor-pointer"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open main menu</span>
            <Menu strokeWidth={1} />
          </Button>
          {[
            { icon: Search, showBadge: false, tooltip: "Search" },
            { icon: User, showBadge: false, tooltip: "Account" },
          ].map((item, index) =>
            item.icon === Search ? (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Button
                    variant={"secondary"}
                    size={"icon"}
                    className="text-gray-700 rounded-full relative shadow-none focus:ring-0 focus-visible:ring-0 cursor-pointer"
                  >
                    <Search strokeWidth={1} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] p-2 top-15 translate-y-0">
                  <div className="flex flex-row w-full border rounded-sm">
                    <div className="flex flex-row items-center gap-2 py-1 px-2">
                      <Search strokeWidth={1} />
                      <Input
                        type="text"
                        placeholder="Search for products"
                        className="w-full shadow-none border-0 focus:ring-0 focus-visible:ring-0 p-0"
                      />
                    </div>
                    <div className="border-l flex flex-row items-center">
                      <Select>
                        <SelectTrigger className="border-0 rounded-none cursor-pointer shadow-none focus:ring-0 focus-visible:ring-0">
                          <SelectValue placeholder="Price" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Prices</SelectLabel>
                            {priceOPtions.map(({ value, label }) => (
                              <SelectItem key={value} value={value}>
                                {label}
                              </SelectItem>
                            ))}{" "}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Button
                key={index}
                variant={"secondary"}
                size={"icon"}
                className="text-gray-700 rounded-full relative shadow-none focus:ring-0 focus-visible:ring-0 cursor-pointer"
              >
                {item.showBadge && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                )}
                <item.icon strokeWidth={1} />
              </Button>
            )
          )}
        </div>
        <PopoverGroup className="hidden lg:block w-[500px] xl:w-[800px]">
          <div className="flex flex-row w-full border rounded-sm">
            <div className="flex flex-row items-center gap-2 py-1 px-2">
              <Search strokeWidth={1} />
              <Input
                type="text"
                placeholder="Search by title or category..."
                className="xl:w-[600px] w-[300px] shadow-none border-0 focus:ring-0 focus-visible:ring-0 p-0"
              />
            </div>
          </div>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex items-center gap-4">
            {iconsBtns.map((item, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"secondary"}
                      size={"icon"}
                      className="text-gray-700 rounded-full relative shadow-none focus:ring-0 focus-visible:ring-0 cursor-pointer"
                    >
                      {item.showBadge && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                          0
                        </span>
                      )}
                      <item.icon strokeWidth={1} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
