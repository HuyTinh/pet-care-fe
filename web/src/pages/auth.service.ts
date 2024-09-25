import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  tagTypes: ["Authentication"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    loginRequest: build.mutation<any, { email: string; password: string }>({
      query(body) {
        return {
          url: "identity/auth/token",
          method: "POST",
          body,
        };
      },
    }),
    loginWithGoogleRequest: build.mutation<any, { token: string }>({
      query(body) {
        return {
          url: "identity/auth/google",
          method: "POST",
          body,
        };
      },
    }),
    registerRequest: build.mutation<any, any>({
      query(body) {
        return {
          url: "identity/account/generate-token",
          method: "POST",
          body,
        };
      },
      invalidatesTags: () => [{ type: "Authentication", id: "LIST" }],
    }),
  }),
});

export const {
  useLoginRequestMutation,
  useRegisterRequestMutation,
  useLoginWithGoogleRequestMutation,
} = authenticationApi;
