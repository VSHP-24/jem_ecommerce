import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import BreadCrumbTrail from "./BreadCrumbTrail";

function AppLayout() {
  return (
    <div className="grid h-dvh w-dvw grid-rows-[5rem_2rem_1fr_1fr] overflow-y-scroll tablet:grid-rows-[5rem_5rem_2rem_1fr_1fr]">
      <Header />
      <NavBar />
      <BreadCrumbTrail />
      <main>
        <div className="mx-auto my-0">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
