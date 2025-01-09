import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { LiaUserLockSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";

import SideNavBar from "./SideNavBar";
import Button from "./Button";

import { useLogout } from "../features/authentication/useLogout";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

function HeaderIconSets() {
  const [expanded, setExpanded] = useState(false);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const user = useSelector((state) => state.user.id);
  const { logout, isPending } = useLogout();

  const showSidebar = () => setExpanded((expand) => !expand);

  return (
    <nav className="flex gap-5 p-4 text-3xl text-primary-300">
      <NavLink
        to="cart"
        className="relative flex h-10 w-10 items-center justify-center"
      >
        <HiOutlineShoppingCart />

        {totalCartQuantity !== 0 && (
          <span className="absolute left-1/2 top-2/3 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-sm font-extrabold">
            {totalCartQuantity}
          </span>
        )}
      </NavLink>

      {user && (
        <Button to="profile">
          <HiOutlineUser />
        </Button>
      )}

      {!user && (
        <Button to="login">
          <LiaUserLockSolid />
        </Button>
      )}

      {user && (
        <Button disabled={isPending} onClick={logout}>
          <HiOutlineLogout />
        </Button>
      )}

      {/* RESPONSIVE NAVBAR ICON APPEARS ONLY FOR MOBILE DEVICES */}
      {!expanded && (
        <button className="laptopL:hidden" onClick={showSidebar}>
          <RxHamburgerMenu />
        </button>
      )}
      {expanded && <SideNavBar showSidebar={showSidebar} />}
    </nav>
  );
}

export default HeaderIconSets;
