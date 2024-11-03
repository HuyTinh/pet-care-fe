import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pet } from '../pet-response';
import ShowListPet from '../table';
import PageAble from '../pageable';

const PetManagement: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchPets = async (page: number) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/management/${page}`);
      setPets(response.data.data.petResponses);
      setCurrentPage(response.data.data.currentPage);
      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPets(currentPage);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchPets(page);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative rounded-lg border border-gray-200">
        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          className="w-full ps-2 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
        />
        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      <div className="text-center text-xl font-semibold mb-4">Pet Management</div>
      <div className="rounded-lg border border-gray-200">
        <ShowListPet pets={pets} />
        <PageAble currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default PetManagement;
