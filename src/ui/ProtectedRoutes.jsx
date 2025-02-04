import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserDetails } from "../features/user/userSlice";
import Loader from "./Loader";

function ProtectedRoutes() {
  const navigate = useNavigate();
  const userDetails = useSelector(getUserDetails);
  const { isPending, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !userDetails.id && !isPending) {
        navigate("/login", { replace: true });
      }
    },
    [isAuthenticated, isPending, navigate, userDetails.id],
  );
  if (isPending) return <Loader />;
  if (!isPending && isAuthenticated) return <Outlet />;
}

export default ProtectedRoutes;
