import { IAppointment } from "./appointment.type"
import { IPrescriptionDetail } from "./prescription-detail.type"


export interface IPrescription {
  id: string,
  status: boolean,
  appointment: IAppointment
  details: IPrescriptionDetail[]
  total_price: number
}