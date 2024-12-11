// Importing necessary types for appointment and prescription detail
import { IAppointment } from "./appointment.type";
import { IPrescriptionDetail } from "./prescription-detail.type";

// Defining the IPrescription interface to represent the structure of a prescription
export interface IPrescription {
  id: string; // Unique identifier for the prescription
  status: boolean; // Status of the prescription (e.g., true for active, false for completed)
  appointment: IAppointment; // The appointment associated with the prescription, represented by an IAppointment object
  details: IPrescriptionDetail[]; // An array of prescription details, where each detail represents a specific prescription for a pet
  total_price: number; // The total price of the prescription, including all medicines and services
}
