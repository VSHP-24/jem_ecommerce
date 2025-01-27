import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logout as logoutApi } from "../../services/apiAuth";
import { loggedOut } from "../user/userSlice";

export function useLogout() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      queryClient.removeQueries();
      dispatch(loggedOut());
    },

    onError: (err) => toast.error(err.message),
  });

  return { logout, isPending };
}
