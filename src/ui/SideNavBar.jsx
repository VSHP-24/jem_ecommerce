import { NavLink } from "react-router-dom";
import sideNavBarList from "../utils/sideNavBarList";
import { IoCloseSharp } from "react-icons/io5";
import SocialMediaLinks from "./SocialMediaLinks";

function SideNavBar({ showSidebar }) {
  return (
    <div className="absolute left-0 top-0 z-30 flex h-full w-full translate-y-0 flex-col items-start gap-20 bg-primary-300 p-10 transition tablet:hidden">
      <button className="self-end text-3xl text-black" onClick={showSidebar}>
        <IoCloseSharp />
      </button>

      <ul className="flex flex-col gap-8 text-2xl font-medium">
        {sideNavBarList.map((item) => (
          <li key={item.label} className="text-black">
            <button onClick={showSidebar}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </button>
          </li>
        ))}
      </ul>
      <SocialMediaLinks showSidebar={showSidebar} />
    </div>
  );
}

export default SideNavBar;
