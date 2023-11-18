export default ({ date, month, year }: { date: number; month: number; year: number }): number => {
  const today = new Date();
  const dob = new Date(year, month - 1, date);
  const age = today.getFullYear() - dob.getFullYear();
  if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
    return age - 1;
  }

  return age;
};
