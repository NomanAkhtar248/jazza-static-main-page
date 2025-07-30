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
      "iPhone 11 Series",
      "iPhone SE Series",
      "iPhone X Series",
      "iPhone 8 Series",
      "iPhone 7 Series",
    ],
  },
  {
    name: "Samsung",
    items: [
      "Galaxy 8 Series",
      "Galaxy S10 Series",
      "Galaxy S20 Series",
      "Galaxy S21 Series",
      "Galaxy S22 Series",
      "Galaxy S23 Series",
      "Galaxy Note Series",
      "Galaxy Z Series",
    ],
  },
  {
    name: "MacBook",
    items: ["Macbook Pro", "Macbook Air", "Apple iMac"],
  },
  {
    name: "Laptops",
    items: ["Dell", "Lenovo", "HP", "Microsoft", "Acer", "Samsung"],
  },
  {
    name: "Ipads",
    // no items
  },
  {
    name: "Apple Watches",
    // no items
  },
  {
    name: "Gaming",
    // no items
  },
  {
    name: "For Businesses",
    // no items
  },
  {
    name: "Redmi",
  },
  {
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
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger className="whitespace-nowrap bg-transparent hover:!bg-transparent hover:!text-[#7f19a0] data-[state=open]:bg-transparent [&>svg]:hidden">
                        <div className="flex items-center gap-2">
                          <span className="font-montserrat cursor-pointer font-semibold">
                            {category.name}
                          </span>
                        </div>
                      </NavigationMenuTrigger>

                      {/*  Use your custom component here */}

                      <NavigationMenuContent className="">
                        <ul className="m-0 grid w-[200px] gap-2 p-0">
                          {category.items?.map((itemName, i) => (
                            <li key={i}>
                              <NavMenuLink
                                itemName={itemName}
                                isLast={i === category.items.length - 1}
                              />
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                // Else, show simple link (no dropdown at all)
                return (
                  <NavigationMenuItem key={index}>
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
