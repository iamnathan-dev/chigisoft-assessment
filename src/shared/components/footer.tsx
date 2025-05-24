"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ApplSVGIcon from "@/shared/assets/svg/apple.svg";
import GooglePlaySVGIcon from "@/shared/assets/svg/google-play.svg";
import FooterLogo from "@/shared/assets/images/footer-logo.png";
import CrediCards from "@/shared/assets/images/cards.png";
import Link from "next/link";
import { Input } from "@/components/ui/input";

interface FooterSectionProps {
  title: string;
  links: string[];
}

interface AppDownloadButtonProps {
  icon: string;
  alt: string;
  store: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
    <ul className="space-y-2 text-xs text-gray-300">
      {links.map((link, index) => (
        <li key={index} className="hover:underline cursor-pointer">
          <Link href={"/"} className="outline-none">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const AppDownloadButton: React.FC<AppDownloadButtonProps> = ({
  icon,
  alt,
  store,
}) => (
  <Button
    variant={"default"}
    size={"default"}
    className="xl:w-fit h-[50px] w-full cursor-pointer bg-gray-700 hover:bg-gray-600 duration-300 ease-in flex items-center flex-row gap-2"
  >
    <Image src={icon} alt={alt} width={20} height={20} />
    <div className="text-start">
      <small className="!text-gray-100 font-light">Download on</small>
      <h4 className="!text-gray-100 font-semibold">{store}</h4>
    </div>
  </Button>
);

const FOOTER_SECTIONS = {
  productCatalog: {
    title: "Product Catalog",
    links: ["Electronics", "Fashion", "Home & Kitchen", "Sports", "Toys"],
  },
  company: {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Blog", "Terms & Conditions"],
  },
};

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white text-sm !pt-8">
      <div className="lg:p-5 p-3">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-5">
          <div className="w-full sm:basis-1/5">
            <Image src={FooterLogo} alt="cartzilla" className="h-6 w-auto" />
          </div>

          <div className="w-full sm:basis-1/5">
            <FooterSection {...FOOTER_SECTIONS.productCatalog} />
          </div>

          <div className="w-full sm:basis-1/5">
            <FooterSection {...FOOTER_SECTIONS.company} />
          </div>

          <div className="w-full basis-2/5">
            <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded bg-gray-700 text-sm !text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 !border-0"
                  required
                />
                <Button
                  variant={"default"}
                  size={"default"}
                  className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-colors cursor-pointer"
                >
                  Subscribe
                </Button>
              </form>
              <div className="text-gray-400 text-[10px] w-full sm:w-[70%] mt-2">
                *Subscribe to our newsletter to receive early discount offers,
                updates and new products info.
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <h4 className="mb-3">Download our mobile app!</h4>
              <div className="flex flex-col xl:flex-row gap-3">
                <AppDownloadButton
                  icon={ApplSVGIcon}
                  alt="apple svg"
                  store="App Store"
                />
                <AppDownloadButton
                  icon={GooglePlaySVGIcon}
                  alt="google play svg"
                  store="Google Play"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:p-5 p-3 bg-gray-900 mt-12 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left">
          &copy; All rights reserved. Developed by{" "}
          <Link
            href="https://github.com/iamnathan-dev"
            className="hover:underline"
            target="_blank"
          >
            Nathaniel Joseph
          </Link>
        </p>

        <div className="flex gap-2 items-center">
          <Image src={CrediCards} alt="credit cards" className="h-6 w-auto" />
        </div>
      </div>
    </footer>
  );
};
