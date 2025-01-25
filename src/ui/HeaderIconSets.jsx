import { useState } from "react";
import { useSelector } from "react-redux";
import { LiaUserLockSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";

import SideNavBar from "./SideNavBar";
import Button from "./Button";

import { useLogout } from "../features/authentication/useLogout";

function HeaderIconSets() {
  const [expanded, setExpanded] = useState(false);

  const user = useSelector((state) => state.user.id);
  const { logout, isPending } = useLogout();

  const showSidebar = () => setExpanded((expand) => !expand);

  return (
    <nav className="flex gap-5 p-4 text-3xl text-primary-300">
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
