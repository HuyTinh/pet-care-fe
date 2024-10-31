import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IPrescription } from '../types/prescription.type';
import { Account } from '../types/account.type';
import { LoginRequest } from '../types/login-request.type';

import * as SecureStore from 'expo-secure-store';
import { APIReponse } from '../types/api-response';
export const pharmacistApi = createApi({
    reducerPath: 'pharmacistApi',
    tagTypes: ['Prescriptions'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tsm885rc-8888.asse.devtunnels.ms/api/v1' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://tsm885rc-8888.asse.devtunnels.ms/api/v1' }),
    endpoints: build => ({
        getPrescription: build.query<APIReponse<IPrescription[]>, void>({
            query: () => '/medical-prescription-service/prescription',

            providesTags(result) {

                if (result) {
                    const final = [...((result as any)?.data as IPrescription[]).map(({ id }) => ({ type: 'Prescriptions' as const, id })), { type: 'Prescriptions' as const, appointmentId: 'LIST' }]
                    return final;
                }
                const final = [{ type: 'Prescriptions' as const, appointmentId: 'LIST' }]
                return final;
            }
        }),
        getAccount: build.mutation<APIReponse<{ token: string, authenticated: boolean }>, LoginRequest>({
            query: (account) => ({
                url: "/identity-service/auth/token",
                method: "POST",
                body: account
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    try {
                        await SecureStore.setItemAsync('token', JSON.stringify((data as any)?.data.token));
                        const token = await SecureStore.getItemAsync('token');
                        console.log(token);
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
        }),
        getPrescriptionByAppointmentId: build.query<APIReponse<IPrescription>, string>({
            query: (id) => `/medical-prescription-service/prescription/${id}/appointment`
        }),
        getAllAccount: build.query<Account[], void>({
            query: () => "/account"
        })
    })
})
export const {
    useGetPrescriptionQuery,
    useGetPrescriptionByIdQuery,
    useGetAccountMutation,
    useGetAllAccountQuery,
    useGetPrescriptionByAppointmentIdQuery
} = pharmacistApi