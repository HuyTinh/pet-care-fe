import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const prescriptionApi = createApi({
  reducerPath: "prescriptionApi",
  tagTypes: ["Prescriptions", "PrescriptionsCustomer"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({}),
});

export const {} = prescriptionApi;
