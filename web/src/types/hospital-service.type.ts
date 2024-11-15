/**
 * Interface representing the structure of a hospital service object.
 */
export interface IHospitalService {
  /**
   * Name of the hospital service.
   * @example "Emergency Care"
   */
  name: string;

  /**
   * Detailed description of the hospital service.
   * @example "Provides immediate medical attention for critical injuries or illnesses."
   */
  description: string;
}
