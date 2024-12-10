import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAppointment } from "../../../@types/appoiment.type";

import { APIResponse } from "../../../@types/api-response.type";
import { getCookieValue } from "../../../shared/helped/cookie";
import { PageableResponse } from "../../../@types/pageable-response";
import { ISpecie } from "../../../@types/specie.type";
import { displayInputDate, displayPlusDate } from "../../../shared/helped/date";

export const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  tagTypes: ["Appointments", "CustomerAppointments", "UpcomingAppointments"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL, credentials: "include" }),
  endpoints: (build) => ({
    filterAppointments: build.query<
      APIResponse<PageableResponse<IAppointment>>,
      { startDate?: String; endDate?: String, page: number, statues?: string[], accountId?: number }
    >({
      query: ({ startDate, endDate, page, statues, accountId }) => {
        return {
          url: `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment/filter`,
          params: {
            startDate,
            endDate,
            statues,
            page,
            accountId
          },
        };
      },

      providesTags(result) {
        if (result) {
          const final = [
            ...(result.data.content as IAppointment[]).map(({ id }) => ({
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
    getAllAppointment: build.query<
      APIResponse<PageableResponse<IAppointment>>,
      { statues: String[], page: number, userId: String }
    >({
      query: ({ statues, page, userId }) => {
        return {
          url: `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment/status`,
          params: statues.length === 1 && statues[0] === "SCHEDULED" ? {
            startDate: displayInputDate(new Date()),
            endDate: displayInputDate(displayPlusDate(new Date(), 3)),
            statues,
            page,
            userId
          } : {
            statues,
            page,
            userId
          },
        };
      },

      providesTags(result) {
        if (result) {
          const final = [
            ...(result.data.content as IAppointment[]).map(({ id }) => ({
              type: "CustomerAppointments" as const,
              id,
            })),
            { type: "CustomerAppointments" as const, id: "LIST" },
          ];
          return final;
        }
        const final = [{ type: "CustomerAppointments" as const, id: "LIST" }];
        return final;
      },
    }),
    getUpcomingAppointments: build.query<
      APIResponse<PageableResponse<IAppointment>>,
      void
    >({
      query: () => {
        return {
          url: `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment/filter`,
          params: {
            start_date: displayInputDate(new Date()),
            endDate: displayInputDate(displayPlusDate(new Date(), 2)),
            statues: ["SCHEDULED"]
          },
        };
      },
      providesTags(result) {
        if (result) {
          const final = [
            ...(result.data.content as IAppointment[]).map(({ id }) => ({
              type: "UpcomingAppointments" as const,
              id,
            })),
            { type: "UpcomingAppointments" as const, id: "LIST" },
          ];
          return final;
        }
        const final = [{ type: "UpcomingAppointments" as const, id: "LIST" }];
        return final;
      },
    }),
    cancelAppointment: build.mutation<any, number>({
      query(appointmentId) {
        return {
          url: `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment/cancel/${appointmentId}`,
          method: "POST",
        };
      },
      invalidatesTags: () => [
        { type: "Appointments", id: "LIST" },
        { type: "CustomerAppointments" as const, id: "LIST" },
        { type: "UpcomingAppointments" as const, id: "LIST" },
      ],
    }),
    createAppointment: build.mutation<APIResponse<IAppointment>, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment`,
          method: "POST",
          body,
          params: {
            emailNotification: getCookieValue(
              `email-notification-${body.account_id}`,
            ) || false,
          },
        };
      },
      invalidatesTags: () => [
        { type: "Appointments", id: "LIST" },
        { type: "CustomerAppointments" as const, id: "LIST" },
        { type: "UpcomingAppointments" as const, id: "LIST" },
      ],
    }),
    updateAppointment: build.mutation<
      APIResponse<IAppointment>,
      { appointmentId: string; updateAppointment: any }
    >({
      query(body) {
        return {
          url: `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment/${body.appointmentId}`,
          method: "PUT",
          body: body.updateAppointment,
        };
      },
      invalidatesTags: () => [
        { type: "Appointments", id: "LIST" },
        { type: "CustomerAppointments" as const, id: "LIST" },
        { type: "UpcomingAppointments" as const, id: "LIST" },
      ],
    }),
    getSpecies: build.query<APIResponse<ISpecie>, void>({
      query: () => `${import.meta.env.VITE_APPOINTMENT_PATH}/specie`,
    }),
    getAppointmentById: build.query<APIResponse<IAppointment>, { appointmentId: any }>({
      query: (body) => {
        return {
          url: `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment/${body.appointmentId}`,
        };
      },
    }),
    generateApointmentPDF: build.mutation<IAppointment, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_PDF_GENERATE_PATH}`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PDF_GENERATE_JWT}`,
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
  useGetUpcomingAppointmentsQuery,
  useCreateAppointmentMutation,
  useUpdateAppointmentMutation,
  useGetSpeciesQuery,
  useCancelAppointmentMutation,
  useFilterAppointmentsQuery,
  useGetAllAppointmentQuery,
  useGenerateApointmentPDFMutation,
  useGetAppointmentByIdQuery,
} = appointmentApi;
