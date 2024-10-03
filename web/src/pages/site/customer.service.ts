import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customerApi = createApi({
  reducerPath: "customerApi",
  tagTypes: ["Customer"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    getCustomerProfile: build.query<any, { userId: string | null }>({
      query(body) {
        return {
          url: `customer/account/${body.userId}`,
          method: "GET",
        };
      },
      providesTags(result) {
        return [{ type: "Customer" as const, id: result?.result.id }];
      },
    }),
    updateCustomerProfile: build.mutation<
      any,
      { userId: string | null; data: any }
    >({
      query(body) {
        return {
          url: `customer/account/${body.userId}`,
          method: "PUT",
          body: body.data,
        };
      },
      invalidatesTags: (result) => [
        { type: "Customer" as const, id: result?.result.id },
      ],
    }),
  }),
});

export const { useGetCustomerProfileQuery, useUpdateCustomerProfileMutation } =
  customerApi;