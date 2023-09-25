import { useLoaderData } from "react-router-dom";
import DonationList from "../../components/Donation/DonationList";
import Header from "../../components/Header/Header";

const Home = () => {
  const donations = useLoaderData();
  return (
    <>
      <Header />
      <DonationList donations={donations} />
    </>
  );
};

export default Home;
