import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavLi = ({ path, children }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-red-600 underline" : ""
      }
    >
      <li className="hover:bg-slate-300 duration-200 px-4 py-1 rounded-md">{children}</li>
    </NavLink>
  );
};

NavLi.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavLi;
