import { useNavigate } from "react-router-dom";

function CategoriesDisplayCard({ category }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/categories/${category.slug}/subcategories`)}
      className="border-primary-400grid grid cursor-pointer grid-rows-[1fr_3rem] items-center justify-items-center border-2 border-primary-400 hover:z-10 hover:scale-110 hover:shadow-lg hover:shadow-primary-500"
    >
      <div className="bg-primary-200">
        <img
          className="h-20 w-20 laptopS:h-40 laptopS:w-40"
          src={`${category.name}.png`}
          alt={`${category.name} Logo`}
        />
      </div>
      <p className="text-base text-primary-200 laptopS:text-2xl">
        {category.name}
      </p>
    </div>
  );
}

export default CategoriesDisplayCard;
