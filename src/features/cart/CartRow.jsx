import Heading from "../../ui/Heading";
import { formatCurrency } from "../../utils/helpers";

function CartRow({ item }) {
  const {
    quantity,
    product: { name, brand, model, price, discountPrice, mainImage },
    totalPrice,
  } = item;

  //////////////////////////
  // STYLES
  //////////////////////////
  const itemDetailRow =
    "flex gap-2 text-xs tablet:text-sm laptopS:text-base desktop:text-lg";
  const itemTitle = "text-base laptopS:text-lg desktop:text-2xl";
  const itemHeaders = "text-primary-600 ";
  const itemDetails = "text-primary-200";

  return (
    <div className="grid grid-cols-[5rem_1fr] items-center gap-4 border-b-2 border-primary-100/10 p-4 text-primary-400 tablet:grid-cols-[10rem_1fr] desktop:grid-cols-[15rem_1fr]">
      <div className="bg-primary-200">
        <img
          className="h-32 tablet:h-40 desktop:h-60"
          src={mainImage}
          alt={name}
        />
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          <Heading as="h3" styles={itemTitle}>
            {name}
          </Heading>

          <div className={itemDetailRow}>
            <Heading as="h6" styles={itemHeaders}>
              Brand :
            </Heading>
            <span className={itemDetails}>{brand.name}</span>
          </div>

          <div className={itemDetailRow}>
            <Heading as="h6" styles={itemHeaders}>
              Model :
            </Heading>
            <span className={itemDetails}>{model.name}</span>
          </div>

          <div className={itemDetailRow}>
            <Heading as="h6" styles={itemHeaders}>
              Price :
            </Heading>
            <span className={itemDetails}>
              ₹ {discountPrice ? discountPrice : price}
            </span>
          </div>

          <div>{quantity}</div>
        </div>

        <div className="flex gap-1 text-sm font-extrabold text-primary-200 tablet:text-base desktop:text-lg">
          <Heading as="h6" styles="">
            Cost :
          </Heading>
          <span className="">{formatCurrency(totalPrice)}</span>
        </div>
      </div>
    </div>
  );
}

export default CartRow;
