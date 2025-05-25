"use client";

import React from "react";
import "@/shared/assets/css/style.css";
import { useSidebar } from "@/context/sidebarContext";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SidebarProps {
  children?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/10 bg-opacity-50 transition-opacity z-50 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />
      <aside
        className={`fixed left-0 sidebar top-0 lg:top-[78px] h-full bg-white z-50 transition-transform duration-300 ease-in-out overflow-x-hidden border-r border-gray-200 w-full max-w-sm lg:max-w-none lg:w-[280px] xl:w-[350px] ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b lg:hidden">
          <h2 className="font-medium">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-gray-500"
          >
            <X strokeWidth={1} />
          </Button>
        </div>
        <div className="py-3 sm:py-4 md:py-5 w-full">{children}</div>
      </aside>
    </>
  );
};

export default Sidebar;
