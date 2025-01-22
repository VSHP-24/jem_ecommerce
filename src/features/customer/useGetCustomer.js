import { useQuery } from "@tanstack/react-query";
import { getCustomer } from "../../services/apiCustomer";

export function useGetCustomer(id) {
  const { isPending, data: customer } = useQuery({
    queryKey: ["customer", id],
    queryFn: () => getCustomer(id),
    retry: false,
  });

  if (!customer || customer.length === 0) return { isPending, customer: {} };

  return { isPending, customer };
}
