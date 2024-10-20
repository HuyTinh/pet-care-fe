import React from 'react'
import PrescriptionDetails from '../prescription-details'
import { PrescriptionResponse } from '../../pet-response'

const Prescription: React.FC<PrescriptionResponse[]> = ({ prescriptions }) => {

    return (
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
            <thead>
                <tr>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">No.</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Medicine Name</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Quantity</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Calculation Unit</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Price</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {prescriptions?.map((presc, index) => (
                    <React.Fragment key={index}>
                        <PrescriptionDetails prescriptionDetails={presc.prescriptionDetailResponse} />
                        <tr>
                            <td colSpan="5" className="py-3">
                                <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-gray-900">Sick:</dt>
                                    <dd className="text-gray-700 sm:col-span-2">{presc.note}</dd>
                                </div>
                                <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
                                    <dt className="font-medium text-gray-900">Total Price:</dt>
                                    <dd className="text-gray-700 sm:col-span-2">
                                        {` ${presc.totalPriceInPrescription?.toLocaleString()} VNĐ`}
                                    </dd>
                                </div>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    )
}

export default Prescription
