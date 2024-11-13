// Importing interfaces IAppointment and IPet to be used in the prescription and its details
import { IAppointment } from "./appoiment.type";
import { IPet } from "./pet.type";

// Define the IPrescription interface to represent the structure of a prescription object
export interface IPrescription {
  // 'id' is a unique identifier for the prescription (number)
  id: number;

  // 'status' represents the current status of the prescription (string)
  status: string;

  // 'appointment' is an object of type IAppointment, representing the related appointment for the prescription
  appointment: IAppointment;

  // 'details' is an array of IDetail objects, each representing the details of the prescription for a pet
  details: IDetail[];

  // 'total_money' is the total cost of the prescription (number)
  total_money: number;
}

// Define the IDetail interface to represent the details of the prescription for a specific pet
export interface IDetail {
  // 'pet' is an object of type IPet, representing the pet for which the prescription is issued
  pet: IPet;

  // 'note' is any additional note regarding the prescription (string)
  note: string;

  // 'diagnosis' is the diagnosis given to the pet by the veterinarian (string)
  diagnosis: string;

  // 'medicines' is an array of IMedicine objects, representing the list of medicines prescribed to the pet
  medicines: IMedicine[];
}

// Define the IMedicine interface to represent the structure of a medicine prescribed in the prescription
export interface IMedicine {
  // 'id' is a unique identifier for the medicine (number)
  id: number;

  // 'name' is the name of the prescribed medicine (string)
  name: string;

  // 'quantity' is the quantity of the medicine prescribed (number)
  quantity: number;

  // 'calculate_unit' is the unit of measurement for the medicine (string, e.g., tablets, ml)
  calculate_unit: string;
}
