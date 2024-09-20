import { ICustomer } from "./customer.type";
import { IHospitalService } from "./hospital-service.type";

export interface IAppointment {
  id: string;
  customer: ICustomer;
  services: IHospitalService[];
  appointment_date: string;
  appointment_time: string;
  status: string;
}
