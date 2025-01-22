import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createCustomer as createCustomerApi } from "../../services/apiCustomer";

export function useCreateCustomer() {
  const queryClient = useQueryClient();

  const { mutate: createCustomer, isPending: isCreating } = useMutation({
    mutationFn: createCustomerApi,

    onSuccess: () => {
      toast.success(` Address saved successfully `);
      queryClient.invalidateQueries({ queryKey: ["customer"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCustomer };
}
