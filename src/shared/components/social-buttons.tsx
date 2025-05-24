import { SocialLink } from "@/app/(shop)/constant";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SocialButton = ({ Icon, href }: SocialLink) => (
  <Button
    variant="secondary"
    size="icon"
    className="text-gray-700 rounded-full relative shadow-none hover:bg-gray-100 focus:ring-0 focus-visible:ring-0 cursor-pointer"
    asChild
  >
    <Link className="outline-none no-underline" href={href}>
      <Icon strokeWidth={1} />
    </Link>
  </Button>
);

export default SocialButton;
