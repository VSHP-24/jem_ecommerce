import { useSelector } from "react-redux";
import Heading from "../../ui/Heading";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentQuantityById } from "../cart/cartSlice";

function ProductDetailsRow({ item }) {
  const {
    quantity,
    product: { id, name, price, discountPrice, mainImage },
  } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <div className="grid grid-cols-[5rem_1fr] items-center gap-4 border-b-2 border-primary-100/10 p-2 text-primary-400 tablet:grid-cols-[10rem_1fr] laptopS:p-4 desktop:grid-cols-[15rem_1fr]">
      <div className="justify-self-center bg-primary-200">
        <img
          className="h-16 tablet:h-20 desktop:h-32"
          src={mainImage}
          alt={name}
        />
      </div>

      <div className="flex flex-col justify-between gap-1">
        <Heading
          as="h3"
          styles=" text-base font-semibold tablet:text-lg laptopS:text-2xl desktop:text-3xl "
        >
          {currentQuantity} x {name}
        </Heading>

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

export default ProductDetailsRow;
