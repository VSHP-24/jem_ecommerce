import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

import ProductDPImages from "./ProductDPImages";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../cart/DeleteItem";

import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { calculateOfferPercentage, formatCurrency } from "../../utils/helpers";
import { useGetProducts } from "./useGetProducts";
import PageNotFound from "../../pages/PageNotFound";
import Loader from "../../ui/Loader";

function ProductDP() {
  const { product } = useParams();
  const { isPending, products } = useGetProducts();
  const dispatch = useDispatch();
  let selectedProduct, currentQuantity;

  if (!isPending) {
    selectedProduct = products.find((item) => item.slug === product);
  }
  currentQuantity = useSelector(getCurrentQuantityById(selectedProduct?.id));
  const isInCart = currentQuantity > 0;

  if (isPending) return <Loader />;

  if (!isPending && !selectedProduct) return <PageNotFound />;

  const {
    id,
    additionalImages = [],
    additionalInformations,
    brand,
    category,
    descriptions,
    discountPrice,
    mainImage = " ",
    model,
    name = " ",
    price,
    size,
    subCategory,
    video,
    includedParts,
  } = selectedProduct;

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

  if (!isPending)
    return (
      <div className="flex flex-col gap-2">
        <section className="grid grid-rows-2 gap-4 pb-6 tablet:grid-cols-2 tablet:grid-rows-1">
          <div className="flex flex-col justify-center gap-4 tablet:col-start-2">
            <Heading as="h2">{name}</Heading>
            <Heading
              as="h5"
              styles=" text-sm font-bold uppercase text-primary-600 laptopS:text-base "
            >
              {category.name}
            </Heading>

            {discountPrice && (
              <div className="w-20 rounded-full bg-green-500 p-2 text-sm font-bold laptopS:w-24 laptopS:text-lg">
                {calculateOfferPercentage(price, discountPrice)}% OFF
              </div>
            )}

            <div className="flex flex-col gap-2 p-2 text-2xl font-bold text-primary-200 laptopS:text-3xl">
              <div>
                {!discountPrice && <p> {formatCurrency(price)} </p>}

                {discountPrice && (
                  <div className="flex gap-2">
                    <p> {formatCurrency(discountPrice)} </p>
                    <span className="text-primary-400/50 line-through">
                      {formatCurrency(price)}
                    </span>
                  </div>
                )}
              </div>
              <p className="text-xs font-semibold text-primary-700 laptopS:text-base">
                *Tax Included
              </p>
            </div>

            <div>
              {isInCart && (
                <div className="flex items-center justify-evenly gap-4">
                  <UpdateItemQuantity
                    productId={id}
                    currentQuantity={currentQuantity}
                  />
                  <DeleteItem productId={id} />
                  <Button
                    variation="primary"
                    to="/contact-details"
                    additionalStyles="text-black py-2 px-4 text-base self-center"
                  >
                    Proceed to buy
                  </Button>
                </div>
              )}

              {!isInCart && (
                <Button
                  onClick={() => handleAddToCart(product)}
                  variation="primary"
                  additionalStyles="text-black px-4 "
                >
                  Add to cart
                </Button>
              )}
            </div>

            {descriptions.length > 0 && (
              <div className="mt-4 flex flex-col gap-2 text-base text-primary-200">
                <Heading
                  as="h5"
                  styles=" text-xl font-bold uppercase text-primary-600 laptopS:text-2xl "
                >
                  Description
                </Heading>
                <ul>
                  {descriptions.map((description, i) => (
                    <li
                      key={i}
                      className="list-inside list-disc laptopS:text-lg"
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-4 tablet:col-start-1 tablet:row-start-1">
            <ProductDPImages
              name={name}
              images={[mainImage, ...additionalImages]}
              video={video}
            />
          </div>
        </section>

        <section className="flex flex-col gap-4 border-t-2 border-dashed border-primary-400/10 py-6 laptopS:gap-4">
          <Heading as="h4">Product Details</Heading>
          <div className="grid grid-cols-2 items-center gap-4 self-center border-4 border-double border-primary-400/40 p-4 text-lg text-primary-200 laptopS:text-2xl">
            <Heading as="h5" styles="text-primary-500">
              Brand
            </Heading>
            <p>{brand.name}</p>
            <Heading as="h5" styles="text-primary-500">
              Bike Model
            </Heading>
            <p>{model.name}</p>
            {model.version && (
              <>
                <Heading as="h5" styles="text-primary-500">
                  Version
                </Heading>
                <p>{model.version}</p>
              </>
            )}
            {model.year && (
              <>
                <Heading as="h5" styles="text-primary-500">
                  Bike Year
                </Heading>
                <p>{model.year}</p>
              </>
            )}
            {size && (
              <>
                <Heading as="h5" styles="text-primary-500">
                  Size
                </Heading>
                <p>{size}</p>
              </>
            )}
            <Heading as="h5" styles="text-primary-500">
              Included Parts
            </Heading>
            <ul className="list-inside list-disc">
              {includedParts.map((part, i) => (
                <li key={i}>
                  {part.part.name} - {part.quantity} Nos
                </li>
              ))}
            </ul>
          </div>
        </section>

        {additionalInformations.length > 0 && (
          <section className="flex flex-col gap-2 border-t-2 border-dashed border-primary-400/10 pt-6 laptopS:gap-4">
            <Heading as="h4">Additional Info</Heading>
            <ul className="list-inside list-disc text-lg leading-7 text-primary-200 laptopS:text-xl laptopS:leading-10">
              {additionalInformations.map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
}

export default ProductDP;
