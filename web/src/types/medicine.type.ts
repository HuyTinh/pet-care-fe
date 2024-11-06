export interface IMedicine {
  id: number;
  name: string;
  quantity: number;
  image_url: string;
  price: number;
  date_import: string;
  manufacture: IManufacture;
  locations: ILocation[];
  status: string;
  types: string;
  manufacturing_date: number;
  expiry_date: number;
  calculation_units: ICalculationUnit[];
}

export interface IManufacture {
  id: number;
  name: string;
  status: boolean;
}

export interface ILocation {
  id: string;
  area: string;
  status: boolean;
  row_location: string;
  column_location: string;
}

export interface ICalculationUnit {
  id: string;
  name: string;
  status: boolean;
}
export interface MedicinePageResponse {
  content: IMedicine[];
  totalPages: number;
  totalElements: number;
}
