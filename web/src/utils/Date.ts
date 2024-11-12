// Define the function displayInputDate to format a Date object into a YYYY-MM-DD string
export function displayInputDate(date: Date) {
  // Extract the day, month, and year from the Date object
  const day = date.getDate().toString().padStart(2, "0"); // Pad the day with leading zero if necessary
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Pad the month with leading zero if necessary
  const year = date.getFullYear().toString(); // Get the year as a string
  // Return the formatted date in the format: YYYY-MM-DD
  return `${year}-${month}-${day}`;
}

// Define the function displayPlusDate to add a specified number of days to a given date
export function displayPlusDate(date: Date, plusNumber: number) {
  // Create a copy of the given date to avoid mutating the original date
  const futureDate = date;
  // Add 'plusNumber' days to the given date
  futureDate.setDate(futureDate.getDate() + plusNumber);
  // Return the new date after adding the days
  return futureDate;
}

// Define the function displayCustomDate to format a Date object into a custom date string with optional time
export function displayCustomDate(date: Date, time?: boolean) {
  // Extract the minutes, hours, day, month, and year from the Date object
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Pad the minutes with leading zero if necessary
  const hours = date.getHours().toString().padStart(2, "0"); // Pad the hours with leading zero if necessary
  const day = date.getDate().toString().padStart(2, "0"); // Pad the day with leading zero if necessary
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Pad the month with leading zero if necessary
  const year = date.getFullYear().toString(); // Get the year as a string
  // Return the formatted date in the format: DD thg MM YYYY, HH:MM (optional time)
  return `${day} thg ${month} ${year}${time ? ", " + hours + ":" + minutes : ""}`;
}

// Define the function getDaysArray to generate an array of date strings between a start and end date
export function getDaysArray(start: string, end: string) {
  // Initialize an empty array to hold the date strings
  const arr: Date[] = [];
  // Loop through the dates from the start date to the end date
  for (
    const dt = new Date(start); // Initialize the date object with the start date
    dt <= new Date(end); // Continue until the end date
    dt.setDate(dt.getDate() + 1) // Increment the date by one day
  ) {
    arr.push(new Date(dt)); // Add the current date to the array
  }
  // Return an array of date strings in ISO format (YYYY-MM-DD)
  return arr.map((v) => v.toISOString().slice(0, 10));
}
