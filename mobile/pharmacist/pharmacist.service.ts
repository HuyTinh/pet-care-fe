import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Pet } from './pet/Pet.type';
import { Prescription } from './prescription/Prescription.type';
import { PrescriptionDetail } from './prescriptiondetail/PrescriptionDetail.type';
import { Account } from './user/User';
import { LoginRequest } from './user/LoginRequest';
import { LoginReponse } from './user/LoginReponse';
import * as SecureStore from 'expo-secure-store';
import { isRemember } from './prescription';
export const pharmacistApi = createApi({
    reducerPath: 'pharmacistApi',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://4eb91834-c563-42d9-a020-25d3548eb851.mock.pstmn.io' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://tsm885rc-8888.asse.devtunnels.ms/api/v1' }),
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
        getAccount: build.mutation<LoginReponse, LoginRequest>({
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
        getPrescriptionById: build.query<Prescription, string>({
            query: (id) => `/prescription/${id}`
        }),
        getAllAccount : build.query<Account[], void>({
            query: () => "/account"
        })
    })
})
export const { useGetAppointmentQuery, useGetPrescriptionByIdQuery, useGetAccountMutation, useGetAllAccountQuery } = pharmacistApi