import PropTypes from "prop-types";
import DonationCard from "./DonationCard";

const DonationList = ({ donations }) => {
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 md:p-8 lg:p-12">
      {donations &&
        donations.map((donation) => (
          <DonationCard key={donation.id} donation={donation} />
        ))}
    </div>
  );
};

DonationList.propTypes = {
  donations: PropTypes.array.isRequired,
};

export default DonationList;
