import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createNewUser as createNewUserApi } from "../../services/apiAuth";
import { useDispatch } from "react-redux";
import { loggedIn } from "../user/userSlice";

export function useCreateNewUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate: createNewUser, isPending } = useMutation({
    mutationFn: createNewUserApi,

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate("/products", { replace: true });
      dispatch(loggedIn({ id: user.id, name: user.name, email: user.email }));
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createNewUser, isPending };
}
