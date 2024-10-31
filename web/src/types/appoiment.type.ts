import { IHospitalService } from "./hospital-service.type";
import { IPet } from "./pet.type";

export interface IAppointment {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  account_id: string;
  account?: string;
  services: IHospitalService[];
  appointment_date: string;
  appointment_time: string;
  status: string;
  pets?: IPet[];
}
