import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonatedCard = ({ donation }) => {
  const {
    id,
    image,
    price,
    title,
    category,
    card_bg,
    category_bg,
    text_color,
  } = donation;

  return (
    <div className="relative flex w-full max-w-[48rem] flex-row rounded-lg bg-white bg-clip-border text-gray-600">
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-lg rounded-r-none bg-white bg-clip-border text-gray-700">
        <img src={image} className="h-full w-full object-cover" />
      </div>
      <div
        className="p-6 w-full rounded-r-lg flex gap-1 flex-col justify-between"
        style={{ backgroundColor: card_bg }}
      >
        <h6
          className="w-fit px-4 py-1 text-sm rounded-md"
          style={{ backgroundColor: category_bg, color: text_color }}
        >
          {category}
        </h6>
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h4>
        <p className="font-medium" style={{ color: text_color }}>
          ${price}
        </p>
        <Link className="inline-block" to={`/donations/${id}`}>
          <button
            className="btn btn-active text-white text-xs"
            style={{ backgroundColor: text_color }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

DonatedCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonatedCard;
