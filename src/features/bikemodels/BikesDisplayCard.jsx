import { useNavigate } from "react-router-dom";

function BikesDisplayCard({ model }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${model.slug}`)}
      className="grid cursor-pointer grid-rows-[1fr_3rem] items-center justify-items-center border-2 border-primary-400 hover:z-10 hover:scale-110 hover:shadow-lg hover:shadow-primary-500"
    >
      <div className="bg-primary-200">
        <img
          className="h-20 w-20 laptopS:h-40 laptopS:w-40"
          src={model.bikeImage}
          alt={`${model.name} Logo`}
        />
      </div>
      <p className="text-base text-primary-200 laptopS:text-2xl">
        {model.name}
      </p>
    </div>
  );
}

export default BikesDisplayCard;
