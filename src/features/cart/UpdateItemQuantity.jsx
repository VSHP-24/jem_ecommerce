import { useDispatch } from "react-redux";

import Button from "../../ui/Button";

import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ productId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center gap-[.125rem] rounded-full border-2 border-primary-200 bg-primary-300 text-xs tablet:gap-2 laptopS:text-sm">
      <Button
        variation="round"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
        additionalStyles=" text-black"
      >
        ➖
      </Button>

      <span className="text-lg font-extrabold text-black laptopS:text-xl">
        {currentQuantity}
      </span>
      <Button
        variation="round"
        onClick={() => dispatch(increaseItemQuantity(productId))}
        additionalStyles="  text-black"
      >
        ➕
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
