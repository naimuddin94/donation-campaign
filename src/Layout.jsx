import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-7xl mx-auto">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Navbar />
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center h-[60vh]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Layout;
