import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse } from "../../../types/api-response.type";
import { IAppointment } from "../../../types/appoiment.type";
import { PageableResponse } from "../../../types/pageable-response";
import { IMedicine, IPrescription } from "../../../types/prescription.type";
import { ICalculationUnit } from "../../../types/medicine.type";

export const prescriptionApi = createApi({
  reducerPath: "prescriptionApi",
  tagTypes: ["Prescriptions", "Appointments"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    getAllPresctiption: build.query<APIResponse<IPrescription>, void>({
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
      APIResponse<IAppointment>,
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
            ...(result.data.content as IAppointment[]).map(({ id }) => ({
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
    filterPrescriptions: build.query<APIResponse<PageableResponse<IPrescription>>,
      { page: number, startDate?: string; endDate?: string }
    >({
      query: ({ startDate, endDate, page }) => {
        return {
          url: `${import.meta.env.VITE_MEDICAL_PRESCRIPTION_PATH}/prescription/filter`,
          params: {
            startDate,
            endDate,
            page,
          },
        };
      },

      providesTags(result) {
        if (result) {
          const final = [
            ...(result.data.content as any[]).map(({ id }) => ({
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
    getAllCalculationUnit: build.query<APIResponse<ICalculationUnit>, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/calculation-unit`,
    }),
    getAllMedicine: build.query<APIResponse<IMedicine>, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/medicine`,
    }),
    createPrescription: build.mutation<APIResponse<IPrescription>, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_MEDICAL_PRESCRIPTION_PATH}/prescription`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: () => [
        { type: "Appointments", id: "LIST" },
        { type: "Prescriptions", id: "LIST" }
      ],
    }),
    updatePrescription: build.mutation<APIResponse<IPrescription>, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_MEDICAL_PRESCRIPTION_PATH}/prescription/${body.prescriptionId}`,
          method: "PUT",
          body: body.data,
        };
      },
      invalidatesTags: () => [
        { type: "Prescriptions", id: "LIST" }
      ],
    })
  }),
});

export const {
  useFilterAppointmentsQuery,
  useGetAllCalculationUnitQuery,
  useGetAllMedicineQuery,
  useCreatePrescriptionMutation,
  useGetAllPresctiptionQuery,
  useFilterPrescriptionsQuery
} = prescriptionApi;
