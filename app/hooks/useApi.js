import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    try {
      const response = await apiFunc(...args);
      setLoading(false);

      setError(!response.ok);
      setData(response.data);
      return response;
    } catch (err) {
      console.log("API call failed:", err);
      setError(true);
    }
  };

  return {
    request,
    data,
    error,
    loading,
  };
};
