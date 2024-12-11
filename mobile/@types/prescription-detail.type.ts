// Importing the necessary types for the pet and medicine data
import { IMedicine } from "./medicine.type";
import { IPet } from "./pet.type";

// Defining the IPrescriptionDetail interface to represent the details of a prescription for a pet
export interface IPrescriptionDetail {
        id: number; // Unique identifier for the prescription detail
        pet: IPet; // The pet associated with the prescription, represented by an IPet object
        note: string; // Additional notes related to the prescription or treatment
        diagnosis: string; // The diagnosis given to the pet by the veterinarian
        medicines: IMedicine[]; // An array of medicines prescribed to the pet, represented as IMedicine objects
}
