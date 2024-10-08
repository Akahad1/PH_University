const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = monthName.map((item) => ({
  value: item,
  label: item,
}));
export const genders = ["Male", "Female", "Other"];

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
export const genderOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
export const bloodGroupsOpions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));
