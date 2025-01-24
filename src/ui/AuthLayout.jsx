import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="relative flex items-center justify-center">
      <img
        className="w-dvh -z-10 h-dvh opacity-40"
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
