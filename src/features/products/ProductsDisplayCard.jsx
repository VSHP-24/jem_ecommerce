import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

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
    // additionalImages,
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
      className="grid cursor-pointer grid-cols-[15rem] grid-rows-[1fr_1fr] justify-items-center gap-2 border-2 border-primary-400 p-4 hover:shadow-lg hover:shadow-primary-500"
    >
      {/* PRODUCT IMAGE */}
      <div className="bg-primary-200">
        <img className="h-60 w-60" src={mainImage} alt={`${name}`} />
      </div>

      <div className="m-2 flex flex-col justify-between gap-2 text-primary-200">
        <Heading
          as="h5"
          styles=" text-sm font-bold uppercase text-primary-600 "
        >
          {category.name}
        </Heading>

        <Heading as="h3" styles="text-xl laptopL:text-2xl">
          {name} | JEM{" "}
        </Heading>

        {!discountPrice && <p className="text-lg font-bold">₹ {price}</p>}

        {discountPrice && (
          <div className="flex gap-2 text-lg font-bold">
            <p>₹ {discountPrice}</p>
            <span className="text-primary-400/50 line-through">₹ {price}</span>
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
