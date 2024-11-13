// Define a generic interface for API responses
export interface APIResponse<T> {
  // The 'code' property is a number that typically represents the status of the API response
  code: number;

  // The 'message' property is an optional string that can contain a message about the API response
  message?: string;

  // The 'data' property is optional and can hold an array of type T or any type of data
  // T represents a generic type, allowing the response to handle different data structures
  data?: T[] | any;
}
