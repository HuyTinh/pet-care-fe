// Import necessary functions from Redux Toolkit to create an API slice
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create an API slice for handling authentication requests
export const authenticationApi = createApi({
  reducerPath: "authenticationApi", // Unique name for the reducer
  tagTypes: ["Authentication"], // Define the tag type for caching and invalidation
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }), // Set the base URL for the API
  endpoints: (build) => ({
    // Mutation for user login with email and password
    loginRequest: build.mutation<any, { email: string; password: string }>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_IDENTITY_PATH}/auth/token`, // Endpoint for token request
          method: "POST", // POST method for login
          body, // Request body contains email and password
        };
      },
    }),
    // Query for user logout
    logoutRequest: build.query<any, void>({
      query() {
        return {
          url: `${import.meta.env.VITE_IDENTITY_PATH}/auth/logout`, // Endpoint for logout
          method: "POST", // POST method for logout
        };
      },
    }),
    // Mutation for login using Google token
    loginWithGoogleRequest: build.mutation<any, { token: string }>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_IDENTITY_PATH}/auth/google`, // Endpoint for Google login
          method: "POST", // POST method for Google login
          body, // Request body contains the Google token
        };
      },
    }),
    // Mutation for login using Facebook token
    loginWithFacebookRequest: build.mutation<any, { token: string }>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_IDENTITY_PATH}/auth/facebook`, // Endpoint for Facebook login
          method: "POST", // POST method for Facebook login
          body, // Request body contains the Facebook token
        };
      },
    }),
    // Mutation for user registration
    registerRequest: build.mutation<any, any>({
      query(body) {
        return {
          url: `${import.meta.env.VITE_IDENTITY_PATH}/account/generate-token`, // Endpoint for registration
          method: "POST", // POST method for registration
          body, // Request body contains registration details
        };
      },
      invalidatesTags: () => [{ type: "Authentication", id: "LIST" }], // Invalidate tags when registration is successful
    }),
  }),
});

// Export hooks for each API endpoint to use in components
export const {
  useLoginRequestMutation, // Hook for login request
  useLogoutRequestQuery, // Hook for logout request
  useRegisterRequestMutation, // Hook for registration request
  useLoginWithGoogleRequestMutation, // Hook for Google login request
  useLoginWithFacebookRequestMutation, // Hook for Facebook login request
} = authenticationApi;
