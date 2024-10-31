import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

interface AuthenticationState {
  userId: string | null;
  email: string;
  isAuth: boolean;
  token: string | null;
  role: string | null;
  isOpenAuthModal: boolean;
}

const initialState: AuthenticationState = {
  userId: null,
  email: "",
  isAuth: false,
  token: null,
  role: null,
  isOpenAuthModal: false,
};

const authenticationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    setAuthenticated(state, action: PayloadAction<string>) {
      state.isAuth = true;
      state.token = action.payload;
      const decodedToken: {
        sub: string;
        userId: string;
        scope: string;
      } = jwtDecode(action.payload);
      state.email = decodedToken.sub;
      state.role = decodedToken.scope.replace("ROLE_", "");
      state.userId = decodedToken.userId;
    },
    setUnauthenticated(state) {
      state.isAuth = false;
      state.token = null;
      state.email = "";
      state.userId = null;
      state.role = "";
      localStorage.removeItem("token");
    },
    openAuthModal(state) {
      state.isOpenAuthModal = true;
    },
    closeAuthModal(state) {
      state.isOpenAuthModal = false;
    },
  },
});

const authenticationReducer = authenticationSlice.reducer;
export const {
  setAuthenticated,
  setUnauthenticated,
  openAuthModal,
  closeAuthModal,
} = authenticationSlice.actions;
export default authenticationReducer;
