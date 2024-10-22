import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse } from "../../../types/api-response.type";
import { IMedicine } from "../../../types/medicine.type";

export const medicineApi = createApi({
  reducerPath: "medicineApi",
  tagTypes: ["Medicines"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    getAllMedicines: build.query<APIResponse, void>({
      // query: () => `${import.meta.env.VITE_MEDICINE_PATH}/warehouse`,
      query: () => "warehouse",
      providesTags(result) {
        if (result) {
          console.log("result: ",result);
          
          const final = [
            ...(result.data as IMedicine[]).map(({ id }) => ({
              type: "Medicines" as const,
              id,
            })),
            { type: "Medicines" as const, id: "LIST" },
          ];
          return final;
        }
        const final = [{ type: "Medicines" as const, id: "LIST" }];
        return final;
      },
    }),
    getCaculationunit: build.query<APIResponse, void>({
      query: () => "unit",
    }),
    createMedicine: build.mutation<APIResponse, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_MEDICINE_PATH}/medicine`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: () => [{ type: "Medicines", id: "LIST" }],
    }),
    updateMedicine: build.mutation<
      APIResponse,
      { medicineId: string; updateMedicine: any }
    >({
      query(body) {
        return {
          url: `${import.meta.env.VITE_MEDICINE_PATH}/medicine/${body.medicineId}`,
          method: "PUT",
          body: body.updateMedicine,
        };
      },
      invalidatesTags: () => [{ type: "Medicines", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllMedicinesQuery,
  useCreateMedicineMutation,
  useUpdateMedicineMutation,
  useGetCaculationunitQuery
} = medicineApi;
