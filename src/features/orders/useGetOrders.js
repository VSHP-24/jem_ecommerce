import { useQuery } from "@tanstack/react-query";

import { getMyOrders } from "../../services/apiOrders";

export function useGetOrders() {
  const { isPending, data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: getMyOrders,
  });

  return { isPending, orders };
}
