import React, { useState } from 'react';
import { ICustomer } from '../../../../@types/customer.type';

export const CustomersManager = () => {
  const customers = [...Array(15)].map((_, index) => ({
    id: index + 1,
    name: 'Nguyen Van A',
    phone: '0123456789',
    email: 'anv01@gmail.com',
    pet: {
      name: 'Buddy',
      weight: '10kg',
      age: '3 years',
      species: 'Dog',
    },
    prescriptions: [
      { medication: 'Aspirin', dosage: '1 pill/day' },
      { medication: 'Ibuprofen', dosage: '1 pill/2 days' },
    ],
  }));

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showPetPopup, setShowPetPopup] = useState(false);
  const [showPrescriptionPopup, setShowPrescriptionPopup] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>();

  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = customers.slice(startIndex, startIndex + itemsPerPage);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDeleteClick = (customer: ICustomer) => {
    setSelectedCustomer(customer);
    setShowDeletePopup(true);
  };

  const confirmDelete = () => {
    console.log('Deleted customer:', selectedCustomer);
    setShowDeletePopup(false);
    setSelectedCustomer(null as any);
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
    setSelectedCustomer(null as any);
  };

  const handlePetClick = (customer: ICustomer) => {
    setSelectedCustomer(customer);
    setShowPetPopup(true);
  };

  const closePetPopup = () => {
    setShowPetPopup(false);
    setSelectedCustomer(null as any);
  };

  const handlePrescriptionClick = (customer: ICustomer) => {
    setSelectedCustomer(customer);
    setShowPrescriptionPopup(true);
  };

  const closePrescriptionPopup = () => {
    setShowPrescriptionPopup(false);
    setSelectedCustomer(null as any);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-28">
      <h1 className="text-2xl font-semibold text-blue-500 mb-4">List Customers</h1>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search by Name, Phone number"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <span className="absolute top-2 right-3 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z"
            />
          </svg>
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Full Name</th>
              <th className="border border-gray-300 p-2">Phone number</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Pet</th>
              <th className="border border-gray-300 p-2">Prescription</th>
              <th className="border border-gray-300 p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((customer) => (
              <tr key={customer.id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">{customer.id}</td>
                <td className="border border-gray-300 p-2">{customer.name}</td>
                <td className="border border-gray-300 p-2">{customer.phone}</td>
                <td className="border border-gray-300 p-2">{customer.email}</td>
                <td
                  className="border border-gray-300 p-2 text-center cursor-pointer"
                  onClick={() => handlePetClick(customer as any)}
                >
                  <span role="img" aria-label="pet">🐾</span>
                </td>
                <td className="border border-gray-300 p-2 text-center cursor-pointer" onClick={() => handlePrescriptionClick(customer as any)}>
                  <span role="img" aria-label="prescription">💊</span>
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    onClick={() => handleDeleteClick(customer as any)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => changePage(currentPage - 1)}
          className="px-3 py-1 border rounded hover:bg-gray-200"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-gray-200' : 'hover:bg-gray-200'
              }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => changePage(currentPage + 1)}
          className="px-3 py-1 border rounded hover:bg-gray-200"
        >
          Next
        </button>
      </div>

      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete?</h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {showPetPopup && selectedCustomer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-[700px]">
            <h2 className="text-lg font-semibold mb-4 text-center">Pet Information</h2>
            <div className='bg-slate-500 p-2 rounded'>
              <div className='flex justify-between'>
                <label className="block mb-2">
                  <strong>Name:</strong>
                  <input
                    type="text"
                    value={(selectedCustomer as any).pet.name}
                    readOnly
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </label>
                <label className="block mb-2">
                  <strong>Weight:</strong>
                  <input
                    type="text"
                    value={(selectedCustomer as any).pet.weight}
                    readOnly
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </label>
              </div>
              <div className='flex justify-between'>
                <label className="block mb-2">
                  <strong>Age:</strong>
                  <input
                    type="text"
                    value={(selectedCustomer as any).pet.age}
                    readOnly
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </label>
                <label className="block mb-2">
                  <strong>Species:</strong>
                  <input
                    type="text"
                    value={(selectedCustomer as any).pet.species}
                    readOnly
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={closePetPopup}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>

        </div>
      )}

      {showPrescriptionPopup && selectedCustomer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-[800px]">
            <h2 className="text-lg font-semibold mb-4 text-center">Prescription and Customer Info</h2>

            <div className="mb-4">
              <h3 className="font-semibold">Customer Info</h3>
              <p><strong>Name:</strong> {(selectedCustomer as any).name}</p>
              <p><strong>Phone:</strong> {(selectedCustomer as any).phone}</p>
              <p><strong>Email:</strong> {selectedCustomer.email}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Pet Info</h3>
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">Weight</th>
                    <th className="border border-gray-300 p-2">Age</th>
                    <th className="border border-gray-300 p-2">Species</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">{(selectedCustomer as any).pet.name}</td>
                    <td className="border border-gray-300 p-2">{(selectedCustomer as any).pet.weight}</td>
                    <td className="border border-gray-300 p-2">{(selectedCustomer as any).pet.age}</td>
                    <td className="border border-gray-300 p-2">{(selectedCustomer as any).pet.species}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Prescription</h3>
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Pet Name</th>
                    <th className="border border-gray-300 p-2">Prescription ID</th>
                    <th className="border border-gray-300 p-2">Create Date</th>
                    <th className="border border-gray-300 p-2">Diagnose</th>
                    <th className="border border-gray-300 p-2">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">{(selectedCustomer as any).pet.name}</td>
                    <td className="border border-gray-300 p-2">10</td>
                    <td className="border border-gray-300 p-2">14/12/2024</td>
                    <td className="border border-gray-300 p-2">Allegy</td>
                    <td className="border border-gray-300 p-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end">
              <button
                onClick={closePrescriptionPopup}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
