/**
 * Interface representing the structure of a medicine object.
 */
export interface IMedicine {
  /**
   * Unique identifier for the medicine.
   * @example 123
   */
  id: number;

  /**
   * Name of the medicine.
   * @example "Paracetamol"
   */
  name: string;

  /**
   * Quantity of the medicine available in stock.
   * @example 100
   */
  quantity: number;

  /**
   * URL to the image of the medicine.
   * @example "https://example.com/images/paracetamol.jpg"
   */
  image_url: string;

  /**
   * Price of the medicine.
   * @example 15.5
   */
  price: number;

  /**
   * Date the medicine was imported into the system.
   * @example "2024-10-10"
   */
  date_import: string;

  /**
   * Manufacturer of the medicine, adhering to the IManufacture structure.
   * @example { id: 1, name: "PharmaCorp", status: true }
   */
  manufacture: IManufacture;

  /**
   * Locations where the medicine is stored, using the ILocation structure.
   * @example [{ id: "A1", area: "Shelf 1", status: true, row_location: "Row 1", column_location: "Column 1" }]
   */
  locations: ILocation[];

  /**
   * Current status of the medicine (e.g., "in stock", "out of stock").
   * @example "in stock"
   */
  status: string;

  /**
   * Types or categories of the medicine.
   * @example "Painkiller"
   */
  types: string;

  /**
   * Manufacturing date of the medicine (likely a timestamp).
   * @example 1622419200000
   */
  manufacturing_date: number;

  /**
   * Expiry date of the medicine (likely a timestamp).
   * @example 1672444800000
   */
  expiry_date: number;

  /**
   * Units used for calculating the medicine's quantity (e.g., tablets, bottles).
   * @example [{ id: "box", name: "Box", status: true }]
   */
  calculation_units: ICalculationUnit[];
}

/**
 * Interface representing the structure of a manufacturer.
 */
export interface IManufacture {
  /**
   * Unique identifier for the manufacturer.
   * @example 1
   */
  id: number;

  /**
   * Name of the manufacturer.
   * @example "PharmaCorp"
   */
  name: string;

  /**
   * Status indicating if the manufacturer is active or not.
   * @example true
   */
  status: boolean;
}

/**
 * Interface representing the structure of a location where the medicine is stored.
 */
export interface ILocation {
  /**
   * Unique identifier for the location.
   * @example "A1"
   */
  id: string;

  /**
   * Area or section where the medicine is stored.
   * @example "Shelf 1"
   */
  area: string;

  /**
   * Status indicating if the location is active.
   * @example true
   */
  status: boolean;

  /**
   * Row where the medicine is located within the area.
   * @example "Row 1"
   */
  row_location: string;

  /**
   * Column where the medicine is located within the area.
   * @example "Column 1"
   */
  column_location: string;
}

/**
 * Interface representing the units used for calculating the medicine's quantity.
 */
export interface ICalculationUnit {
  /**
   * Unique identifier for the calculation unit.
   * @example "box"
   */
  id: string;

  /**
   * Name of the calculation unit (e.g., "box", "tablet").
   * @example "box"
   */
  name: string;

  /**
   * Status indicating if the unit is active.
   * @example true
   */
  status: boolean;
}

/**
 * Interface representing the structure of a paginated response for a list of medicines.
 */
export interface IMedicinePageResponse {
  /**
   * List of medicines on the current page.
   * @example [{ id: 1, name: "Paracetamol", quantity: 100, price: 15.5, ... }]
   */
  content: IMedicine[];

  /**
   * Total number of pages available in the paginated response.
   * @example 5
   */
  totalPages: number;

  /**
   * Total number of medicines available in the database.
   * @example 100
   */
  totalElements: number;
}
