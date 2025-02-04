import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCustomerContactDetails as updateCustomerContactDetailsApi } from "../../services/apiCustomer";

export function useUpdateCustomerContactDetails() {
  const queryClient = useQueryClient();

  const { mutate: updateCustomerContactDetails, isPending: isEditing } =
    useMutation({
      mutationFn: updateCustomerContactDetailsApi,

      onSuccess: () => {
        toast.success(`Customer Contact Details Updated Successfully! 😉`);
        queryClient.invalidateQueries({ queryKey: ["user"] });
      },

      onError: (err) => {
        toast.error("Customer Contact Details Update failed!", err.message);
      },
    });

  return { updateCustomerContactDetails, isEditing };
}
