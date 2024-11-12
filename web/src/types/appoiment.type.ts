// Import the IPet interface from another module, which is likely used to define pet-related data
import { IPet } from "./pet.type";

// Define the IAppointment interface to represent the structure of an appointment
export interface IAppointment {
  // 'id' is a unique identifier for the appointment (string)
  id: string;

  // 'services' is an array of strings representing the services associated with the appointment
  services: string[];

  // 'pets' is an optional property that holds an array of pets related to the appointment
  // It uses the IPet interface to ensure that the data structure conforms to the pet definition
  pets?: IPet[];

  // 'account' is an optional property that may hold the account name associated with the appointment
  account?: string;

  // 'account_id' is the ID associated with the account for the appointment (string)
  account_id: string;

  // 'first_name' is the first name of the person making the appointment (string)
  first_name: string;

  // 'last_name' is the last name of the person making the appointment (string)
  last_name: string;

  // 'email' is the email address of the person making the appointment (string)
  email: string;

  // 'status' represents the current status of the appointment (string)
  status: string;

  // 'phone_number' is the phone number of the person making the appointment (string)
  phone_number: string;

  // 'appointment_date' is the date the appointment is scheduled for (string)
  appointment_date: string;

  // 'appointment_time' is the time of the appointment (string)
  appointment_time: string;
}
