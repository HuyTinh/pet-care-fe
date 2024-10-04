import { ICustomer } from "./customer.type";
import { IHospitalService } from "./hospital-service.type";
import { IPet } from "./pet.type";

export interface IAppointment {
  id: string;
  customer: ICustomer;
  services: IHospitalService[];
  appointment_date: string;
  appointment_time: string;
  status: string;
  pets?: IPet[];
}
