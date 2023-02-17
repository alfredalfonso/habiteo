export function getDateToday() {
  const dateToday = new Date();

  let yyyy = dateToday.getFullYear();

  let checkMM = dateToday.getMonth() + 1;
  let mm = checkMM < 10 ? '0' + checkMM : checkMM;

  let checkDD = dateToday.getDate();
  let dd = checkDD < 10 ? '0' + checkDD : checkDD;

  return `${yyyy}-${mm}-${dd}`;
}
