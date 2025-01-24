import { useQuery } from "@tanstack/react-query";
import { getCustomer } from "../../services/apiCustomer";

export function useGetCustomer() {
  const { isPending, data: customer } = useQuery({
    queryKey: ["customer"],
    queryFn: getCustomer,
    retry: false,
  });

  if (!customer || customer.length === 0) return { isPending, customer: {} };

  return { isPending, customer };
}
