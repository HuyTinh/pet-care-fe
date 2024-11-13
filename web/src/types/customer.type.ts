// Import the IPet interface from another module, which is likely used to define pet-related data
import { IPet } from "./pet.type";

// Define the ICustomer interface to represent the structure of a customer object
export interface ICustomer {
  // 'id' is a unique identifier for the customer (string)
  id: string;

  // 'address' is the customer's address (string)
  address: string;

  // 'email' is the customer's email address (string)
  email: string;

  // 'pets' is an array of IPet objects that represent the pets owned by the customer
  // It uses the IPet interface to ensure that the data conforms to the pet structure
  pets: IPet[];

  // 'first_name' is the customer's first name (string)
  first_name: string;

  // 'last_name' is the customer's last name (string)
  last_name: string;

  // 'phone_number' is the customer's phone number (string)
  phone_number: string;
}
