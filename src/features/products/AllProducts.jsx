import { useState } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

import Heading from "../../ui/Heading";
import Pagination from "../../ui/Pagination";

import Filter from "../filter/Filter";
import FilterIcon from "../filter/FilterIcon";
import ProductsDisplayCard from "./ProductsDisplayCard";

import { useGetProducts } from "./useGetProducts";
import { useGetBrands } from "../brands/useGetBrands";
import { useGetModels } from "../bikemodels/useGetModels";
import { useGetCategories } from "../categories/useGetCategories";
import { useGetSubCategories } from "../subCategories/useGetSubCategories";
import { PAGE_SIZE } from "../../utils/constants";

function AllProducts() {
  const [filterIsExpanded, setFilterIsExpanded] = useState(false);

  const { isPending: isProductsPending, products } = useGetProducts();
  const { isPending: isBrandsPending, brands } = useGetBrands();
  const { isPending: isModelsPending, models } = useGetModels();
  const { isPending: isCategoriesPending, categories } = useGetCategories();
  const { isPending: isSubCategoriesPending, subCategories } =
    useGetSubCategories();

  const { brand, model, category, subcategory } = useParams();
  const [searchParams] = useSearchParams();

  // THIS FUNCTION HELPS IN EXPANDING AND CLOSING THE FILTER
  const showFilter = () => setFilterIsExpanded((cur) => !cur);

  // IF SEARCHPARAMS DOESN'T HAVE PAGE , DEFAULT IS SET TO 1
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const isPending =
    isProductsPending ||
    isBrandsPending ||
    isModelsPending ||
    isCategoriesPending ||
    isSubCategoriesPending;

  // THESE ARE THE VALUES TO BE PASSED INSIDE THE FILTERS
  const filtersList = [
    {
      filterfield: "brand",
      filterOptions: brands,
    },
    {
      filterfield: "model",
      filterOptions: models,
      parentElement: "brand",
    },
    {
      filterfield: "category",
      filterOptions: categories,
    },
    {
      filterfield: "subCategory",
      filterOptions: subCategories,
      parentElement: "category",
    },
  ];

  // THESE GETS THE VALUES FROM SEARCHPARAMS , IF ANY FILTERS ARE SELECTED
  let filteredBrands =
    searchParams.get("brand")?.split(",") || searchParams.get("brand") || "";
  let filteredModels =
    searchParams.get("model")?.split(",") || searchParams.get("model") || "";
  let filteredCategories =
    searchParams.get("category")?.split(",") ||
    searchParams.get("category") ||
    "";
  let filteredSubCategories =
    searchParams.get("subCategory")?.split(",") ||
    searchParams.get("subCategory") ||
    "";

  let availableProducts = [];
  let availableProductsFiltered = [];
  let pageCount;

  if (!isPending) {
    // AVAILABLE PRODUCTS (NOT DELETED)
    availableProducts = products.filter(
      (product) =>
        !product.isDeleted &&
        !product.brand.isDeleted &&
        !product.model.isDeleted &&
        !product.category.isDeleted &&
        !product.subCategory.isDeleted,
    );

    //AVAILABLE PRODUCTS FILTERED WITH RESPECT TO SEARCHPARAMS
    availableProductsFiltered = availableProducts.filter(
      (product) =>
        (filteredBrands === "" ||
          filteredBrands.includes(product.brand.slug)) &&
        (filteredModels === "" ||
          filteredModels.includes(product.model.slug)) &&
        (filteredCategories === "" ||
          filteredCategories.includes(product.category.slug)) &&
        (filteredSubCategories === "" ||
          filteredSubCategories.includes(product.subCategory.slug)),
    );

    pageCount = Math.ceil(availableProductsFiltered.length / PAGE_SIZE);
  }

  // IF SEARCHPARAMS PAGE IS GREATER THAN EXISTING PAGE COUNTS, PAGE WILL BE REDIRECTED TO FIRST PAGE OF THE TABLE
  if (!isPending)
    if (currentPage > pageCount || currentPage < 1)
      return <Navigate replace to="/products" />;

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
        <Heading as="h2">Products</Heading>
        <div className="flex flex-wrap justify-center gap-8">
          {/* IF URL DOESN'T CONTAIN BRAND AND BIKE MODEL OR CATEGORY AND SUBCATEGORY */}

          {!brand &&
            !model &&
            !category &&
            !subcategory &&
            availableProductsFiltered
              .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
              .map((product) => (
                <ProductsDisplayCard key={product.slug} product={product} />
              ))}

          {/* IF URL CONTAINS BRAND AND BIKE MODEL OR CATEGORY AND SUBCATEGORY */}

          {((brand && model) || (category && subcategory)) &&
            availableProducts.map(
              (product) =>
                ((product.brand.slug === brand &&
                  product.model.slug === model) ||
                  (product.category.slug === category &&
                    product.subCategory.slug === subcategory)) && (
                  <ProductsDisplayCard key={product.slug} product={product} />
                ),
            )}
        </div>

        {!brand && !model && !category && !subcategory && (
          <Pagination count={availableProductsFiltered.length} />
        )}

        <FilterIcon
          styles=" absolute bottom-20 right-5 flex flex-col gap-4 "
          onHandleShowFilter={showFilter}
        />
        {filterIsExpanded && (
          <Filter filtersList={filtersList} onHandleShowFilter={showFilter} />
        )}
      </div>
    );
}

export default AllProducts;
