import Heading from "../../ui/Heading";
import CategoriesDisplayCard from "./CategoriesDisplayCard";
import { useGetCategories } from "./useGetCategories";

function AllCategories() {
  const { isPending, categories } = useGetCategories();

  if (!isPending)
    return (
      <div className="flex flex-col gap-8">
        <Heading as="h4">Categories</Heading>

        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category) => (
            <CategoriesDisplayCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    );
}

export default AllCategories;
