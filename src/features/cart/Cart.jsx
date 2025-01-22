import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import CartRow from "./CartRow";
import Heading from "../../ui/Heading";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import Button from "../../ui/Button";

function Cart() {
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="divide-y-2 divide-primary-100/20 text-primary-400">
      <Heading as="h2" styles="mb-4">
        Your Cart
      </Heading>

      <div className="flex flex-col justify-between laptopL:flex-row">
        <div className="flex flex-col gap-2 pb-4">
          {cart.map((item, i) => (
            <CartRow key={i} item={item} />
          ))}
          <Button
            variation="secondary"
            onClick={() => dispatch(clearCart())}
            additionalStyles="mt-4 w-36 h-10 text-sm tablet:text-lg tablet:w-44 text-black"
          >
            ❌ Clear Cart
          </Button>
        </div>
        <CartSummary />
      </div>
    </div>
  );
}

export default Cart;
