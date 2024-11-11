// Defining the IMedicine interface to represent the structure of a medicine object
export interface IMedicine {
  id: number; // Unique identifier for the medicine
  name: string; // The name of the medicine (e.g., "Paracetamol")
  quantity: number; // The quantity of the medicine available or prescribed (e.g., number of pills, bottles)
  calculate_unit: string; // The unit used to calculate the quantity (e.g., "mg", "bottle", "tablet")
}
