import { createSlice, PayloadAction } from "@reduxjs/toolkit"; // Importing necessary functions from Redux Toolkit

// Defining the shape of the state for the pharmacist profile
interface PharmacistState {
    id: string; // The unique identifier for the pharmacist
    remember: boolean; // Boolean flag to remember if the pharmacist chose to stay logged in
}

// Initial state of the pharmacist, with default values
const initialState: PharmacistState = {
    id: "", // Initially no pharmacist ID
    remember: false // By default, remember is set to false
}

// Creating a slice of the Redux store to manage the pharmacist state
const pharmacistSlice = createSlice({
    name: 'pharmacist', // The name of the slice, used in the reducer
    initialState, // The initial state of the slice
    reducers: {
        // Reducer to set the pharmacist's profile ID
        pharmacistProfileId: (state, action: PayloadAction<string>) => {
            state.id = action.payload; // Update the pharmacist ID with the action payload
        },
        // Reducer to toggle the 'remember me' flag
        isRemember: (state, action: PayloadAction<boolean>) => {
            state.remember = action.payload; // Update the 'remember' flag with the action payload
        }
    },
})

// Exporting the reducer to be used in the store configuration
const prescriptionReducer = pharmacistSlice.reducer;

// Exporting the actions for use in components or other parts of the app
export const {
    pharmacistProfileId, // Action to set the pharmacist profile ID
    isRemember // Action to toggle the 'remember me' flag
} = pharmacistSlice.actions;

// Exporting the reducer as the default export to integrate into the Redux store
export default prescriptionReducer;
