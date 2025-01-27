import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import BreadCrumbTrail from "./BreadCrumbTrail";

import { useUser } from "../features/authentication/useUser";
import { loggedIn } from "../features/user/userSlice";
import CartIcon from "../features/cart/CartIcon";
import PageLoader from "./PageLoader";

function AppLayout() {
  const { isPending, user, isAuthenticated } = useUser();
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (!isPending && isAuthenticated)
        dispatch(loggedIn({ id: user.id, name: user.name, email: user.email }));
    },
    [isAuthenticated, isPending, dispatch, user],
  );
  if (isPending) return <PageLoader />;

  return (
    <div className="grid h-dvh w-dvw max-w-[40rem] grid-rows-[5rem_2rem_1fr_1fr] justify-self-center overflow-y-scroll tablet:max-w-[50rem] laptopL:max-w-[90rem] laptopL:grid-rows-[5rem_5rem_2rem_1fr_1fr] desktop:max-w-[100rem]">
      <Header />
      <NavBar />
      <BreadCrumbTrail />
      <main className="m-5 mb-10">
        <div className="mx-auto my-0">
          <Outlet />
        </div>
        <CartIcon />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
