import { useSelector } from "react-redux";
import Heading from "../../ui/Heading";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartRow({ item }) {
  const {
    quantity,
    product: { id, name, brand, model, price, discountPrice, mainImage },
  } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  //////////////////////////
  // STYLES
  //////////////////////////
  const itemDetailRow =
    "flex gap-2 text-xs tablet:text-sm laptopS:text-base desktop:text-lg";
  const itemTitle =
    "text-base font-semibold tablet:text-lg laptopS:text-2xl desktop:text-3xl";
  const itemHeaders = "text-primary-600 ";
  const itemDetails = "text-primary-200";

  return (
    <div className="grid grid-cols-[5rem_1fr] items-center gap-4 border-b-2 border-primary-100/10 p-1 text-primary-400 tablet:grid-cols-[10rem_1fr] laptopS:p-4 desktop:grid-cols-[15rem_1fr]">
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

          <div className="flex gap-4">
            <UpdateItemQuantity
              productId={id}
              currentQuantity={currentQuantity}
            />
            <DeleteItem productId={id} />
          </div>
        </div>

        <div className="flex gap-1 text-sm font-extrabold text-primary-200 tablet:text-base desktop:text-lg">
          <Heading as="h6" styles="">
            Cost :
          </Heading>
          <span className="">
            {formatCurrency(
              quantity * `${discountPrice ? discountPrice : price}`,
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartRow;
