import React from 'react'
import { useNavigate } from 'react-router-dom';

const ShowListPet = ({ pets }) => {

    const navigate = useNavigate();

    const handleViewDetail = (id) => {
        navigate("/pet-detail", { state: { petId: id } });
    };
    return (
        <div className="overflow-x-auto rounded-t-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">STT</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Customer Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pet Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pet Age</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pet Weight</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pet Species</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {pets?.map((pet, index) => (
                        <tr key={pet.petId} className='text-center'>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{index + 1}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.ownerName}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petName}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petAge}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petWeight}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{pet.petSpecies}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <button
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
    )
}

export default ShowListPet
