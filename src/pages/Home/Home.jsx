import { useLoaderData } from "react-router-dom";
import DonationList from "../../components/Donation/DonationList";
import Header from "../../components/Header/Header";

const Home = () => {
  const donationsJSON = useLoaderData();
  const donations = JSON.parse(donationsJSON);
  return (
    <>
      <Header />
      <DonationList donations={donations} />
    </>
  );
};

export default Home;
