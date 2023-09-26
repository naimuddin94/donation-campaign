const Banner = () => {
  return (
    <div>
      <h1 className="text-5xl text-slate-700 font-bold py-6">
        I Grow By Helping People In Need
      </h1>
      <div className="w-3/5 mx-auto flex h-11 overflow-hidden rounded-md focus-within:ring-2 ring-[#FF444A] shadow-sm">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full px-4 focus:outline-0 border border-slate-300 border-r-0 rounded-s-md"
        />
        <button className="hover:brightness-75 duration-200 cursor-pointer px-4 text-white font-medium bg-[#FF444A]">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
