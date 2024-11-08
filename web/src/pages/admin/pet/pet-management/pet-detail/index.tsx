import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Prescription from './prescription';
import { Pet, PrescriptionResponse } from '../pet-response';
import PrescriptionModal from '../modal/prescription';

const PetDetails: React.FC = () => {
  
  // declare location
  const location = useLocation();
  // declare location
  const navigate = useNavigate();
  // check href, get petId
  const petId = location.state?.petId;
  // set pet by pet id
  const [pet, setPet] = useState<Pet>();
  // have pet detail, set prescription
  const [prescription, setPrescription] = useState<PrescriptionResponse>();
  // show presc
  const [showPrescription, setShowPrescription] = useState(false);

  const getPetByPetId = axios.get(`http://localhost:8080/api/v1/management/getById/${petId}`);

  useEffect(() => {
    getPetByPetId
      .then(resp => {
        setPet(resp.data.data);
        setPrescription(resp.data.data.prescriptionResponses);
        console.log(resp.data);
      })
      .catch(error => console.log(error));
  }, [petId]);

  // handle button view prescription detail
  const handleViewPrescriptionDetail = () => {
    setShowPrescription(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-4">
        {/* Total Price Service */}
        <div className="h-32 rounded-lg bg-gray-200 p-4 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-lg font-semibold">Total Price Services</h1>
            <p className="mt-1 text-gray-600">{pet?.totalPriceInPrescription?.toLocaleString()} VNĐ</p>
          </div>
        </div>

        {/* Prescriptions */}
        <div className="h-32 rounded-lg bg-gray-200 p-4 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-lg font-semibold">Total Price Prescriptions</h1>
            <p className="mt-1 text-gray-600">{pet?.totalPriceInPrescription?.toLocaleString()} VNĐ</p>
          </div>
        </div>
      </div>
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
              <dt className="font-medium text-gray-900">Total Price In Pet</dt>
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
      <PrescriptionModal showPrescription={showPrescription} setShowPrescription={setShowPrescription} prescription={prescription} />
    </div>
  );
};

export default PetDetails;
