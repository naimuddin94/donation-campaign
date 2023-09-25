import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Header/Navbar";

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
