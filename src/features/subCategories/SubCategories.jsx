import { useParams } from "react-router-dom";
import { useGetSubCategories } from "./useGetSubCategories";
import Heading from "../../ui/Heading";
import SubCategoryDisplayCard from "./SubCategoryDisplayCard";
import PageNotFound from "../../pages/PageNotFound";

function SubCategories() {
  const { isPending, subCategories } = useGetSubCategories();
  const { category } = useParams();

  ////////////////////////////////////////////////////////////////////
  // IF URL CONTAINS INVALID CATEGORY , THIS DISPLAYS PAGE NOT FOUND
  ////////////////////////////////////////////////////////////////////

  if (
    !isPending &&
    category &&
    !subCategories.find((subCategory) => subCategory.category.slug === category)
  )
    return <PageNotFound />;

  //////////////////////////////////////////////
  // IF EVERYTHING IS RIGHT , THE PAGE LOADS
  //////////////////////////////////////////////

  if (!isPending)
    return (
      <div className="flex flex-col gap-8">
        <Heading as="h4">SubCategories</Heading>

        <div className="flex flex-wrap justify-center gap-8">
          {/* IF URL CONTAINS CATEGORY */}

          {category &&
            subCategories.map(
              (subCategory) =>
                subCategory.products.length > 0 &&
                subCategory.category.slug === category && (
                  <SubCategoryDisplayCard
                    key={subCategory.slug}
                    subCategory={subCategory}
                  />
                ),
            )}

          {/* IF URL DOESN'T CONTAIN CATEGORY */}

          {!category &&
            subCategories.map(
              (subCategory) =>
                subCategory.products.length > 0 && (
                  <SubCategoryDisplayCard
                    key={subCategory.slug}
                    subCategory={subCategory}
                  />
                ),
            )}
        </div>
      </div>
    );
}

export default SubCategories;
