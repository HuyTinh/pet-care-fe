import { IPet } from "./pet.type";
export interface ICustomer {
  id: string;
  address: string;
  email: string;
  pets: IPet[];
  first_name: string;
  last_name: string;
  phone_number: string;
}
