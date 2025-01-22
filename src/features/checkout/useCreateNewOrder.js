import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createNewOrder as createNewOrderApi } from "../../services/apiOrders";
import { useDispatch } from "react-redux";
import { clearCart } from "../cart/cartSlice";

export function useCreateNewOrder() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: createNewOrder, isPending } = useMutation({
    mutationFn: createNewOrderApi,

    onSuccess: () => {
      queryClient.setQueryData(["orders"]);
      dispatch(clearCart());
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createNewOrder, isPending };
}
