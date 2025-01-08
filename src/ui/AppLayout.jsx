import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import BreadCrumbTrail from "./BreadCrumbTrail";

function AppLayout() {
  return (
    <div className="grid h-dvh w-dvw max-w-[40rem] grid-rows-[5rem_2rem_1fr_1fr] justify-self-center overflow-y-scroll tablet:max-w-[50rem] laptopL:max-w-[90rem] laptopL:grid-rows-[5rem_5rem_2rem_1fr_1fr] desktop:max-w-[100rem]">
      <Header />
      <NavBar />
      <BreadCrumbTrail />
      <main className="m-5 mb-10">
        <div className="mx-auto my-0">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
