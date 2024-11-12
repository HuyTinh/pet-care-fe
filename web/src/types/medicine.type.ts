// Define the IMedicine interface to represent the structure of a medicine object
export interface IMedicine {
  // 'id' is a unique identifier for the medicine (number)
  id: number;

  // 'name' is the name of the medicine (string)
  name: string;

  // 'quantity' is the quantity of the medicine available (number)
  quantity: number;

  // 'image_url' is a string URL to the image of the medicine (string)
  image_url: string;

  // 'price' is the price of the medicine (number)
  price: number;

  // 'date_import' is the string representing the date the medicine was imported (string)
  date_import: string;

  // 'manufacture' is an object that represents the manufacturer of the medicine, following the IManufacture structure
  manufacture: IManufacture;

  // 'locations' is an array of ILocation objects representing the locations where the medicine is stored
  locations: ILocation[];

  // 'status' is a string representing the current status of the medicine (e.g., in stock, out of stock)
  status: string;

  // 'types' is a string representing the types or categories of the medicine (string)
  types: string;

  // 'manufacturing_date' is the manufacturing date of the medicine (number, likely a timestamp)
  manufacturing_date: number;

  // 'expiry_date' is the expiry date of the medicine (number, likely a timestamp)
  expiry_date: number;

  // 'calculation_units' is an array of ICalculationUnit objects, representing units of measurement for the medicine
  calculation_units: ICalculationUnit[];
}

// Define the IManufacture interface to represent the structure of a manufacturer
export interface IManufacture {
  // 'id' is a unique identifier for the manufacturer (number)
  id: number;

  // 'name' is the name of the manufacturer (string)
  name: string;

  // 'status' is a boolean indicating if the manufacturer is active or not
  status: boolean;
}

// Define the ILocation interface to represent the structure of a location where the medicine is stored
export interface ILocation {
  // 'id' is a unique identifier for the location (string)
  id: string;

  // 'area' is the area or section where the medicine is stored (string)
  area: string;

  // 'status' is a boolean indicating if the location is active or not
  status: boolean;

  // 'row_location' is the row where the medicine is located within the area (string)
  row_location: string;

  // 'column_location' is the column where the medicine is located within the area (string)
  column_location: string;
}

// Define the ICalculationUnit interface to represent units used for calculating the medicine's quantity
export interface ICalculationUnit {
  // 'id' is a unique identifier for the calculation unit (string)
  id: string;

  // 'name' is the name of the calculation unit (e.g., box, bottle, tablet) (string)
  name: string;

  // 'status' is a boolean indicating if the unit is active or not
  status: boolean;
}

// Define the IMedicinePageResponse interface to represent the structure of the response for a paginated list of medicines
export interface IMedicinePageResponse {
  // 'content' is an array of IMedicine objects representing the medicines on the current page
  content: IMedicine[];

  // 'totalPages' is the total number of pages available in the paginated response (number)
  totalPages: number;

  // 'totalElements' is the total number of medicine items in the database (number)
  totalElements: number;
}
