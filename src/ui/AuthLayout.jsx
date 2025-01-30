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
