"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const categories = [
  {
    name: "Hot Deals",
    imageUrl: "/hotdeal1.png",
  },
  {
    name: "iPhone",
    items: [
      "iPhone 15 Series",
      "iPhone 14 Series",
      "iPhone 13 Series",
      "iPhone 12 Series",
    ],
  },
  {
    name: "Samsung",
    items: ["Galaxy S22", "Galaxy Note Series", "Galaxy Z Series"],
  },
  {
    name: "MacBook",
    items: ["Macbook Pro", "Macbook Air", "Apple iMac"],
  },
  {
    name: "Laptops",
    items: ["Dell", "Lenovo", "HP"],
  },
  {
    name: "Ipads", // No items
  },
  {
    name: "Gaming", // No items
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {categories.map((category, index) => {
          const hasItems =
            Array.isArray(category.items) && category.items.length > 0;

          return (
            <NavigationMenuItem key={index}>
              {hasItems ? (
                <>
                  <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-48 space-y-1 rounded-md bg-white p-2 shadow-md">
                      {category.items?.map((item, idx) => (
                        <li key={idx}>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {item}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  asChild
                  className="px-4 py-2 text-sm text-gray-700 hover:text-purple-600"
                >
                  <Link href="#">{category.name}</Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

{
  /* <NavigationMenu>
<NavigationMenuList>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {components.map((component) => (
          <ListItem
            key={component.title}
            title={component.title}
            href={component.href}
          >
            {component.description}
          </ListItem>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Link href="/docs" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Documentation
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
</NavigationMenuList>
</NavigationMenu>
)
} */
}
