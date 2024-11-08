import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'simple-datatables';

const ShowListPet = ({ pets }) => {
  // declare navi
  const navigate = useNavigate();

  // click button view detail => navi
  const handleViewDetail = (id) => {
    navigate("/pet-detail", { state: { petId: id } });
  };

  // sort
  useEffect(() => {
    if (pets && pets.length > 0) {
      const dataTable = new DataTable("#default-table", {
        searchable: false,
        perPageSelect: false
      });
    }
  }, [pets]);

  return (
    <div className="overflow-x-auto rounded-t-lg p-2">
      <table className="min-w-full divide-y-2 divide-gray-300 bg-white text-sm border" id="default-table">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <span className="flex items-center">
                Pet ID
                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                </svg>
              </span>
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <span className="flex items-center">
                Customer Name
                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                </svg>
              </span>
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <span className="flex items-center">
                Pet Name
                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                </svg>
              </span>
            </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <span className="flex items-center">
                Pet Age
                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                </svg>
              </span>
            </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <span className="flex items-center">
                Pet Weight
                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                </svg>
              </span>
            </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <span className="flex items-center">
                Pet Species
                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                </svg>
              </span>
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 ">
          {pets?.map(pet => (
            <tr key={pet.petId} className=' hover:bg-gray-100'>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">#PT{pet.petId}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.ownerName}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petName}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petAge}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petWeight}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petSpecies}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <button
                  className="btn btn-primary text-white p-2 rounded hover:bg-blue-600"
                  onClick={() => handleViewDetail(pet.petId)}
                >
                  View Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowListPet;
