import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import SideNavBar from "./SideNavBar";
import { useState } from "react";

function HeaderIconSets() {
  const [expanded, setExpanded] = useState(false);

  const showSidebar = () => setExpanded((expand) => !expand);

  return (
    <nav className="flex gap-5 p-4 text-3xl text-primary-300">
      <NavLink
        to="checkout"
        className="relative flex h-10 w-10 items-center justify-center"
      >
        <HiOutlineShoppingCart />
        <span className="absolute left-1/2 top-2/3 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-sm">
          0
        </span>
      </NavLink>

      <NavLink to="login">
        <HiOutlineUser />
      </NavLink>

      {/* RESPONSIVE NAVBAR ICON APPEARS ONLY FOR MOBILE DEVICES */}
      {!expanded && (
        <button className="tablet:hidden" onClick={showSidebar}>
          <RxHamburgerMenu />
        </button>
      )}
      {expanded && <SideNavBar showSidebar={showSidebar} />}
    </nav>
  );
}

export default HeaderIconSets;
