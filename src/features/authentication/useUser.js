import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { getCurrentUser } from "../../services/apiAuth";
import { loggedIn } from "../user/userSlice";

export function useUser() {
  const dispatch = useDispatch();

  const { isPending, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
  });

  if (user && user?.role !== "customer")
    toast.error("Provided email or password is incorrect");

  if (user && user?.role === "customer")
    dispatch(loggedIn({ id: user.id, name: user.name, email: user.email }));

  return { isPending, user, isAuthenticated: user?.role === "customer" };
}
