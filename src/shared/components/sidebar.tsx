"use client";

import React from "react";
import "@/shared/assets/css/style.css";
import { useSidebar } from "@/context/sidebarContext";

interface SidebarProps {
  children?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={`fixed left-0 sidebar top-18 h-screen lg:w-[350px] bg-white transition-[width] duration-300 ease-in-out overflow-x-hidden border-r border-gray-200 z-10 ${
        isOpen ? "w-[350px]" : "w-0 lg:w-[350px]"
      } lg:block`}
    >
      <div className="py-3 sm:py-4 md:py-5 w-full">{children}</div>
    </aside>
  );
};

export default Sidebar;
