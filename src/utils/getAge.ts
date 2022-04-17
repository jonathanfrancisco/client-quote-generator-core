export default (birthday: string) => {
  var today = new Date();
  var bday = new Date(birthday);
  var age = today.getFullYear() - bday.getFullYear();
  var m = today.getMonth() - bday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) {
    age--;
  }
  return age;
};
