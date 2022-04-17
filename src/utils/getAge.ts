export default (birthday: string) => {
  const today = new Date();
  const bday = new Date(birthday);
  let age = today.getFullYear() - bday.getFullYear();
  const m = today.getMonth() - bday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) {
    age -= 1;
  }
  return age;
};
