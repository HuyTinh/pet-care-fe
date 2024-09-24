export function displayInputDate(date: Date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${year}-${month}-${day}`;
}

export function displayPlusDate(date: Date, plusNumber: number) {
  let futureDate = date;
  futureDate.setDate(futureDate.getDate() + plusNumber);
  return futureDate;
}
