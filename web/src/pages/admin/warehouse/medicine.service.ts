// Import necessary functions from Redux Toolkit and types
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse } from "../../../types/api-response.type";
import { ICalculationUnit, ILocation, IManufacture, IMedicine, IMedicinePageResponse } from "../../../types/medicine.type";

// Define the medicineApi slice using createApi to manage medicine-related data
export const medicineApi = createApi({
  reducerPath: "medicineApi", // Name of the slice in the Redux store
  tagTypes: ["Medicines"], // Tags used for cache invalidation specific to Medicines
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL, // Base URL for API requests, set via environment variable
  }),
  endpoints: (build) => ({
    // Endpoint to get a list of all medicines with various filters
    getAllMedicines: build.query<APIResponse<IMedicinePageResponse>, {
      pageNumber?: number;
      pageSize?: number;
      searchTerm?: string;
      manufacturingDate?: string;
      expiryDate?: string;
      status?: string;
      minPrice?: number;
      maxPrice?: number;
      sortBy?: string;
      sortOrder?: string;
      types: string;
    }>({
      query: ({
        pageNumber = 0,
        pageSize = 10,
        searchTerm = "",
        manufacturingDate,
        expiryDate,
        status,
        minPrice,
        maxPrice,
        sortBy = "id",
        sortOrder = "asc",
        types = "MEDICINE",
      }) => {
        // Building query parameters for the request URL
        let queryParams = `pageNumber=${pageNumber}&pageSize=${pageSize}&types=${types}`;

        if (searchTerm) queryParams += `&searchTerm=${encodeURIComponent(searchTerm)}`;
        if (manufacturingDate) queryParams += `&manufacturingDate=${manufacturingDate}`;
        if (expiryDate) queryParams += `&expiryDate=${expiryDate}`;
        if (status) queryParams += `&status=${status}`;
        if (minPrice) queryParams += `&minPrice=${minPrice}`;
        if (maxPrice) queryParams += `&maxPrice=${maxPrice}`;
        queryParams += `&sortBy=${encodeURIComponent(sortBy)}`;
        queryParams += `&sortOrder=${encodeURIComponent(sortOrder)}`;

        // Returning the full URL for the request with query parameters
        return `${import.meta.env.VITE_MEDICINE_PATH}/medicine/filter?${queryParams}`;
      },
      providesTags(result) {
        if (result) {
          // Returning tags for each medicine item and a "LIST" tag to indicate that the list should be refreshed
          const final = [
            ...(result.data.content as IMedicine[]).map(({ id }) => ({
              type: "Medicines" as const,
              id,
            })),
            { type: "Medicines" as const, id: "LIST" },
          ];
          return final;
        }
        return [{ type: "Medicines" as const, id: "LIST" }];
      },
    }),

    // Endpoint to get a list of calculation units for medicine (e.g., dosage units)
    getCaculationunit: build.query<APIResponse<ICalculationUnit>, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/calculation-unit`, // URL for fetching calculation units
    }),

    // Endpoint to get a list of manufacturers of medicines
    getManufacture: build.query<APIResponse<IManufacture>, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/manufacture`, // URL for fetching manufacturers
    }),

    // Endpoint to get a list of locations related to medicines (e.g., storage locations)
    getLocation: build.query<APIResponse<ILocation>, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/location`, // URL for fetching locations
    }),

    // Endpoint to create a new medicine entry
    createMedicine: build.mutation<APIResponse<IMedicine>, any>({
      query(body) {
        // Returning the request configuration for creating a new medicine
        return {
          url: `${import.meta.env.VITE_MEDICINE_PATH}/medicine`, // URL to create a new medicine
          method: "POST", // HTTP POST method
          body: body, // The medicine data to be created
        };
      },
      invalidatesTags: () => [{ type: "Medicines", id: "LIST" }], // Invalidates the cache for the medicine list
    }),

    // Endpoint to update an existing medicine entry
    updateMedicine: build.mutation<APIResponse<IMedicine>, { medicineId: string; updateMedicine: any }>({
      query(body) {
        // Returning the request configuration for updating an existing medicine
        return {
          url: `${import.meta.env.VITE_MEDICINE_PATH}/medicine/${body.medicineId}`, // URL to update the medicine by ID
          method: "PUT", // HTTP PUT method
          body: body.updateMedicine, // The updated medicine data
        };
      },
      invalidatesTags: () => [{ type: "Medicines", id: "LIST" }], // Invalidates the cache for the medicine list
    }),

    // Endpoint to search for medicines with various filters
    searchMedicines: build.query<APIResponse<IMedicinePageResponse>, {
      manufacturingDate?: string;
      expiryDate?: string;
      status?: string;
      minPrice?: number;
      maxPrice?: number;
      page?: number;
      size?: number;
    }>({
      query: ({
        manufacturingDate,
        expiryDate,
        status,
        minPrice,
        maxPrice,
        page = 0,
        size = 10,
      }) => {
        // Constructing query parameters using URLSearchParams for search filters
        const queryParams = new URLSearchParams();
        if (manufacturingDate) queryParams.append("manufacturingDate", manufacturingDate);
        if (expiryDate) queryParams.append("expiryDate", expiryDate);
        if (status) queryParams.append("status", status);
        if (minPrice) queryParams.append("minPrice", minPrice.toString());
        if (maxPrice) queryParams.append("maxPrice", maxPrice.toString());
        queryParams.append("page", page.toString());
        queryParams.append("size", size.toString());

        // Returning the full URL for the search query with parameters
        return `${import.meta.env.VITE_MEDICINE_PATH}/medicine/search?${queryParams.toString()}`;
      },
      providesTags: ["Medicines"], // Provides the "Medicines" tag for cache invalidation
    }),
  }),
});

// Export the hooks for using the above endpoints in components
export const {
  useGetAllMedicinesQuery, // Hook for fetching all medicines with filters
  useCreateMedicineMutation, // Hook for creating a new medicine
  useUpdateMedicineMutation, // Hook for updating an existing medicine
  useGetCaculationunitQuery, // Hook for fetching calculation units
  useGetManufactureQuery, // Hook for fetching manufacturers
  useGetLocationQuery, // Hook for fetching locations
  useSearchMedicinesQuery, // Hook for searching medicines with filters
} = medicineApi;
