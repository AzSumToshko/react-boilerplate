import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { setIsLoading } from "./slices/loadingSlice";
import { loginAsync, logoutAsync } from "./slices/authSlice";
import { LoginRequest } from "../../interfaces/IAuth";

// Custom hooks for dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
) => useSelector(selector);

// Loading hooks
export const useLoading = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  const setLoading = (loading: boolean) => {
    dispatch(setIsLoading(loading));
  };

  return { isLoading, setLoading };
};

// Auth hooks
export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const loginUser = async (username: string, password: string) => {
    const request: LoginRequest = { username, password };
    await dispatch(loginAsync(request));
  };

  const logoutUser = async () => {
    await dispatch(logoutAsync());
  };

  return { isAuthenticated, user, loginUser, logoutUser };
};
