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
          className="w-full px-4 focus:outline-0"
        />
        <button className="btn bg-[#FF444A] px-5 text-white font-medium">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
