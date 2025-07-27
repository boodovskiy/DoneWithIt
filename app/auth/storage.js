import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.error("Error storing Auth token:", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error("Error retrieving Auth token:", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  if (!token) return null;

  return jwtDecode(token);
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("Error removing Auth token:", error);
  }
};

export default {
  getUser,
  getToken,
  storeToken,
  removeToken,
};
