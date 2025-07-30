import Account from "./account";
import Wishlist from "./wishlist";
import Cart from "./cart";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-x-1 whitespace-nowrap md:gap-x-2">
      <Account />
      <Wishlist />
      <Cart />
    </div>
  );
};

export default NavIcons;
