import Image from "next/image";
import { AlignJustify } from "lucide-react";
import NavIcons from "../nav-icons";
import NavSearch from "../nav-search";
import Help from "../nav-icons/help";

const Navbar = () => {
  return (
    <section className="border-b border-[#ddd] bg-white py-3 xl:py-4">
      <div className="px-2 xl:px-16">
        <nav className="flex w-full flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          {/*  Logo + Hamburger + Help + Icons (for sm only) */}
          <div className="flex w-full items-center justify-between sm:hidden">
            <div className="flex items-center gap-3">
              <AlignJustify size={26} className="cursor-pointer" />
              <Help />
            </div>
            <Image
              src="/logo.svg"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer"
            />
            <div className="flex gap-2">
              <NavIcons />
            </div>
          </div>

          {/* show only on sm, md and lg screen */}
          <div className="hidden w-full items-center justify-between sm:flex xl:hidden">
            <div className="flex items-center gap-3">
              <AlignJustify size={26} className="cursor-pointer" />
              <Help />
            </div>
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
            <div className="flex items-center">
              <NavIcons />
            </div>
          </div>

          {/*  Logo (xl only) */}
          <div className="hidden items-center gap-2 xl:flex">
            <Image
              src="/logo.svg"
              alt="logo"
              width={180}
              height={100}
              sizes="(min-width: 1280px) 180px, 100vw"
              className="cursor-pointer object-contain"
              priority
            />
          </div>

          {/*  Searchbar – 2nd row on sm/md/lg */}
          <div className="w-full xl:hidden">
            <NavSearch />
          </div>

          {/*  Searchbar – inline on xl */}
          <div className="hidden w-full xl:block">
            <NavSearch />
          </div>

          {/*  Icons only for xl and up */}
          <div className="hidden gap-4 xl:flex">
            <NavIcons />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
