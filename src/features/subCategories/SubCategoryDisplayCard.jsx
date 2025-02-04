import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";

function SubCategoryDisplayCard({ subCategory }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(
          `/categories/${subCategory.category.slug}/subcategories/${subCategory.slug}`,
        )
      }
      className="grid cursor-pointer grid-cols-[10rem] grid-rows-[1fr_3rem] items-center justify-center justify-items-center border-2 border-primary-400 p-2 hover:shadow-lg hover:shadow-primary-500"
    >
      <div className="bg-primary-200">
        <img
          className="h-40 w-40"
          src={`/${subCategory.slug}.webp`}
          alt={`${subCategory.name} JEM`}
        />
      </div>
      <Heading as="h3" styles="text-base text-primary-200">
        {subCategory.name}
      </Heading>
    </div>
  );
}

export default SubCategoryDisplayCard;
