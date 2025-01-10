import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";

function BrandsDisplayCard({ brand }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/brands/${brand.slug}/models`)}
      className="grid cursor-pointer grid-cols-[10rem] grid-rows-[1fr_2rem] items-center justify-center justify-items-center border-2 border-primary-400 p-2 hover:shadow-lg hover:shadow-primary-500"
    >
      <div className="bg-primary-200">
        <img
          className="h-40 w-40"
          src={brand.brandLogo}
          alt={`${brand.name} JEM`}
        />
      </div>
      <Heading as="h3" styles="text-lg text-primary-200 laptopS:text-lg">
        {brand.name}
      </Heading>
    </div>
  );
}
export default BrandsDisplayCard;
