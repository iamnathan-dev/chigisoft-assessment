import Sidebar from "@/shared/components/sidebar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar></Sidebar>
      <main className="flex-1 lg:ml-[350px] ml-0 p-3 mt-20">{children}</main>
    </div>
  );
}
