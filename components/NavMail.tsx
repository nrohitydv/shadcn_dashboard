"use client";
import { navMailLinks } from "@/constants";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const NavMail = () => {
  return (
    <div className="">
      <Select>
        <SelectTrigger className="w-[150px] rounded border p-4 border-gray-300">
          <SelectValue placeholder="Alicia Koch" />
        </SelectTrigger>
        <SelectContent className="overflow-hidden rounded-lg bg-primary mt-2">
          <SelectGroup>
            <SelectItem value="mail1">alicia@example.com</SelectItem>
            <SelectItem value="mail2">alicia@gmail.com</SelectItem>
            <SelectItem value="mail3">alicia@me.com</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <NavigationMenu className="mt-4 items-start justify-start">
        <NavigationMenuList className="flex flex-col gap-3">
          {navMailLinks.map((link) => (
            <NavigationMenuItem key={link.label}>
              <Link
                href={link.route}
                className="flex items-center gap-3 px-4 py-2 rounded-md text-sm font-sans transition-all duration-300 hover:bg-1 hover:w-auto"
              >
                <div className="relative w-6 h-6 flex-shrink-0">
                  <Image
                    src={link.imgUrl}
                    alt={link.label}
                    layout="fill"
                    objectFit="contain"
                    className="rounded"
                  />
                </div>
                <span className="flex-grow">{link.label}</span>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavMail;
