import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Appointment } from './appointment/Appointment.type';
import { AppointmentDetail } from './appointmentdetail/AppointmentDetail.type';
import { Pet } from './pet/Pet.type';
import { Prescription } from './prescription/Prescription.type';
import { PrescriptionDetail } from './prescriptiondetail/PrescriptionDetail.type';

export const pharmacistApi = createApi({
    reducerPath: 'pharmacistApi',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://3jcptkt8-8080.asse.devtunnels.ms/api/v1' }),
    endpoints: build => ({
        getAppointment: build.query<Appointment[], void>({
            query: () => '/appointment',
            providesTags(result) {
                if (result) {
                    const final = [...((result as any)?.data as Appointment[]).map(({ appointmentId }) => ({ type: 'Post' as const, appointmentId })), { type: 'Post' as const, appointmentId: 'LIST' }]
                    return final;
                }
                const final = [{ type: 'Post' as const, appointmentId: 'LIST' }]
                return final;
            }
        }),
        getAppointmentById: build.query<Appointment[], string>({
            query: (id) => `/appointment_detail/${id}`
        }),
    })
})
export const { useGetAppointmentQuery, useGetAppointmentByIdQuery } = pharmacistApi