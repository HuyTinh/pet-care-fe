import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAppointment } from "../../../types/appoiment.type";

import { APIResponse } from "../../../types/api-response.type";
import { getCookieValue } from "../../../utils/cookie";

export const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  tagTypes: ["Appointments", "AppointmentsCustomer"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    getAppointments: build.query<APIResponse, void>({
      query: () => "/appointment-service/appointment",
      providesTags(result) {
        if (result) {
          const final = [
            ...(result.data as IAppointment[]).map(({ id }) => ({
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
    filterAppointments: build.query<
      APIResponse,
      { startDate: string; endDate: string }
    >({
      query: ({ startDate, endDate }) => {
        return {
          url: "/appointment-service/appointment/filter",
          params: {
            startDate,
            endDate,
          },
        };
      },

      providesTags(result) {
        if (result) {
          const final = [
            ...(result.data as IAppointment[]).map(({ id }) => ({
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
            ...(result.data as IAppointment[]).map(({ id }) => ({
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
          url: "/appointment-service/appointment",
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
    updateAppointment: build.mutation<
      IAppointment,
      { appointmentId: string; updateAppointment: any }
    >({
      query(body) {
        return {
          url: `/appointment-service/appointment/${body.appointmentId}`,
          method: "PUT",
          body: body.updateAppointment,
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
            ...(result.data as IAppointment[]).map(({ id }) => ({
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
    getAppointmentById: build.query<APIResponse, { appointmentId: any }>({
      query: (body) => {
        return {
          url: `/appointment-service/appointment/${body.appointmentId}`,
        };
      },
    }),
    generateApointmentPDF: build.mutation<IAppointment, any>({
      query(body) {
        return {
          url: `https://us1.pdfgeneratorapi.com/api/v4/documents/generate`,
          method: "POST",
          headers: {
            Authorization:
              " Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI4YTllNWI3YzRhNmE1Yzk4NzA4MmY2NGI0YzliYjUzODM1NTcyOTRmYjNkZDQ1YWY0ZDVmMjUzNjg4YTM0YjVlIiwic3ViIjoidGluaG50aDE1MTEyMDAzQGdtYWlsLmNvbSIsImV4cCI6MjcyODA4MzM0OH0.Qmk4eGL9RIqS1BgpHeT6zVp7JfVo7HCkU_KoL2u6ZFI",
          },
          body: {
            template: {
              id: "1220484",
              data: {
                appointment_number: body.appointment_number,
                appointment_id: body.appointment_id,
              },
            },
            format: "pdf",
            output: "url",
          },
        };
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
  useFilterAppointmentsQuery,
  useGenerateApointmentPDFMutation,
  useGetAppointmentByIdQuery,
} = appointmentApi;
