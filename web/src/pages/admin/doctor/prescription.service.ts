import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse } from "../../../types/api-response.type";
import { IAppointment } from "../../../types/appoiment.type";

export const prescriptionApi = createApi({
  reducerPath: "prescriptionApi",
  tagTypes: ["Prescriptions", "Appointments"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    getAllPresctiption: build.query<APIResponse, void>({
      query: () => `${import.meta.env.VITE_MEDICAL_PRESCRIPTION_PATH}/prescription`,
      providesTags(result) {
        if (result) {
          const final = [
            ...(result.data as any[]).map(({ id }) => ({
              type: "Prescriptions" as const,
              id,
            })),
            { type: "Prescriptions" as const, id: "LIST" },
          ];
          return final;
        }
        const final = [{ type: "Prescriptions" as const, id: "LIST" }];
        return final;
      },
    }),
    filterAppointments: build.query<
      APIResponse,
      { startDate: string; endDate: string; statues: string[] }
    >({
      query: ({ startDate, endDate, statues }) => {
        return {
          url: `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment/filter`,
          params: {
            startDate,
            endDate,
            statues,
          },
        };
      },

      providesTags(result) {
        if (result) {
          const final = [
            ...(result.data as IAppointment[]).map(({ id }) => ({
              type: "Appointments" as const,
              id,
            })),
            { type: "Appointments" as const, id: "LIST" },
          ];
          return final;
        }
        const final = [{ type: "Appointments" as const, id: "LIST" }];
        return final;
      },
    }),
    getAllCalculationUnit: build.query<APIResponse, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/calculation-unit`,
    }),
    getAllMedicine: build.query<APIResponse, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/medicine`,
    }),
    createPrescription: build.mutation<APIResponse, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_MEDICAL_PRESCRIPTION_PATH}/prescription`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: () => [
        { type: "Appointments", id: "LIST" },
      ],
    })
  }),
});

export const {
  useFilterAppointmentsQuery,
  useGetAllCalculationUnitQuery,
  useGetAllMedicineQuery,
  useCreatePrescriptionMutation,
  useGetAllPresctiptionQuery
} = prescriptionApi;
