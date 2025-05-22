"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import Image from "next/image";
import { CircleX, Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu strokeWidth={1} />
          </button>
        </div>
        <PopoverGroup className="hidden lg:block w-[800px]">
          <div className="flex flex-row w-full border rounded-sm">
            <div className="flex flex-row items-center gap-2 py-1 px-2">
              <Search strokeWidth={1} />
              <Input
                type="text"
                placeholder="Search for products"
                className="w-[600px] shadow-none border-0 focus:ring-0 focus-visible:ring-0 p-0"
              />
            </div>
            <div className="border-l flex flex-row items-center">
              <Select>
                <SelectTrigger className="border-0 rounded-none cursor-pointer shadow-none focus:ring-0 focus-visible:ring-0">
                  <SelectValue placeholder="Filter by price" />
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
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Cartzilla</span>
              <Image
                alt="cartzilla logo mobile"
                src={LogoMobile}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <CircleX strokeWidth={1} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
