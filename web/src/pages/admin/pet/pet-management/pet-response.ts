export interface Pet{
    petId: number,
    petName: string | null,
    petAge: string | null,
    petWeight: string | null,
    petSpecies: string,
    ownerName: string,
    prescriptionResponses: PrescriptionResponse[] | null,
    totalPriceInPetDetail: number
}

export interface PrescriptionResponse{
    prescriptionId: number;
    note: string,
    totalPriceInPrescription: number
    prescriptionDetailResponse: PrescriptionDetailsResponse[] | null
}

export interface PrescriptionDetailsResponse{
    medicineId: number,
    medicineName: string,
    medicineUnit: string,
    medicineQuantity: number,
    totalPriceInPrescriptionDetail: number
}