import { useQuery } from "@tanstack/react-query";

import { getSubCategories } from "../../services/apiSubCategories";

export function useGetSubCategories() {
  let { isPending, data: subCategories } = useQuery({
    queryKey: ["subCategories"],
    queryFn: getSubCategories,
  });

  if (!isPending)
    subCategories = subCategories.filter(
      (subCategory) =>
        !subCategory.isDeleted &&
        !subCategory.category.isDeleted &&
        subCategory.products.filter((product) => !product.isDeleted).length > 0,
    );

  return { isPending, subCategories };
}
