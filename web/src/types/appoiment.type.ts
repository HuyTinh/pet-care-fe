import { IPet } from "./pet.type";

export interface IAppointment {
  id: string
  services: string[]
  pets?: IPet[]
  account?: string;
  account_id: string
  first_name: string
  last_name: string
  email: string
  status: string
  phone_number: string
  appointment_date: string
  appointment_time: string
}