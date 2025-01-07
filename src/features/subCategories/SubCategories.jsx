import { useParams } from "react-router-dom";
import { useGetSubCategories } from "./useGetSubCategories";
import Heading from "../../ui/Heading";
import SubCategoryDisplayCard from "./SubCategoryDisplayCard";

function SubCategories() {
  const { isPending, subCategories } = useGetSubCategories();
  const { category } = useParams();

  if (!isPending)
    return (
      <div className="flex flex-col gap-8">
        <Heading as="h4">SubCategories</Heading>

        <div className="flex flex-wrap justify-center gap-8">
          {/* IF CATEGORY IS SELECTED  / AVAILABLE */}

          {category &&
            subCategories.map(
              (subCategory) =>
                subCategory.category.slug === category && (
                  <SubCategoryDisplayCard
                    key={subCategory.slug}
                    subCategory={subCategory}
                  />
                ),
            )}

          {/* IF CATEGORY IS NOT SELECTED / NOT-AVAILABLE */}

          {!category &&
            subCategories.map((subCategory) => (
              <SubCategoryDisplayCard
                key={subCategory.slug}
                subCategory={subCategory}
              />
            ))}
        </div>
      </div>
    );
}

export default SubCategories;
