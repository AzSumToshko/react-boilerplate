import { LoginRequest } from "../interfaces/IAuth";
import { User } from "../interfaces/IUser";
import { baseService } from "./BaseService";
import { LocalStorageKeys } from "../constants/Keys";

const getUserFromLocalStorage = (): string | null => {
  return localStorage.getItem(LocalStorageKeys.user);
};

const setUserToLocalStorage = (user: User): Promise<string> => {
  return new Promise((resolve) => {
    localStorage.setItem(LocalStorageKeys.user, user.id);
    resolve(user.id);
  });
};

const removeUserFromLocalStorage = (): Promise<void> => {
  return new Promise((resolve) => {
    localStorage.removeItem(LocalStorageKeys.user);
    resolve();
  });
};

const authenticate = async (request: LoginRequest): Promise<User | null> => {
  try {
    const userResponse = await baseService.post<User, LoginRequest>(
      "/authenticate",
      request
    );
    if (userResponse) {
      await setUserToLocalStorage(userResponse);
      return userResponse;
    }
    return null;
  } catch (error) {
    console.error("Authentication failed", error);
    return null;
  }
};

const logout = async (): Promise<void> => {
  await removeUserFromLocalStorage();
};

const getCurrentUser = async (): Promise<User | null> => {
  const userId = getUserFromLocalStorage();
  if (userId) {
    try {
      const user = (await baseService.get("/user", { id: userId })) as User; // this is example. Please change when UserService is implemented
      return user || null;
    } catch (error) {
      console.log("No cached user", error);
      return null;
    }
  }
  return null;
};

export const authService = {
  authenticate,
  logout,
  getCurrentUser,
};
