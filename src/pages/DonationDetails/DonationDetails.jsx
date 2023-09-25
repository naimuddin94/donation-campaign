import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const donationsJSON = useLoaderData();
  const donations = JSON.parse(donationsJSON);
  const { donationId } = useParams();
  const intId = parseInt(donationId);

  const donation = donations.find((donation) => donation.id === intId);

  const { id, image, title, price, text_color, description } = donation;

  const handleDonate = () => {
    console.log("donation ok");
  };

  return (
    <section className="py-10 w-3/4 mx-auto">
      <div className="h-[450px] relative rounded-lg overflow-hidden">
        <img src={image} alt="" className="w-full h-full" />
        <div className="absolute w-full bottom-0 py-4 px-8 bg-black/50">
          <button
            onClick={handleDonate}
            className="px-6 py-2 rounded-md text-white font-medium btn"
            style={{ backgroundColor: text_color }}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-2xl font-bold py-3">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default DonationDetails;
