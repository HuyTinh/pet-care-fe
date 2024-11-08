import React from 'react'
import Prescription from '../pet-detail/prescription'

const PrescriptionModal = ({ showPrescription, setShowPrescription, prescription }) => {
    return (
        <>
            {showPrescription ? (
                    <>
                        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                            <div className="relative w-auto max-w-3xl my-6 mx-auto">
                                <div className="bg-white rounded-lg shadow-lg flex flex-col w-full outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">Description Medicine</h3>
                                        <button
                                            className="text-gray-400 hover:text-gray-900"
                                            onClick={() => setShowPrescription(false)}
                                        >
                                            <span className="text-2xl">×</span>
                                        </button>
                                    </div>
                                    <div className="p-6">
                                        <div className="overflow-x-auto">
                                            <Prescription prescriptions={prescription} />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-gray-200">
                                        <button
                                            className="bg-black text-white px-6 py-3 rounded shadow hover:bg-gray-700"
                                            onClick={() => setShowPrescription(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                    </>
                ) : null}
        </>
    )
}

export default PrescriptionModal
