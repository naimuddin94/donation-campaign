import Banner from "./Banner";

const Header = () => {
  return (
    <header
      className="bg-[url('https://i.ibb.co/ZBnMxpz/Rectangle-4281.png')] bg-gray-50/95 bg-blend-overlay bg-cover bg-center h-screen max-h-[500px] -mt-24 lg:-mt-40 px-10"
    >
      <div className="flex justify-center pt-48 lg:pt-52">
        <Banner />
      </div>
    </header>
  );
};

export default Header;
