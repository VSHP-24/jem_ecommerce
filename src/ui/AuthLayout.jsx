import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { getUserDetails } from "../features/user/userSlice";
import { useUser } from "../features/authentication/useUser";

function AuthLayout() {
  const navigate = useNavigate();
  const userDetails = useSelector(getUserDetails);
  const { isPending, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (isAuthenticated && userDetails.id && !isPending) {
        navigate("/products", { replace: true });
      }
    },
    [isAuthenticated, isPending, navigate, userDetails.id],
  );

  return (
    <div className="relative flex items-center justify-center">
      <img
        className="-z-10 h-dvh opacity-40"
        src="/jembrandimage.png"
        alt="JEM Brand Representation"
      />
      <div className="absolute w-60 laptopS:w-[30rem]">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
