/**
 * Generic interface for representing an API response.
 * @template T - The type of data contained in the response.
 */
export interface APIResponse<T> {
  /**
   * Status code of the API response.
   * Typically used to indicate success, error, or other status types.
   * @example 1000
   */
  code: number;

  /**
   * Optional message providing additional information about the API response.
   * @example "Request completed successfully"
   */
  message?: string;

  /**
   * Optional data returned by the API.
   * Can hold an array of type `T` or other types of data as needed.
   * Allows flexibility in handling various data structures.
   * @example [{ id: 1, name: "Sample Item" }]
   */
  data?: T[] | any;
}
