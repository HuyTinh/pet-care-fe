import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAppointment } from "../../../types/appoiment.type";

import { APIResponse } from "../../../types/api-response.type";

export const appointmentApi = createApi({
  reducerPath: "clientApi",
  tagTypes: ["Appointments", "AppointmentsCustomer"],
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
    createAppointment: build.mutation<IAppointment, any>({
      query(body) {
        return {
          url: "customer/create-appointment",
          method: "POST",
          body,
        };
      },
      invalidatesTags: () => [
        { type: "Appointments", id: "LIST" },
        { type: "AppointmentsCustomer" as const, id: "LIST" },
      ],
    }),
    getHospitalService: build.query<APIResponse, void>({
      query: () => `appointment/hospital-service`,
    }),
    getAppointmentByCustomerId: build.query<
      APIResponse,
      { userId: string | number | null }
    >({
      query: (body) => `appointment/account/${body.userId}`,
      providesTags(result) {
        if (result) {
          const final = [
            ...(result.result as IAppointment[]).map(({ id }) => ({
              type: "AppointmentsCustomer" as const,
              id,
            })),
            { type: "AppointmentsCustomer" as const, id: "LIST" },
          ];
          return final;
        }
        const final = [{ type: "AppointmentsCustomer" as const, id: "LIST" }];
        return final;
      },
    }),
  }),
});

export const {
  useGetAppointmentsQuery,
  useGetAppointmentsByStatusQuery,
  useIsCheckinQuery,
  useGetHospitalServiceQuery,
  useCreateAppointmentMutation,
  useGetAppointmentByCustomerIdQuery,
} = appointmentApi;
