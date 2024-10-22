import { IMedicine } from "./medicine.type"
import { IPet } from "./pet.type"

export interface IPrescriptionDetail {
        id: number
        pet: IPet
        medicines: IMedicine[]
        note: string
}