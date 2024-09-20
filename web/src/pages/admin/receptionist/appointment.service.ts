import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAppointment } from "../../../types/appoiment.type";

import { APIResponse } from "../../../types/api-response.type";

export const appointmentApi = createApi({
  reducerPath: "clientApi",
  tagTypes: ["Appointments"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    getAppointments: build.query<APIResponse, void>({
      query: () => "appointment",
      providesTags(result) {
        if (result) {
          const final = [
            ...(result.result as IAppointment[]).map(({ id }) => ({
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
    getAppointmentsByStatus: build.query<APIResponse, String>({
      query: (body) => `appointment/status/${body}`,
      providesTags(result) {
        if (result) {
          const final = [
            ...(result.result as IAppointment[]).map(({ id }) => ({
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
    isCheckin: build.query<APIResponse, string>({
      query: (body) => `appointment/isCheckin/${body}`,
    }),
    createAppointment: build.mutation<IAppointment, Omit<IAppointment, "id">>({
      query(body) {
        return {
          url: "customer",
          method: "POST",
          body,
        };
      },
      invalidatesTags: () => [{ type: "Appointments", id: "LIST" }],
    }),
    getHospitalService: build.query<APIResponse, void>({
      query: () => `appointment/hospital-service`,
    }),
  }),
});

export const {
  useGetAppointmentsQuery,
  useGetAppointmentsByStatusQuery,
  useIsCheckinQuery,
  useGetHospitalServiceQuery,
  useCreateAppointmentMutation,
} = appointmentApi;
