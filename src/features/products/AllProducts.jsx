import { useState } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

import Heading from "../../ui/Heading";
import Pagination from "../../ui/Pagination";
import Loader from "../../ui/Loader";

import Filter from "../filter/Filter";
import SortBy from "../sort/SortBy";
import FilterIcon from "../filter/FilterIcon";
import SortIcon from "../sort/SortIcon";
import ProductsDisplayCard from "./ProductsDisplayCard";

import { useGetProducts } from "./useGetProducts";
import { useGetBrands } from "../brands/useGetBrands";
import { useGetModels } from "../bikemodels/useGetModels";
import { useGetCategories } from "../categories/useGetCategories";
import { useGetSubCategories } from "../subCategories/useGetSubCategories";
import { PAGE_SIZE } from "../../utils/constants";
import PageNotFound from "../../pages/PageNotFound";

function AllProducts() {
  const [filterIsExpanded, setFilterIsExpanded] = useState(false);
  const [sortIsExpanded, setSortIsExpanded] = useState(false);

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
  const showSort = () => setSortIsExpanded((cur) => !cur);

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

  // THESE ARE THE VALUES TO BE PASSED INSIDE THE SORT BY OPTIONS
  const sortByOptions = [
    { value: "brand-asc", label: "Sort by Brand ( A - Z )" },
    { value: "brand-desc", label: "Sort by Brand ( Z - A )" },
    { value: "model-asc", label: "Sort by Model ( A - Z )" },
    { value: "model-desc", label: "Sort by Model ( Z - A )" },
    { value: "category-asc", label: "Sort by Category ( A - Z )" },
    { value: "category-desc", label: "Sort by Category ( Z - A )" },
    { value: "subCategory-asc", label: "Sort by SubCategory ( A - Z )" },
    { value: "subCategory-desc", label: "Sort by SubCategory ( Z - A )" },
    { value: "price-asc", label: "Sort by Price ( Low --> High )" },
    { value: "price-desc", label: "Sort by Price ( High --> Low )" },
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

  // THESE GETS THE VALUES FROM SEARCHPARAMS , IF ANY SORTBY OPTIONS ARE SELECTED
  const sortBy = searchParams.get("sortBy") || "brand-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  let sortedProducts;
  let availableProducts = [];
  let availableProductsFiltered = [];
  let pageCount;

  if (isPending) return <Loader />;

  if (!isPending) {
    // SORT
    sortedProducts = products.sort((a, b) => {
      if (direction === "asc" && field !== "price") {
        if (a[field].name.toUpperCase() > b[field].name.toUpperCase()) return 1;
        if (b[field].name.toUpperCase() > a[field].name.toUpperCase())
          return -1;
      }
      if (direction === "desc" && field !== "price") {
        if (a[field].name.toUpperCase() > b[field].name.toUpperCase())
          return -1;
        if (b[field].name.toUpperCase() > a[field].name.toUpperCase()) return 1;
      }
      if (field === "price") {
        return (a[field] - b[field]) * modifier;
      }
      return null;
    });

    // AVAILABLE PRODUCTS (NOT DELETED)
    availableProducts = sortedProducts.filter(
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

    pageCount = Math.ceil(availableProductsFiltered.length / PAGE_SIZE) || 1;
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
    return <PageNotFound />;

  //////////////////////////////////////////////
  // IF EVERYTHING IS RIGHT , THE PAGE LOADS
  //////////////////////////////////////////////

  if (!isPending && products.length > 0)
    return (
      <div className="flex flex-col gap-8">
        <Heading as="h2">Products</Heading>
        <div className="flex flex-wrap justify-center gap-8">
          {/* IF URL DOESN'T CONTAIN BRAND AND BIKE MODEL OR CATEGORY AND SUBCATEGORY */}
          {/* THIS  DISPLAYS ONLY IN ALL PRODUCTS PAGE ("/products") */}

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

        {/* THIS ONLY DISPLAYS ALL THESE OPTIONS ONLY IN ALL PRODUCTS PAGE ("/products") */}

        {!brand && !model && !category && !subcategory && (
          <>
            <SortIcon
              styles=" absolute bottom-40 right-5 flex flex-col gap-4 "
              onHandleShowSort={showSort}
            />
            {sortIsExpanded && (
              <SortBy
                sortByOptions={sortByOptions}
                onHandleShowSort={showSort}
              />
            )}

            <FilterIcon
              styles=" absolute bottom-20 right-5 flex flex-col gap-4 "
              onHandleShowFilter={showFilter}
            />
            {filterIsExpanded && (
              <Filter
                filtersList={filtersList}
                onHandleShowFilter={showFilter}
              />
            )}
            <Pagination count={availableProductsFiltered.length} />
          </>
        )}
      </div>
    );
}

export default AllProducts;
