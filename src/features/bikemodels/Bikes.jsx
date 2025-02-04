import { useParams } from "react-router-dom";
import Heading from "../../ui/Heading";
import BikesDisplayCard from "./BikesDisplayCard";
import { useGetModels } from "./useGetModels";
import PageNotFound from "../../pages/PageNotFound";
import Loader from "../../ui/Loader";

function Bikes() {
  const { isPending, models } = useGetModels();
  const { brand } = useParams();

  if (isPending) return <Loader />;

  /////////////////////////////////////////////////////////////////
  // IF URL CONTAINS INVALID BRAND , THIS DISPLAYS PAGE NOT FOUND
  /////////////////////////////////////////////////////////////////

  if (
    !isPending &&
    brand &&
    !models.find((model) => model.brand.slug === brand)
  )
    return <PageNotFound />;

  //////////////////////////////////////////////
  // IF EVERYTHING IS RIGHT , THE PAGE LOADS
  //////////////////////////////////////////////
  if (!isPending)
    return (
      <div className="flex flex-col gap-8">
        <Heading as="h4">{brand} Bike Models </Heading>

        <div className="flex flex-wrap justify-center gap-8">
          {/* IF URL CONTAINS BRANDS */}

          {brand &&
            models.map(
              (model) =>
                model.products.length > 0 &&
                model.brand.slug === brand && (
                  <BikesDisplayCard key={model.slug} model={model} />
                ),
            )}

          {/* IF URL DOESN'T CONTAIN BRANDS */}

          {!brand &&
            models.map(
              (model) =>
                model.products.length > 0 && (
                  <BikesDisplayCard key={model.slug} model={model} />
                ),
            )}
        </div>
      </div>
    );
}

export default Bikes;
