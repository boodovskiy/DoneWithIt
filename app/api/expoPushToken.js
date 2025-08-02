import client from "../api/client";

const register = (pushToken) =>
  client.post("/expoPushTokens", { token: pushToken });

export default {
  register,
};
