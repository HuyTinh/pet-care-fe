// Import the IPet interface from another module, which is likely used to define pet-related data
import { IPet } from "./pet.type";

// Define the ICustomer interface to represent the structure of a customer object
export interface ICustomer {
  /**
   * Unique identifier for the customer.
   * @example "abc123"
   */
  id: string; // Unique identifier for the customer

  /**
   * The customer's address.
   * @example "123 Main St, City, Country"
   */
  address: string; // The address of the customer

  /**
   * The customer's email address.
   * @example "customer@example.com"
   */
  email: string; // The email address of the customer

  gender: string; // The gender of the customer

  /**
   * List of pets owned by the customer.
   * This is an array of IPet objects, which ensures that the data conforms to the pet structure.
   * @example [{ "id": "pet1", "name": "Buddy", "type": "Dog" }]
   */
  pets: IPet[]; // An array of pets owned by the customer, each conforming to the IPet structure

  /**
   * The customer's first name.
   * @example "John"
   */
  first_name: string; // The first name of the customer

  /**
   * The customer's last name.
   * @example "Doe"
   */
  last_name: string; // The last name of the customer

  /**
   * The customer's phone number.
   * @example "+1234567890"
   */
  phone_number: string; // The phone number of the customer

  /**
   * URL to the customer's profile image.
   * @example "https://example.com/images/customer.jpg"
   */
  image_url: string; // URL to the customer's profile image

  /**
   * Unique identifier for the customer's associated account.
   * @example 123
   */
  account_id: string; // Unique identifier for the associated account of the customer
}
