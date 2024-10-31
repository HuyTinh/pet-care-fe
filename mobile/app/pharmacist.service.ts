import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IPrescription } from '../types/prescription.type';
import { Account } from '../types/account.type';
import { LoginRequest } from '../types/login-request.type';

import * as SecureStore from 'expo-secure-store';
import { APIReponse } from '../types/api-response';
export const pharmacistApi = createApi({
    reducerPath: 'pharmacistApi',
    tagTypes: ['Post'],
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://tsm885rc-8888.asse.devtunnels.ms/api/v1' }),
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mockaron.com/mock/ze9ga5f7xf' }),
    
    endpoints: build => ({
        getPrescription: build.query<any, void>({
            // query: () => '/medical-prescription-service/prescription',
            query: () => `/medical-prescription-service/getAll`,
            providesTags(result) {
                if (result) {
                    const final = [...((result as any)?.data as IPrescription[]).map(({ id }) => ({ type: 'Post' as const, id })), { type: 'Post' as const, appointmentId: 'LIST' }]
                    return final;
                }
                const final = [{ type: 'Post' as const, appointmentId: 'LIST' }]
                return final;
            }
        }),
        getAccount: build.mutation<APIReponse<{ token: string, authenticated: boolean }>, LoginRequest>({
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
            // query: (id) => `/medical-prescription-service/prescription/${id}`
            query: (id) => `/medical_prescription_service/prescription/${id}`
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
        })
    })
})
export const { useGetPrescriptionQuery, useGetPrescriptionByIdQuery, useGetAccountMutation, useGetAllAccountQuery, useGetPrescriptionByAppointmentIdQuery, useGetAccoutByIdQuery } = pharmacistApi