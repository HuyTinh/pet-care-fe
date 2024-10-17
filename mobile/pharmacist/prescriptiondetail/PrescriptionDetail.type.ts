import { Medicine } from "../medicine/Medicine"
import { Pet } from "../pet/Pet.type"

export interface PrescriptionDetail{
        id: number
        pet: Pet
        medicine: Medicine[]
        note: string
}