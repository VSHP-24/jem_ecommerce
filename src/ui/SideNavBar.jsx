import { IoCloseSharp } from "react-icons/io5";

import SocialMediaLinks from "./SocialMediaLinks";
import Button from "./Button";

import sideNavBarList from "../utils/sideNavBarList";

function SideNavBar({ showSidebar }) {
  return (
    <div className="absolute left-0 top-0 z-30 flex h-dvh w-dvw translate-y-0 flex-col items-start justify-between bg-primary-300 p-4 transition laptopL:hidden">
      <button className="self-end text-3xl text-black" onClick={showSidebar}>
        <IoCloseSharp />
      </button>

      <ul className="flex flex-col justify-between text-lg font-medium">
        {sideNavBarList.map((item) => (
          <li key={item.label} className="text-black">
            <Button
              to={item.path}
              onClick={showSidebar}
              additionalStyles=" hover:underline font-medium text-base focus:underline active:underline "
            >
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
      <SocialMediaLinks showSidebar={showSidebar} />
    </div>
  );
}

export default SideNavBar;
