import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

function ProtectedRoutes() {
  const navigate = useNavigate();
  const { isPending, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate],
  );

  if (!isPending && isAuthenticated) return <Outlet />;
}

export default ProtectedRoutes;
