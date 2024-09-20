import { IAppointment } from "./appoiment.type";

export interface APIResponse {
  result: IAppointment[] | any;
  code: number;
}
