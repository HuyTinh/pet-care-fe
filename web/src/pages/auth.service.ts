import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  tagTypes: ["Authentication"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    loginRequest: build.mutation<any, { email: string; password: string }>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_IDENTITY_PATH}/auth/token`,
          method: "POST",
          body,
        };
      },
    }),
    logoutRequest: build.query<any, void>({
      query() {
        return {
          url: `${import.meta.env.VITE_IDENTITY_PATH}/auth/logout`,
          method: "POST",
        };
      },
    }),
    loginWithGoogleRequest: build.mutation<any, { token: string }>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_IDENTITY_PATH}/auth/google`,
          method: "POST",
          body,
        };
      },
    }),
    loginWithFacebookRequest: build.mutation<any, { token: string }>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_IDENTITY_PATH}/auth/facebook`,
          method: "POST",
          body,
        };
      },
    }),
    registerRequest: build.mutation<any, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_IDENTITY_PATH}/account/generate-token`,
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
  useLogoutRequestQuery,
  useRegisterRequestMutation,
  useLoginWithGoogleRequestMutation,
  useLoginWithFacebookRequestMutation,
} = authenticationApi;
