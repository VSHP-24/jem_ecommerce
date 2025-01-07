import { IoCloseSharp } from "react-icons/io5";

import SocialMediaLinks from "./SocialMediaLinks";
import Button from "./Button";

import sideNavBarList from "../utils/sideNavBarList";

function SideNavBar({ showSidebar }) {
  return (
    <div className="absolute left-0 top-0 z-30 flex h-full w-full translate-y-0 flex-col items-start gap-20 bg-primary-300 p-10 transition laptopL:hidden">
      <button className="self-end text-3xl text-black" onClick={showSidebar}>
        <IoCloseSharp />
      </button>

      <ul className="flex flex-col gap-8 text-2xl font-medium">
        {sideNavBarList.map((item) => (
          <li
            key={item.label}
            className="text-black hover:underline focus:underline active:underline"
          >
            <Button to={item.path} onClick={showSidebar}>
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
