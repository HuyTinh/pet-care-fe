import { IPet } from "./pet.type"; // Importing the IPet interface which represents a pet object

// Defining the IAppointment interface which represents the structure of an appointment object
export interface IAppointment {
    id: number; // Unique identifier for the appointment
    services: string[]; // A list of services requested for the appointment (e.g., grooming, check-up)
    pets: IPet[]; // A list of pets involved in the appointment, each following the structure of the IPet interface
    account_id: number; // ID of the account associated with the appointment
    first_name: string; // First name of the account holder making the appointment
    last_name: string; // Last name of the account holder making the appointment
    email: string; // Email address of the account holder making the appointment
    phone_number: string; // Phone number of the account holder
    appointment_date: string; // Date of the appointment (typically in YYYY-MM-DD format)
    appointment_time: string; // Time of the appointment (typically in HH:mm format)
}
