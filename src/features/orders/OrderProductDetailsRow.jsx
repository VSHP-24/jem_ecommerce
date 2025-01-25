import Heading from "../../ui/Heading";
import { formatCurrency } from "../../utils/helpers";

function OrderProductDetailsRow({ item }) {
  const {
    cost,
    quantity,
    product: { name, brand, model, mainImage },
  } = item;

  //////////////////////////
  // STYLES
  //////////////////////////
  const itemDetailRow =
    "flex gap-2 text-sm tablet:text-base laptopS:text-lg desktop:text-xl";
  const itemTitle =
    "text-base font-semibold tablet:text-lg laptopS:text-2xl desktop:text-3xl";
  const itemHeaders = "text-primary-600 ";
  const itemDetails = "text-primary-200";

  return (
    <div className="grid grid-cols-[5rem_1fr] items-center gap-8 p-2 text-primary-400 tablet:grid-cols-[5rem_1fr] laptopS:p-4 desktop:grid-cols-[10rem_1fr]">
      <div className="justify-self-center bg-primary-200">
        <img
          className="h-20 tablet:h-32 desktop:h-40"
          src={mainImage}
          alt={name}
        />
      </div>
      <div>
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
              Cost :
            </Heading>
            <span className={itemDetails}>{formatCurrency(cost)}</span>
          </div>
          <div className={itemDetailRow}>
            <Heading as="h6" styles={itemHeaders}>
              Qty :
            </Heading>
            <span className={itemDetails}>{quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderProductDetailsRow;
