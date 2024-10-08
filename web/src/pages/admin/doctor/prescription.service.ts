import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse } from "../../../types/api-response.type";
import { IPresription } from "../../../types/prescription.type";

export const prescriptionApi = createApi({
  reducerPath: "prescriptionApi",
  tagTypes: ["Prescriptions"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    getAllMedicines: build.query<APIResponse, void>({
      query: () => "/prescription-service/prescription",
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
    createMedicine: build.mutation<APIResponse, any>({
      query(body) {
        return {
          url: "/medicine-service/medicine",
          method: "POST",
          body,
        };
      },
      invalidatesTags: () => [{ type: "Prescriptions", id: "LIST" }],
    }),
    updateMedicine: build.mutation<
      APIResponse,
      { prescriptionId: string; updatePrescription: any }
    >({
      query(body) {
        return {
          url: `/medicine-service/medicine/${body.prescriptionId}`,
          method: "PUT",
          body: body.updatePrescription,
        };
      },
      invalidatesTags: () => [{ type: "Prescriptions", id: "LIST" }],
    }),
  }),
});

export const { useGetAllMedicinesQuery, useCreateMedicineMutation } =
  prescriptionApi;
