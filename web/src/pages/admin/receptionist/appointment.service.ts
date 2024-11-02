import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAppointment } from "../../../types/appoiment.type";

import { APIResponse } from "../../../types/api-response.type";
import { getCookieValue } from "../../../utils/cookie";
import { PageableResponse } from "../../../types/pageable-response";
import { IHospitalService } from "../../../types/hospital-service.type";
import { ISpecie } from "../../../types/specie.type";
import { displayInputDate, displayPlusDate } from "../../../utils/date";

export const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  tagTypes: ["Appointments", "AppointmentsCustomer", "UpcomingAppointments"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    getAppointments: build.query<APIResponse<PageableResponse<IAppointment>>, void>({
      query: () => `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment`,
      providesTags(result) {
        if (result) {
          const final = [
            ...(result.data?.content as IAppointment[]).map(({ id }) => ({
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
      APIResponse<PageableResponse<IAppointment>>,
      { startDate: string; endDate: string }
    >({
      query: ({ startDate, endDate }) => {
        return {
          url: `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment/filter`,
          params: {
            startDate,
            endDate,
            statues: ["CHECKED_IN", "SCHEDULED"]
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
    getAppointmentsByStatus: build.query<APIResponse<IAppointment>, string>({
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
    isCheckin: build.query<APIResponse<IAppointment>, string>({
      query: (body) =>
        `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment/isCheckin/${body}`,
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
        { type: "AppointmentsCustomer" as const, id: "LIST" },
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
        { type: "AppointmentsCustomer" as const, id: "LIST" },
        { type: "UpcomingAppointments" as const, id: "LIST" },
      ],
    }),
    getHospitalService: build.query<APIResponse<IHospitalService>, void>({
      query: () => `${import.meta.env.VITE_APPOINTMENT_PATH}/hospital-service`,
    }),
    getSpecies: build.query<APIResponse<ISpecie>, void>({
      query: () => `${import.meta.env.VITE_APPOINTMENT_PATH}/specie`,
    }),
    getAppointmentByCustomerId: build.query<
      APIResponse<IAppointment>,
      { userId: string | number | null; params: object }
    >({
      query: (body) => {
        return {
          url: `${import.meta.env.VITE_APPOINTMENT_PATH}/appointment/account/${body.userId}`,
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
