import { NavigationMenuDemo } from "../dami-menu/dami-menu";
import NavMenu from "../nav-menu";
import Navbar from "../navbar";
import PromoNavbar from "../promo-navbar";

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <PromoNavbar />
      <Navbar />
      <NavMenu />
      <NavigationMenuDemo />
    </div>
  );
};

export default Header;
