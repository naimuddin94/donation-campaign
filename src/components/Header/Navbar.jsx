import NavLi from "../UtilityComponent/NavLi";

const logoUrl = "https://i.ibb.co/Yj5PDG1/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar md:pt-5 lg:p-12">
      <div className="flex justify-between w-full pl-5">
        <img src={logoUrl} alt="Logo Image" className="w-20 md:w-48" />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLi path="/">Home</NavLi>
            <NavLi path="/donation">Donation</NavLi>
            <NavLi path="/statistics">Statistics</NavLi>
          </ul>
        </div>
      </div>
      <div className="navbar-end w-4/5 hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLi path="/">Home</NavLi>
          <NavLi path="/donation">Donation</NavLi>
          <NavLi path="/statistics">Statistics</NavLi>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
