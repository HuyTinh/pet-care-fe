import { IAppointment } from "./appoiment.type";

export interface APIResponse {
  code: number;
  message?: string;
  data?: IAppointment[] | any;
}
