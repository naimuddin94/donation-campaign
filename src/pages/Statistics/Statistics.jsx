import { useLoaderData } from "react-router-dom";
import Chart from "react-apexcharts";
import { getDonationToLS } from "../../utility/LocalStorage";

const Statistics = () => {
  const donationsJSON = useLoaderData();
  const donations = JSON.parse(donationsJSON);

  const savedDonatioLS = getDonationToLS();
  const remainDonation = donations.length - savedDonatioLS.length;

  const average = [savedDonatioLS.length, remainDonation];

  return (
    <div className="py-8 w-full max-w-[500px] h-auto mx-auto">
      <Chart
        type="pie"
        series={average}
        options={{
          labels: ["Your Donation", "Total Donation"],
          colors: ["#00C49F", "#FF444A"],
        }}
      ></Chart>
    </div>
  );
};

export default Statistics;
