import Banner from "./Banner";

const Header = () => {
  return (
    <header className="bg-[url('https://i.ibb.co/bBwr2NF/donation.jpg')] relative h-screen bg-cover bg-no-repeat -mt-28 -z-10">
      <div className="bg-gray-100 bg-opacity-90 absolute inset-0"></div>
      <div className="z-10 relative flex justify-center items-center h-screen">
        <Banner />
      </div>
    </header>
  );
};

export default Header;
