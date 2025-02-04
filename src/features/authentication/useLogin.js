import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login as loginApi } from "../../services/apiAuth";
import { loggedIn } from "../user/userSlice";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate(-1, { replace: true });
      dispatch(loggedIn({ id: user.id, name: user.name, email: user.email }));
    },

    onError: () => {
      toast.error("Provided email or password is incorrect");
    },
  });

  return { login, isPending };
}
