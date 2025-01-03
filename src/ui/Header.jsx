import HeaderIconSets from "./HeaderIconSets";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex items-center justify-between border-b-2 border-primary-100">
      <Logo />
      <HeaderIconSets />
    </div>
  );
}

export default Header;
