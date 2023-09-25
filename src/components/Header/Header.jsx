import Banner from "./Banner";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-[url('./image/donation.jpg')] relative h-screen bg-cover bg-no-repeat">
      <div className="bg-gray-100 bg-opacity-90 absolute inset-0"></div>
      <div className="z-10 relative">
        <Navbar />
        <div className="flex justify-center items-center h-[50vh]">
          <Banner />
        </div>
      </div>
    </header>
  );
};

export default Header;
