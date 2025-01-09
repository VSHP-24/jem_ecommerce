import { useSelector } from "react-redux";
import Heading from "../../ui/Heading";
import { getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function OrderSummary() {
  const subTotal = useSelector(getTotalCartPrice);
  const deliveryCharges = subTotal ? 200 : 0;

  const itemDetailRow = "flex gap-2 justify-between items-center text-lg";
  const itemHeaders = "text-primary-600 ";
  const itemDetails = "text-primary-200";

  return (
    <div className="my-4 mr-4 flex h-full max-w-80 flex-col gap-4 self-center border-2 border-primary-200 px-2 py-4 laptopL:self-start">
      <Heading as="h2">Summary</Heading>
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
        to="/checkout"
        additionalStyles="text-black p-2 self-center"
      >
        Checkout
      </Button>
    </div>
  );
}

export default OrderSummary;
