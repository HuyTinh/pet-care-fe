import { Prescription } from "../prescription/Prescription.type";

export interface Pet{
    petId: string;
    petName: string;
    totalPriceInPet: number;
    prescriptionResponse: Prescription[]

}