import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTotalCartQuantity } from "./cartSlice";

function CartIcon() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <NavLink
      to="cart"
      className="absolute bottom-14 right-5 flex h-fit w-fit items-center justify-center rounded-full bg-primary-400 p-4"
    >
      <HiOutlineShoppingCart />

      {totalCartQuantity !== 0 && (
        <span className="absolute left-1/2 top-2/3 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-sm font-extrabold">
          {totalCartQuantity}
        </span>
      )}
    </NavLink>
  );
}

export default CartIcon;
