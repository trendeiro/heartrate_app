import axios from "axios";
import { useCallback, useState } from "react";

const backend = axios.create({
  baseURL: "https://mywcph-3002.preview.csb.app/",
});

const useGetData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, VERNOME) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await backend.request({
        url: requestConfig.url,
        method: requestConfig.method,
      });

      VERNOME(response.data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useGetData;
