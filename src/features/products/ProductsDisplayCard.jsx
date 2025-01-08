import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

function ProductsDisplayCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={(e) =>
        e.target.localName !== "button" && navigate(`/products/${product.slug}`)
      }
      className="grid cursor-pointer grid-cols-[15rem] grid-rows-[1fr_1fr] justify-items-center gap-2 border-2 border-primary-400 p-4 hover:z-10 hover:scale-110 hover:shadow-lg hover:shadow-primary-500"
    >
      {/* PRODUCT IMAGE */}
      <div className="bg-primary-200">
        <img
          className="h-60 w-60"
          src={product.mainImage}
          alt={`${product.name}`}
        />
      </div>

      <div className="m-2 flex flex-col justify-between gap-2 text-primary-200">
        <Heading
          as="h5"
          styles=" text-sm font-bold uppercase text-primary-600 "
        >
          {product.category.name}
        </Heading>

        <Heading as="h3" styles="text-xl laptopL:text-2xl">
          {product.name} | JEM{" "}
        </Heading>

        {!product.discountPrice && (
          <p className="text-lg font-bold">₹ {product.price}</p>
        )}

        {product.discountPrice && (
          <div className="flex gap-2 text-lg font-bold">
            <p>₹ {product.discountPrice}</p>
            <span className="text-primary-400/50 line-through">
              ₹ {product.price}
            </span>
          </div>
        )}
        <Button
          onClick={(e) => console.log("Hello")}
          variation="primary"
          additionalStyles="text-black "
        >
          Add to cart
        </Button>
        <div></div>
      </div>
    </div>
  );
}

export default ProductsDisplayCard;
