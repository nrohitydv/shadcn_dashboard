"use client";
import { navLinks } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-4 p-4 font-sans">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.route}>
            <Link
              href={link.route}
              className="hover:bg-1 px-3 py-2 rounded-md text-sm font-medium"
            >
              {link.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
