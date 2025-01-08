import { useParams } from "react-router-dom";
import Heading from "../../ui/Heading";
import ProductsDisplayCard from "./ProductsDisplayCard";
import { useGetProducts } from "./useGetProducts";

function AllProducts() {
  const { isPending, products } = useGetProducts();
  const { brand, model, category, subcategory } = useParams();

  if (!isPending)
    return (
      <div className="flex flex-col gap-8">
        <Heading as="h4">Products</Heading>

        <div className="flex flex-wrap justify-center gap-8">
          {/* FOR ALL PRODUCTS PAGE */}
          {!brand &&
            !model &&
            !category &&
            !subcategory &&
            products.map((product) => (
              <ProductsDisplayCard key={product.slug} product={product} />
            ))}

          {/* FILTERS SELECTED BRAND AND BIKE MODEL PRODUCTS ONLY */}

          {brand &&
            model &&
            products.map(
              (product) =>
                product.brand.slug === brand &&
                product.model.slug === model && (
                  <ProductsDisplayCard key={product.slug} product={product} />
                ),
            )}

          {/* FILTERS SELECTED CATEGORY AND SUBCATEGORY PRODUCTS ONLY */}

          {category &&
            subcategory &&
            products.map(
              (product) =>
                product.category.slug === category &&
                product.subCategory.slug === subcategory && (
                  <ProductsDisplayCard key={product.slug} product={product} />
                ),
            )}
        </div>
      </div>
    );
}

export default AllProducts;
