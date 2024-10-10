import { Customer } from "../customer/Customer"
import { PrescriptionDetail } from "../prescriptiondetail/PrescriptionDetail.type"


export interface Prescription {
    id: string
    customer: Customer
    details: PrescriptionDetail[]
    total_price: number
  }