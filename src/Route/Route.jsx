import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("./donation.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default myCreateRouter;
