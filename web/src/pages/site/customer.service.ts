// Import necessary functions from Redux Toolkit for creating an API slice
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setProfile } from "../auth.slice";

// Define the customerApi using createApi to manage customer-related data
export const customerApi = createApi({
  reducerPath: "customerApi", // Name of the slice in the Redux store
  tagTypes: ["Customer"], // Tags used for caching and invalidation
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }), // Base query for API requests with dynamic environment URL
  endpoints: (build) => ({
    // Endpoint to get customer profile information
    getCustomerProfile: build.query<any, { userId: string | null }>({
      query(body) {
        // Request to fetch customer profile data by userId
        return {
          url: `${import.meta.env.VITE_CUSTOMER_PATH}/customer/account/${body.userId}`, // Dynamic path with userId
          method: "GET", // HTTP GET method
        };
      },
      providesTags(result) {
        // Provides a tag with the customer ID to manage cache invalidation
        return [{ type: "Customer" as const, id: result?.data.id }];
      },
    }),

    // Endpoint to update customer profile information
    updateCustomerProfile: build.mutation<any, { userId: string | null; data: any }>({
      query(body) {
        // Request to update customer profile data by userId
        return {
          url: `${import.meta.env.VITE_CUSTOMER_PATH}/customer/account/${body.userId}`, // Dynamic path with userId
          method: "PUT", // HTTP PUT method for update
          body: body.data, // Data to be updated
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled; // Wait for the query to finish
          const customerProfile = (data as any)?.data; // Extract token from the response


          dispatch(setProfile({ profile: customerProfile }))

        } catch (error) {
          console.log('Error saving token:', error); // Log any errors
        }
      },
    }),
  }),
});

// Export the generated hooks for using the above endpoints in components
export const {
  useGetCustomerProfileQuery, // Hook for fetching customer profile
  useUpdateCustomerProfileMutation, // Hook for updating customer profile
} = customerApi;
