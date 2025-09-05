import Image from "next/image";
import { siteConfig } from "@/lib/config";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  { icon: <LinkedInLogoIcon />, url: "#" },
  { icon: <InstagramLogoIcon />, url: "#" },
  { icon: <TwitterLogoIcon />, url: "#" },
];

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-y-6 px-7 py-6 md:px-10">
        {/* Left: Logo + Name + Contact */}
        <div className="flex flex-col items-center md:items-start gap-y-2">
          <div className="flex items-center gap-x-2">
            <Image
              src="/rena-logo.png"
              alt="AapliShala logo"
              width={24}
              height={24}
              className="h-6 w-6"
              priority
            />
            <h2 className="text-lg font-bold text-foreground">{siteConfig.name}</h2>
          </div>

          <a
            href="https://calendly.com/renasofttech/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
          >
            Contact
          </a>
        </div>

        {/* Center: Rights */}
        <div className="text-sm font-medium tracking-tight text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-x-3">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              className="flex h-6 w-6 items-center justify-center text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}