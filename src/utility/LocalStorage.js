const getDonationToLS = () => {
  const storedDonatioData = localStorage.getItem("donation");
  if (storedDonatioData) {
    return JSON.parse(storedDonatioData);
  }
  return [];
};

const savedDonatioData = (id) => {
  const storedDonatioData = getDonationToLS();
  storedDonatioData.push(id);
  localStorage.setItem("donation", JSON.stringify(storedDonatioData));
};

export { getDonationToLS, savedDonatioData };
