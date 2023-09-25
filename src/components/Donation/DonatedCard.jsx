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
    <div className="flex rounded-md overflow-hidden h-40">
      <div className="w-3/5">
        <img src={image} alt={category + " image"} className="h-full" />
      </div>
      <div className="p-5 w-full space-y-1" style={{ backgroundColor: card_bg }}>
        <h3
          className="text-xs w-fit px-3 py-1 rounded-md font-medium"
          style={{ backgroundColor: category_bg, color: text_color }}
        >
          {category}
        </h3>
        <h2 className="text-slate-600 text-lg font-semibold">
          {title}
        </h2>
        <h3 className="font-medium" style={{ color: text_color }}>${price.toFixed(2)}</h3>
        <button className="px-4 py-2 rounded-md text-sm text-white font-medium btn" style={{backgroundColor: text_color}}>View Details</button>
      </div>
    </div>
  );
};

DonatedCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonatedCard;
