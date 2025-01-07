import { useParams } from "react-router-dom";
import Heading from "../../ui/Heading";
import BikesDisplayCard from "./BikesDisplayCard";
import { useGetModels } from "./useGetModels";

function AllBrands() {
  const { isPending, models } = useGetModels();
  const { brand } = useParams();

  if (!isPending)
    return (
      <div className="flex flex-col gap-8">
        <Heading as="h4">Bike Models</Heading>

        <div className="flex flex-wrap justify-center gap-8">
          {/* IF BRAND IS SELECTED  / AVAILABLE */}

          {brand &&
            models.map(
              (model) =>
                model.brand.slug === brand && (
                  <BikesDisplayCard key={model.slug} model={model} />
                ),
            )}

          {/* IF BRAND IS NOT SELECTED / NOT-AVAILABLE */}

          {!brand &&
            models.map((model) => (
              <BikesDisplayCard key={model.slug} model={model} />
            ))}
        </div>
      </div>
    );
}

export default AllBrands;
