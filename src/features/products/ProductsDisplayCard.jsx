import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { calculateOfferPercentage, formatCurrency } from "../../utils/helpers";

function ProductsDisplayCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    id,
    name,
    brand,
    model,
    category,
    subCategory,
    price,
    discountPrice,
    slug,
    mainImage,
  } = product;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart(product) {
    const newItem = {
      quantity: 1,
      product: {
        id,
        name,
        brand,
        model,
        category,
        subCategory,
        price: !discountPrice ? price : discountPrice,
        discountPrice,
        mainImage,
      },
      totalPrice: !discountPrice ? price : discountPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div
      onClick={(e) =>
        e.target.localName !== "button" && navigate(`/products/${slug}`)
      }
      className="relative grid cursor-pointer grid-cols-[15rem] grid-rows-[1fr_1fr] justify-items-center gap-2 border-2 border-primary-400 p-4 hover:shadow-lg hover:shadow-primary-500"
    >
      {/* PRODUCT IMAGE */}
      <div className="bg-primary-200">
        <img className="h-60 w-60" src={mainImage} alt={`${name} || JEM`} />
      </div>

      {discountPrice && (
        <div className="absolute left-5 top-5 rounded-full bg-green-500 p-2 text-base font-bold">
          {calculateOfferPercentage(price, discountPrice)}% OFF
        </div>
      )}

      <div className="m-2 flex flex-col justify-between gap-2 text-primary-200">
        <Heading
          as="h5"
          styles=" text-sm font-bold uppercase text-primary-600 "
        >
          {category.name}
        </Heading>

        <Heading as="h3" styles="text-xl laptopL:text-2xl">
          {name} | JEM
        </Heading>

        {!discountPrice && (
          <p className="text-lg font-bold"> {formatCurrency(price)} </p>
        )}

        {discountPrice && (
          <div className="flex gap-2 text-lg font-bold">
            <p> {formatCurrency(discountPrice)}</p>
            <span className="text-primary-400/50 line-through">
              {formatCurrency(price)}
            </span>
          </div>
        )}

        {isInCart && (
          <div className="flex items-center justify-between gap-4">
            <UpdateItemQuantity
              productId={id}
              currentQuantity={currentQuantity}
            />
            <DeleteItem productId={id} />
          </div>
        )}

        {!isInCart && (
          <Button
            onClick={() => handleAddToCart(product)}
            variation="primary"
            additionalStyles="text-black "
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductsDisplayCard;
