import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {

  const location = useLocation();
  const noFooterRoutes = ["/login", "/register", "/forgotpassword"];
  return (
    <>
      <NavBar />

      <Outlet></Outlet>

      {!noFooterRoutes.includes(location.pathname) && <Footer />}

    </>
  );
}
