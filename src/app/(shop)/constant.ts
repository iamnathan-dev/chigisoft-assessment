import {
  Facebook,
  Headset,
  Instagram,
  Mail,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";

export interface ContactInfo {
  Icon: React.FC<{ size?: number; strokeWidth?: number; className?: string }>;
  label: string;
  value: string;
}

export interface Categories {
  value: string;
  label: string;
}

export interface SocialLink {
  Icon: React.FC<{ size?: number; strokeWidth?: number; className?: string }>;
  href: string;
}

export const CATEGORIES: Categories[] = [
  {
    value: "men's clothing",
    label: "Men's Clothing",
  },
  {
    value: "women's clothing",
    label: "Women's Clothing",
  },
  {
    value: "jewelery",
    label: "Jewelery",
  },
  {
    value: "electronics",
    label: "Electronics",
  },
];

export const CONTACT_INFO: ContactInfo[] = [
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

export const SOCIAL_LINKS: SocialLink[] = [
  { Icon: Facebook, href: "/" },
  { Icon: Twitter, href: "/" },
  { Icon: Instagram, href: "/" },
  { Icon: Youtube, href: "/" },
];

export const PRICE_RANGES = [
  { label: "Under $50", value: "0-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100 - $200", value: "100-200" },
  { label: "Over $200", value: "200+" },
];
