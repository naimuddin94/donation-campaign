import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue.trim().length !== 0) {
      navigate("/search", { state: searchValue });
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-slate-600 font-bold py-6">
        I Grow By Helping People In Need
      </h1>
      <div className="min-w-fit w-3/5 mx-auto flex h-10 md:h-11 overflow-hidden rounded-md focus-within:ring-2 ring-[#FF444A] shadow-sm">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search here..."
          className="w-full px-4 focus:outline-0 border border-slate-300 border-r-0 rounded-s-md"
        />
        <button
          onClick={handleSearch}
          className="hover:brightness-75 duration-200 cursor-pointer px-3 sm:px-4 text-white font-medium bg-[#FF444A]"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
