import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <img src="/jem.png" alt="JEM Brand Logo" className="h-8 px-4" />
    </NavLink>
  );
}

export default Logo;
