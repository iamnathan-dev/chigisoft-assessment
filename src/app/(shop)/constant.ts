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

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  image: string;
}

export const MOCK_REVEIWS: Review[] = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment:
      "Amazing product! The quality is outstanding and the attention to detail is remarkable. I've been using it for a while now and it has completely transformed my daily routine. Would definitely recommend to anyone looking for a reliable and high-quality solution.",
    date: "Jan 15, 2024",
    image: "/avatars/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment:
      "Great quality and fast shipping. The product arrived in perfect condition and the packaging was very secure. The customer service team was very helpful throughout the entire process. I'm really impressed with how quickly it was delivered to my doorstep.",
    date: "Jan 14, 2024",
    image: "/avatars/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    comment:
      "Exceeded my expectations! The features are exactly what I needed and the build quality is exceptional. I've tried similar products before but this one stands out in terms of performance and reliability. It's worth every penny spent.",
    date: "Jan 13, 2024",
    image: "/avatars/avatar-3.jpg",
  },
  {
    id: 4,
    name: "Sarah Williams",
    rating: 4,
    comment:
      "Very satisfied with my purchase. The product works exactly as advertised and has made a significant improvement in my daily activities. The design is sleek and modern, and it's incredibly user-friendly. I would definitely buy from this company again.",
    date: "Jan 12, 2024",
    image: "/avatars/avatar-4.jpg",
  },
  {
    id: 5,
    name: "David Brown",
    rating: 5,
    comment:
      "Best customer service ever! Not only is the product fantastic, but the support team went above and beyond to ensure I had the best experience possible. They were quick to respond to my questions and provided detailed assistance. This company truly values their customers.",
    date: "Jan 11, 2024",
    image: "/avatars/avatar-5.jpg",
  },
  {
    id: 6,
    name: "Emily Chen",
    rating: 5,
    comment:
      "Absolutely love this product! The innovative design and functionality have made it an essential part of my life. The quality is top-notch and it's clear that a lot of thought went into every detail. Highly recommend!",
    date: "Jan 10, 2024",
    image: "/avatars/avatar-6.jpg",
  },
  {
    id: 7,
    name: "Robert Taylor",
    rating: 4,
    comment:
      "Very impressed with both the product and service. The ordering process was smooth, and the product arrived earlier than expected. It's been performing excellently for the past few weeks. Great value for money!",
    date: "Jan 09, 2024",
    image: "/avatars/avatar-7.jpg",
  },
  {
    id: 8,
    name: "Lisa Anderson",
    rating: 5,
    comment:
      "This is exactly what I've been looking for! The product is intuitive to use and has all the features I need. The build quality is excellent and it feels like it will last for years. Customer support has been fantastic too.",
    date: "Jan 08, 2024",
    image: "/avatars/avatar-8.jpg",
  },
  {
    id: 9,
    name: "James Wilson",
    rating: 4,
    comment:
      "Really happy with my purchase. The product has made a noticeable difference in my daily routine. Setup was straightforward and the instructions were clear. The price point is just right for the quality you receive.",
    date: "Jan 07, 2024",
    image: "/avatars/avatar-9.jpg",
  },
  {
    id: 10,
    name: "Maria Garcia",
    rating: 5,
    comment:
      "Outstanding product and service! The attention to detail is impressive and the quality exceeds what I expected. The customer service team was incredibly helpful and responsive. Would buy from them again without hesitation.",
    date: "Jan 06, 2024",
    image: "/avatars/avatar-10.jpg",
  },
];
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
  { label: "Over $200", value: "200-2000" },
];
