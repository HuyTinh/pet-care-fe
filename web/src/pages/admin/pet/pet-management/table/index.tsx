import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'simple-datatables';
import { saveAs } from 'file-saver';

const ShowListPet = ({ pets }) => {
  const navigate = useNavigate();
  console.log(pets);

  const handleViewDetail = (id) => {
    navigate("/pet-detail", { state: { petId: id } });
  };

  // useEffect(() => {
  //     if (pets && pets.length > 0) {
  //         const dataTable = new DataTable("#search-table", {
  //             searchable: true,
  //             sortable: false,
  //             // perPageSelect: false,
  //             perPage: 2,
  //         });
  //     }
  // }, [pets]);


  const exportData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/management/export', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      saveAs(blob, 'exported-file.xlsx');

    } catch (error) {
      console.error('Error exporting file:', error);
    }
  };

  return (
    <div className="overflow-x-auto rounded-t-lg p-2">
      <div className='float-end bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2'>
        <button onClick={exportData}>Export Excel</button>
      </div>
      <table className="min-w-full divide-y-2 divide-gray-300 bg-white text-sm border" id="search-table">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pet ID</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Customer Name</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pet Name</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pet Age</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pet Weight</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pet Species</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 ">
          {pets?.map(pet => (
            <tr key={pet.petId} className='text-center hover:bg-gray-100'>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">#PT{pet.petId}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.ownerName}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petName}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petAge}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petWeight}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petSpecies}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <button
                  // className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
