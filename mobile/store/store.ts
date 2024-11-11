import { configureStore } from '@reduxjs/toolkit'; // Importing `configureStore` to set up the Redux store
import prescriptionReducer from '../app/pharmacist.slice'; // Importing the prescription reducer to manage prescription state
import { pharmacistApi } from '../app/pharmacist.service'; // Importing the API slice to handle async requests and caching

// Configuring the Redux store
export const store = configureStore({
    reducer: {
        prescription: prescriptionReducer, // Adding the `prescriptionReducer` to the store to manage prescription data
        [pharmacistApi.reducerPath]: pharmacistApi.reducer, // Adding the API reducer to manage the state for `pharmacistApi` (e.g., fetched data)
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable the serializable check for non-serializable values (needed for things like `SecureStore`)
        }).concat(pharmacistApi.middleware), // Adding the middleware for `pharmacistApi` to handle caching and network requests
});

// Uncomment to enable store listeners, useful for real-time features or cache invalidation
// setupListeners(store.dispatch);

// Infer the `RootState` type based on the store's state
// This type will represent the entire structure of your Redux state (used for accessing state in selectors)
export type RootState = ReturnType<typeof store.getState>;

// Infer the `AppDispatch` type based on the store's dispatch function
// This type ensures type safety when dispatching actions (e.g., `dispatch(startEditPrescription())`)
export type AppDispatch = typeof store.dispatch;
