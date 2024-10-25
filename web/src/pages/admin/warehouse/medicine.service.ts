import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse } from "../../../types/api-response.type";
import { IMedicine } from "../../../types/medicine.type";

export const medicineApi = createApi({
  reducerPath: "medicineApi",
  tagTypes: ["Medicines"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL_LOCAL_DEV4LIFE,
  }),
  endpoints: (build) => ({
    getAllMedicines: build.query<APIResponse, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/medicine`,
      // query: () => "warehouse",
      providesTags(result) {
        if (result) {
          console.log("result: ", result);

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
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/calculation-unit`,
      // query: () => "unit",
    }),
    getManufacture: build.query<APIResponse, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/manufacture`,
    }),
    getLocation: build.query<APIResponse, void>({
      query: () => `${import.meta.env.VITE_MEDICINE_PATH}/location`,
    }),
    createMedicine: build.mutation<APIResponse, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_MEDICINE_PATH}/medicine`,
          method: "POST",
          body: body,
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
    searchMedicines: build.query<
      APIResponse,
      {
        manufacturingDate?: string; // Ngày sản xuất (dạng chuỗi)
        expiryDate?: string; // Ngày hết hạn (dạng chuỗi)
        status?: string; // Trạng thái
        minPrice?: number; // Giá tối thiểu
        maxPrice?: number; // Giá tối đa
        page?: number; // Số trang
        size?: number; // Kích thước trang
      }
    >({
      query: ({
        manufacturingDate,
        expiryDate,
        status,
        minPrice,
        maxPrice,
        page = 0,
        size = 10,
      }) => {
        const queryParams = new URLSearchParams();
        if (manufacturingDate)
          queryParams.append("manufacturingDate", manufacturingDate);
        if (expiryDate) queryParams.append("expiryDate", expiryDate);
        if (status) queryParams.append("status", status);
        if (minPrice) queryParams.append("minPrice", minPrice.toString());
        if (maxPrice) queryParams.append("maxPrice", maxPrice.toString());
        queryParams.append("page", page.toString());
        queryParams.append("size", size.toString());

        return `${import.meta.env.VITE_MEDICINE_PATH}/medicine/search?${queryParams.toString()}`;
      },
      providesTags: ["Medicines"],
    }),
  }),
});

export const {
  useGetAllMedicinesQuery,
  useCreateMedicineMutation,
  useUpdateMedicineMutation,
  useGetCaculationunitQuery,
  useGetManufactureQuery,
  useGetLocationQuery,
  useSearchMedicinesQuery,
} = medicineApi;
