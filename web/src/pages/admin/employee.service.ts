// Import necessary functions from Redux Toolkit for creating an API slice
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse } from "../../@typesapi-response.type";
import { IEmployee } from "../../@typesemployee.type";
import { setProfile } from "../auth.slice";

// Define the employeeApi using createApi to manage employee-related data
export const employeeApi = createApi({
    reducerPath: "employeeApi", // Name of the slice in the Redux store
    tagTypes: ["Employee"], // Tags used for cache invalidation specific to Employee
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }), // Base query for API requests with dynamic environment URL
    endpoints: (build) => ({
        // Endpoint to get employee profile information
        getEmployeeProfile: build.query<APIResponse<IEmployee>, { userId: string | null }>({
            query(body) {
                // Request to fetch employee profile data by userId
                return {
                    url: `${import.meta.env.VITE_EMPLOYEE_PATH}/employee/account/${body.userId}`, // Dynamic path with userId
                    method: "GET", // HTTP GET method to retrieve the profile
                };
            },
            providesTags(result) {
                // Provides a tag with the employee ID for cache invalidation after fetching data
                return [{ type: "Employee" as const, id: result?.data.id }];
            },
        }),

        // Endpoint to update employee profile information
        updateEmployeeProfile: build.mutation<APIResponse<IEmployee>, { accountId: number, updateData: any }>({
            query: (body) => ({
                url: `${import.meta.env.VITE_EMPLOYEE_PATH}/employee/account/${body.accountId}/soft-update`,
                method: 'PUT',
                body: body.updateData
            }),
            invalidatesTags: (result) => [
                // Invalidates the cached customer data after updating
                { type: "Employee" as const, id: (result as any)?.data.id },
            ],
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled; // Wait for the query to finish
                    const employeeProfile = (data as any)?.data; // Extract token from the response

                    dispatch(setProfile({ profile: employeeProfile }))

                } catch (error) {
                    console.log('Error saving token:', error); // Log any errors
                }
            },
        }),
    }),
});

// Export the generated hooks for using the above endpoints in components
export const {
    useGetEmployeeProfileQuery, // Hook for fetching employee profile
    useUpdateEmployeeProfileMutation, // Hook for updating employee profile
} = employeeApi;
