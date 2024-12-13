// Import necessary functions from Redux Toolkit for creating an API slice
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIResponse } from "../../../../@types/api-response.type";

// Define the employeeApi using createApi to manage employee-related data
export const reportApi = createApi({
    reducerPath: "reportApi", // Name of the slice in the Redux store
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL, credentials: "include" }), // Base query for API requests with dynamic environment URL
    endpoints: (build) => ({
        // Endpoint to get employee profile information
        getAppointmentsReportByYear: build.query<APIResponse<any>, { year: number }>({
            query: (body) => `${import.meta.env.VITE_APPOINTMENT_PATH}/report/${body.year}`
        }),
        getAppointmentsReportByDateToDate: build.query<APIResponse<any>, any>({
            query: (body) => ({
                url: `${import.meta.env.VITE_APPOINTMENT_PATH}/report/date-to-date`,
                params: {
                    ...body
                }
            })
        }),
    }),
});

// Export the generated hooks for using the above endpoints in components
export const {
    useGetAppointmentsReportByYearQuery, // Hook for fetching employee profile
    useGetAppointmentsReportByDateToDateQuery
} = reportApi;
