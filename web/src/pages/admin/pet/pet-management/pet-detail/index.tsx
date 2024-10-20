import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Prescription from './prescription';
import { Pet, PrescriptionResponse } from '../pet-response';

const PetDetails: React.FC = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const petId = location.state?.petId;
  const [pet, setPet] = useState<Pet>();
  const [prescription, setPrescription] = useState<PrescriptionResponse>();
  const [showPrescription, setShowPrescription] = useState(false);

  const getPetByPetId = axios.get(`http://localhost:8080/api/v1/management/${petId}`);

  useEffect(() => {
    getPetByPetId
      .then(resp => {
        setPet(resp.data);
        setPrescription(resp.data.prescriptionResponses);
        console.log(resp.data);
      })
      .catch(error => console.log(error));
  }, [petId]);

  const handleViewPrescriptionDetail = () => {
    setShowPrescription(true);
  };
  console.log(pet);
  
  return (
    <div className="container mx-auto p-4">
      <div className="text-center text-xl font-semibold mb-4">
        Pet Detail
      </div>
      <div className="bg-white p-4 rounded border shadow-md">
        <div className="flow-root">
          <dl className="-my-3 divide-y divide-gray-200 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 my-1">
              <dt className="font-medium text-gray-900">Pet ID</dt>
              <dd className="text-gray-700 sm:col-span-2">{pet?.petId}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 my-1">
              <dt className="font-medium text-gray-900">Owner Name</dt>
              <dd className="text-gray-700 sm:col-span-2">{pet?.ownerName}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 my-1">
              <dt className="font-medium text-gray-900">Pet Name</dt>
              <dd className="text-gray-700 sm:col-span-2">{pet?.petName}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 my-1">
              <dt className="font-medium text-gray-900">Pet Weight</dt>
              <dd className="text-gray-700 sm:col-span-2">{pet?.petWeight}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 my-1">
              <dt className="font-medium text-gray-900">Pet Species</dt>
              <dd className="text-gray-700 sm:col-span-2">{pet?.petSpecies}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 my-1">
              <dt className="font-medium text-gray-900">Total Price</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {` ${pet?.totalPriceInPetDetail?.toLocaleString()} VNĐ`}
              </dd>
            </div>
            <div className="flex justify-between my-1">
              <div className="flex gap-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => handleViewPrescriptionDetail()}
                >
                  View Prescription Detail
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Service Detail
                </button>
              </div>
              <div className="">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => navigate("/pet")}
                >
                  Back
                </button>
              </div>
            </div>
          </dl>
        </div>
      </div>

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
    </div>
  );
};

export default PetDetails;
