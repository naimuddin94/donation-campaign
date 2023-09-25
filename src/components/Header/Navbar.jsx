import { NavLink } from "react-router-dom";
import NavLi from "../UtilityComponent/NavLi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-12 text-slate-600 z-20">
      <div>
        <img src="./image/Logo.png" alt="logo image" className="w-48" />
      </div>
      <ul className="flex gap-6 font-semibold">
        <NavLi path="/">Home</NavLi>
        <NavLi path="/donation">Donation</NavLi>
        <NavLi path="/statistics">Statistics</NavLi>
      </ul>
    </nav>
  );
};

export default Navbar;
