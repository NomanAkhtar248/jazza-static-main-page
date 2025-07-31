"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Zap } from "lucide-react";
import Image from "next/image";
import NavMenuLink from "../nav-menu-link";

const categories = [
  {
    id: 1,
    name: "Hot Deals",
    imageUrl: "/hotdeal1.png",
  },
  {
    id: 2,
    name: "iPhone",
    items: [
      { id: 201, name: "iPhone 15 Series" },
      { id: 202, name: "iPhone 14 Series" },
      { id: 203, name: "iPhone 13 Series" },
      { id: 204, name: "iPhone 12 Series" },
      { id: 205, name: "iPhone 11 Series" },
      { id: 206, name: "iPhone SE Series" },
      { id: 207, name: "iPhone X Series" },
      { id: 208, name: "iPhone 8 Series" },
      { id: 209, name: "iPhone 7 Series" },
    ],
  },
  {
    id: 3,
    name: "Samsung",
    items: [
      { id: 301, name: "Galaxy 8 Series" },
      { id: 302, name: "Galaxy S10 Series" },
      { id: 303, name: "Galaxy S20 Series" },
      { id: 304, name: "Galaxy S21 Series" },
      { id: 305, name: "Galaxy S22 Series" },
      { id: 306, name: "Galaxy S23 Series" },
      { id: 307, name: "Galaxy Note Series" },
      { id: 308, name: "Galaxy Z Series" },
    ],
  },
  {
    id: 4,
    name: "MacBook",
    items: [
      { id: 401, name: "Macbook Pro" },
      { id: 402, name: "Macbook Air" },
      { id: 403, name: "Apple iMac" },
    ],
  },
  {
    id: 5,
    name: "Laptops",
    items: [
      { id: 501, name: "Dell" },
      { id: 502, name: "Lenovo" },
      { id: 503, name: "HP" },
      { id: 504, name: "Microsoft" },
      { id: 505, name: "Acer" },
      { id: 506, name: "Samsung" },
    ],
  },
  {
    id: 6,
    name: "Ipads",
    // no items
  },
  {
    id: 7,
    name: "Apple Watches",
    // no items
  },
  {
    id: 8,
    name: "Gaming",
    // no items
  },
  {
    id: 9,
    name: "For Businesses",
    // no items
  },
  {
    id: 10,
    name: "Redmi",
  },
  {
    id: 11,
    name: "Revibe Express",
    icon: Zap,
  },
];

const NavMenu = () => {
  return (
    <div className="hidden xl:block">
      <div className="w-full border-b bg-white px-6">
        <div className="w-full">
          <NavigationMenu
            //  viewport={false}
            className="w-full max-w-none justify-start [&>div]:w-full [&>div]:justify-start"
          >
            <NavigationMenuList className="flex w-full flex-nowrap justify-between px-8">
              {categories.map((category, index) => {
                const isLast = index === categories.length - 1;
                const hasItems =
                  Array.isArray(category.items) && category.items.length > 0;

                // If category has items, show trigger + dropdown

                if (hasItems) {
                  return (
                    // <NavigationMenu key={category.id}>
                    <NavigationMenuItem key={category.id}>
                      <NavigationMenuTrigger className="whitespace-nowrap !bg-transparent hover:!bg-transparent hover:!text-[#7f19a0] [&>svg]:hidden">
                        <span className="font-montserrat cursor-pointer font-semibold">
                          {category.name}
                        </span>
                      </NavigationMenuTrigger>

                      {/*  Use your custom component here */}

                      <NavigationMenuContent className="m-1">
                        <ul
                          // className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                          className="m-0 grid w-[210px] p-0 py-1"
                        >
                          {category.items?.map((item, i) => (
                            <li key={item.id}>
                              <NavMenuLink
                                itemName={item.name}
                                isLast={i === category.items.length - 1}
                              />
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    // </NavigationMenu>
                  );
                }

                // Else, show simple link (no dropdown at all)
                return (
                  <NavigationMenuItem key={category.id}>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href="#"
                        className={`flex items-center gap-2 whitespace-nowrap hover:bg-transparent hover:!text-[#7f19a0] ${
                          isLast
                            ? "text-[#7f19a0] hover:bg-transparent hover:!text-[#7f19a0]"
                            : ""
                        }`}
                      >
                        {/* Wrap both name + icon + image in flex */}
                        <span className="font-montserrat flex items-center gap-1 font-semibold">
                          {category.name}

                          {/* Icon (like Revibe Express) */}

                          {category.icon &&
                            (() => {
                              const Icon = category.icon;
                              return (
                                <Icon className="h-4 w-4 fill-[#7f19a0] stroke-[#7f19a0] text-[#7f19a0]" />
                              );
                            })()}

                          {/* Image (like Hot Deals) */}

                          {category.imageUrl && (
                            <Image
                              src={category.imageUrl}
                              alt={category.name}
                              width={30}
                              height={30}
                              className="cursor-pointer object-contain"
                            />
                          )}
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
