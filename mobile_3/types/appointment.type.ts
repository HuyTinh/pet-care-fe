import { IPet } from "./pet.type"

export interface IAppointment {
    id: number
    services: string[]
    pets: IPet[]
    account_id: number
    first_name: string
    last_name: string
    email: string
    phone_number: string
    appointment_date: string
    appointment_time: string
}
