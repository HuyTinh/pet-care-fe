// Import necessary functions and types from Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Import the jwtDecode function for decoding JWT tokens
import { jwtDecode } from "jwt-decode";
import { ICustomer } from "../types/customer.type";

// Define the interface for the authentication state
interface AuthenticationState {
  userId: string | null; // User ID, initially null
  email: string; // User email, initially empty
  isAuth: boolean; // Flag to check if the user is authenticated
  token: string | null; // JWT token, initially null
  role: string | null; // User role, initially null
  profile: ICustomer;
  isOpenAuthModal: boolean; // Flag to control the visibility of the authentication modal
}

// Define the initial state for authentication
const initialState: AuthenticationState = {
  userId: null,
  email: "",
  isAuth: false,
  token: null,
  role: null,
  profile: {} as ICustomer,
  isOpenAuthModal: false,
};

// Create a slice for managing authentication-related state
const authenticationSlice = createSlice({
  name: "Authentication", // Slice name
  initialState, // Initial state for the slice
  reducers: {
    setProfile(state, action: PayloadAction<{ profile: ICustomer }>) {
      const { profile } = action.payload
      state.profile = profile
    },
    // Action to set the user as authenticated
    setAuthenticated(state, action: PayloadAction<{ token: string, profile: ICustomer }>) {
      const { token, profile } = action.payload
      state.isAuth = true; // Set isAuth to true
      state.token = token; // Store the JWT token
      // Decode the JWT token to extract user details
      const decodedToken: {
        sub: string; // Email
        user_id: string; // User ID
        scope: string; // User role
      } = jwtDecode(token);
      state.email = decodedToken.sub; // Set email from decoded token
      state.role = decodedToken.scope.replace("ROLE_", ""); // Extract and set role (remove "ROLE_" prefix)
      state.profile = profile
      state.userId = decodedToken.user_id; // Set user ID from decoded token
    },
    // Action to set the user as unauthenticated
    setUnauthenticated(state) {
      state.isAuth = false; // Set isAuth to false
      state.token = null; // Reset the token
      state.email = ""; // Clear the email
      state.userId = null; // Clear the user ID
      state.role = ""; // Clear the role
      state.profile = {} as ICustomer
      localStorage.removeItem("token"); // Remove token from localStorage
    },
    // Action to open the authentication modal
    openAuthModal(state) {
      state.isOpenAuthModal = true; // Set the modal visibility to true
    },
    // Action to close the authentication modal
    closeAuthModal(state) {
      state.isOpenAuthModal = false; // Set the modal visibility to false
    },
  },
});

// Export the reducer and actions for use in other parts of the app
const authenticationReducer = authenticationSlice.reducer;
export const {
  setProfile,
  setAuthenticated, // Action for setting authenticated state
  setUnauthenticated, // Action for setting unauthenticated state
  openAuthModal, // Action for opening the auth modal
  closeAuthModal, // Action for closing the auth modal
} = authenticationSlice.actions;
export default authenticationReducer; // Export the reducer as default
