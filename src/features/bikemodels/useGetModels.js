import { useQuery } from "@tanstack/react-query";

import { getModels } from "../../services/apiModels";

export function useGetModels() {
  let { isPending, data: models } = useQuery({
    queryKey: ["models"],
    queryFn: getModels,
  });

  console.log(models);

  if (!isPending)
    models = models.filter(
      (model) =>
        !model.isDeleted &&
        !model.brand.isDeleted &&
        model.products.filter((product) => !product.isDeleted).length > 0,
    );

  return { isPending, models };
}
