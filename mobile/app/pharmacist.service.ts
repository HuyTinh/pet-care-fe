import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IPrescription } from '../types/prescription.type';
import { Account } from '../types/account.type';
import { LoginRequest } from '../types/login-request.type';

import * as SecureStore from 'expo-secure-store';
import { APIReponse } from '../types/api-response';
export const pharmacistApi = createApi({
    reducerPath: 'pharmacistApi',
    tagTypes: ['Prescriptions'],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mockaron.com/mock/ze9ga5f7xf' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://4eb91834-c563-42d9-a020-25d3548eb851.mock.pstmn.io/' }),

    endpoints: build => ({
        getPrescription: build.query<APIReponse<IPrescription>, void>({
            // query: () => '/medical-prescription-service/prescription',
            query: () => `${process.env.EXPO_PUBLIC_MEDICAL_PRESCRIPTION_PATH}/prescription`,
            providesTags(result) {
                if (result) {
                    const final = [...((result as APIReponse<IPrescription>)?.data as IPrescription[]).map(({ id }) => ({ type: 'Prescriptions' as const, id })), { type: 'Prescriptions' as const, appointmentId: 'LIST' }]
                    return final;
                }
                const final = [{ type: 'Prescriptions' as const, appointmentId: 'LIST' }]
                return final;
            }
        }),
        loginRequest: build.mutation<APIReponse<{ token: string, authenticated: boolean }>, LoginRequest>({
            query: (account) => ({
                url: `${process.env.EXPO_PUBLIC_IDENTITY_PATH}/auth/token`,
                // url: "identity_service/auth/token",
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
            query: (id) => `${process.env.EXPO_PUBLIC_MEDICAL_PRESCRIPTION_PATH}/prescription/${id}`
            // query: (id) => `/medical_prescription_service/prescription/${id}`
        }),
        getAccountById: build.query<APIReponse<Account>, string>({
            query: (accountId) => `${process.env.EXPO_PUBLIC_EMPLOYEE_PATH}/account/${accountId}`
        }),
        createBill: build.mutation<APIReponse<any>, any>({
            query(body) {
                return {
                    url: `${process.env.EXPO_PUBLIC_BILL_PATH}/invoice`,
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
    useLoginRequestMutation,
    useGetAccountByIdQuery,
} = pharmacistApi
