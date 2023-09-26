import Banner from "./Banner";

const Header = () => {
  return (
    <header className="bg-[url('https://i.ibb.co/ZBnMxpz/Rectangle-4281.png')] bg-gray-50/95 bg-blend-overlay h-screen bg-cover bg-no-repeat bg-center -mt-40 px-10">
      <div className="flex justify-center items-center h-screen">
        <Banner />
      </div>
    </header>
  );
};

export default Header;
