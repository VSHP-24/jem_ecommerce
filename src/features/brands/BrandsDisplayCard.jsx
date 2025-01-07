import { useNavigate } from "react-router-dom";

function BrandsDisplayCard({ brand }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/brands/${brand.slug}/models`)}
      className="grid cursor-pointer grid-rows-[1fr_3rem] items-center justify-items-center border-4 border-primary-400"
    >
      <div className="bg-primary-200">
        <img
          className="h-20 w-20 laptopS:h-40 laptopS:w-40"
          src={brand.brandLogo}
          alt={`${brand.name} Logo`}
        />
      </div>
      <p className="text-base text-primary-200 laptopS:text-2xl">
        {brand.name}
      </p>
    </div>
  );
}
export default BrandsDisplayCard;
