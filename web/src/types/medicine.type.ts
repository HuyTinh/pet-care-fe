export interface IMedicine {
  id: number;
  name: string;
  quantity: number;
  image: string;
  price: number;
  date_import: string;
  manufactures: string;
  locations: ILocation[];
  status: string;
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
  id: number;
  area: string;
  status: boolean;
  row_location: number;
  column_location: number;
}

export interface ICalculationUnit {
  id: number;
  name: string;
  status: boolean;
}
