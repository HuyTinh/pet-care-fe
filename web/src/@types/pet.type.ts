/**
 * Interface representing the structure of a pet object.
 */
export interface IPet {
  /**
   * Unique identifier for the pet.
   * @example "pet123"
   */
  id: string;

  /**
   * The name of the pet.
   * @example "Buddy"
   */
  name: string;

  /**
   * The age of the pet.
   * @example "2 years"
   */
  age: string;

  /**
   * The weight of the pet.
   * @example "5 kg"
   */
  weight: string;

  /**
   * The species or breed of the pet.
   * @example "Golden Retriever"
   */
  species: string;
}
