import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Pet } from './pet/Pet.type';
import { Prescription } from './prescription/Prescription.type';
import { PrescriptionDetail } from './prescriptiondetail/PrescriptionDetail.type';
import { Account } from './user/User';

export const pharmacistApi = createApi({
    reducerPath: 'pharmacistApi',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://4eb91834-c563-42d9-a020-25d3548eb851.mock.pstmn.io' }),
    endpoints: build => ({
        getAppointment: build.query<Prescription[], void>({
            query: () => '/prescription',
            providesTags(result) {
                if (result) {
                    const final = [...((result as any)?.data as Prescription[]).map(({ id }) => ({ type: 'Post' as const, id })), { type: 'Post' as const, appointmentId: 'LIST' }]
                    return final;
                }
                const final = [{ type: 'Post' as const, appointmentId: 'LIST' }]
                return final;
            }
        }),
        getAccount: build.query<Account, void>({
            query: () => '/account',
        }),
        getPrescriptionById: build.query<Prescription, string>({
            query: (id) => `/prescription/${id}`
        }),
    })
})
export const { useGetAppointmentQuery, useGetPrescriptionByIdQuery, useGetAccountQuery } = pharmacistApi