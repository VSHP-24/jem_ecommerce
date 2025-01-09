import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import CartRow from "./CartRow";
import Heading from "../../ui/Heading";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="divide-y-2 divide-primary-100/20 text-primary-400">
      <Heading as="h2" styles="mb-4">
        Your Cart
      </Heading>

      <div className="flex flex-col justify-between laptopL:flex-row">
        <div>
          {cart.map((item, i) => (
            <CartRow key={i} item={item} />
          ))}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}

export default Cart;
