"use client";
import { navMailLinks } from "@/constants";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
const NavMail = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[300px] rounded ]">
          <SelectValue placeholder="Alicia Koch" />
        </SelectTrigger>
        <SelectContent className="overflow-hidden rounded-lg bg-primary">
          <SelectGroup>
            <SelectItem value="mail1">alicia@example.com</SelectItem>
            <SelectItem value="mail2">alicia@gmail.com</SelectItem>
            <SelectItem value="mail3">alicia@me.com</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <NavigationMenu className="left-3">
        <NavigationMenuList className="flex-col gap-5 mt-2 ">
          {/* <div className="border-b">
            {navMailLinks.slice(0, 6).map((link) => (
              <NavigationMenuItem key={link.route}>
                <Link
                  href={link.route}
                  className="hover:bg-1 px-5 py-2 rounded-md text-sm font-sans"
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </div>
          <div className="">
            {navMailLinks.slice(6).map((link) => (
              <NavigationMenuItem key={link.route}>
                <Link
                  href={link.route}
                  className="hover:bg-1 px-3 py-2 gap-3 rounded-md text-sm font-sans"
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </div> */}
          {navMailLinks.map((link) => (
            <NavigationMenuItem key={link.route}>
              <Link
                href={link.route}
                className="hover:bg-1 px-5 py-2 rounded-md text-sm font-sans"
              >
                {link.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavMail;
