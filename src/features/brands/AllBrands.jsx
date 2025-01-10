import Heading from "../../ui/Heading";
import BrandsDisplayCard from "./BrandsDisplayCard";
import { useGetBrands } from "./useGetBrands";

function AllBrands() {
  const { isPending, brands } = useGetBrands();

  if (!isPending)
    return (
      <div className="flex flex-col gap-8">
        <Heading as="h4">Brands</Heading>

        <div className="flex flex-wrap justify-center gap-8">
          {brands.map(
            (brand) =>
              brand.products.length > 0 && (
                <BrandsDisplayCard key={brand.slug} brand={brand} />
              ),
          )}
        </div>
      </div>
    );
}

export default AllBrands;
