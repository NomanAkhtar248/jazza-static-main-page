import Account from "./account";
import Wishlist from "./wishlist";
import Cart from "./cart";
import Help from "./help";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-x-1 whitespace-nowrap sm:gap-x-2 xl:gap-x-4">
      <div className="hidden xl:flex">
        <Help />
      </div>
      <Account />
      <Wishlist />
      <Cart />
    </div>
  );
};

export default NavIcons;
