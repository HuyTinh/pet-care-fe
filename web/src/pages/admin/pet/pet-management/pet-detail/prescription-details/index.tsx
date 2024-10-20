import React from 'react'
import { PrescriptionDetailsResponse } from '../../pet-response'

const PrescriptionDetails: React.FC<PrescriptionDetailsResponse[]> = ({prescriptionDetails}) => {

  return (
    prescriptionDetails.map((prescriptionDetail, index) => (
        <tr key={index} className="odd:bg-gray-50">
          <td className="px-4 py-2 font-medium text-gray-900">{index + 1}</td>
          <td className="px-4 py-2 font-medium text-gray-900">{prescriptionDetail.medicineName}</td>
          <td className="px-4 py-2 font-medium text-gray-900">{prescriptionDetail.medicineQuantity}</td>
          <td className="px-4 py-2 font-medium text-gray-900">{prescriptionDetail.medicineUnit}</td>
          <td className="px-4 py-2 font-medium text-gray-900">
            {` ${prescriptionDetail.totalPriceInPrescriptionDetail?.toLocaleString()} VNĐ`}
          </td>
        </tr>
      ))
  )
}

export default PrescriptionDetails
