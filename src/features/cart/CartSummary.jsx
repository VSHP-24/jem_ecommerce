import { useSelector } from "react-redux";
import Heading from "../../ui/Heading";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function CartSummary() {
  const subTotal = useSelector(getTotalCartPrice);
  const cartquantity = useSelector(getTotalCartQuantity);

  const deliveryCharges = subTotal ? 200 : 0;

  const itemDetailRow = "flex gap-2 justify-between items-center text-lg";
  const itemHeaders = "text-primary-600 ";
  const itemDetails = "text-primary-200";

  return (
    <div className="my-4 mr-4 flex h-full max-w-80 flex-col gap-4 self-center border-2 border-primary-200 px-2 py-4 shadow-lg shadow-primary-200/40 laptopL:self-start">
      <Heading as="h2">Summary</Heading>
      <div className={itemDetailRow}>
        <Heading as="h6" styles={itemHeaders}>
          Total Items :
        </Heading>
        <span className={itemDetails}>{cartquantity} Nos.</span>
      </div>
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
          <Heading as="h5" styles="text-2xl ">
            Total :
          </Heading>
          <span className={itemDetails}>
            {formatCurrency(subTotal + deliveryCharges)}
          </span>
        </div>
      </div>

      <Button
        variation="primary"
        to="/contact-details"
        additionalStyles="text-black py-2 px-4 text-base self-center"
      >
        Proceed to buy
      </Button>
    </div>
  );
}

export default CartSummary;
