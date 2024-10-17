import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface prescriptionState {
    id: string
}

const initialState: prescriptionState = {
    id: ""
}

const prescriptionSlice = createSlice({
    name: 'prescription',
    initialState,
    reducers: {
        startEditPost: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        },
        cancelEditPost: (state) => {
            state.id = ""
        }
    }
})

const prescriptionReducer = prescriptionSlice.reducer
export const {startEditPost, cancelEditPost} = prescriptionSlice.actions
export default prescriptionReducer
