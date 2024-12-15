// Import necessary functions and services from external libraries and local files
import { configureStore } from "@reduxjs/toolkit";  // Redux Toolkit function to configure the store
import { appointmentApi } from "../pages/admin/receptionist/appointment.service";  // API service for appointment management
import { authenticationApi } from "../pages/auth.service";  // API service for authentication
import authenticationReducer from "../pages/auth.slice";  // Reducer for handling authentication state
import { customerApi } from "../pages/site/customer.service";  // API service for customer-related operations
import { prescriptionApi } from "../pages/admin/doctor/prescription.service";  // API service for prescriptions
import { medicineApi } from "../pages/admin/warehouse/medicine.service";  // API service for medicine-related operations
import { employeeApi } from "../pages/admin/employee.service";  // API service for employee-related operations
import { reportApi } from "../pages/admin/manager/tabs/report.service";

// Create the Redux store with configuration
export const store = configureStore({
  reducer: {
    // Define the reducers for handling slices of state
    authentication: authenticationReducer,  // Authentication state reducer
    [authenticationApi.reducerPath]: authenticationApi.reducer,  // Reducer for authentication API
    [customerApi.reducerPath]: customerApi.reducer,  // Reducer for customer API
    [employeeApi.reducerPath]: employeeApi.reducer,  // Reducer for employee API
    [reportApi.reducerPath]: reportApi.reducer,
    [prescriptionApi.reducerPath]: prescriptionApi.reducer,  // Reducer for prescription API
    [appointmentApi.reducerPath]: appointmentApi.reducer,  // Reducer for appointment API
    [medicineApi.reducerPath]: medicineApi.reducer,  // Reducer for medicine API
  },

  middleware: (getDefaultMiddleware) =>
    // Add middleware to the store configuration
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable checks for non-serializable data
    }).concat(
      // Append the middleware for each API service
      authenticationApi.middleware,
      appointmentApi.middleware,
      customerApi.middleware,
      employeeApi.middleware,
      reportApi.middleware,
      medicineApi.middleware,
      prescriptionApi.middleware,
    ),
});

// Type inference for RootState and AppDispatch from the store
// `RootState` is the type of the entire Redux store state
export type RootState = ReturnType<typeof store.getState>;
// `AppDispatch` is the type for the dispatch function used to dispatch actions
export type AppDispatch = typeof store.dispatch;
