// Import the IPet interface from another module, which defines pet-related data
import { IPet } from "./pet.type";

/**
 * Interface representing the structure of an appointment.
 */
export interface IAppointment {
  /**
   * Unique identifier for the appointment.
   * @example "appt_12345"
   */
  id: string;

  /**
   * List of services associated with the appointment.
   * @example ["grooming", "vaccination"]
   */
  services: string[];

  /**
   * Optional array of pets related to the appointment.
   * Uses the IPet interface to ensure the data structure conforms to the pet definition.
   * @example [{ id: "pet1", name: "Buddy", type: "Dog" }]
   */
  pets?: IPet[];

  /**
   * Optional name of the account associated with the appointment.
   * @example "john_doe"
   */
  account?: string;

  /**
   * Unique identifier for the account associated with the appointment.
   * @example "account_123"
   */
  account_id: string;

  /**
   * First name of the person making the appointment.
   * @example "John"
   */
  first_name: string;

  /**
   * Last name of the person making the appointment.
   * @example "Doe"
   */
  last_name: string;

  /**
   * Email address of the person making the appointment.
   * @example "johndoe@example.com"
   */
  email: string;

  /**
   * Current status of the appointment.
   * @example "confirmed"
   */
  status: string;

  /**
   * Phone number of the person making the appointment.
   * @example "+1234567890"
   */
  phone_number: string;

  /**
   * Date the appointment is scheduled for.
   * @example "2024-11-15"
   */
  appointment_date: string;

  /**
   * Time of the appointment.
   * @example "14:00"
   */
  appointment_time: string;
}
