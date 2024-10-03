import { configureStore } from "@reduxjs/toolkit";
import { appointmentApi } from "../pages/admin/receptionist/appointment.service";
import { authenticationApi } from "../pages/auth.service";
import authenticationReducer from "../pages/auth.slice";
import { customerApi } from "../pages/site/customer.service";
import modalReducer from "../components/pc-modal/modal.slice";

export const store = configureStore({
  reducer: {
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    authentication: authenticationReducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
    modal: modalReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable checks
    }).concat(
      appointmentApi.middleware,
      authenticationApi.middleware,
      customerApi.middleware,
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;