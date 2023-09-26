import { useLoaderData } from "react-router-dom";
import Chart from "react-apexcharts";
import { getDonationToLS } from "../../utility/LocalStorage";

const Statistics = () => {
  const donationsJSON = useLoaderData();
  const donations = JSON.parse(donationsJSON);

  const savedDonatioLS = getDonationToLS();
  const donatedList = donations.filter((donation) =>
    savedDonatioLS.includes(donation.id)
  );

  const totalAmount = donations.reduce((acc, cur) => acc + cur.price, 0);
  const donatedAmount = donatedList.reduce((acc, cur) => acc + cur.price, 0);

  const amountArray = [donatedAmount, totalAmount];

  return (
    <div className="py-8 w-full max-w-[500px] h-auto mx-auto">
      <Chart
        type="pie"
        series={amountArray}
        options={{
          labels: ["Your Donation", "Total Donation"],
          colors: ["#00C49F", "#FF444A"],
        }}
      ></Chart>
    </div>
  );
};

export default Statistics;
