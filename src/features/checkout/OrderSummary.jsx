import { useSelector } from "react-redux";
import Heading from "../../ui/Heading";
import { getCart, getTotalCartQuantity } from "../cart/cartSlice";
import ProductDetailsRow from "./ProductDetailsRow";
import { getUserDetails } from "../user/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";

function OrderSummary() {
  const navigate = useNavigate();

  const cart = useSelector(getCart);
  const customer = useSelector(getUserDetails);
  const cartQuantity = useSelector(getTotalCartQuantity);

  const {
    id,
    shippingName,
    shippingEmail,
    shippingAddress,
    shippingCity,
    shippingState,
    shippingCountry,
    shippingPostCode,
    billingAddress,
    billingCity,
    billingState,
    billingCountry,
    billingPostCode,
    phoneNumber,
  } = customer;

  useEffect(
    function () {
      if (cartQuantity < 1 || !id) return navigate("/cart", { replace: true });
    },
    [cartQuantity, navigate, id],
  );

  return (
    <div className="flex flex-col justify-between laptopL:flex-row">
      <div className="text-primary-400">
        <Heading as="h2" styles="pb-2 mb-2 border-b-2 border-primary-100/20">
          Order Summary
        </Heading>

        <div className="flex flex-col justify-between gap-2 pb-4 laptopL:flex-row">
          {cart.map((item, i) => (
            <ProductDetailsRow key={i} item={item} />
          ))}
        </div>

        <div className="pb-4 text-lg text-primary-200">
          <Heading as="h4" styles="mb-2">
            Delivery Address :
          </Heading>
          <p>{shippingName}</p>
          <span>{shippingAddress},</span>
          <span> {shippingCity},</span>
          <span> {shippingState},</span>
          <span> {shippingCountry}</span>
          <span> {shippingPostCode}</span>
          <p>Phone : {phoneNumber}</p>
          <p>Email : {shippingEmail}</p>
        </div>

        <div className="pb-4 text-lg text-primary-200">
          <Heading as="h4" styles="mb-2">
            Billing Address :
          </Heading>
          <p>{shippingName}</p>
          <span>{billingAddress},</span>
          <span> {billingCity},</span>
          <span> {billingState},</span>
          <span> {billingCountry}</span>
          <span> {billingPostCode}</span>
          <p>Phone : {phoneNumber}</p>
          <p>Email : {shippingEmail}</p>
        </div>
      </div>

      <OrderConfirmation customer={customer} cart={cart} />
    </div>
  );
}

export default OrderSummary;
