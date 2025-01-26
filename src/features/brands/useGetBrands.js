import { useQuery } from "@tanstack/react-query";

import { getBrands } from "../../services/apiBrands";

export function useGetBrands() {
  let { isPending, data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });
  if (!isPending)
    brands = brands.filter(
      (brand) =>
        !brand.isDeleted &&
        brand.products.filter((product) => !product.isDeleted).length > 0,
    );

  return { isPending, brands };
}
