import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const NavMenuLink = ({
  itemName,
  isLast,
}: {
  itemName: string;
  isLast: boolean;
}) => {
  return (
    <NavigationMenuLink asChild>
      <div className="transition-colors duration-200 hover:bg-[#f9f1f6]">
        <div className="px-4 py-2">
          <Link
            href="#"
            className="block w-full text-start text-sm font-medium text-gray-700 hover:text-[#7f19a0]"
          >
            {itemName}
          </Link>
        </div>
        {!isLast && <div className="mx-4 border-b border-slate-200" />}
      </div>
    </NavigationMenuLink>
  );
};

export default NavMenuLink;
