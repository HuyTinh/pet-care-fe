import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse } from "../../../types/api-response.type";
import { IPresription } from "../../../types/prescription.type";

export const prescriptionApi = createApi({
  reducerPath: "prescriptionApi",
  tagTypes: ["Prescriptions"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    getAllMedicines: build.query<APIResponse, void>({
      query: () =>
        `${import.meta.env.VITE_MEDICAL_PRESCRIPTION_PATH}/prescription`,
      providesTags(result) {
        if (result) {
          const final = [
            ...(result.data as IPresription[]).map(({ id }) => ({
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
  }),
});

export const { useGetAllMedicinesQuery } = prescriptionApi;
