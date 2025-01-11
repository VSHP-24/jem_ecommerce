import { Navigate, useParams } from "react-router-dom";
import Heading from "../../ui/Heading";
import ProductsDisplayCard from "./ProductsDisplayCard";
import { useGetProducts } from "./useGetProducts";

function AllProducts() {
  const { isPending, products } = useGetProducts();
  const { brand, model, category, subcategory } = useParams();

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  // IF URL CONTAINS INVALID BRAND OR MODEL OR CATEGORY OR SUBCATEGORY , THIS DISPLAYS PAGE NOT FOUND
  //////////////////////////////////////////////////////////////////////////////////////////////////////

  if (
    !isPending &&
    ((brand && model) || (category && subcategory)) &&
    !products.find(
      (product) =>
        (product.brand.slug === brand && product.model.slug === model) ||
        (product.category.slug === category &&
          product.subCategory.slug === subcategory),
    )
  )
    return <Navigate replace to="/page-not-found" />;

  //////////////////////////////////////////////
  // IF EVERYTHING IS RIGHT , THE PAGE LOADS
  //////////////////////////////////////////////

  if (!isPending && products.length > 0)
    return (
      <div className="flex flex-col gap-8">
        <Heading as="h4">Products</Heading>

        <div className="flex flex-wrap justify-center gap-8">
          {/* IF URL DOESN'T CONTAIN BRAND AND BIKE MODEL OR CATEGORY AND SUBCATEGORY */}

          {!brand &&
            !model &&
            !category &&
            !subcategory &&
            products.map((product) => (
              <ProductsDisplayCard key={product.slug} product={product} />
            ))}

          {/* IF URL CONTAINS BRAND AND BIKE MODEL OR CATEGORY AND SUBCATEGORY */}

          {((brand && model) || (category && subcategory)) &&
            products.map(
              (product) =>
                ((product.brand.slug === brand &&
                  product.model.slug === model) ||
                  (product.category.slug === category &&
                    product.subCategory.slug === subcategory)) && (
                  <ProductsDisplayCard key={product.slug} product={product} />
                ),
            )}
        </div>
      </div>
    );
}

export default AllProducts;
