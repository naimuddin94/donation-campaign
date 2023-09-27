import { useLoaderData, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import DonationList from "../../components/Donation/DonationList";

const SearchResult = () => {
  const location = useLocation();
  const searchValue = location.state;
  const donationsJSON = useLoaderData();
  const donations = JSON.parse(donationsJSON);
  const filteredData = donations.filter((donation) =>
    donation.category.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(filteredData);
  return (
    <>
      <Header />
      <DonationList donations={filteredData} />
      {filteredData.length === 0 && (
        <div className="flex items-center justify-center h-32">
          <h1 className="text-lg font-medium text-gray-600">No data found.</h1>
        </div>
      )}
    </>
  );
};

export default SearchResult;
