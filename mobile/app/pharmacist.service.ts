import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IPrescription } from '../types/prescription.type';
import { Account } from '../types/account.type';
import { LoginRequest } from '../types/login-request.type';

import * as SecureStore from 'expo-secure-store';
import { APIReponse } from '../types/api-response';
export const pharmacistApi = createApi({
    reducerPath: 'pharmacistApi',
    tagTypes: ['Prescriptions'],
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://tsm885rc-8888.asse.devtunnels.ms/api/v1' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mockaron.com/mock/ze9ga5f7xf' }),
    baseQuery: fetchBaseQuery({ baseUrl: 'https://4eb91834-c563-42d9-a020-25d3548eb851.mock.pstmn.io/' }),

    endpoints: build => ({
        getPrescription: build.query<any, void>({
            // query: () => '/medical-prescription-service/prescription',
            query: () => `/medical-prescription-service/prescription`,
            providesTags(result: any) {
                if (result) {
                    const final = [...((result as any)?.data as IPrescription[]).map(({ id }) => ({ type: 'Prescriptions' as const, id })), { type: 'Prescriptions' as const, appointmentId: 'LIST' }]
                    return final;
                }
                const final = [{ type: 'Prescriptions' as const, appointmentId: 'LIST' }]
                return final;
            }
        }),
        getAccount: build.mutation<APIReponse<{ token: any, authenticated: boolean }>, LoginRequest>({
            query: (account) => ({
                // url: "/identity-service/auth/token",
                url: "identity_service/auth/token",
                method: "POST",
                body: account
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    try {
                        await SecureStore.setItemAsync('token', JSON.stringify((data as any)?.data.token));
                    } catch (error) {
                        console.log('Error saving token:', error);
                    }
                }
                catch (err) {
                    console.log("Error: ", err);
                }
            }
        }),
        getPrescriptionById: build.query<APIReponse<IPrescription>, string>({
            query: (id) => `/medical-prescription-service/prescription/${id}`
            // query: (id) => `/medical_prescription_service/prescription/${id}`
        }),
        getPrescriptionByAppointmentId: build.query<APIReponse<IPrescription>, string>({
            query: (id) => `/medical_prescription_service/prescription/${id}/appointment`
        }),
        getAllAccount: build.query<Account[], void>({
            // query: () => "/medical-prescription-service/profile"
            query: () => "/medical_prescription_service/profile"
        }),
        getAccoutById: build.query<APIReponse<Account>, string>({
            query: (id) => `/medical_prescription_service/profile/${id}`
        }),
        createBill: build.mutation<APIReponse<any>, any>({
            query(body) {
                return {
                    url: `/bill-service/invoice`,
                    method: "POST",
                    body
                }
            }

        })
    })
})

export const {
    useGetPrescriptionQuery,
    useCreateBillMutation,
    useGetPrescriptionByIdQuery,
    useGetAccountMutation,
    useGetAllAccountQuery,
    useGetAccoutByIdQuery,
    useGetPrescriptionByAppointmentIdQuery
} = pharmacistApi
