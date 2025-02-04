import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice } from "../cart/cartSlice";
import { useCreateNewOrder } from "./useCreateNewOrder";
import Spinner from "../../ui/Spinner";

function OrderConfirmation({ customer, cart }) {
  const navigate = useNavigate();

  const subTotal = useSelector(getTotalCartPrice);
  const deliveryCharges = subTotal ? 200 : 0;
  const { isPending, createNewOrder } = useCreateNewOrder();

  const itemDetailRow = "flex gap-2 justify-between items-center text-lg";
  const itemHeaders = "text-primary-600 ";
  const itemDetails = "text-primary-200";

  function handlePlaceOrder() {
    // CREATES ORDER iTEMS AS PER API
    const orderItems = cart.map((item) => {
      return {
        quantity: item.quantity,
        cost: item.totalPrice,
        product: item.product.id,
      };
    });

    const { name, id, email, shippingName, shippingEmail, ...details } =
      customer;

    // NEW ORDER OBJECT IS CREATED AS PER API
    const newOrder = {
      orderItems,
      cost: subTotal + deliveryCharges,
      name: shippingName,
      email: shippingEmail,
      paymentMethod: "cod",
      paymentStatus: "pending",
      ...details,
    };

    createNewOrder(
      { ...newOrder },
      { onSuccess: () => navigate("/orders", { replace: true }) },
    );
  }

  return (
    <div className="my-4 mr-4 flex h-full max-w-80 flex-col gap-4 self-center border-2 border-primary-200 px-2 py-4 shadow-lg shadow-primary-200/40 laptopL:self-start">
      <Heading as="h2">Payment Info</Heading>
      <div className={itemDetailRow}>
        <Heading as="h6" styles={itemHeaders}>
          SubTotal :
        </Heading>
        <span className={itemDetails}>{formatCurrency(subTotal)}</span>
      </div>

      <div className={itemDetailRow}>
        <Heading as="h6" styles={itemHeaders}>
          Delivery Charges :
        </Heading>
        <span className={itemDetails}>{formatCurrency(deliveryCharges)}</span>
      </div>

      <div className="border-y-2 border-primary-100/20 py-4">
        <div className={itemDetailRow}>
          <Heading as="h5" styles="text-2xl text-primary-100 ">
            Total :
          </Heading>
          <span className={itemDetails}>
            {formatCurrency(subTotal + deliveryCharges)}
          </span>
        </div>
      </div>

      <p className="text-lg font-extrabold text-red-600">
        *Currently all orders are available only with Cash On Delivery (COD)
      </p>

      <Button
        variation="primary"
        additionalStyles="text-black py-2 px-4 text-base self-center"
        onClick={handlePlaceOrder}
        onDisabled={isPending}
      >
        {!isPending ? "Place Order" : <Spinner />}
      </Button>
    </div>
  );
}

export default OrderConfirmation;
