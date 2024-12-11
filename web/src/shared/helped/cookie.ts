// Define the function getCookieValue to retrieve the value of a cookie by its name
export function getCookieValue(name: string) {
  // Create a regular expression to match the cookie name and its value
  const regex = new RegExp(`(^| )${name}=([^;]+)`);

  // Use document.cookie to retrieve all cookies and apply the regex to find the cookie by name
  const match = document.cookie.match(regex);

  // If a match is found, return the value of the cookie
  if (match) {
    return match[2];
  }
}
