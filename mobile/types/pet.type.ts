// Defining the IPet interface to represent the structure of a pet object
export interface IPet {
  id: number; // Unique identifier for the pet
  name: string; // The name of the pet (e.g., "Buddy", "Fluffy")
  age: string; // The age of the pet, represented as a string (e.g., "2 years", "5 months")
  weight: number; // The weight of the pet, typically in kilograms or pounds
  species: string; // The species of the pet (e.g., "Dog", "Cat", "Rabbit")
}
