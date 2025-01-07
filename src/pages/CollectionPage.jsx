import Bikes from "../features/bikemodels/Bikes";
import AllBrands from "../features/brands/AllBrands";
import AllCategories from "../features/categories/AllCategories";
import Heading from "../ui/Heading";

function CollectionPage() {
  return (
    <div className="flex flex-col gap-4 laptopS:gap-8">
      <Heading as="h2">Collections</Heading>
      <AllBrands />
      <AllCategories />
      <Bikes />
    </div>
  );
}

export default CollectionPage;
