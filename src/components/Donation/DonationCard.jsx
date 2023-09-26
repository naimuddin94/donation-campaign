import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { id, image, title, category, card_bg, category_bg, text_color } =
    donation;
  return (
    <Link to={`/donations/${id}`}>
      <div className="flex flex-col rounded-lg overflow-hidden">
        <div className="h-48">
          <img
            src={image}
            alt={category + " image"}
            className="w-full h-full"
          />
        </div>
        <div
          className="h-28 p-5 space-y-1"
          style={{ backgroundColor: card_bg }}
        >
          <h3
            className="text-xs w-fit px-3 py-1 rounded-md font-medium"
            style={{ backgroundColor: category_bg, color: text_color }}
          >
            {category}
          </h3>
          <h2 className="text-lg font-semibold" style={{ color: text_color }}>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
