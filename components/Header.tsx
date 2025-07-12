"use client";
import { ReactNode, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY < 20;
      if (isScrolled != scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`
        ${scrolled ? "bg-transparent " : "fixed bg-slate-200"}
 top-0 left-0 right-0 z-50 transition-all duration-200
        `}
    >
      <div className="max-w-7xl mx-auto p-2">
        <div className="flex justify-between items-center">
          <div
            className={
              scrolled
                ? "flex flex-row gap-12 text-slate-800"
                : "flex flex-row gap-12 text-slate-800"
            }
          >
            <h1 className="text-3xl font-bold cursor-pointer flex items-center gap-3">
              <span>
                {" "}
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded transform rotate-45 flex items-center justify-center">
                  <div className="w-3 h-3 bg-slate-300 transform -rotate-45 rounded-sm" />
                </div>
              </span>{" "}
              {navlinks.logo.label}
            </h1>
            {navlinks.links?.map((item, index) => (
              <ul key={index} className="xl:block hidden p-1 bg-transparent">
                <NavigationMenu className="border-none">
                  <NavigationMenuList className="bg-transparent">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </ul>
            ))}
          </div>

          <div className="pr-6 flex items-center gap-2 justify-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button className="rounded-4xl py-5">
                  Get Later
                  <FaArrowRight />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="rounded-2xl w-fit mx-auto">
                <div className="space-y-2 cursor-pointer text-base font-semibold">
                  <h1 className="hover:bg-sky-400">
                    Social media management <br />
                    <span className="text-sm font-normal">
                      Start free trial
                    </span>
                  </h1>
                  <h1 className="hover:bg-sky-400">
                    Influencer marketing <br />
                    <span className="text-sm font-normal">
                      Let's talk strategy
                    </span>
                  </h1>
                  <h1 className="hover:bg-sky-400">
                    For creators <br />
                    <span className="text-sm font-normal">
                      Join our marketplace
                    </span>
                  </h1>
                </div>
              </HoverCardContent>
            </HoverCard>
            <div className="xl:hidden block">
              <AlignJustify className="text-slate-900" size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

interface Logo {
  icon?: ReactNode;
  label: string;
}

interface Links {
  icon?: ReactNode;
  label: string;
}

interface NavLinks {
  logo: Logo;
  links?: Links[];
}

const navlinks: NavLinks = {
  logo: {
    label: "Later",
  },
  links: [
    {
      label: "Products",
    },
    {
      label: "Services",
    },
    {
      label: "Customers",
    },
    {
      label: "Resources",
    },
    {
      label: "Pricing",
    },
  ],
};
