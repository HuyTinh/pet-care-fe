import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Importing createApi and fetchBaseQuery from RTK Query
import { APIResponse } from "../../../@typesapi-response.type"; // Importing the APIResponse type for standard API response structure
import { IAppointment } from "../../../@typesappoiment.type"; // Importing IAppointment type for appointments
import { PageableResponse } from "../../../@typespageable-response"; // Importing PageableResponse type for pagination
import { IMedicine, IPrescription } from "../../../@typesprescription.type"; // Importing medicine and prescription types
import { ICalculationUnit } from "../../../@typesmedicine.type"; // Importing the CalculationUnit type for unit management in medicine

export const prescriptionApi = createApi({
  reducerPath: "prescriptionApi", // Defining the reducer path for the slice
  tagTypes: ["Prescriptions", "Appointments"], // Defining the tags used for cache invalidation
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }), // Setting up the base URL for API requests from environment variable
  endpoints: (build) => ({
    // Endpoint to get all prescriptions
    getAllPresctiption: build.query<APIResponse<IPrescription>, void>({
      query: () => `${import.meta.env.VITE_MEDICAL_PRESCRIPTION_PATH}/prescription`, // Fetching all prescriptions
      providesTags(result) {
        if (result) {
          // If data is returned, map the data to tags for cache invalidation
          const final = [
            ...(result.data as any[]).map(({ id }) => ({
              type: "Prescriptions" as const, id, // Adding individual prescription IDs as tags
            })),
            { type: "Prescriptions" as const, id: "LIST" }, // Adding a tag for the list of prescriptions
          ];
          return final;
        }
        const final = [{ type: "Prescriptions" as const, id: "LIST" }]; // Fallback tag when no result
        return final;
      },
    }),

    // Endpoint to filter appointments by date range and status
    filterAppointments: build.query<APIResponse<IAppointment>, { startDate: string; endDate: string; statues: string[] }>({
      query: ({ startDate, endDate, statues }) => {
        return {
          url: `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment/filter`, // Fetching filtered appointments
          params: {
            startDate,
            endDate,
            statues,
          },
        };
      },
      providesTags(result) {
        if (result) {
          // If data is returned, map the data to tags for cache invalidation
          const final = [
            ...(result.data.content as IAppointment[]).map(({ id }) => ({
              type: "Appointments" as const,
              id, // Adding individual appointment IDs as tags
            })),
            { type: "Appointments" as const, id: "LIST" }, // Adding a tag for the list of appointments
          ];
          return final;
        }
        const final = [{ type: "Appointments" as const, id: "LIST" }]; // Fallback tag when no result
        return final;
      },
    }),

    // Endpoint to filter prescriptions by date range and pagination
    filterPrescriptions: build.query<APIResponse<PageableResponse<IPrescription>>, { page: number; startDate?: string; endDate?: string }>({
      query: ({ startDate, endDate, page }) => {
        return {
          url: `${import.meta.env.VITE_MEDICAL_PRESCRIPTION_PATH}/prescription/filter`, // Fetching filtered prescriptions
          params: {
            startDate,
            endDate,
            page,
          },
        };
      },
      providesTags(result) {
        if (result) {
          // If data is returned, map the data to tags for cache invalidation
          const final = [
            ...(result.data.content as any[]).map(({ id }) => ({
              type: "Prescriptions" as const,
              id, // Adding individual prescription IDs as tags
            })),
            { type: "Prescriptions" as const, id: "LIST" }, // Adding a tag for the list of prescriptions
          ];
          return final;
        }
        const final = [{ type: "Prescriptions" as const, id: "LIST" }]; // Fallback tag when no result
        return final;
      },
    }),

    // Endpoint to fetch all calculation units for medicines
    getAllCalculationUnit: build.query<APIResponse<ICalculationUnit>, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/calculation-unit`, // Fetching calculation units
    }),

    // Endpoint to fetch all medicines
    getAllMedicine: build.query<APIResponse<IMedicine>, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/medicine`, // Fetching medicines
    }),

    // Endpoint to create a new prescription
    createPrescription: build.mutation<APIResponse<IPrescription>, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_MEDICAL_PRESCRIPTION_PATH}/prescription`, // Creating new prescription
          method: "POST",
          body, // Request body contains prescription data
        };
      },
      invalidatesTags: () => [
        { type: "Appointments", id: "LIST" }, // Invalidating appointments list cache
        { type: "Prescriptions", id: "LIST" }, // Invalidating prescriptions list cache
      ],
    }),

    // Endpoint to update an existing prescription
    updatePrescription: build.mutation<APIResponse<IPrescription>, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_MEDICAL_PRESCRIPTION_PATH}/prescription/${body.prescriptionId}`, // Updating specific prescription
          method: "PUT",
          body: body.data, // Request body contains updated prescription data
        };
      },
      invalidatesTags: () => [
        { type: "Prescriptions", id: "LIST" }, // Invalidating prescriptions list cache
      ],
    }),

    testTinyMCE: build.mutation<any, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_MEDICAL_PRESCRIPTION_PATH}/prescription/tinyMCE`,
          method: "POST",
          body
        }
      }
    })
  }),
});

// Export hooks for using the API in React components
export const {
  useFilterAppointmentsQuery, // Hook to filter appointments
  useGetAllCalculationUnitQuery, // Hook to get all calculation units
  useGetAllMedicineQuery, // Hook to get all medicines
  useCreatePrescriptionMutation, // Hook to create a prescription
  useGetAllPresctiptionQuery, // Hook to get all prescriptions
  useFilterPrescriptionsQuery, // Hook to filter prescriptions
  useTestTinyMCEMutation
} = prescriptionApi; // Export all the generated hooks from the prescription API
