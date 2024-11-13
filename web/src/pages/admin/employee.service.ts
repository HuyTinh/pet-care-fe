// Import necessary functions from Redux Toolkit for creating an API slice
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse } from "../../types/api-response.type";
import { IEmployee } from "../../types/employee.type";

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
        updateEmployeeProfile: build.mutation<APIResponse<IEmployee>, { userId: string | null; data: any }>({
            query(body) {
                // Request to update employee profile data by userId
                return {
                    url: `${import.meta.env.VITE_EMPLOYEE_PATH}/employee/account/${body.userId}`, // Dynamic path with userId
                    method: "PUT", // HTTP PUT method for updating the profile
                    body: body.data, // Data to be updated for the employee
                };
            },
            invalidatesTags: (result) => [
                // Invalidates the cached employee data after updating the profile
                { type: "Employee" as const, id: result?.data.id },
            ],
        }),
    }),
});

// Export the generated hooks for using the above endpoints in components
export const {
    useGetEmployeeProfileQuery, // Hook for fetching employee profile
    useUpdateEmployeeProfileMutation, // Hook for updating employee profile
} = employeeApi;
