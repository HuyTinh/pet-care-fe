import { PrescriptionDetail } from "../prescriptiondetail/PrescriptionDetail.type";

export interface Prescription{
    prescriptionId: string;
    prescriptionDetailResponse: PrescriptionDetail[]
    note: string;
    totalPriceInPrescription: number;
}