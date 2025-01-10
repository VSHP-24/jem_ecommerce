import { BsFillCartXFill } from "react-icons/bs";
import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center gap-8 py-10 text-primary-400">
      <BsFillCartXFill className="h-40 w-40" />
      <p className="laptopS:text-4xl">
        Your cart is <strong className="text-primary-100"> EMPTY </strong> 😢
      </p>
      <Button
        variation="primary"
        to="/products"
        additionalStyles="text-lg text-black laptopS:text-2xl"
      >
        Start Shopping
      </Button>
    </div>
  );
}

export default EmptyCart;
