import { IAppointment } from "./appoiment.type"
import { IPet } from "./pet.type"

export interface IPrescription {
  id: number
  status: string
  appointment: IAppointment
  details: IDetail[]
  total_money: number
}

export interface IDetail {
  pet: IPet
  note: string
  diagnosis: string
  medicines: IMedicine[]
}


export interface IMedicine {
  id: number
  name: string
  quantity: number
  calculate_unit: string
}
