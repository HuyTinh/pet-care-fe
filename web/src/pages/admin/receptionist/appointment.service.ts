import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAppointment } from "../../../types/appoiment.type";

import { APIResponse } from "../../../types/api-response.type";
import { getCookieValue } from "../../../utils/cookie";

export const appointmentApi = createApi({
  reducerPath: "clientApi",
  tagTypes: ["Appointments", "AppointmentsCustomer"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    getAppointments: build.query<APIResponse, void>({
      query: () => "/appointment-service/appointment",
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
      query: (body) => `/appointment-service/appointment/status/${body}`,
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
      query: (body) => `/appointment-service/appointment/isCheckin/${body}`,
    }),
    createAppointment: build.mutation<IAppointment, any>({
      query(body) {
        return {
          url: "customer/create-appointment",
          method: "POST",
          body,
          params: {
            emailNotification: getCookieValue(
              `email-notification-${body.account_id}`,
            ),
          },
        };
      },
      invalidatesTags: () => [
        { type: "Appointments", id: "LIST" },
        { type: "AppointmentsCustomer" as const, id: "LIST" },
      ],
    }),
    updateAppointment: build.mutation<IAppointment, any>({
      query(body) {
        return {
          url: `/appointment-service/appointment/${body.id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: () => [
        { type: "Appointments", id: "LIST" },
        { type: "AppointmentsCustomer" as const, id: "LIST" },
      ],
    }),
    getHospitalService: build.query<APIResponse, void>({
      query: () => `/appointment-service/hospital-service`,
    }),
    getSpecies: build.query<APIResponse, void>({
      query: () => `/appointment-service/specie`,
    }),
    getAppointmentByCustomerId: build.query<
      APIResponse,
      { userId: string | number | null; params: {} }
    >({
      query: (body) => {
        return {
          url: `/appointment-service/appointment/account/${body.userId}`,
          params: body.params,
        };
      },
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
  useUpdateAppointmentMutation,
  useGetAppointmentByCustomerIdQuery,
  useGetSpeciesQuery,
} = appointmentApi;
