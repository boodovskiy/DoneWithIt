import client from "./client";

const login = async (email, password) => {
  try {
    const response = await client.post("/auth", { email, password });
    return {
      ok: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      ok: false,
      error: error.response?.data || "An unexpected error occurred",
    };
  }
};

export default {
  login,
};
