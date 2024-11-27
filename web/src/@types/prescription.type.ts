// Importing interfaces IAppointment and IPet to be used in the prescription and its details
import { IAppointment } from "./appoiment.type";
import { IPet } from "./pet.type";

/**
 * Interface representing a prescription object.
 */
export interface IPrescription {
  /**
   * Unique identifier for the prescription.
   * @example 1
   */
  id: number;

  /**
   * Current status of the prescription.
   * @example "pending"
   */
  status: string;

  /**
   * The appointment associated with this prescription.
   * Uses the IAppointment interface to define the structure.
   */
  appointment: IAppointment;

  /**
   * Array of IDetail objects, each representing prescription details for a specific pet.
   */
  details: IDetail[];

  /**
   * Total cost of the prescription.
   * @example 150.00
   */
  total_money: number;
}

/**
 * Interface representing the details of the prescription for a specific pet.
 */
export interface IDetail {
  /**
   * The pet for whom the prescription is issued.
   * Uses the IPet interface to define the structure.
   */
  pet: IPet;

  /**
   * Additional notes regarding the prescription.
   * @example "Administer with food"
   */
  note: string;

  /**
   * Diagnosis provided by the veterinarian for the pet.
   * @example "Allergic dermatitis"
   */
  diagnosis: string;

  /**
   * List of medicines prescribed for the pet.
   */
  medicines: IMedicine[];
}

/**
 * Interface representing a medicine prescribed in the prescription.
 */
export interface IMedicine {
  /**
   * Unique identifier for the medicine.
   * @example 101
   */
  id: number;

  /**
   * Name of the prescribed medicine.
   * @example "Amoxicillin"
   */
  name: string;

  /**
   * Quantity of the medicine prescribed.
   * @example 2
   */
  quantity: number;

  /**
   * Unit of measurement for the medicine (e.g., tablets, ml).
   * @example "tablets"
   */
  calculate_unit: string;
}
