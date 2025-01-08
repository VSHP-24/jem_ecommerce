import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";

function BikesDisplayCard({ model }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/brands/${model.brand.slug}/models/${model.slug}`)
      }
      className="grid cursor-pointer grid-cols-[10rem] grid-rows-[1fr_3rem] items-center justify-center justify-items-center border-2 border-primary-400 p-2 hover:z-10 hover:scale-110 hover:shadow-lg hover:shadow-primary-500"
    >
      <div className="bg-primary-200">
        <img
          className="h-40 w-40"
          src={model.bikeImage}
          alt={`${model.name} JEM`}
        />
      </div>
      <Heading as="h3" styles="text-lg text-primary-200">
        {model.name}
      </Heading>
    </div>
  );
}

export default BikesDisplayCard;
