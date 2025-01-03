import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-dvh w-dvw grid-rows-[5rem_1fr_1fr] overflow-y-scroll">
      <Header />
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
