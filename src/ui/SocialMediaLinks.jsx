import { LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu";
import { NavLink } from "react-router-dom";

import Heading from "./Heading";

function SocialMediaLinks({ showSidebar, colors = "text-black" }) {
  return (
    <div className={"flex flex-col gap-5 text-2xl font-bold " + colors}>
      <Heading as="h6">Follow Us</Heading>
      <div className="flex items-center gap-5 text-3xl">
        <NavLink
          onClick={showSidebar}
          target="_blank"
          to="https://www.facebook.com/JEMIndiaa/"
        >
          <LuFacebook />
        </NavLink>
        <NavLink
          onClick={showSidebar}
          target="_blank"
          to="https://www.instagram.com/jemindiaa/"
        >
          <LuInstagram />
        </NavLink>
        <NavLink
          onClick={showSidebar}
          target="_blank"
          to="https://www.youtube.com/channel/UC8kBaED7ajg9MiW4Q4V6rJg"
        >
          <LuYoutube />
        </NavLink>
      </div>
    </div>
  );
}

export default SocialMediaLinks;
