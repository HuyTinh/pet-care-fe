import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface prescriptionState {
    prescriptionId: string
}

const initialState: prescriptionState = {
    prescriptionId: ""
}

const prescriptionSlice = createSlice({
    name: 'prescription',
    initialState,
    reducers: {
        startEditPost: (state, action: PayloadAction<string>) => {
            state.prescriptionId = action.payload
        },
        cancelEditPost: (state) => {
            state.prescriptionId = ""
        }
    }
})

const prescriptionReducer = prescriptionSlice.reducer
export const {startEditPost, cancelEditPost} = prescriptionSlice.actions
export default prescriptionReducer
