import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface ModalState {
  visible: Boolean;
  content: ReactNode;
}

const initialState: ModalState = {
  visible: false,
  content: null,
};

const modalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    openModal(state) {
      state.visible = true;
    },
    closeModal(state) {
      state.visible = false;
    },
    setContent(state, action: PayloadAction<ReactNode>) {
      state.content = action.payload;
    },
  },
});

const modalReducer = modalSlice.reducer;
export const { openModal, closeModal, setContent } = modalSlice.actions;
export default modalReducer;
