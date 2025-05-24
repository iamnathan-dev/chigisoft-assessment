import Sidebar from "@/shared/components/sidebar";
import {
  CONTACT_INFO,
  ContactInfo,
  PRICE_RANGES,
  SOCIAL_LINKS,
  CATEGORIES,
} from "./constant";
import { Checkbox } from "@/components/ui/checkbox";
import { Footer } from "@/shared/components/footer";
import SocialButton from "@/shared/components/social-buttons";

const ContactItem = ({ Icon, label, value }: ContactInfo) => (
  <div className="flex flex-row gap-3 items-center">
    <Icon size={30} strokeWidth={1} className="text-red-400" />
    <div>
      <div className="text-xs text-gray-400">{label}</div>
      <h4 className="text-sm text-gray-700">{value}</h4>
    </div>
  </div>
);

const FilterSection = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: string }[];
}) => (
  <div className="mb-10">
    <h3 className="text-base text-gray-700 mb-4">{title}</h3>
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.value} className="flex items-center space-x-2">
          <Checkbox
            id={item.value}
            className="data-[state=checked]:bg-red-400 data-[state=checked]:border-red-400"
          />
          <label
            htmlFor={item.value}
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600"
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar>
        <div className="p-4 h-[calc(100vh-4rem)] overflow-y-auto pb-[50px]">
          <FilterSection title="Filter by category" items={CATEGORIES} />
          <FilterSection title="Filter by price range" items={PRICE_RANGES} />

          <div className="mb-10 flex flex-col gap-5">
            {CONTACT_INFO.map((info) => (
              <ContactItem key={info.label} {...info} />
            ))}
          </div>

          <p className="text-sm font-semibold text-gray-600 mb-2">Follow Us:</p>
          <div className="flex space-x-4 mt-2">
            {SOCIAL_LINKS.map((link, index) => (
              <SocialButton key={index} {...link} />
            ))}
          </div>
        </div>
      </Sidebar>
      <section className="xl:ml-[350px] lg:ml-[280px] ml-0">
        <main className="flex-1 lg:p-5 p-3 bg-gray-50 mt-17">{children}</main>
        <Footer />
      </section>
    </div>
  );
}
