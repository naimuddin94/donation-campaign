import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getDonationToLS, savedDonatioData } from "../../utility/LocalStorage";
import { toast } from "react-toastify";
import { AiOutlineArrowLeft } from "react-icons/ai";

const DonationDetails = () => {
  const navigate = useNavigate();
  const donationsJSON = useLoaderData();
  const donations = JSON.parse(donationsJSON);
  const { donationId } = useParams();
  const intId = parseInt(donationId);

  const donation = donations.find((donation) => donation.id === intId);

  const { id, image, title, price, text_color, description } = donation;

  const handleDonate = (id) => {
    const storedDonation = getDonationToLS();
    const isStored = storedDonation.includes(id);
    if (isStored) return toast.error("You all ready donate for");
    toast.success("Donation successfully done");
    savedDonatioData(id);
  };

  return (
    <section className="py-10 w-10/12 mx-auto">
      <div className="md:h-[450px] relative rounded-lg overflow-hidden">
        <img src={image} alt="" className="w-full h-full" />
        <div className="absolute w-full bottom-0 py-2 px-4 md:py-4 md:px-8 bg-black/50">
          <button
            onClick={() => handleDonate(id)}
            className="btn btn-sm md:btn-md btn-active border-none text-white normal-case"
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
      <div>
        <button onClick={() => navigate("/")} className="btn btn-outline">
          <AiOutlineArrowLeft className="text-lg" />
          Go back
        </button>
      </div>
    </section>
  );
};

export default DonationDetails;
