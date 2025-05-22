import Sidebar from "@/shared/components/sidebar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-[350px] ml-0 p-3">{children}</main>
    </div>
  );
}
