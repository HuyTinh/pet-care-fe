import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customerApi = createApi({
  reducerPath: "customerApi",
  tagTypes: ["Customer"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (build) => ({
    getCustomerProfile: build.query<any, { user_id: string | null }>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_CUSTOMER_PATH}/customer/account/${body.user_id}`,
          method: "GET",
        };
      },
      providesTags(result) {
        return [{ type: "Customer" as const, id: result?.data.id }];
      },
    }),
    updateCustomerProfile: build.mutation<
      any,
      { user_id: string | null; data: any }
    >({
      query(body) {
        return {
          url: `${import.meta.env.VITE_CUSTOMER_PATH}/customer/account/${body.user_id}`,
          method: "PUT",
          body: body.data,
        };
      },
      invalidatesTags: (result) => [
        { type: "Customer" as const, id: result?.data.id },
      ],
    }),
  }),
});

export const {
  useGetCustomerProfileQuery,
  useUpdateCustomerProfileMutation
} = customerApi;
