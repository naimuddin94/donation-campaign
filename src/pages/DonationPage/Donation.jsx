import { useEffect, useState } from "react";
import { getDonationToLS } from "../../utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import DonatedCard from "../../components/Donation/DonatedCard";

const Donation = () => {
  const [storedDonation, setStoredDonation] = useState();
  const [dataLength, setDataLength] = useState(4);
  const savedDonatioLS = getDonationToLS();
  const allDonationsJSON = useLoaderData();
  const allDonations = JSON.parse(allDonationsJSON);

  useEffect(() => {
    const filteredDonations = allDonations.filter((donation) =>
      savedDonatioLS.includes(donation.id)
    );
    setStoredDonation(filteredDonations);
  }, []);

  console.log(storedDonation);

  return (
    <div>
      {/* <div className="">
        <h1 className="text-lg font-medium text-center text-slate-700">No found data</h1>
      </div> */}
      <div className="grid gap-5 grid-cols-2 w-4/5 mx-auto py-8">
        {storedDonation &&
          storedDonation
            .slice(0, dataLength)
            .map((donation) => (
              <DonatedCard key={donation.id} donation={donation} />
            ))}
      </div>
      <div className={dataLength === storedDonation?.length && "hidden"}>
        {storedDonation?.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setDataLength(storedDonation?.length)}
              className="bg-green-600 px-6 py-2 text-white font-medium rounded-md btn"
            >
              See All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
