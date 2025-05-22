import React from "react";

interface SidebarProps {
  children?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-screen lg:w-[350px] bg-white transition-[width] duration-300 ease-in-out overflow-x-hidden border-r border-gray-200 z-10 hidden lg:block`}
    >
      <div className="p-3 sm:p-4 md:p-5 w-full">{children}</div>
    </div>
  );
};

export default Sidebar;
