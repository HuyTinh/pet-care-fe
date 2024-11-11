import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse } from "../../../types/api-response.type";
import { IMedicine, MedicinePageResponse } from "../../../types/medicine.type";

export const medicineApi = createApi({
  reducerPath: "medicineApi",
  tagTypes: ["Medicines"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    getAllMedicines: build.query<
      APIResponse<MedicinePageResponse>,
      {
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
      }
    >({
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
        let queryParams = `pageNumber=${pageNumber}&pageSize=${pageSize}&types=${types}`;

        if (searchTerm)
          queryParams += `&searchTerm=${encodeURIComponent(searchTerm)}`;
        if (manufacturingDate)
          queryParams += `&manufacturingDate=${manufacturingDate}`;
        if (expiryDate) queryParams += `&expiryDate=${expiryDate}`;
        if (status) queryParams += `&status=${status}`;
        if (minPrice) queryParams += `&minPrice=${minPrice}`;
        if (maxPrice) queryParams += `&maxPrice=${maxPrice}`;
        queryParams += `&sortBy=${encodeURIComponent(sortBy)}`;
        queryParams += `&sortOrder=${encodeURIComponent(sortOrder)}`;

        return `${import.meta.env.VITE_MEDICINE_PATH}/medicine?${queryParams}`;
      },
      providesTags(result) {
        if (result) {
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
