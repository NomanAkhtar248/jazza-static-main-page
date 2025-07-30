import Link from "next/link"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"

const NavMenuLink = ({
  itemName,
  isLast,
}: {
  itemName: string
  isLast: boolean
}) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        href="#"
        className={`block w-full font-montserrat font-semibold  hover:bg-[#f9f1f6] hover:text-[#7f19a0] ${
          !isLast ? "border-b border-slate-200" : ""
        }`}
      >
        {itemName}
      </Link>
    </NavigationMenuLink>
  )
}

export default NavMenuLink
