import { Button } from "@/components/ui/button";
import Sidebar from "@/shared/components/sidebar";
import {
  Facebook,
  Headset,
  Instagram,
  Mail,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SalesAd from "@/shared/assets/images/ad.png";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  interface ContactInfo {
    Icon: React.FC<{ size?: number; strokeWidth?: number; className?: string }>;
    label: string;
    value: string;
  }

  const contactInfo: ContactInfo[] = [
    {
      Icon: Headset,
      label: "Customer support",
      value: "+1 (00) 33 169 7720",
    },
    {
      Icon: Mail,
      label: "Email",
      value: "support@example.com",
    },
    {
      Icon: MapPin,
      label: "Address",
      value: "123 Main St, City, Country",
    },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "/" },
    { Icon: Twitter, href: "/" },
    { Icon: Instagram, href: "/" },
    { Icon: Youtube, href: "/" },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar>
        <div className="p-4 overflow-y-auto">
          <div className="mb-10 flex flex-col gap-10">
            {contactInfo.map(({ Icon, label, value }) => (
              <div key={label} className="flex flex-row gap-3 items-center">
                <Icon size={30} strokeWidth={1} className="text-red-400" />
                <div>
                  <div className="text-sm text-gray-400">{label}</div>
                  <h4 className="text-lg text-gray-700">{value}</h4>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm font-semibold text-gray-600 mb-2">Follow Us:</p>
          <div className="flex space-x-4 mt-2">
            {socialLinks.map(({ Icon, href }, index) => (
              <Button
                key={index}
                variant={"secondary"}
                size={"icon"}
                className="text-gray-700 rounded-full relative shadow-none hover:bg-gray-100 focus:ring-0 focus-visible:ring-0 cursor-pointer"
                asChild
              >
                <Link href={href}>
                  <Icon strokeWidth={1} />
                </Link>
              </Button>
            ))}
          </div>

          <div className="mt-5 mb-15">
            <div className="relative w-full h-[300px] border shadow-sm rounded-lg overflow-hidden">
              <Image
                src={SalesAd}
                alt="Special Offer"
                fill
                sizes="100%"
                className="object-cover w-full h-full"
              />
            </div>{" "}
          </div>
        </div>
      </Sidebar>{" "}
      <main className="flex-1 lg:ml-[350px] ml-0 lg:p-5 p-3 mt-20">
        {children}
      </main>
    </div>
  );
}
