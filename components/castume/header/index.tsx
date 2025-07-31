// import { NavigationMenuDemo } from "../dami-menu/dami-menu";
import NavMenu from "../nav-menu";
import Navbar from "../navbar";
import ProductPage from "../product-gallery";
import PromoNavbar from "../promo-navbar";

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <PromoNavbar />
      <Navbar />
      <NavMenu />
      <ProductPage />
    </div>
  );
};
// export { NavigationMenuDemo };
export default Header;
