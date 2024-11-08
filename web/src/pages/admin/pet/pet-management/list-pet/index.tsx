import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pet } from '../pet-response';
import ShowListPet from '../table';
import PageAble from '../pageable';
import { saveAs } from 'file-saver';
import FilterComponent from '../modal/filter';

const PetManagement: React.FC = () => {
  // set list pets, loop table
  const [pets, setPets] = useState<Pet[]>([]);
  // set current page when first call api and can update in func
  const [currentPage, setCurrentPage] = useState(1);
  // set value search
  const [searchValue, setSearchValue] = useState("");
  // set total page
  const [totalPages, setTotalPages] = useState(0);
  // set search by => filter
  const [searchBy, setSearchBy] = React.useState([]);

  // set Filter
  const handleSetFilter = (e) =>{
      const field = e.target.id;
      setSearchBy(check =>{
          if(check.includes(field))
          {
              return searchBy.filter(f => f !== field)
          }
          else{
              return [...check, field]
          }
      })
  }

  // action call api pet management service => search
  const handleSearch = async () =>{
      try {
          const request = {
              "fieldSearch": searchBy,
              "valueSearch": searchValue
          }
          const response = await axios.post('http://localhost:8080/api/v1/management/getByAny', request);
          if(response.status === 200)
          {
              setSearchValue("");
              setPets(response.data.data)
          }
      } catch (error) {
          console.log(error);
      }
  }

  // ferch data, pageable
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

  // fetch lần 1
  useEffect(() => {
    fetchPets(currentPage);
  }, []);

  // when you action in table, it call func
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchPets(page);
  };

  // export excel
  const exportData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/management/export', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      saveAs(blob, 'exported-file.xlsx'); // file name

    } catch (error) {
      console.error('Error exporting file:', error);
    }
  };
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap items-center justify-between gap-5">
        {/* Search Bar */}
        <div className="relative flex-1 min-w-[300px] rounded-lg border border-gray-200">
          <input
            type="text"
            id="Search"
            placeholder="Tìm kiếm"
            className="w-full ps-2 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"

            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}

          />
          <span className="absolute inset-y-0 right-0 grid w-10 place-content-center"

            onClick={handleSearch}
            
            >
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
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

        <div className="flex gap-3">
          <FilterComponent handleSetFilter={handleSetFilter} searchBy={searchBy} />
          <button className="btn btn-primary" onClick={exportData}>Export Excel</button>
        </div>
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
