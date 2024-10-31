import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface prescriptionState {
    id: string
    remember: boolean
}

const initialState: prescriptionState = {
    id: "",
    remember: false
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
        },
        isRemember: (state, action: PayloadAction<boolean>) => {
            state.remember = action.payload
        }
    }, 
})

const prescriptionReducer = prescriptionSlice.reducer
export const { startEditPost, cancelEditPost, isRemember } = prescriptionSlice.actions
export default prescriptionReducer
