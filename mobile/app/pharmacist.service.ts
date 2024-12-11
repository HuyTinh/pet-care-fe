import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';
import { pharmacistProfileId } from './pharmacist.slice';

// Importing types used in the API slice
import { IPrescription } from '../@types/prescription.type';
import { IAccount } from '../@types/account.type';
import { LoginRequest } from '../@types/login-request.type';
import { APIReponse } from '../@types/api-response.type';
import { IJwtPayload } from '@/@types/jwt-payload.type';

// Creating the pharmacist API slice using Redux Toolkit's `createApi`
export const pharmacistApi = createApi({
    reducerPath: 'pharmacistApi', // Name for the API slice in the Redux store
    tagTypes: ['Prescriptions', 'Employee'], // Define the tags used for cache invalidation related to prescriptions
    baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }), // Set the base URL for API requests from environment variables
    endpoints: (build) => ({
        // Endpoint to fetch all prescriptions
        getPrescription: build.query<APIReponse<IPrescription>, void>({
            query: () => `${process.env.EXPO_PUBLIC_MEDICAL_PRESCRIPTION_PATH}/prescription`, // API URL to fetch prescriptions
            providesTags: (result) => {
                if (result) {
                    // If the result exists, map prescription IDs to cache tags
                    return [
                        ...((result as APIReponse<IPrescription>)?.data as IPrescription[]).map(({ id }) => ({
                            type: 'Prescriptions' as const,
                            id,
                        })),
                        { type: 'Prescriptions' as const, appointmentId: 'LIST' }, // Cache tag for the entire list of prescriptions
                    ];
                }
                return [{ type: 'Prescriptions' as const, appointmentId: 'LIST' }]; // Default cache tag if no result
            },
        }),

        // Endpoint for login request (authentication)
        loginRequest: build.mutation<APIReponse<{ token: string; authenticated: boolean }>, LoginRequest>({
            query: (account) => ({
                url: `${process.env.EXPO_PUBLIC_IDENTITY_PATH}/auth/token`, // URL to request authentication token
                method: 'POST', // POST request method
                body: account, // Send login credentials in the request body
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled; // Wait for the query to finish
                    const token = (data as any)?.data.token; // Extract token from the response

                    // Store token securely using Expo's SecureStore
                    await SecureStore.setItemAsync('token', JSON.stringify(token));

                    // Decode the JWT token to get user information
                    const decodedPayload = jwtDecode<IJwtPayload>(JSON.stringify(token));

                    // Dispatch an action to store user information in the Redux store
                    dispatch(pharmacistProfileId(decodedPayload.user_id));
                } catch (error) {
                    console.log('Error saving token:', error); // Log any errors
                }
            },
        }),

        // Endpoint to fetch a prescription by its ID
        getPrescriptionById: build.query<APIReponse<IPrescription>, string>({
            query: (id) => `${process.env.EXPO_PUBLIC_MEDICAL_PRESCRIPTION_PATH}/prescription/${id}`, // Fetch prescription by ID
        }),

        // Endpoint to fetch employee details by account ID
        getEmployeeByAccountId: build.query<APIReponse<IAccount>, string>({
            query: (accountId) => `${process.env.EXPO_PUBLIC_EMPLOYEE_PATH}/employee/account/${accountId}`, // API URL to fetch employee by account ID
            providesTags(result) {
                // Provides a tag with the customer ID to manage cache invalidation
                return [{ type: "Employee" as const, id: (result as any)?.data?.id }];
            },
        }),

        // Endpoint to soft update employee profile
        softUpdateProfile: build.mutation<APIReponse<IAccount>, { accountId: number, updateData: any }>({
            query: (body) => ({
                url: `${process.env.EXPO_PUBLIC_EMPLOYEE_PATH}/employee/account/${body.accountId}/soft-update`,
                method: 'PUT',
                body: body.updateData
            }),
            invalidatesTags: (result) => [
                // Invalidates the cached customer data after updating
                { type: "Employee" as const, id: (result as any)?.data.id },
            ],
        }),

        // Endpoint to create a new bill
        createBill: build.mutation<APIReponse<any>, any>({
            query: (body) => ({
                url: `${process.env.EXPO_PUBLIC_BILL_PATH}/invoice`, // URL to create an invoice (bill)
                method: 'POST', // POST method for creating a bill
                body, // Request body containing the bill details
            }),
        }),
    }),
});

// Export hooks for each endpoint, which can be used in React components
export const {
    useGetPrescriptionQuery, // Hook for fetching prescriptions
    useCreateBillMutation, // Hook for creating a bill
    useGetPrescriptionByIdQuery, // Hook for fetching a prescription by ID
    useLoginRequestMutation, // Hook for initiating a login request
    useSoftUpdateProfileMutation,
    useGetEmployeeByAccountIdQuery, // Hook for fetching employee details by account ID
} = pharmacistApi;