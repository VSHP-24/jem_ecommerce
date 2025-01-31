import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { getUserDetails } from "../features/user/userSlice";

function AuthLayout() {
  const navigate = useNavigate();
  const userDetails = useSelector(getUserDetails);

  useEffect(
    function () {
      if (userDetails.id) {
        navigate("/products", { replace: true });
      }
    },
    [navigate, userDetails.id],
  );

  return (
    <div className="relative flex h-full items-center justify-center">
      <img
        className="absolute -z-10 h-full opacity-40"
        src="/jembrandimage.webp"
        alt="JEM Brand Representation"
      />
      <div className="w-60 laptopS:w-[30rem]">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
