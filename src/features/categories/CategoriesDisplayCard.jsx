import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";

function CategoriesDisplayCard({ category }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/categories/${category.slug}/subcategories`)}
      className="grid cursor-pointer grid-cols-[10rem] grid-rows-[1fr_5rem] items-center justify-center justify-items-center border-2 border-primary-400 p-2 hover:shadow-lg hover:shadow-primary-500"
    >
      <div className="bg-primary-200">
        <img
          className="h-40 w-40"
          src={`${category.name}.png`}
          alt={`${category.name} JEM`}
        />
      </div>
      <Heading as="h3" styles="text-xl text-primary-200 laptopS:text-2xl">
        {category.name}
      </Heading>
    </div>
  );
}

export default CategoriesDisplayCard;
