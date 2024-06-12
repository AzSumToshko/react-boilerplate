import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequest } from "../../../interfaces/IAuth";
import { User } from "../../../interfaces/IUser";
import { authService } from "../../../services/AuthService";

// Define initial state
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Async thunk for login
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (request: LoginRequest) => {
    const user = await authService.authenticate(request);
    return user;
  }
);

// Async thunk for logout
export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// Async thunk to initialize user from local storage
export const initializeUser = createAsyncThunk(
  "auth/initializeUser",
  async () => {
    const user = await authService.getCurrentUser();
    return user;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        loginAsync.fulfilled,
        (state, action: PayloadAction<User | null>) => {
          if (action.payload) {
            state.user = action.payload;
            state.isAuthenticated = true;
          }
        }
      )
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(
        initializeUser.fulfilled,
        (state, action: PayloadAction<User | null>) => {
          if (action.payload) {
            state.user = action.payload;
            state.isAuthenticated = state.user != null;
          }
        }
      );
  },
});

export default authSlice.reducer;
