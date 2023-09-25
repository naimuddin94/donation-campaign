import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home/Home";
import Donation from "../pages/DonationPage/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../pages/DonationDetails/DonationDetails";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/naimuddin94/donation-fake-data/main/donation.json"
          ),
      },
      {
        path: "/donation",
        element: <Donation />,
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/naimuddin94/donation-fake-data/main/donation.json"
          ),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/donations/:donationId",
        element: <DonationDetails />,
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/naimuddin94/donation-fake-data/main/donation.json"
          ),
      },
    ],
  },
]);

export default myCreateRouter;
