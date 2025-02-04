import { useQuery } from "@tanstack/react-query";

import { getCategories } from "../../services/apiCategories";

export function useGetCategories() {
  let { isPending, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (!isPending)
    categories = categories.filter(
      (category) =>
        !category.isDeleted &&
        category.products.filter((product) => !product.isDeleted).length > 0,
    );

  return { isPending, categories };
}
